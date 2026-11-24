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
  /** sfondo decorativo (fiore di carta su fondo scuro) dietro l'intestazione della categoria, opzionale */
  backdrop?: string;
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
    backdrop: 'sfondi/fiore-1',
    cover: 'lavori/autunno',
    coverAlt: {
      it: 'Installazione luminosa Autunno: figura di carta con gonna illuminata in arancio e rosso',
      en: 'Light installation Autumn: paper figure with a skirt lit in orange and red',
    },
    shots: [
      { key: 'lavori/atena-3', title: 'Atena', alt: { it: 'Atena in una sala dal pavimento a scacchi, con la base che emana una luce calda', en: 'Athena in a hall with a checkered floor, her base giving off a warm light' } },
      { key: 'lavori/atena-2', title: 'Atena', alt: { it: 'Atena in uno spazio dalle pareti consumate, con la base illuminata', en: 'Athena in a space with weathered walls, her base lit' } },
      { key: 'lavori/primavera-2', title: 'Primavera', alt: { it: 'Dettaglio della figura Primavera, con gonna luminosa di fiori di carta', en: 'Detail of the Spring figure, with a glowing skirt of paper flowers' } },
      { key: 'lavori/primavera-giorno', title: 'Primavera', alt: { it: 'Primavera alla luce del giorno: figura di carta con chioma gialla, busto rosa e gonna di fiori di carta rosa e fucsia', en: 'Spring in daylight: paper figure with yellow hair, a pink bodice and a skirt of pink and fuchsia paper flowers' } },
      { key: 'lavori/estate', title: 'Estate', alt: { it: 'Estate: figura di carta con gonna illuminata in giallo e arancio e un mazzo di fiori in mano', en: 'Summer: paper figure with a skirt lit in yellow and orange, holding a bunch of flowers' } },
      { key: 'lavori/estate-giorno', title: 'Estate', alt: { it: 'Estate alla luce del giorno: figura di carta con busto verde, gonna di grandi fiori gialli e un mazzo di fiori colorati in mano', en: 'Summer in daylight: paper figure with a green bodice, a skirt of large yellow flowers and a bunch of colourful flowers in her hand' } },
      { key: 'lavori/autunno', title: 'Autunno', alt: { it: 'Autunno: figura di carta con abito arancione e gonna luminosa rossa e arancio', en: 'Autumn: paper figure with an orange dress and a glowing red and orange skirt' } },
      { key: 'lavori/autunno-giorno', title: 'Autunno', alt: { it: 'Autunno alla luce del giorno: figura di carta con corpetto arancione e gonna di fiori arancio, gialli e rossi', en: 'Autumn in daylight: paper figure with an orange bodice and a skirt of orange, yellow and red flowers' } },
      { key: 'lavori/inverno', title: 'Inverno', alt: { it: 'Inverno: figura di carta con gonna di petali illuminata di bianco', en: 'Winter: paper figure with a petal skirt lit in white' } },
      { key: 'lavori/inverno-giorno', title: 'Inverno', alt: { it: 'Inverno alla luce del giorno: figura di carta con corpetto azzurro e gonna di petali bianchi', en: 'Winter in daylight: paper figure with a light-blue bodice and a skirt of white petals' } },
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
      { key: 'lavori/figura-3', alt: { it: 'Figura scolpita in carta bianca con rami sul busto, su fondo nero', en: 'Sculpted white paper figure with branches on the bust, on a black background' } },
      { key: 'lavori/figura-4', alt: { it: 'Figura scolpita in carta bianca vista da vicino, con rami e una chioma raccolta, su fondo nero', en: 'Close view of a sculpted white paper figure, with branches and gathered hair, on a black background' } },
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
      { key: 'lavori/dama-con-farfalla-2', title: 'Dama con Farfalla', alt: { it: 'Dama con Farfalla vista da dietro: la figura sopra la base luminosa', en: 'Lady with Butterfly seen from behind: the figure above the glowing base' } },
      { key: 'lavori/dama-con-farfalla', title: 'Dama con Farfalla', alt: { it: 'Dama con Farfalla, lampada di carta con una figura che porta una farfalla sul cappello', en: 'Lady with Butterfly, a paper lamp with a figure wearing a butterfly on her hat' } },
      { key: 'lavori/ballerina', title: 'Ballerina', alt: { it: 'Ballerina, lampada di carta con una figura danzante in equilibrio sulla sommità di una base ovale luminosa', en: 'Dancer, a paper lamp with a dancing figure balanced on top of a glowing oval base' } },
      { key: 'lavori/ragazza-che-legge-primo-piano', title: 'Ragazza che legge', alt: { it: 'Ragazza che legge in primo piano, accanto alla lampada Ballerina sullo sfondo', en: 'Girl Reading in the foreground, next to the lamp Dancer in the background' } },
    ],
  },
  {
    slug: 'allestimenti',
    title: { it: 'Allestimenti', en: 'Set designs' },
    summary: {
      it: 'Scenografie d’impatto per momenti indimenticabili: ogni dettaglio esprime un’emozione.',
      en: 'Striking scenography for unforgettable moments: every detail expresses an emotion.',
    },
    intro: {
      it: ['Carta, luce e dettagli su misura per feste ed eventi: dall’invito alla torta, ogni elemento fa parte dello stesso racconto.'],
      en: ['Paper, light and bespoke details for parties and events: from the invitation to the cake, every element is part of the same story.'],
    },
    cover: 'allestimenti/torta-18',
    coverAlt: {
      it: 'Allestimento per una festa di diciott’anni: tavolo con torta e scatoline davanti a una cortina di luci blu',
      en: 'Set design for an eighteenth birthday: a table with a cake and small boxes in front of a curtain of blue lights',
    },
    shots: [
      { key: 'allestimenti/locandina-18', title: { it: 'L’invito', en: 'The invitation' }, alt: { it: 'Locandina dell’invito: “Viaggio nella Corte della Notte”, diciottesimo compleanno', en: 'Invitation poster: “Journey to the Court of Night”, eighteenth birthday' } },
      { key: 'allestimenti/segnalibro', title: { it: 'Il segnalibro', en: 'The bookmark' }, alt: { it: 'Segnalibro a tema notte stellata con una frase sulle stelle', en: 'Starry-night bookmark with a quote about the stars' } },
      { key: 'allestimenti/torta-18', title: { it: 'La torta', en: 'The cake' }, alt: { it: 'Tavolo con la torta di carta blu e scatoline, davanti a una cortina di luci blu', en: 'Table with the blue paper cake and small boxes, in front of a curtain of blue lights' } },
      { key: 'allestimenti/torta-blu', title: { it: 'La torta', en: 'The cake' }, alt: { it: 'Torta di carta blu e bianca con la candelina 18', en: 'Blue and white paper cake with a number 18 candle' } },
      { key: 'allestimenti/candela-18', title: { it: 'La candelina', en: 'The candle' }, alt: { it: 'Candelina con il numero 18 sulla torta, davanti a luci blu', en: 'Number 18 candle on the cake, in front of blue lights' } },
      { key: 'allestimenti/tavolo', title: { it: 'Il tavolo', en: 'The table' }, alt: { it: 'Tavolo con la torta blu e le scatoline con nastri blu e argento', en: 'Table with the blue cake and the small boxes with blue and silver ribbons' } },
      { key: 'allestimenti/tavolo-2', title: { it: 'Il tavolo', en: 'The table' }, alt: { it: 'Scatoline bianche con nastri blu e i segnalibri sul tavolo bianco', en: 'White small boxes with blue ribbons and the bookmarks on the white table' } },
      { key: 'allestimenti/scatole-1', title: { it: 'Le scatoline', en: 'The small boxes' }, alt: { it: 'Scatoline bianche con nastri blu e argento', en: 'White small boxes with blue and silver ribbons' } },
      { key: 'allestimenti/cerchio', title: { it: 'Il cerchio di luci', en: 'The hoop of lights' }, alt: { it: 'Cerchio con luci blu e pompon di carta blu e bianchi', en: 'Hoop with blue lights and blue and white paper pompoms' } },
    ],
  },
];

