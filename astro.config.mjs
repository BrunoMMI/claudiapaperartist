// @ts-check
import { defineConfig, envField } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
// URL pubblico del sito: impostare PUBLIC_SITE_URL (file .env o dashboard Vercel) quando il dominio è definito.
// Senza PUBLIC_SITE_URL si usa il dominio Vercel del progetto (solo per gli URL nei dati strutturati; il sito resta noindex).
const VERCEL_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : '';
const SITE_URL = process.env.PUBLIC_SITE_URL || env.PUBLIC_SITE_URL || VERCEL_URL || 'http://localhost:4321';

export default defineConfig({
  site: SITE_URL,
  output: 'static', // tutte le pagine sono statiche; solo /api/contact gira come funzione serverless
  adapter: vercel(),
  trailingSlash: 'never',
  build: { format: 'file' },
  // nel sitemap ogni pagina riporta anche la versione nell'altra lingua (hreflang); le rotte vanno tenute allineate a src/i18n/index.ts
  integrations: [
    sitemap({
      serialize(item) {
        const pairs = [
          ['/', '/en'],
          ['/lavori', '/en/works'],
          ['/servizi', '/en/services'],
          ['/laboratori', '/en/workshops'],
          ['/mostre', '/en/exhibitions'],
          ['/about', '/en/about'],
          ['/my-artwork', '/en/my-artwork'],
          ['/contatti', '/en/contact'],
          ['/privacy', '/en/privacy'],
        ];
        const path = new URL(item.url).pathname.replace(/\/$/, '') || '/';
        const pair = pairs.find(([it, en]) => it === path || en === path);
        if (pair) {
          const origin = new URL(item.url).origin;
          const abs = (/** @type {string} */ p) => origin + (p === '/' ? '/' : p);
          item.links = [
            { url: abs(pair[0]), lang: 'it-IT' },
            { url: abs(pair[1]), lang: 'en-GB' },
          ];
        }
        return item;
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      CONTACT_TO_EMAIL: envField.string({ context: 'server', access: 'secret', optional: true }),
      CONTACT_FROM_EMAIL: envField.string({ context: 'server', access: 'secret', optional: true }),
    },
  },
});
