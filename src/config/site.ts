/**
 * Impostazioni generali del sito. Contatti, social, menu e SEO di base si modificano qui.
 */
export const SITE_URL = (import.meta.env.PUBLIC_SITE_URL ?? '').replace(/\/$/, '');

/** Il sito è indicizzabile solo quando è impostato il dominio definitivo (PUBLIC_SITE_URL). */
export const INDEXABLE = SITE_URL !== '';

export const site = {
  name: "Claudia D'Andrea",
  role: 'Paper Artist',
  title: "Claudia D'Andrea · Paper Artist",
  locale: 'it_IT',
  description:
    'Sculture di carta, installazioni luminose, allestimenti e laboratori creativi. Il portfolio di Claudia D\u2019Andrea, paper artist.',
  tagline: 'Carta, luce e poesia.',
  email: 'art.claudiadandrea@gmail.com',
  // Nessun numero di telefono né indirizzo dello studio sono presenti nei materiali: non inventarli.
  phone: null as string | null,
  address: null as string | null,
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/claudia_dandrea_artist/' },
    { label: 'Facebook', href: 'https://www.facebook.com/claudia.dandrea.artist/' },
  ],
} as const;

export const nav = [
  { label: 'Lavori', href: '/lavori' },
  { label: 'Servizi', href: '/servizi' },
  { label: 'Laboratori', href: '/laboratori' },
  { label: 'Mostre', href: '/mostre' },
  { label: 'About', href: '/about' },
  { label: 'Contatti', href: '/contatti' },
] as const;
