// @ts-check
import { defineConfig, envField } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
// URL pubblico del sito: impostare PUBLIC_SITE_URL (file .env o dashboard Vercel) quando il dominio è definito.
const SITE_URL = process.env.PUBLIC_SITE_URL || env.PUBLIC_SITE_URL || 'http://localhost:4321';

export default defineConfig({
  site: SITE_URL,
  output: 'static', // tutte le pagine sono statiche; solo /api/contact gira come funzione serverless
  adapter: vercel(),
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap({ filter: (p) => !p.includes('/privacy') })],
  vite: { plugins: [tailwindcss()] },
  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      CONTACT_TO_EMAIL: envField.string({ context: 'server', access: 'secret', optional: true }),
      CONTACT_FROM_EMAIL: envField.string({ context: 'server', access: 'secret', optional: true }),
    },
  },
});
