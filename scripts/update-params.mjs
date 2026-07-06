#!/usr/bin/env node
/**
 * Refreshes src/data/params.json with the latest 12-month average insurable
 * income (среден осигурителен доход) published by NOI — the figure the
 * Art. 70 pension formula uses.
 *
 * NOI has no data API; nssi.bg is WordPress, so we read, in order:
 *   1. the WordPress REST API (clean JSON, no HTML parsing),
 *   2. the "Среден осигурителен доход" analysis page HTML.
 * Every monthly announcement contains the sentence
 *   "…за периода от 01.05.2025 г. до 30.04.2026 г. е 983,28 евро…"
 * and we take the figure with the most recent period end.
 *
 * The value is sanity-checked (absolute bounds + max drift vs the current
 * value) before anything is written, so a parsing accident can never ship.
 *
 * Usage:
 *   node scripts/update-params.mjs               # fetch from nssi.bg
 *   node scripts/update-params.mjs --fixture f   # parse a local file (tests)
 *
 * Exit codes: 0 = ok (changed or not), 1 = fetch/parse/sanity failure.
 * When run inside GitHub Actions, writes `changed`, `value` and `period`
 * to $GITHUB_OUTPUT.
 */

import { readFileSync, writeFileSync, appendFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const PARAMS_PATH = join(dirname(fileURLToPath(import.meta.url)), '../src/data/params.json');

// Bounds a plausible value must satisfy (EUR/month). The average insurable
// income was ~€983 in mid-2026; these leave decades of headroom while still
// rejecting parsing accidents like "1,35" or "19 800".
const MIN_PLAUSIBLE = 600;
const MAX_PLAUSIBLE = 4000;
// A single refresh may not move the 12-month average by more than this.
const MAX_DRIFT = 0.25;

const SOURCES = [
  {
    name: 'nssi.bg WordPress API',
    url:
      'https://nssi.bg/wp-json/wp/v2/posts?search=' +
      encodeURIComponent('осигурителен доход') +
      '&per_page=20&_fields=date,link,title.rendered,content.rendered',
  },
  {
    name: 'nssi.bg analysis page',
    url: 'https://nssi.bg/publikacii/analizi/sreden-osiguritelen-dohod/',
  },
];

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36';

/** "1 024,31" / "1.024,31" / "983,28" -> number */
function parseAmount(raw) {
  let s = raw.replace(/[\s  ]/g, '');
  if (s.includes(',')) s = s.replace(/\./g, '').replace(',', '.');
  return Number(s);
}

/**
 * Finds every "за периода от DD.MM.YYYY г. до DD.MM.YYYY г. … N евро"
 * occurrence and returns the one with the latest period end.
 */
function extractLatest(text) {
  const re =
    /периода\s+от\s+(\d{2})\.(\d{2})\.(\d{4})\s*г?\.?\s+до\s+(\d{2})\.(\d{2})\.(\d{4})\s*г?\.?[^€]{0,80}?([\d\s  .,]+)\s*евро/gu;
  let best = null;
  for (const m of text.matchAll(re)) {
    const [, , fromM, fromY, , toM, toY, rawAmount] = m;
    const value = parseAmount(rawAmount);
    if (!Number.isFinite(value)) continue;
    const endKey = Number(toY) * 100 + Number(toM);
    if (!best || endKey > best.endKey) {
      best = { value, endKey, period: `${fromM}.${fromY} – ${toM}.${toY}` };
    }
  }
  return best;
}

async function fetchText(url) {
  const res = await fetch(url, {
    headers: { 'user-agent': UA, accept: 'text/html,application/json' },
    signal: AbortSignal.timeout(30_000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.text();
}

async function getLatestFigure() {
  const fixtureFlag = process.argv.indexOf('--fixture');
  if (fixtureFlag !== -1) {
    const file = process.argv[fixtureFlag + 1];
    if (!file) throw new Error('--fixture requires a file path');
    const best = extractLatest(readFileSync(file, 'utf8'));
    if (!best) throw new Error(`no figure found in fixture ${file}`);
    console.log(`fixture: parsed €${best.value} for ${best.period}`);
    return best;
  }

  const errors = [];
  for (const source of SOURCES) {
    try {
      const text = await fetchText(source.url);
      const best = extractLatest(text);
      if (best) {
        console.log(`${source.name}: parsed €${best.value} for ${best.period}`);
        return best;
      }
      errors.push(`${source.name}: fetched OK but no figure matched`);
    } catch (err) {
      errors.push(`${source.name}: ${err.message}`);
    }
  }
  throw new Error(`all sources failed:\n  ${errors.join('\n  ')}`);
}

function githubOutput(entries) {
  if (!process.env.GITHUB_OUTPUT) return;
  const lines = Object.entries(entries)
    .map(([k, v]) => `${k}=${v}`)
    .join('\n');
  appendFileSync(process.env.GITHUB_OUTPUT, lines + '\n');
}

const params = JSON.parse(readFileSync(PARAMS_PATH, 'utf8'));
const latest = await getLatestFigure();

if (latest.value < MIN_PLAUSIBLE || latest.value > MAX_PLAUSIBLE) {
  throw new Error(`€${latest.value} is outside plausible bounds [${MIN_PLAUSIBLE}, ${MAX_PLAUSIBLE}]`);
}
const drift = Math.abs(latest.value - params.avgIncome) / params.avgIncome;
if (drift > MAX_DRIFT) {
  throw new Error(
    `€${latest.value} drifts ${(drift * 100).toFixed(1)}% from current €${params.avgIncome} ` +
      `(limit ${MAX_DRIFT * 100}%) — refusing to update automatically`,
  );
}

if (latest.value === params.avgIncome && latest.period === params.avgIncomePeriod) {
  console.log(`no change: €${params.avgIncome} for ${params.avgIncomePeriod}`);
  githubOutput({ changed: 'false' });
} else {
  console.log(
    `updating: €${params.avgIncome} (${params.avgIncomePeriod}) -> €${latest.value} (${latest.period})`,
  );
  params.avgIncome = latest.value;
  params.avgIncomePeriod = latest.period;
  params.avgIncomeUpdated = new Date().toISOString().slice(0, 10);
  writeFileSync(PARAMS_PATH, JSON.stringify(params, null, 2) + '\n');
  githubOutput({ changed: 'true', value: String(latest.value), period: latest.period });
}
