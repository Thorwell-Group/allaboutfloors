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
        // Canonicalizes to /luxury-vinyl-plank/ (its mainSlug differs from its
        // localSlug in services.ts, unlike the other local services), so it was
        // missed when this list was written. Listing a URL that canonicalizes
        // elsewhere is a contradictory signal to Google.
        'https://www.allaboutfloorsnw.com/luxury-vinyl-flooring-in-vancouver-wa/',
        // Carpet and tile were later added to vancouverCanonicalOverrides in
        // src/pages/[service]-in-[area].astro but never added here, so both
        // pages canonicalised to their parent service page while the sitemap
        // still nominated them for indexing — the same contradictory signal
        // this list exists to prevent.
        'https://www.allaboutfloorsnw.com/carpet-flooring-in-vancouver-wa/',
        'https://www.allaboutfloorsnw.com/tile-flooring-in-vancouver-wa/',
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
