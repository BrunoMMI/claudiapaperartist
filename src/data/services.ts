export interface Service {
  id: string;
  title: string;
  short: string;
  long: string;
  href: string;
  /** chiave di una foto in src/assets/photos */
  photo: string;
  alt: string;
}

export const services: Service[] = [
  {
    id: 'sculture-di-carta',
    title: 'Sculture di carta',
    short: 'Opere uniche e su misura che trasformano la carta in emozione.',
    long: 'Opere uniche, modellate a mano e pensate per lo spazio e per la storia di chi le accoglie: sculture da parete, figure, lampade-scultura.',
    href: '/lavori/sculture',
    photo: 'lavori/light-5',
    alt: 'Light No. 5, scultura da parete in carta con una piega diagonale',
  },
  {
    id: 'installazioni-luminose',
    title: 'Installazioni luminose',
    short: 'Luce, carta e trasparenze per atmosfere evocative e raffinate.',
    long: 'Luce, carta e trasparenze per atmosfere evocative e raffinate: figure e composizioni luminose che cambiano il carattere di una sala.',
    href: '/lavori/installazioni-luminose',
    photo: 'lavori/inverno',
    alt: 'Inverno, figura di carta con gonna luminosa di petali bianchi',
  },
  {
    id: 'allestimenti-ed-eventi',
    title: 'Allestimenti ed eventi',
    short: 'Scenografie d’impatto per eventi, set e momenti indimenticabili.',
    long: 'Scenografie d’impatto per eventi, set e momenti indimenticabili: dal dettaglio sul tavolo alla scena che accoglie gli ospiti.',
    href: '/servizi#allestimenti-ed-eventi',
    photo: 'allestimenti/torta-18',
    alt: 'Allestimento per una festa di diciott’anni: tavolo con torta e scatoline davanti a una cortina di luci blu',
  },
  {
    id: 'laboratori-creativi',
    title: 'Laboratori creativi',
    short: 'Workshop per adulti e bambini per esplorare la carta e la creatività.',
    long: 'Workshop creativi per adulti e bambini per esplorare la carta e la creatività: piccoli gruppi, gesti lenti.',
    href: '/laboratori',
    photo: 'laboratori/officina-2',
    alt: 'Una piccola casa di carta illuminata dall’interno',
  },
];

/** Foto dell'allestimento mostrate nella pagina Servizi. */
export const allestimentiShots = [
  { key: 'allestimenti/torta-18', alt: 'Tavolo con torta e scatoline legate con nastri blu, davanti a una cortina di luci' },
  { key: 'allestimenti/candela-18', alt: 'Candelina a forma di 18 su una torta decorata con piume bianche e fiori blu' },
  { key: 'allestimenti/scatole-1', alt: 'Scatoline bianche con nastri blu e argento' },
  { key: 'allestimenti/tavolo', alt: 'Tavolo allestito con scatoline bianche, nastri blu e piccoli cartoncini' },
  { key: 'allestimenti/scatola', alt: 'Dettaglio di una scatolina con nastro blu davanti a fiori blu sfocati' },
];
