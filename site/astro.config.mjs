import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import { site } from './src/data/site.ts';

export default defineConfig({
  site: 'https://www.kavaconstructionllc.com',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  redirects: { '/sitemap.xml': '/sitemap-index.xml' },
  adapter: vercel(),
  // lastmod is the real content date (site.lastUpdated), not the build time. A date that changes on
  // every deploy teaches Google to ignore it, which slows crawling of new and updated pages.
  integrations: [sitemap({ filter: (page) => !page.includes('/api/'), lastmod: new Date(site.lastUpdated) })],
  vite: { plugins: [tailwindcss()] },
});
