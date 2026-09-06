// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Custom domain (CNAME = diegoazuela.com) serves from the site root,
// so no `base` path is needed. `site` is used for canonical URLs + sitemap.
export default defineConfig({
  site: 'https://diegoazuela.com',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
