import type { Shot } from './photos';

export interface Workshop {
  slug: string;
  title: string;
  place: string;
  when: string;
  text: string[];
  shots: Shot[];
}

/** Laboratori già realizzati. */
export const workshops: Workshop[] = [
  {
    slug: 'urban-paper',
    title: 'Urban paper: dalla carta al fiore',
    place: 'Urban Nature 2026 · WWF 60 anni per la natura · Futuridea, Benevento (BN)',
    when: '3 ottobre 2026',
    text: [
      'Un laboratorio esperienziale aperto a grandi e piccini per celebrare il valore del verde urbano e della biodiversità in città.',
      'Guidati da Claudia D’Andrea e dall’apicoltore Armando Valerino, i partecipanti scoprono il mondo della carta: riciclano scarti e impreziosiscono l’impasto con semi di fiori spontanei e nettariferi, per conoscere da vicino il delicato universo degli impollinatori.',
    ],
    shots: [
      { key: 'laboratori/urban-paper-3', alt: 'Il laboratorio Urban paper: una proiezione di fiori sullo schermo e i partecipanti seduti' },
      { key: 'laboratori/urban-paper-2', alt: 'Claudia D’Andrea e una partecipante lavorano la carta a un tavolo' },
      { key: 'laboratori/urban-paper-4', alt: 'La sala del laboratorio con il pubblico seduto' },
      { key: 'laboratori/urban-paper-1', alt: 'Un kit con carta, semi e il programma dell’evento Urban Nature' },
    ],
  },
  {
    slug: 'disegno-materia-luce',
    title: 'Disegno, Materia, Luce – Attraverso la carta',
    place: 'Laboratorio di cartapesta · Scuola d’Arte “Il Tempo dell’Arte” · Pro Loco “Vallata”, Piedimonte Matese (CE)',
    when: 'giugno – luglio 2026',
    text: [
      'Un ciclo di incontri per bambini e ragazzi: si disegna, si modella e si costruisce, dalla struttura in cartone alla cartapesta.',
    ],
    shots: [
      { key: 'laboratori/valata-8', alt: 'Locandina del ciclo di incontri Disegno, Materia, Luce – Attraverso la carta' },
      { key: 'laboratori/valata-2', alt: 'Un fiore di cartone costruito a strati, tenuto tra le mani' },
      { key: 'laboratori/valata-4', alt: 'Sagome di cartone montate in una struttura a spicchi' },
      { key: 'laboratori/valata-5', alt: 'Una struttura in cartone rivestita di carta bianca a strisce' },
      { key: 'laboratori/valata-1', alt: 'Un vaso di carta modellato sulla struttura di cartone' },
      { key: 'laboratori/valata-6', alt: 'Mani che rifiniscono un vaso in cartapesta' },
      { key: 'laboratori/valata-7', alt: 'Dettaglio della decorazione a pennello su un oggetto in cartapesta' },
    ],
  },
  {
    slug: 'officina-della-carta',
    title: 'Officina della carta – Luce agli scarti',
    place: 'Morcone (BN)',
    when: 'dicembre 2025',
    text: [
      'Gli scarti di carta tornano a brillare: ghirlande, alberelli piegati e piccole case di carta con una luce dentro.',
    ],
    shots: [
      { key: 'laboratori/officina-2', alt: 'Una piccola casa di carta illuminata dall’interno' },
      { key: 'laboratori/officina-1', alt: 'Ghirlanda di carta bianca appesa su fondo rosso' },
      { key: 'laboratori/officina-3', alt: 'Alberello di carta piegata appeso a un filo' },
      { key: 'laboratori/officina-4', alt: 'Decorazioni di carta e una lanterna bianca tra rametti verdi' },
      { key: 'laboratori/officina-5', alt: 'Alberelli di carta piegata e una casetta di carta su un tavolo bianco' },
      { key: 'laboratori/officina-6', alt: 'Lanterna di carta con la scritta Buon Natale illuminata da una luce calda' },
      { key: 'laboratori/officina-7', alt: 'Ghirlanda di carta bianca su fondo rosso' },
    ],
  },
];

/** Esempi di laboratori proponibili. I luoghi vanno concordati: non sono ancora definiti. */
export const offers = [
  {
    title: 'Carta e luce',
    text: 'Due giornate per costruire una piccola installazione luminosa in carta, dal progetto al montaggio.',
    meta: 'Weekend · max 8 persone',
  },
  {
    title: 'Fiori di carta',
    text: 'Introduzione al taglio e alla modellatura della carta per creare corolle e foglie, con diversi tipi di carta.',
    meta: 'Mezza giornata · max 12 persone',
  },
  {
    title: 'Su misura per team',
    text: 'Laboratori privati per aziende e gruppi, ospitati in studio o nel vostro spazio.',
    meta: 'Su richiesta · durata variabile',
  },
];
