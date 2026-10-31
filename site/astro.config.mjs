import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://kavaconstructionllc.com',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  redirects: { '/sitemap.xml': '/sitemap-index.xml' },
  adapter: vercel(),
  integrations: [sitemap({ filter: (page) => !page.includes('/api/'), lastmod: new Date(), changefreq: 'monthly' })],
  vite: { plugins: [tailwindcss()] },
});
