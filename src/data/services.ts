import type { L } from '../i18n';
import type { Shot } from './photos';

export interface Service {
  id: string;
  title: L;
  /** frase breve per la home */
  short: L;
  /** testo della pagina Servizi */
  long: L;
  /** destinazione del pulsante: chiave di rotta + ancora */
  cta: { label: L; route: 'works' | 'workshops' | 'contact'; hash?: string };
  /** chiave di una foto in src/assets/photos */
  photo: string;
  alt: L;
  /** ancora nella pagina Servizi o Lavori usata dalla home */
  /** foto aggiuntive mostrate sotto la sezione */
  gallery?: Shot[];
  homeLink: { route: 'works' | 'services' | 'workshops'; hash?: string };
}

export const services: Service[] = [
  {
    id: 'sculture-di-carta',
    title: { it: 'Sculture di carta', en: 'Paper sculptures' },
    short: {
      it: 'Opere uniche e su misura che trasformano la carta in emozione.',
      en: 'Unique, made-to-measure works that turn paper into emotion.',
    },
    long: {
      it: 'Opere uniche, modellate a mano e pensate per lo spazio e per la storia di chi le accoglie.',
      en: 'Unique works, shaped by hand and designed for the space and the story of those who welcome them.',
    },
    cta: { label: { it: 'Vedi le sculture', en: 'See the sculptures' }, route: 'works', hash: 'sculture' },
    photo: 'lavori/light-5',
    alt: { it: 'Light No. 5, scultura da parete in carta con una piega diagonale', en: 'Light No. 5, a paper wall sculpture with a diagonal fold' },
  homeLink: { route: 'works', hash: 'sculture' },
  },
  {
    id: 'installazioni-luminose',
    title: { it: 'Installazioni luminose', en: 'Light installations' },
    short: {
      it: 'Luce, carta e trasparenze per atmosfere evocative e raffinate.',
      en: 'Light, paper and transparencies for evocative, refined atmospheres.',
    },
    long: {
      it: 'Luce, carta e trasparenze per atmosfere raffinate: composizioni luminose che emozionano e impreziosiscono l’ambiente in cui vengono posizionate.',
      en: 'Light, paper and transparencies for refined atmospheres: luminous compositions that move the viewer and enrich the space where they are placed.',
    },
    cta: { label: { it: 'Vedi le installazioni', en: 'See the installations' }, route: 'works', hash: 'installazioni-luminose' },
    photo: 'lavori/inverno',
    alt: { it: 'Inverno, figura di carta con gonna luminosa di petali bianchi', en: 'Winter, a paper figure with a glowing skirt of white petals' },
  homeLink: { route: 'works', hash: 'installazioni-luminose' },
  },
  {
    id: 'allestimenti-ed-eventi',
    title: { it: 'Allestimenti ed eventi', en: 'Set designs & events' },
    short: {
      it: 'Scenografie d’impatto per eventi, set e momenti indimenticabili.',
      en: 'Striking scenography for events, sets and unforgettable moments.',
    },
    long: {
      it: 'Scenografie d’impatto per momenti indimenticabili. Ogni dettaglio esprime un’emozione.',
      en: 'Striking scenography for unforgettable moments. Every detail expresses an emotion.',
    },
    cta: { label: { it: 'Chiedi un allestimento', en: 'Ask for a set design' }, route: 'contact' },
    photo: 'allestimenti/torta-18',
    alt: {
      it: 'Allestimento per una festa di diciott’anni: tavolo con torta e scatoline davanti a una cortina di luci blu',
      en: 'Set design for an eighteenth birthday: a table with a cake and small boxes in front of a curtain of blue lights',
    },
    gallery: [
      { key: 'allestimenti/locandina-18', alt: { it: 'Locandina dell’invito: “Viaggio nella Corte della Notte”, diciottesimo compleanno', en: 'Invitation poster: “Journey to the Court of Night”, eighteenth birthday' } },
      { key: 'allestimenti/torta-blu', alt: { it: 'Torta di carta blu e bianca con la candelina 18', en: 'Blue and white paper cake with a number 18 candle' } },
      { key: 'allestimenti/segnalibro', alt: { it: 'Segnalibro a tema notte stellata con una frase sulle stelle', en: 'Starry-night bookmark with a quote about the stars' } },
      { key: 'allestimenti/cerchio', alt: { it: 'Cerchio con luci blu e pompon di carta blu e bianchi', en: 'Hoop with blue lights and blue and white paper pompoms' } },
      { key: 'allestimenti/locandina-cavalletto', alt: { it: 'La locandina dell’invito esposta su un cavalletto, accanto a un mazzo di fiori', en: 'The invitation poster displayed on an easel, next to a bunch of flowers' } },
      { key: 'allestimenti/scatole-1', alt: { it: 'Scatoline bianche con nastri blu e argento', en: 'White small boxes with blue and silver ribbons' } },
    ],
  homeLink: { route: 'services', hash: 'allestimenti-ed-eventi' },
  },
  {
    id: 'laboratori-creativi',
    title: { it: 'Laboratori creativi', en: 'Creative workshops' },
    short: {
      it: 'Workshop per adulti e bambini per esplorare la carta e la creatività.',
      en: 'Workshops for adults and children to explore paper and creativity.',
    },
    long: {
      it: 'Workshop creativi per adulti e bambini, per esplorare la carta e la creatività.',
      en: 'Creative workshops for adults and children, to explore paper and creativity.',
    },
    cta: { label: { it: 'Scopri i laboratori', en: 'Discover the workshops' }, route: 'workshops' },
    photo: 'laboratori/officina-3',
    alt: { it: 'Una piccola casa di carta illuminata dall’interno', en: 'A small paper house lit from the inside' },
  homeLink: { route: 'workshops' },
  },
];
