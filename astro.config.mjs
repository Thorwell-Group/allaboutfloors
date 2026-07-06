import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import alpinejs from '@astrojs/alpinejs';

export default defineConfig({
  site: 'https://www.allaboutfloorsnw.com',
  integrations: [
    tailwind(),
    sitemap({
      // Exclude local pages that canonicalize elsewhere (see canonical
      // overrides in the page frontmatter) so the sitemap only lists
      // canonical URLs.
      filter: (page) => ![
        'https://www.allaboutfloorsnw.com/flooring-in-vancouver-wa/',
        'https://www.allaboutfloorsnw.com/laminate-flooring-in-vancouver-wa/',
        'https://www.allaboutfloorsnw.com/hardwood-flooring-in-vancouver-wa/',
      ].includes(page),
    }),
    alpinejs({ entrypoint: '/src/entrypoint' }),
  ],
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
