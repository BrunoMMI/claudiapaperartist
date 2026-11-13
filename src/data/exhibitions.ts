import type { Shot } from './photos';
import type { L } from '../i18n';

export interface Exhibition {
  slug: string;
  year: number;
  title: string;
  /** luogo, curatori, date: come riportato nei materiali */
  venue: L;
  dates: L;
  curators?: string;
  role?: L;
  shots?: Shot[];
}

const vallata = { it: 'APS Pro Loco “Vallata”, Palazzo del Tempo, Piedimonte Matese (CE)', en: 'APS Pro Loco “Vallata”, Palazzo del Tempo, Piedimonte Matese (CE)' };
const merlino = { it: 'ArtEspertise Galleria Merlino, Firenze', en: 'ArtEspertise Galleria Merlino, Florence' };

/** Elenco completo delle mostre, dalla più recente. Le voci con `shots` mostrano anche la galleria. */
export const exhibitions: Exhibition[] = [
  {
    slug: 'la-luce-oltre',
    year: 2026,
    title: 'La luce… Oltre. Raccontando la luce attraverso l’arte',
    venue: vallata,
    dates: { it: '26 settembre – 4 ottobre 2026', en: '26 September – 4 October 2026' },
    curators: 'Giovanna del Vecchio e Fernando Catarcio',
    shots: [
      { key: 'mostre/la-luce-oltre-locandina', alt: { it: 'Locandina della mostra La luce… Oltre, Palazzo del Tempo, Piedimonte Matese', en: 'Poster of the exhibition La luce… Oltre, Palazzo del Tempo, Piedimonte Matese' } },
      { key: 'lavori/primavera-2', title: 'Primavera', alt: { it: 'Primavera, figura di carta con gonna luminosa rosa e rossa', en: 'Spring, a paper figure with a glowing pink and red skirt' } },
      { key: 'lavori/estate', title: 'Estate', alt: { it: 'Estate, figura di carta con gonna luminosa gialla e arancio', en: 'Summer, a paper figure with a glowing yellow and orange skirt' } },
      { key: 'lavori/autunno', title: 'Autunno', alt: { it: 'Autunno, figura di carta con gonna luminosa rossa e arancio', en: 'Autumn, a paper figure with a glowing red and orange skirt' } },
      { key: 'lavori/inverno', title: 'Inverno', alt: { it: 'Inverno, figura di carta con gonna luminosa bianca', en: 'Winter, a paper figure with a glowing white skirt' } },
    ],
  },
  {
    slug: 'echi-d-entroterra',
    year: 2025,
    title: 'Echi d’entroterra. Allegoria di un territorio',
    venue: { it: 'FUTURIDEA, Benevento (BN)', en: 'FUTURIDEA, Benevento (BN)' },
    dates: { it: '3 ottobre – 31 dicembre 2025', en: '3 October – 31 December 2025' },
    curators: 'Azzurra Immediato e Giuseppe Leone',
    role: { it: 'Artista ospite', en: 'Guest artist' },
    shots: [
      { key: 'mostre/echi-locandina', alt: { it: 'Locandina della mostra Echi d’entroterra. Allegoria di un territorio', en: 'Poster of the exhibition Echi d’entroterra. Allegoria di un territorio' } },
      { key: 'mostre/echi-cartellino', alt: { it: 'Cartellino della mostra Echi d’entroterra con il nome di Claudia D’Andrea, artista ospite', en: 'Label of the exhibition Echi d’entroterra with the name of Claudia D’Andrea, guest artist' } },
      { key: 'lavori/atena-1', title: 'Atena', alt: { it: 'Atena, scultura di carta bianca con chioma di rami, esposta su fondo nero', en: 'Athena, a white paper sculpture with a crown of branches, displayed on a black background' } },
      { key: 'mostre/echi-atena', alt: { it: 'Atena nella sala della mostra, su una parete scura', en: 'Athena in the exhibition hall, against a dark wall' } },
      { key: 'mostre/echi-sala', alt: { it: 'La sala della mostra durante l’inaugurazione, con il pubblico seduto', en: 'The exhibition hall during the opening, with the audience seated' } },
      { key: 'mostre/echi-opera', alt: { it: 'Visitatori davanti a un’opera esposta su pannello scuro', en: 'Visitors in front of a work displayed on a dark panel' } },
      { key: 'mostre/echi-visita', alt: { it: 'Claudia D’Andrea mostra un’opera a un visitatore', en: 'Claudia D’Andrea showing a work to a visitor' } },
    ],
  },
  {
    slug: 'wonder',
    year: 2024,
    title: 'WONDER – esposizione collettiva internazionale',
    venue: { it: 'Palazzo Rospigliosi, Zagarolo (Roma)', en: 'Palazzo Rospigliosi, Zagarolo (Rome)' },
    dates: { it: '5 – 21 luglio 2024', en: '5 – 21 July 2024' },
    curators: 'Beatrice Cordaro',
    shots: [
      { key: 'mostre/wonder-locandina', alt: { it: 'Locandina della mostra WONDER, Palazzo Rospigliosi, Zagarolo, 5–21 luglio 2024', en: 'Poster of the exhibition WONDER, Palazzo Rospigliosi, Zagarolo, 5–21 July 2024' } },
      { key: 'mostre/wonder-1', alt: { it: 'Figura scolpita in carta bianca, alta e verticale, in una sala affrescata', en: 'Tall, upright figure sculpted in white paper, in a frescoed hall' } },
      { key: 'mostre/wonder-2', alt: { it: 'Dettaglio di una figura di carta in primo piano, con Atena sullo sfondo', en: 'Detail of a paper figure in the foreground, with Athena in the background' } },
      { key: 'mostre/wonder-3', alt: { it: 'Atena e una figura di carta in una sala di Palazzo Rospigliosi', en: 'Athena and a paper figure in a hall of Palazzo Rospigliosi' } },
      { key: 'mostre/wonder-4', alt: { it: 'Le sculture di carta nella sala con soffitto affrescato, illuminata da una lampada', en: 'The paper sculptures in the hall with a frescoed ceiling, lit by a lamp' } },
      { key: 'mostre/wonder-5', alt: { it: 'Sala di Palazzo Rospigliosi con le sculture di carta e alcuni visitatori', en: 'A hall of Palazzo Rospigliosi with the paper sculptures and some visitors' } },
      { key: 'mostre/wonder-6', alt: { it: 'Visitatori in una sala affrescata davanti alle sculture di carta', en: 'Visitors in a frescoed hall in front of the paper sculptures' } },
      { key: 'mostre/wonder-7', alt: { it: 'Atena illuminata da una lanterna a terra, con un visitatore che la osserva', en: 'Athena lit by a lantern on the floor, with a visitor looking at her' } },
      { key: 'mostre/wonder-8', alt: { it: 'Una visitatrice osserva Atena nella sala affrescata', en: 'A visitor looking at Athena in the frescoed hall' } },
    ],
  },
  {
    slug: 'luce-di-carta',
    year: 2024,
    title: 'LUCE DI CARTA – mostra personale',
    venue: { it: '31.10 Art Hotel, Firenze', en: '31.10 Art Hotel, Florence' },
    dates: { it: 'marzo – settembre 2024', en: 'March – September 2024' },
    curators: 'Beatrice Cordaro',
    shots: [
      { key: 'mostre/luce-di-carta-locandina', alt: { it: 'Locandina della mostra personale Luce di carta, 31.10 Art Hotel, Firenze', en: 'Poster of the solo exhibition Luce di carta, 31.10 Art Hotel, Florence' } },
      { key: 'mostre/luce-di-carta-sala', alt: { it: 'Sculture da parete in carta bianca su una parete blu', en: 'White paper wall sculptures on a blue wall' } },
      { key: 'mostre/luce-di-carta-opere', alt: { it: 'Cinque sculture da parete in carta allineate su parete blu petrolio', en: 'Five paper wall sculptures lined up on a petrol-blue wall' } },
      { key: 'mostre/luce-di-carta-cavalletto', alt: { it: 'Il cartello della mostra su un cavalletto, accanto a una scultura da parete', en: 'The exhibition sign on an easel, next to a wall sculpture' } },
      { key: 'mostre/luce-di-carta-angolo', alt: { it: 'Tre sculture da parete in carta bianca su una parete grigia', en: 'Three white paper wall sculptures on a grey wall' } },
      { key: 'mostre/luce-di-carta-rilievo', alt: { it: 'Scultura da parete in carta bianca con rilievi profondi, su sfondo blu', en: 'White paper wall sculpture with deep relief, on a blue background' } },
      { key: 'mostre/luce-di-carta-parete', alt: { it: 'Scultura da parete in carta con onde e piccoli rilievi, con la targhetta', en: 'Paper wall sculpture with waves and small reliefs, with its label' } },
      { key: 'mostre/luce-di-carta-specchio', alt: { it: 'Sculture da parete su carta da parati a righe, accanto a uno specchio dorato', en: 'Wall sculptures on striped wallpaper, next to a golden mirror' } },
      { key: 'mostre/luce-di-carta-lampada', alt: { it: 'Lampada-scultura di carta con figura femminile, accanto al cartello della mostra', en: 'Paper lamp-sculpture with a female figure, next to the exhibition sign' } },
    ],
  },
  { slug: 'sinfonie-artistiche', year: 2023, title: 'Sinfonie Artistiche', venue: merlino, dates: { it: 'gennaio – marzo 2023', en: 'January – March 2023' } },
  {
    slug: 'on-tour-london',
    year: 2022,
    title: 'ON TOUR LONDON X-Mas edition',
    venue: { it: 'Crypt Gallery, Londra', en: 'Crypt Gallery, London' },
    dates: { it: 'dicembre 2022', en: 'December 2022' },
    shots: [
      { key: 'mostre/london-1', alt: { it: 'Corridoio in mattoni della Crypt Gallery con una luce in fondo', en: 'Brick corridor of the Crypt Gallery with a light at the end' } },
      { key: 'mostre/london-2', alt: { it: 'Lampada di carta con figura femminile su un piedistallo bianco, tra muri di mattoni', en: 'Paper lamp with a female figure on a white pedestal, between brick walls' } },
      { key: 'mostre/london-3', alt: { it: 'Lampada di carta illuminata, con figura che porta una farfalla sul cappello', en: 'Lit paper lamp, with a figure wearing a butterfly on her hat' } },
      { key: 'mostre/london-4', alt: { it: 'Piccola lampada di carta illuminata di azzurro, accanto a un’opera appesa al muro', en: 'Small paper lamp lit in light blue, next to a work hanging on the wall' } },
    ],
  },
  { slug: 'collettiva-musica', year: 2022, title: 'Collettiva d’arte MUSICA', venue: { it: 'SM Galleria, Torino', en: 'SM Galleria, Turin' }, dates: { it: 'ottobre – novembre 2022', en: 'October – November 2022' } },
  {
    slug: 'better-life',
    year: 2022,
    title: 'Esposizione internazionale d’arte contemporanea “Better Life Art can do it!” (Italian edition)',
    venue: { it: 'Palazzo Ducale, Genova', en: 'Palazzo Ducale, Genoa' },
    dates: { it: 'luglio 2022', en: 'July 2022' },
    shots: [
      { key: 'mostre/better-life-locandina', alt: { it: 'Locandina della mostra Better Life: Art can do it! (Italian edition), Palazzo Ducale, Genova', en: 'Poster of the exhibition Better Life: Art can do it! (Italian edition), Palazzo Ducale, Genoa' } },
      { key: 'mostre/better-life-brochure', alt: { it: 'Brochure della mostra Better Life: Art can do it! (Italian edition)', en: 'Brochure of the exhibition Better Life: Art can do it! (Italian edition)' } },
    ],
  },
];
