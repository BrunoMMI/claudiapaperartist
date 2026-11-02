import type { APIRoute } from 'astro';
import { INDEXABLE, SITE_URL } from '../config/site';

export const GET: APIRoute = () => {
  const body = INDEXABLE
    ? `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${SITE_URL}/sitemap-index.xml\n`
    : // Dominio non ancora impostato (PUBLIC_SITE_URL vuota): nessuna indicizzazione
      `User-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { 'content-type': 'text/plain; charset=utf-8' } });
};
