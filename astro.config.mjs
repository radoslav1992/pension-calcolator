// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Public origin used for canonical URLs, hreflang alternates, sitemap and Open Graph.
// Update this when the production domain changes.
export default defineConfig({
  site: 'https://pensionen-kalkulator.bg',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
