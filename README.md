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

## Updating the yearly parameters

All budget-law parameters (average/minimum insurable income, accrual rate)
live in `PARAMS` in `src/lib/pension.ts`; the age/service schedule is in
`reqAge`/`reqSvc` next to it. Copy lives in `src/i18n/`.

## Disclaimer

The calculators give indicative estimates only and are not an official
calculation or financial/legal advice.
