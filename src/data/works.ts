import type { Shot } from './photos';
import type { L } from '../i18n';

export interface WorkCategory {
  slug: string;
  title: L;
  /** frase che accompagna la categoria */
  summary: L;
  /** paragrafi di presentazione */
  intro: L<string[]>;
  cover: string;
  coverAlt: L;
  shots: Shot[];
}

export const categories: WorkCategory[] = [
  {
    slug: 'installazioni-luminose',
    title: { it: 'Installazioni luminose', en: 'Light installations' },
    summary: {
      it: 'Luce, carta e trasparenze per atmosfere evocative e raffinate.',
      en: 'Light, paper and transparencies for evocative, refined atmospheres.',
    },
    intro: {
      it: [
        'La luce attraversa la carta e la trasforma: le pieghe diventano ombre, le trasparenze diventano calore.',
        'Le figure delle stagioni e Atena nascono per abitare uno spazio e cambiarne l’atmosfera.',
      ],
      en: [
        'Light passes through the paper and transforms it: folds become shadows, transparencies become warmth.',
        'The figures of the seasons and Athena are made to inhabit a space and change its atmosphere.',
      ],
    },
    cover: 'lavori/autunno',
    coverAlt: {
      it: 'Installazione luminosa Autunno: figura di carta con gonna illuminata in arancio e rosso',
      en: 'Light installation Autumn: paper figure with a skirt lit in orange and red',
    },
    shots: [
      { key: 'lavori/atena-1', title: 'Atena', alt: { it: 'Atena, scultura di carta bianca con una chioma di rami, su fondo nero', en: 'Athena, a white paper sculpture with a crown of branches, on a black background' } },
      { key: 'lavori/atena-3', title: 'Atena', alt: { it: 'Atena in una sala dal pavimento a scacchi, con la base che emana una luce calda', en: 'Athena in a hall with a checkered floor, her base giving off a warm light' } },
      { key: 'lavori/atena-2', title: 'Atena', alt: { it: 'Atena in uno spazio dalle pareti consumate, con la base illuminata', en: 'Athena in a space with weathered walls, her base lit' } },
      { key: 'lavori/primavera', title: 'Primavera', alt: { it: 'Primavera: figura di carta con gonna di fiori illuminata in rosa e rosso', en: 'Spring: paper figure with a flower skirt lit in pink and red' } },
      { key: 'lavori/primavera-dettaglio', title: 'Primavera', alt: { it: 'Dettaglio di Primavera: la gonna di fiori di carta illuminata dall’interno', en: 'Detail of Spring: the paper flower skirt lit from within' } },
      { key: 'lavori/primavera-2', title: 'Primavera', alt: { it: 'Dettaglio della figura Primavera, con gonna luminosa di fiori di carta', en: 'Detail of the Spring figure, with a glowing skirt of paper flowers' } },
      { key: 'lavori/estate', title: 'Estate', alt: { it: 'Estate: figura di carta con gonna illuminata in giallo e arancio e un mazzo di fiori in mano', en: 'Summer: paper figure with a skirt lit in yellow and orange, holding a bunch of flowers' } },
      { key: 'lavori/autunno', title: 'Autunno', alt: { it: 'Autunno: figura di carta con abito arancione e gonna luminosa rossa e arancio', en: 'Autumn: paper figure with an orange dress and a glowing red and orange skirt' } },
      { key: 'lavori/inverno', title: 'Inverno', alt: { it: 'Inverno: figura di carta con gonna di petali illuminata di bianco', en: 'Winter: paper figure with a petal skirt lit in white' } },
      { key: 'lavori/quattro-stagioni', title: 'Le quattro stagioni', alt: { it: 'Le quattro figure luminose delle stagioni affiancate', en: 'The four glowing figures of the seasons side by side' } },
    ],
  },
  {
    slug: 'sculture',
    title: { it: 'Sculptures', en: 'Sculptures' },
    summary: {
      it: 'Sculture in carta dallo stile minimalista dove materia, luci, ombre e rilievi si uniscono per emozionare.',
      en: 'Minimalist paper sculptures where matter, light, shadow and relief come together to move the viewer.',
    },
    intro: {
      it: [
        'Una superficie di carta che si piega, si stropiccia e trattiene la luce: ogni rilievo è un gesto fermato nella materia.',
        'La serie Light riunisce sei sculture da parete; accanto a loro, Toscana, Unlimited e le figure scolpite.',
      ],
      en: [
        'A paper surface that folds, crumples and holds the light: every relief is a gesture frozen in the material.',
        'The Light series brings together six wall sculptures; alongside them, Toscana, Unlimited and the sculpted figures.',
      ],
    },
    cover: 'lavori/light-3',
    coverAlt: {
      it: 'Light No. 3, scultura da parete in carta bianca con pieghe profonde su fondo scuro',
      en: 'Light No. 3, a white paper wall sculpture with deep folds on a dark background',
    },
    shots: [
      { key: 'lavori/figura-1', alt: { it: 'Figura scolpita in carta, esile e verticale, con rami sul busto, su fondo blu notte', en: 'Sculpted paper figure, slender and upright, with branches on the bust, on a midnight-blue background' } },
      { key: 'lavori/figura-3', alt: { it: 'Figura scolpita in carta bianca con rami sul busto, su fondo nero', en: 'Sculpted white paper figure with branches on the bust, on a black background' } },
      { key: 'lavori/figura-4', alt: { it: 'Figura scolpita in carta bianca vista da vicino, con rami e una chioma raccolta, su fondo nero', en: 'Close view of a sculpted white paper figure, with branches and gathered hair, on a black background' } },
      { key: 'lavori/figura-5', alt: { it: 'Dettaglio della testa e del busto di una figura scolpita in carta, davanti a una parete dorata', en: 'Detail of the head and bust of a sculpted paper figure, in front of a golden wall' } },
      { key: 'lavori/figura-2', alt: { it: 'Dettaglio della testa di una figura scolpita in carta, su fondo blu notte', en: 'Detail of the head of a sculpted paper figure, on a midnight-blue background' } },
      { key: 'lavori/toscana', title: 'Toscana', alt: { it: 'Toscana, scultura da parete in carta: colline stilizzate con file di cipressi', en: 'Toscana, a paper wall sculpture: stylised hills with rows of cypresses' } },
      { key: 'lavori/unlimited', title: 'Unlimited', alt: { it: 'Unlimited, scultura di carta bianca stropicciata con rilievi profondi', en: 'Unlimited, a crumpled white paper sculpture with deep relief' } },
      { key: 'lavori/light-1', title: 'Light No. 1', alt: { it: 'Light No. 1, scultura da parete in carta dalle pieghe morbide e lucide', en: 'Light No. 1, a paper wall sculpture with soft, glossy folds' } },
      { key: 'lavori/light-2', title: 'Light No. 2', alt: { it: 'Light No. 2, scultura da parete in carta bianca con una grande piega centrale', en: 'Light No. 2, a white paper wall sculpture with a large central fold' } },
      { key: 'lavori/light-3', title: 'Light No. 3', alt: { it: 'Light No. 3, scultura da parete in carta bianca con pieghe profonde', en: 'Light No. 3, a white paper wall sculpture with deep folds' } },
      { key: 'lavori/light-4', title: 'Light No. 4', alt: { it: 'Light No. 4, scultura da parete in carta con fitte pieghe irregolari', en: 'Light No. 4, a paper wall sculpture with dense, irregular folds' } },
      { key: 'lavori/light-5', title: 'Light No. 5', alt: { it: 'Light No. 5, scultura da parete in carta con una piega diagonale', en: 'Light No. 5, a paper wall sculpture with a diagonal fold' } },
      { key: 'lavori/light-6', title: 'Light No. 6', alt: { it: 'Light No. 6, scultura da parete quadrata in carta con pieghe incrociate', en: 'Light No. 6, a square paper wall sculpture with crossing folds' } },
    ],
  },
  {
    slug: 'paper-lamps',
    title: { it: 'Paper lamps', en: 'Paper lamps' },
    summary: {
      it: 'Lampade di carta dove luce, delicatezza e femminilità sono protagoniste.',
      en: 'Paper lamps where light, delicacy and femininity take centre stage.',
    },
    intro: {
      it: [
        'Figure dalla silhouette esile e dalla base piena di energia: la danza, la musica, l’essenza femminile trasformate in lampade di carta.',
        'Ogni lampada è un pezzo unico, modellato a mano.',
      ],
      en: [
        'Figures with a slender silhouette and an energetic base: dance, music and the feminine essence turned into paper lamps.',
        'Every lamp is a unique piece, shaped by hand.',
      ],
    },
    cover: 'lavori/dama-con-farfalla',
    coverAlt: {
      it: 'Dama con Farfalla, lampada-scultura di carta con una figura femminile sopra una base ovale',
      en: 'Lady with Butterfly, a paper lamp-sculpture with a female figure on an oval base',
    },
    shots: [
      { key: 'lavori/ballerina-di-flamenco', title: 'Ballerina di Flamenco', alt: { it: 'Ballerina di Flamenco, lampada di carta a forma di figura danzante con gonna ampia', en: 'Flamenco Dancer, a paper lamp shaped like a dancing figure with a wide skirt' } },
      { key: 'lavori/cantante-lirica', title: 'Cantante lirica', alt: { it: 'Cantante lirica, lampada di carta con una figura femminile sopra una base tonda', en: 'Opera Singer, a paper lamp with a female figure on a round base' } },
      { key: 'lavori/dama-con-farfalla', title: 'Dama con Farfalla', alt: { it: 'Dama con Farfalla, lampada di carta con una figura che porta una farfalla sul cappello', en: 'Lady with Butterfly, a paper lamp with a figure wearing a butterfly on her hat' } },
      { key: 'lavori/dama-con-farfalla-2', title: 'Dama con Farfalla', alt: { it: 'Dama con Farfalla vista da dietro: la figura sopra la base luminosa', en: 'Lady with Butterfly seen from behind: the figure above the glowing base' } },
    ],
  },
];

