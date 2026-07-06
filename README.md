# Пенсионен калкулатор / Bulgarian Pension Calculator

Bilingual (BG/EN) pension planning site for Bulgaria, built with
[Astro](https://astro.build) and deployed to **Cloudflare Workers** (static
assets — no Pages, no server code).

Four calculators based on the 2026 Social Insurance Code (КСО) rules:

| Tab | What it answers |
| --- | --- |
| Кога се пенсионирам? | Earliest retirement year under the Art. 68 age/service schedule |
| Държавна пенсия (НОИ) | State pension estimate (Art. 70 formula) + deferral chart |
| Втори стълб (УПФ) | Universal pension fund projection and monthly annuity |
| Недостигащ стаж | Cost of purchasing service (Art. 9a) + early-retirement reduction (Art. 68a) |

## Project layout

```
src/
  lib/pension.ts     # calculator math + 2026 parameters (shared server/client)
  lib/routes.ts      # URL map for both languages (BG at /, EN at /en/)
  i18n/              # all copy, both languages
  layouts/Base.astro # SEO head: canonical, hreflang, OG, JSON-LD, fonts
  components/        # header, footer, language toggle, cookie banner, calculator
  views/             # page templates shared by the BG and EN routes
  pages/             # thin route files (BG slugs at root, EN under /en/)
public/              # robots.txt, favicons, og.png, _headers
wrangler.jsonc       # Cloudflare Workers static-assets config
```

## SEO

- Fully pre-rendered HTML for **both** languages — separate crawlable URLs
  (`/` Bulgarian, `/en/` English) with localized slugs, `hreflang` alternates
  and canonical URLs on every page.
- JSON-LD structured data: `WebSite` + `WebApplication` + `FAQPage` on the
  home page, `Article` + `BreadcrumbList` on guides.
- Open Graph / Twitter cards with a generated `og.png`.
- `sitemap-index.xml` (via `@astrojs/sitemap`) + `robots.txt`.
- Self-hosted variable fonts (Cyrillic + Latin subsets, preloaded) — no
  third-party requests at all; the only JavaScript is the ~2 KB calculator.

The production origin is set in `astro.config.mjs` (`site`) and referenced in
`public/robots.txt` — update both if the domain changes.

## Develop

```bash
npm install
npm run dev        # Astro dev server
```

## Build & preview on the Workers runtime

```bash
npm run build      # -> dist/
npm run preview    # wrangler dev, serves dist/ locally
```

## Deploy to Cloudflare Workers

One-off from a machine with Cloudflare access:

```bash
npx wrangler login # or export CLOUDFLARE_API_TOKEN
npm run deploy     # astro build && wrangler deploy
```

Via GitHub Actions: pushes to `main` deploy automatically once the
`CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` repository secrets are set
(see `.github/workflows/deploy.yml`). The API token needs the
*Workers Scripts: Edit* permission.

To serve the site on the production domain, add a custom domain to the
`pension-calculator` Worker (Cloudflare dashboard → Workers → Settings →
Domains & Routes).

## Data sources and updates

The calculator's numbers fall into three tiers:

1. **Law-fixed** (Social Insurance Code — Art. 68 age/service schedule,
   1.35 %/year accrual, 0.4 %/month early-retirement reduction, 19.8 %
   service-purchase rate, fixed €/BGN rate): constants in
   `src/lib/pension.ts`. They change only when parliament amends the Code.
2. **Annual** (minimum insurable income for the self-insured, set by the
   State Social Insurance Budget Act each December): `minIncome` in
   `src/data/params.json` — update once a year by hand.
3. **Monthly** (national average insurable income, published by
   [NOI](https://nssi.bg/publikacii/analizi/sreden-osiguritelen-dohod/) —
   the figure the Art. 70 pension formula uses): `avgIncome` in
   `src/data/params.json`, refreshed automatically.

### Automatic refresh (`.github/workflows/update-data.yml`)

Every Monday (and on manual dispatch) the workflow runs
`scripts/update-params.mjs`, which reads NOI's WordPress API (falling back
to the analysis page), extracts the latest 12-month average insurable
income, and — only if the value passed absolute-bounds and max-drift (25 %)
sanity checks — commits the new `params.json` to the branch and dispatches
the deploy workflow (a plain bot push cannot trigger `on: push` workflows,
so the deploy is dispatched explicitly).

If NOI is unreachable or the page format changes, the run fails and GitHub
notifies you; the site keeps serving the last good value, and the home page
shows the period and date the figure refers to. Manual fallback: edit
`src/data/params.json` and push.

Test the parser offline: `node scripts/update-params.mjs --fixture <file>`.

Note: scheduled workflows only run on the repository's **default branch**.

## Disclaimer

The calculators give indicative estimates only and are not an official
calculation or financial/legal advice.
