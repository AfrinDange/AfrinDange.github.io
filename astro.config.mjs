import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const siteUrl = "https://afrindange.github.io/"

export default defineConfig({
  site: siteUrl,
  base: "/",
  integrations: [
    tailwind(),
    sitemap(),
  ],
  outDir: 'dist',
});