export const bySlug = (slug: string) => categories.find((c) => c.slug === slug);

/** Selezione per la home: un lavoro per tile. `to` è l'ancora della sezione di destinazione. */
export const featured: { key: string; kind: L; title: L; alt: L; to: string; pos?: string }[] = [
  { key: 'lavori/autunno', kind: { it: 'Installazione luminosa', en: 'Light installation' }, title: { it: 'Autunno', en: 'Autumn' }, alt: categories[0].shots[6].alt, to: 'installazioni-luminose', pos: '50% 12%' },
  { key: 'lavori/ballerina-di-flamenco', kind: { it: 'Paper lamp', en: 'Paper lamp' }, title: { it: 'Ballerina di Flamenco', en: 'Flamenco Dancer' }, alt: categories[2].shots[0].alt, to: 'paper-lamps' },
  { key: 'lavori/unlimited', kind: { it: 'Scultura', en: 'Sculpture' }, title: { it: 'Unlimited', en: 'Unlimited' }, alt: categories[1].shots[4].alt, to: 'sculture' },
  { key: 'lavori/primavera-dettaglio', kind: { it: 'Installazione luminosa', en: 'Light installation' }, title: { it: 'Primavera', en: 'Spring' }, alt: { it: 'Dettaglio di Primavera: la gonna di fiori di carta illuminata dall’interno', en: 'Detail of Spring: the paper flower skirt lit from within' }, to: 'installazioni-luminose' },
  {
    key: 'allestimenti/torta-blu',
    kind: { it: 'Allestimento', en: 'Set design' },
    title: { it: 'Diciott’anni', en: 'Eighteenth birthday' },
    alt: { it: 'Allestimento per una festa: torta di carta blu e bianca con la candelina 18', en: 'Party set design: blue and white paper cake with a number 18 candle' },
    to: 'allestimenti',
  },
];
