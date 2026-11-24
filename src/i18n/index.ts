/**
 * Internazionalizzazione: italiano (lingua principale, in radice) e inglese (sotto /en).
 * Ogni testo traducibile è un oggetto { it, en }.
 */
export type Lang = 'it' | 'en';
export const langs: Lang[] = ['it', 'en'];
export type L<T = string> = { it: T; en: T };

export const tr = <T>(v: L<T>, lang: Lang): T => v[lang];

export type RouteKey = 'home' | 'works' | 'services' | 'workshops' | 'exhibitions' | 'about' | 'artwork' | 'contact' | 'privacy';

export const routes: Record<RouteKey, L> = {
  home: { it: '/', en: '/en' },
  works: { it: '/lavori', en: '/en/works' },
  services: { it: '/servizi', en: '/en/services' },
  workshops: { it: '/laboratori', en: '/en/workshops' },
  exhibitions: { it: '/mostre', en: '/en/exhibitions' },
  about: { it: '/about', en: '/en/about' },
  artwork: { it: '/my-artwork', en: '/en/my-artwork' },
  contact: { it: '/contatti', en: '/en/contact' },
  privacy: { it: '/privacy', en: '/en/privacy' },
};

/** URL di una pagina nella lingua richiesta, con eventuale ancora. */
export const route = (key: RouteKey, lang: Lang, hash = '') => routes[key][lang] + (hash ? `#${hash}` : '');

export const langOf = (pathname: string): Lang => (pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'it');

const clean = (p: string) => (p.length > 1 ? p.replace(/\/$/, '') : p);

/** Stessa pagina nell'altra lingua (se non è una pagina nota, torna alla home). */
export function alternate(pathname: string, to: Lang): string {
  const p = clean(pathname);
  for (const key of Object.keys(routes) as RouteKey[]) {
    if (routes[key].it === p || routes[key].en === p) return routes[key][to];
  }
  return routes.home[to];
}

export const nav: { key: RouteKey; label: L }[] = [
  { key: 'works', label: { it: 'Lavori', en: 'Works' } },
  { key: 'services', label: { it: 'Servizi', en: 'Services' } },
  { key: 'workshops', label: { it: 'Laboratori', en: 'Workshops' } },
  { key: 'exhibitions', label: { it: 'Mostre', en: 'Exhibitions' } },
  { key: 'about', label: { it: 'About me', en: 'About me' } },
  { key: 'artwork', label: { it: 'My artwork', en: 'My artwork' } },
  { key: 'contact', label: { it: 'Contatti', en: 'Contact' } },
];

/** Testi dell'interfaccia comuni a più pagine. */
export const ui = {
  skip: { it: 'Vai al contenuto', en: 'Skip to content' },
  home: { it: 'Home', en: 'Home' },
  openMenu: { it: 'Apri il menu', en: 'Open the menu' },
  closeMenu: { it: 'Chiudi il menu', en: 'Close the menu' },
  menuLabel: { it: 'Menu', en: 'Menu' },
  mainNav: { it: 'Principale', en: 'Main' },
  fullNav: { it: 'Menu completo', en: 'Full menu' },
  language: { it: 'Lingua', en: 'Language' },
  switchTo: { it: 'English version', en: 'Versione italiana' },
  footerLine: { it: 'Sculture, installazioni e laboratori su misura.', en: 'Sculptures, installations and workshops, made to measure.' },
  footerInfo: { it: 'Info', en: 'Info' },
  footerFollow: { it: 'Seguimi', en: 'Follow me' },
  footerWrite: { it: 'Scrivimi', en: 'Write to me' },
  footerPitch: {
    it: 'Raccontami il tuo progetto. Insieme daremo forma alla tua idea.',
    en: 'Tell me about your project. Together we will give shape to your idea.',
  },
  goContact: { it: 'Vai alla pagina contatti', en: 'Go to the contact page' },
  privacy: { it: 'Privacy', en: 'Privacy' },
  rights: {
    it: 'Tutti i diritti sono riservati. Opere, fotografie e testi di questo sito non possono essere copiati, riprodotti o utilizzati senza autorizzazione scritta dell’autrice.',
    en: 'All rights reserved. The artworks, photographs and texts on this website may not be copied, reproduced or used without the author’s written permission.',
  },
  whatsapp: { it: 'Scrivimi su WhatsApp', en: 'Message me on WhatsApp' },
  seeAll: { it: 'Vedi tutti', en: 'See all' },
  scroll: { it: 'Scorri alla sezione successiva', en: 'Scroll to the next section' },
  gallery: { it: 'Galleria fotografica', en: 'Photo gallery' },
  close: { it: 'Chiudi', en: 'Close' },
  prev: { it: 'Foto precedente', en: 'Previous photo' },
  next: { it: 'Foto successiva', en: 'Next photo' },
} satisfies Record<string, L>;