export const bySlug = (slug: string) => categories.find((c) => c.slug === slug);

/** Selezione per la home: un lavoro per tile. `to` è l'ancora della sezione di destinazione. */
export const featured: { key: string; kind: L; title: L; alt: L; to: string }[] = [
  { key: 'lavori/autunno', kind: { it: 'Installazione luminosa', en: 'Light installation' }, title: { it: 'Autunno', en: 'Autumn' }, alt: categories[0].shots[3].alt, to: 'installazioni-luminose' },
  { key: 'lavori/ballerina-di-flamenco', kind: { it: 'Paper lamp', en: 'Paper lamp' }, title: { it: 'Ballerina di Flamenco', en: 'Flamenco Dancer' }, alt: categories[2].shots[0].alt, to: 'paper-lamps' },
  { key: 'lavori/unlimited', kind: { it: 'Scultura', en: 'Sculpture' }, title: { it: 'Unlimited', en: 'Unlimited' }, alt: categories[1].shots[5].alt, to: 'sculture' },
  { key: 'lavori/primavera-dettaglio', kind: { it: 'Installazione luminosa', en: 'Light installation' }, title: { it: 'Primavera', en: 'Spring' }, alt: categories[0].shots[5].alt, to: 'installazioni-luminose' },
  {
    key: 'allestimenti/torta-blu',
    kind: { it: 'Allestimento', en: 'Set design' },
    title: { it: 'Diciott’anni', en: 'Eighteenth birthday' },
    alt: { it: 'Allestimento per una festa: torta di carta blu e bianca con la candelina 18', en: 'Party set design: blue and white paper cake with a number 18 candle' },
    to: 'allestimenti-ed-eventi',
  },
];
