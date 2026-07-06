---
name: verify
description: Build, serve and drive the pension-calculator site to verify changes end-to-end.
---

# Verifying pension-calculator

Static Astro site deployed as a Cloudflare Worker (assets-only). There is no
test suite — verification means driving the built site in a browser.

## Build and serve

```bash
npm run build                 # astro build -> dist/
npx wrangler dev --port 8787  # serves dist/ on the real Workers runtime (local, no auth)
```

`wrangler dev` is the production-faithful server (trailing-slash redirects,
404 handling and `_headers` all come from the Workers assets config).

## Drive

Playwright is installed globally; Chromium lives at `/opt/pw-browsers/chromium`:

```js
import { chromium } from '<npm root -g>/playwright/index.mjs';
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
```

Flows worth driving after a change:

- `/` calculator: all four tabs (`[data-tab-btn]`), sliders (set `.value` and
  dispatch an `input` event), gender toggle, outputs via `[data-out=...]`.
  Defaults (with `avgIncome` 983.28 in `src/data/params.json`): tab1 `2040`,
  tab2 `€589`, tab3 `€227`, tab4 `€2947`. Tab2 scales with `avgIncome`.
- Language toggle `[data-setlang]` navigates `/` ↔ `/en/` and stores `pk_lang`.
- Cookie banner `#cookie-banner`: visible on first load, hidden after a choice
  (localStorage `pk_cookie`), stays hidden on reload.
- Contact form on `/kontakti/`: submit shows `#contact-thanks`; invalid email
  is blocked by native validation.
- `/za-nas` (no slash) → 307 to `/za-nas/`; unknown URL → 404 page.

## Gotchas

- Shared calculator math lives in `src/lib/pension.ts` and runs both at build
  time (server-rendered defaults) and in the browser — check both when it
  changes (grep a default like `data-out="retireYearBig"` in `dist/index.html`).
- URLs are canonicalized with trailing slashes (`trailingSlash: 'always'`).
- BG pages live at root with transliterated slugs; EN under `/en/`
  (map in `src/lib/routes.ts`).
