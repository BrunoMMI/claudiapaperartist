import type { APIRoute } from 'astro';
import { SITE_URL, site } from '../config/site';
import { routes, nav } from '../i18n';

/**
 * llms.txt: sintesi del sito in testo semplice, pensata per i motori di risposta e gli assistenti AI (GEO).
 * Contiene i fatti essenziali su chi è Claudia D'Andrea, cosa offre e dove trovare ogni sezione.
 */
export const GET: APIRoute = () => {
  const u = (p: string) => `${SITE_URL}${p === '/' ? '' : p}` || '/';
  const pages = nav
    .map((n) => `- [${n.label.it} / ${n.label.en}](${u(routes[n.key].it)}) · EN: ${u(routes[n.key].en)}`)
    .join('\n');

  const body = `# ${site.name} – ${site.role}

> ${site.description.it}
> ${site.description.en}

${site.name} is a self-taught Italian paper artist. Her research is based on the study of light: she works with paper and papier-mâché to create sculptures, paper lamps, light installations and scenographic set designs, and leads creative paper workshops for adults and children. She has exhibited in Italy and abroad (Florence, Genoa, Turin, Rome, Benevento, London).

${site.name} è un'artista autodidatta. La sua ricerca si fonda sullo studio della luce: lavora con carta e cartapesta per realizzare sculture, paper lamps, installazioni luminose e allestimenti scenografici, e conduce laboratori creativi per adulti e bambini. Ha esposto in Italia e all'estero.

## Services / Servizi
- Paper sculptures / Sculture di carta: unique, hand-shaped works made to measure.
- Light installations / Installazioni luminose: compositions of light, paper and transparencies.
- Set designs and events / Allestimenti ed eventi: scenography for events and special occasions.
- Creative workshops / Laboratori creativi: paper and papier-mâché workshops for adults and children, including the Christmas workshop "Christmas lights" (max 10 people).

## Pages / Pagine
${pages}

## Contact / Contatti
- Email: ${site.email}
${site.phone ? `- WhatsApp / telefono: ${site.phone}\n` : ''}- Instagram: ${site.socials[0].href}
- Facebook: ${site.socials[1].href}

Languages: Italiano (${u('/')}), English (${u('/en')}).
`;
  return new Response(body, { headers: { 'content-type': 'text/plain; charset=utf-8' } });
};
