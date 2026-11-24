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
    photo: 'lavori/figura-4',
    alt: { it: 'Figura scolpita in carta bianca vista da vicino, con rami e una chioma raccolta, su fondo nero', en: 'Close view of a sculpted white paper figure, with branches and gathered hair, on a black background' },
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
    photo: 'lavori/autunno',
    alt: { it: 'Autunno: figura di carta con abito arancione e gonna luminosa rossa e arancio', en: 'Autumn: paper figure with an orange dress and a glowing red and orange skirt' },
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
    cta: { label: { it: 'Vedi gli allestimenti', en: 'See the set designs' }, route: 'works', hash: 'allestimenti' },
    photo: 'allestimenti/cerchio',
    alt: {
      it: 'Cerchio con luci blu e pompon di carta blu e bianchi, da un allestimento per una festa',
      en: 'Hoop with blue lights and blue and white paper pompoms, from a party set design',
    },
  homeLink: { route: 'works', hash: 'allestimenti' },
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
    photo: 'laboratori/officina-14',
    alt: { it: 'Ghirlanda natalizia di carta bianca con pompon rossi e verdi', en: 'Christmas wreath of white paper with red and green pompoms' },
  homeLink: { route: 'workshops' },
  },
];
