import type { Shot } from './photos';

export interface WorkCategory {
  slug: string;
  title: string;
  /** frase breve per liste e meta description */
  summary: string;
  /** paragrafi di presentazione della pagina dedicata */
  intro: string[];
  cover: string;
  coverAlt: string;
  shots: Shot[];
}

export const categories: WorkCategory[] = [
  {
    slug: 'installazioni-luminose',
    title: 'Installazioni luminose',
    summary: 'Luce, carta e trasparenze per atmosfere evocative e raffinate.',
    intro: [
      'La luce attraversa la carta e la trasforma: le pieghe diventano ombre, le trasparenze diventano calore.',
      'Le figure delle stagioni e Atena nascono per abitare uno spazio e cambiarne l’atmosfera.',
    ],
    cover: 'lavori/autunno',
    coverAlt: 'Installazione luminosa Autunno: figura di carta con gonna illuminata in arancio e rosso',
    shots: [
      { key: 'lavori/atena-1', title: 'Atena', alt: 'Atena, scultura di carta bianca con una chioma di rami, su fondo nero' },
      { key: 'lavori/primavera', title: 'Primavera', alt: 'Primavera: figura di carta con gonna di fiori illuminata in rosa e rosso' },
      { key: 'lavori/estate', title: 'Estate', alt: 'Estate: figura di carta con gonna illuminata in giallo e arancio e un mazzo di fiori in mano' },
      { key: 'lavori/autunno', title: 'Autunno', alt: 'Autunno: figura di carta con abito arancione e gonna luminosa rossa e arancio' },
      { key: 'lavori/inverno', title: 'Inverno', alt: 'Inverno: figura di carta con gonna di petali illuminata di bianco' },
      { key: 'lavori/atena-3', title: 'Atena', alt: 'Atena in una sala dal pavimento a scacchi, con la base che emana una luce calda' },
      { key: 'lavori/primavera-2', title: 'Primavera', alt: 'Dettaglio della figura Primavera, con gonna luminosa di fiori di carta' },
      { key: 'lavori/atena-2', title: 'Atena', alt: 'Atena in uno spazio dalle pareti consumate, con la base illuminata' },
      { key: 'lavori/quattro-stagioni', title: 'Le quattro stagioni', alt: 'Le quattro figure luminose delle stagioni affiancate' },
    ],
  },
  {
    slug: 'sculture',
    title: 'Wall sculptures & sculptures',
    summary: 'Sculture e sculture da parete in carta: pieghe, rilievi, ombre.',
    intro: [
      'Una superficie di carta che si piega, si stropiccia e trattiene la luce: ogni rilievo è un gesto fermato nella materia.',
      'La serie Light riunisce sei sculture da parete; accanto a loro, Toscana, Unlimited e le figure scolpite.',
    ],
    cover: 'lavori/light-3',
    coverAlt: 'Light No. 3, scultura da parete in carta bianca con pieghe profonde su fondo scuro',
    shots: [
      { key: 'lavori/figura-1', alt: 'Figura scolpita in carta, esile e verticale, con rami sul busto, su fondo blu notte' },
      { key: 'lavori/light-1', title: 'Light No. 1', alt: 'Light No. 1, scultura da parete in carta dalle pieghe morbide e lucide' },
      { key: 'lavori/light-2', title: 'Light No. 2', alt: 'Light No. 2, scultura da parete in carta bianca con una grande piega centrale' },
      { key: 'lavori/unlimited', title: 'Unlimited', alt: 'Unlimited, scultura di carta bianca stropicciata con rilievi profondi' },
      { key: 'lavori/light-3', title: 'Light No. 3', alt: 'Light No. 3, scultura da parete in carta bianca con pieghe profonde' },
      { key: 'lavori/toscana', title: 'Toscana', alt: 'Toscana, scultura da parete in carta: colline stilizzate con file di cipressi' },
      { key: 'lavori/light-4', title: 'Light No. 4', alt: 'Light No. 4, scultura da parete in carta con fitte pieghe irregolari' },
      { key: 'lavori/figura-2', alt: 'Dettaglio della testa di una figura scolpita in carta, su fondo blu notte' },
      { key: 'lavori/light-5', title: 'Light No. 5', alt: 'Light No. 5, scultura da parete in carta con una piega diagonale' },
      { key: 'lavori/light-6', title: 'Light No. 6', alt: 'Light No. 6, scultura da parete quadrata in carta con pieghe incrociate' },
    ],
  },
  {
    slug: 'paper-lamps',
    title: 'Paper lamps',
    summary: 'Lampade-sculture di carta ispirate a danza, musica e femminilità.',
    intro: [
      'Figure dalla silhouette esile e dalla base piena di energia: la danza, la musica, l’essenza femminile trasformate in lampade di carta.',
      'Ogni lampada è un pezzo unico, modellato a mano.',
    ],
    cover: 'lavori/dama-con-farfalla',
    coverAlt: 'Dama con Farfalla, lampada-scultura di carta con una figura femminile sopra una base ovale',
    shots: [
      { key: 'lavori/ballerina-di-flamenco', title: 'Ballerina di Flamenco', alt: 'Ballerina di Flamenco, lampada di carta a forma di figura danzante con gonna ampia' },
      { key: 'lavori/cantante-lirica', title: 'Cantante lirica', alt: 'Cantante lirica, lampada di carta con una figura femminile sopra una base tonda' },
      { key: 'lavori/dama-con-farfalla', title: 'Dama con Farfalla', alt: 'Dama con Farfalla, lampada di carta con una figura che porta una farfalla sul cappello' },
    ],
  },
];

export const bySlug = (slug: string) => categories.find((c) => c.slug === slug);

/** Selezione per la home: cinque lavori, uno per tile. */
export const featured: { key: string; kind: string; title: string; alt: string; href: string }[] = [
  { key: 'lavori/autunno', kind: 'Installazione luminosa', title: 'Autunno', alt: categories[0].shots[3].alt, href: '/lavori/installazioni-luminose' },
  { key: 'lavori/ballerina-di-flamenco', kind: 'Paper lamp', title: 'Ballerina di Flamenco', alt: categories[2].shots[0].alt, href: '/lavori/paper-lamps' },
  { key: 'lavori/unlimited', kind: 'Scultura', title: 'Unlimited', alt: categories[1].shots[3].alt, href: '/lavori/sculture' },
  { key: 'lavori/dama-con-farfalla', kind: 'Paper lamp', title: 'Dama con Farfalla', alt: categories[2].shots[2].alt, href: '/lavori/paper-lamps' },
  { key: 'lavori/primavera', kind: 'Installazione luminosa', title: 'Primavera', alt: categories[0].shots[1].alt, href: '/lavori/installazioni-luminose' },
];
