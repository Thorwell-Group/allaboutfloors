import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import alpinejs from '@astrojs/alpinejs';

export default defineConfig({
  site: 'https://www.allaboutfloorsnw.com',
  integrations: [
    tailwind(),
    sitemap(),
    alpinejs({ entrypoint: '/src/entrypoint' }),
  ],
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
