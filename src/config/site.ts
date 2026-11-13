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
  locale: { it: 'it_IT', en: 'en_GB' },
  description: {
    it: 'Sculture di carta, installazioni luminose, allestimenti e laboratori creativi. Il portfolio di Claudia D\u2019Andrea, paper artist.',
    en: 'Paper sculptures, light installations, set designs and creative workshops. The portfolio of Claudia D\u2019Andrea, paper artist.',
  },
  tagline: { it: 'Carta, luce e poesia.', en: 'Paper, light and poetry.' },
  email: 'art.claudiadandrea@gmail.com',
  /**
   * Numero di telefono / WhatsApp, in formato internazionale (es. '+39 333 1234567').
   * Quando è valorizzato compare in contatti e footer, con il link a WhatsApp.
   */
  phone: '+39 329 092 4384' as string | null,
  address: null as string | null,
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/claudia_dandrea_artist/' },
    { label: 'Facebook', href: 'https://www.facebook.com/claudia.dandrea.artist/' },
  ],
} as const;

/** Numero senza spazi né simboli, per i link tel: e wa.me */
export const phoneDigits = site.phone ? site.phone.replace(/[^\d+]/g, '') : null;
export const whatsappHref = phoneDigits ? `https://wa.me/${phoneDigits.replace('+', '')}` : null;
