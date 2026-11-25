// @ts-check
import { defineConfig } from 'astro/config';

// Local builds serve from "/". The GitHub Pages workflow sets SITE and BASE
// (https://<user>.github.io and /portfolio-showcase/) so links resolve there.
export default defineConfig({
  site: process.env.SITE || undefined,
  base: process.env.BASE || '/',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'never' },
  devToolbar: { enabled: false },
});
