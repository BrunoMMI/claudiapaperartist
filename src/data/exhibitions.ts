import type { Shot } from './photos';

export interface Exhibition {
  slug: string;
  year: number;
  title: string;
  /** luogo, curatori, date: come riportato nei materiali */
  venue: string;
  dates: string;
  curators?: string;
  role?: string;
  shots?: Shot[];
}

/** Elenco completo delle mostre, dalla più recente. Le voci con `shots` mostrano anche la galleria. */
export const exhibitions: Exhibition[] = [
  {
    slug: 'la-luce-oltre',
    year: 2026,
    title: 'La luce… Oltre. Raccontando la luce attraverso l’arte',
    venue: 'APS Pro Loco “Vallata”, Palazzo del Tempo, Piedimonte Matese (CE)',
    dates: '26 settembre – 4 ottobre 2026',
    curators: 'Giovanna del Vecchio e Fernando Catarcio',
    shots: [
      { key: 'mostre/la-luce-oltre-locandina', alt: 'Locandina della mostra La luce… Oltre, Palazzo del Tempo, Piedimonte Matese' },
      { key: 'lavori/estate', title: 'Estate', alt: 'Estate, figura di carta con gonna luminosa gialla e arancio' },
      { key: 'lavori/autunno', title: 'Autunno', alt: 'Autunno, figura di carta con gonna luminosa rossa e arancio' },
      { key: 'lavori/inverno', title: 'Inverno', alt: 'Inverno, figura di carta con gonna luminosa bianca' },
      { key: 'lavori/primavera-2', title: 'Primavera', alt: 'Primavera, figura di carta con gonna luminosa rosa e rossa' },
    ],
  },
  {
    slug: 'echi-d-entroterra',
    year: 2025,
    title: 'Echi d’entroterra. Allegoria di un territorio',
    venue: 'FUTURIDEA, Benevento (BN)',
    dates: '3 ottobre – 31 dicembre 2025',
    curators: 'Azzurra Immediato e Giuseppe Leone',
    role: 'Artista ospite',
    shots: [
      { key: 'mostre/echi-cartellino', alt: 'Cartellino della mostra Echi d’entroterra con il nome di Claudia D’Andrea, artista ospite' },
      { key: 'lavori/atena-1', title: 'Atena', alt: 'Atena, scultura di carta bianca con chioma di rami, esposta su fondo nero' },
      { key: 'mostre/echi-sala', alt: 'La sala della mostra durante l’inaugurazione, con il pubblico seduto' },
      { key: 'mostre/echi-opera', alt: 'Visitatori davanti a un’opera esposta su pannello scuro' },
      { key: 'mostre/echi-visita', alt: 'Claudia D’Andrea mostra un’opera a un visitatore' },
    ],
  },
  {
    slug: 'wonder',
    year: 2024,
    title: 'WONDER – esposizione collettiva internazionale',
    venue: 'Palazzo Rospigliosi, Zagarolo (Roma)',
    dates: '5 – 21 luglio 2024',
    curators: 'Beatrice Cordaro',
    shots: [
      { key: 'mostre/wonder-1', alt: 'Figura scolpita in carta bianca, alta e verticale, in una sala affrescata' },
      { key: 'mostre/wonder-2', alt: 'Dettaglio di una figura di carta in primo piano, con Atena sullo sfondo' },
      { key: 'mostre/wonder-3', alt: 'Atena e una figura di carta in una sala di Palazzo Rospigliosi' },
      { key: 'mostre/wonder-4', alt: 'Le sculture di carta nella sala con soffitto affrescato, illuminata da una lampada' },
      { key: 'mostre/wonder-5', alt: 'Sala di Palazzo Rospigliosi con le sculture di carta e alcuni visitatori' },
    ],
  },
  {
    slug: 'luce-di-carta',
    year: 2024,
    title: 'LUCE DI CARTA – mostra personale',
    venue: '31.10 Art Hotel, Firenze',
    dates: 'marzo – settembre 2024',
    curators: 'Beatrice Cordaro',
    shots: [
      { key: 'mostre/luce-di-carta-locandina', alt: 'Locandina della mostra personale Luce di carta, 31.10 Art Hotel, Firenze' },
      { key: 'mostre/luce-di-carta-sala', alt: 'Sculture da parete in carta bianca su una parete blu' },
      { key: 'mostre/luce-di-carta-opere', alt: 'Cinque sculture da parete in carta allineate su parete blu petrolio' },
      { key: 'mostre/luce-di-carta-pareti', alt: 'Sculture da parete esposte lungo un corridoio con parete blu' },
      { key: 'mostre/luce-di-carta-rilievo', alt: 'Scultura da parete in carta bianca con rilievi profondi, su sfondo blu' },
      { key: 'mostre/luce-di-carta-specchio', alt: 'Sculture da parete su carta da parati a righe, accanto a uno specchio dorato' },
      { key: 'mostre/luce-di-carta-lampada', alt: 'Lampada-scultura di carta con figura femminile, accanto al cartello della mostra' },
      { key: 'mostre/luce-di-carta-parete', alt: 'Scultura da parete in carta con onde e piccoli rilievi, con la targhetta' },
      { key: 'mostre/luce-di-carta-vernice', alt: 'Sculture da parete su parete grigia' },
    ],
  },
  { slug: 'sinfonie-artistiche-marzo', year: 2023, title: 'Sinfonie Artistiche', venue: 'ArtExpertise Galleria Merlino, Firenze', dates: 'marzo 2023' },
  { slug: 'experiments', year: 2023, title: 'Experiments', venue: 'ArtExpertise Galleria Merlino, Firenze', dates: 'marzo 2023' },
  { slug: 'sinfonie-artistiche-febbraio', year: 2023, title: 'Sinfonie Artistiche', venue: 'ArtExpertise Galleria Merlino, Firenze', dates: 'febbraio 2023' },
  { slug: 'riflessioni-sull-amore', year: 2023, title: 'Riflessioni sull’Amore', venue: 'ArtExpertise Galleria Merlino, Firenze', dates: 'febbraio 2023' },
  { slug: 'tendenze-contemporanee', year: 2023, title: 'Tendenze Contemporanee', venue: 'ArtExpertise Galleria Merlino, Firenze', dates: 'gennaio 2023' },
  { slug: 'arte-e-collezionismo', year: 2023, title: 'Arte e Collezionismo', venue: 'ArtExpertise Galleria Merlino, Firenze', dates: 'gennaio 2023' },
  {
    slug: 'on-tour-london',
    year: 2022,
    title: 'ON TOUR LONDON X-Mas edition',
    venue: 'Crypt Gallery, Londra',
    dates: 'dicembre 2022',
    shots: [
      { key: 'mostre/london-1', alt: 'Corridoio in mattoni della Crypt Gallery con una luce in fondo' },
      { key: 'mostre/london-2', alt: 'Lampada di carta con figura femminile su un piedistallo bianco, tra muri di mattoni' },
      { key: 'mostre/london-3', alt: 'Lampada di carta illuminata, con figura che porta una farfalla sul cappello' },
      { key: 'mostre/london-4', alt: 'Piccola lampada di carta illuminata di azzurro, accanto a un’opera appesa al muro' },
    ],
  },
  { slug: 'collettiva-musica', year: 2022, title: 'Collettiva d’arte MUSICA', venue: 'SM Galleria, Torino', dates: 'ottobre – novembre 2022' },
  {
    slug: 'better-life',
    year: 2022,
    title: 'Esposizione internazionale d’arte contemporanea “Better Life Art can do it!” (Italian edition)',
    venue: 'Palazzo Ducale, Genova',
    dates: 'luglio 2022',
  },
];
