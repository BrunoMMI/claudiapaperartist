import type { Shot } from './photos';
import type { L } from '../i18n';

export interface Workshop {
  slug: string;
  title: L;
  place: L;
  when: L;
  text: L<string[]>;
  /** locandina: mostrata accanto al carosello, non dentro */
  poster?: Shot;
  shots: Shot[];
}

/** Laboratori già realizzati. La prima foto di ogni serie è la locandina, quando disponibile. */
export const workshops: Workshop[] = [
  {
    slug: 'urban-paper',
    title: { it: 'Urban paper: dalla carta al fiore', en: 'Urban paper: from paper to flower' },
    place: {
      it: 'Urban Nature 2026 · WWF 60 anni per la natura · Futuridea, Benevento (BN)',
      en: 'Urban Nature 2026 · WWF 60 years for nature · Futuridea, Benevento (BN)',
    },
    when: { it: '3 ottobre 2026', en: '3 October 2026' },
    text: {
      it: [
        'Un laboratorio esperienziale aperto a grandi e piccini per celebrare il valore del verde urbano e della biodiversità in città.',
        'Guidati da Claudia D’Andrea e dall’apicoltore Armando Valerino, i partecipanti scoprono il mondo della carta: riciclano scarti e impreziosiscono l’impasto con semi di fiori spontanei e nettariferi, per conoscere da vicino il delicato universo degli impollinatori.',
      ],
      en: [
        'A hands-on workshop open to young and old, celebrating the value of urban greenery and biodiversity in the city.',
        'Guided by Claudia D’Andrea and the beekeeper Armando Valerino, participants discover the world of paper: they recycle scraps and enrich the pulp with seeds of wild, nectar-bearing flowers, to get to know the delicate universe of pollinators up close.',
      ],
    },
    shots: [
      { key: 'laboratori/urban-paper-1', alt: { it: 'La sala del laboratorio Urban paper: una proiezione di un fiore sullo schermo, il relatore e il pubblico seduto', en: 'The Urban paper workshop room: a projection of a flower on the screen, the speaker and the seated audience' } },
      { key: 'laboratori/urban-paper-2', alt: { it: 'Un kit con carta, bustine di semi e il programma dell’evento Urban Nature', en: 'A kit with paper, seed packets and the programme of the Urban Nature event' } },
      { key: 'laboratori/urban-paper-3', alt: { it: 'Tavolo del laboratorio con carta gialla, rotoli di cartone e decorazioni a nido d’ape', en: 'Workshop table with yellow paper, cardboard tubes and honeycomb decorations' } },
      { key: 'laboratori/urban-paper-4', alt: { it: 'Bambini al lavoro con la carta gialla e i rotoli di cartone a un tavolo del laboratorio', en: 'Children working with yellow paper and cardboard tubes at a workshop table' } },
      { key: 'laboratori/urban-paper-5', alt: { it: 'Una partecipante lavora la carta a un tavolo, tra fogli e fiori colorati', en: 'A participant working paper at a table, among coloured sheets and flowers' } },
      { key: 'laboratori/urban-paper-6', alt: { it: 'Pagina del sito WWF dedicata all’evento “Urban Paper: dalla carta al fiore”, Urban Nature 2026', en: 'WWF web page for the event “Urban Paper: from paper to flower”, Urban Nature 2026' } },
      { key: 'laboratori/urban-paper-7', alt: { it: 'Descrizione dell’evento Urban Paper sul sito WWF, nell’ambito di Urban Nature', en: 'Description of the Urban Paper event on the WWF website, as part of Urban Nature' } },
      { key: 'laboratori/urban-paper-8', alt: { it: 'Pagina del sito WWF Urban Nature 2026, con l’elenco degli eventi', en: 'WWF Urban Nature 2026 web page, with the list of events' } },
    ],
  },
  {
    slug: 'disegno-materia-luce',
    title: { it: 'Disegno, Materia, Luce – Attraverso la carta', en: 'Drawing, Matter, Light – Through paper' },
    place: {
      it: 'Laboratorio di cartapesta · Scuola d’Arte “Il Tempo dell’Arte” · Pro Loco “Vallata”, Piedimonte Matese (CE)',
      en: 'Papier-mâché workshop · “Il Tempo dell’Arte” Art School · Pro Loco “Vallata”, Piedimonte Matese (CE)',
    },
    when: { it: 'giugno – luglio 2026', en: 'June – July 2026' },
    text: {
      it: ['Un ciclo di incontri per bambini e ragazzi: si disegna, si modella e si costruisce; dalla struttura in cartone, alla tecnica della cartapesta.'],
      en: ['A series of meetings for children and teenagers: they draw, model and build; from the cardboard structure to the papier-mâché technique.'],
    },
    poster: { key: 'laboratori/valata-1', alt: { it: 'Locandina del ciclo di incontri Disegno, Materia, Luce – Attraverso la carta', en: 'Poster of the series Drawing, Matter, Light – Through paper' } },
    shots: [
      { key: 'laboratori/valata-2', alt: { it: 'Una bambina di spalle rifinisce con il pennello un oggetto di cartapesta a un tavolo bianco', en: 'A girl seen from behind finishing a papier-mâché object with a brush at a white table' } },
      { key: 'laboratori/valata-3', alt: { it: 'Due bambine al lavoro a un tavolo bianco, con grandi rotoli di carta in primo piano', en: 'Two girls at work at a white table, with large rolls of paper in the foreground' } },
      { key: 'laboratori/valata-4', alt: { it: 'Mani che preparano la colla e i pezzetti di carta per la cartapesta su un tavolo bianco', en: 'Hands preparing the glue and the small pieces of paper for papier-mâché on a white table' } },
      { key: 'laboratori/valata-5', alt: { it: 'Un vaso di cartone rivestito di carta, rifinito con il pennello', en: 'A cardboard vase covered in paper, finished with a brush' } },
      { key: 'laboratori/valata-6', alt: { it: 'Un bambino lavora a una struttura di cartone a forma di numero su un tavolo bianco', en: 'A boy working on a cardboard number-shaped structure at a white table' } },
      { key: 'laboratori/valata-7', alt: { it: 'Un bambino rifinisce con il pennello una struttura di cartone su un tavolo bianco', en: 'A boy finishing a cardboard structure with a brush at a white table' } },
      { key: 'laboratori/valata-8', alt: { it: 'Mani che rivestono di carta un vaso di cartone con il pennello', en: 'Hands covering a cardboard vase with paper using a brush' } },
    ],
  },
  {
    slug: 'officina-della-carta',
    title: { it: 'Officina della carta – Luce agli scarti', en: 'Paper workshop – Light to scraps' },
    place: { it: 'Morcone (BN) · Rural Lab', en: 'Morcone (BN) · Rural Lab' },
    when: { it: '13–14 dicembre 2025', en: '13–14 December 2025' },
    text: {
      it: ['Gli scarti di carta tornano a brillare: ghirlande, decorazioni e villaggi di Natale realizzati con diversi tipi di carta riciclata.'],
      en: ['Paper scraps shine again: garlands, decorations and Christmas villages made from different kinds of recycled paper.'],
    },
    poster: { key: 'laboratori/officina-1', alt: { it: 'Locandina del laboratorio Officina della carta – Luce agli scarti, Morcone, 13–14 dicembre 2025', en: 'Poster of the workshop Paper workshop – Light to scraps, Morcone, 13–14 December 2025' } },
    shots: [
      { key: 'laboratori/officina-20', alt: { it: 'Alberelli e decorazioni di carta piegata con cordino davanti a una lanterna di carta bianca', en: 'Folded paper trees and decorations on twine in front of a white paper lantern' } },
      { key: 'laboratori/officina-21', alt: { it: 'Casetta di carta bianca traforata, illuminata dall’interno, tra rametti verdi', en: 'Cut-out white paper house lit from the inside, among green sprigs' } },
      { key: 'laboratori/officina-22', alt: { it: 'Casetta di carta bianca traforata e decorazioni di carta piegata con cordino e nastro rosso', en: 'Cut-out white paper house and folded paper decorations with twine and a red ribbon' } },
      { key: 'laboratori/officina-23', alt: { it: 'Ghirlanda di carta bianca con pompon rossi e verdi appesa a una porta', en: 'White paper wreath with red and green pompoms hanging on a door' } },
      { key: 'laboratori/officina-24', alt: { it: 'Bambini al lavoro a un grande tavolo con cartoncini, rotoli di cartone e una lanterna di carta', en: 'Children at work at a large table with card, cardboard tubes and a paper lantern' } },
      { key: 'laboratori/officina-25', alt: { it: 'Bambini costruiscono decorazioni natalizie di carta piegata, tra rotoli di cartone e ritagli', en: 'Children making folded paper Christmas decorations, among cardboard tubes and cut-outs' } },
    ],
  },
];

/** Laboratorio proposto per il periodo natalizio (sezione a parte nella pagina Laboratori). */
export const christmas = {
  title: 'Christmas lights',
  text: {
    it: 'Realizzazione di ghirlande, addobbi e decorazioni natalizie in carta.',
    en: 'Making paper garlands, ornaments and Christmas decorations.',
  } satisfies L,
  meta: { it: 'Periodo natalizio · max 10 persone', en: 'Christmas season · max 10 people' } satisfies L,
  shots: [
    { key: 'laboratori/officina-3', alt: { it: 'Una casetta di carta traforata illuminata dall’interno', en: 'A cut-out paper house lit from the inside' } },
    { key: 'laboratori/officina-15', alt: { it: 'Ghirlanda di carta bianca con pompon rossi e verdi appesa a una porta', en: 'White paper garland with red and green pompoms hanging on a door' } },
    { key: 'laboratori/officina-16', alt: { it: 'Alberelli e decorazioni di carta piegata con cordino, nastri e rametti verdi', en: 'Folded paper trees and decorations with twine, ribbons and green sprigs' } },
  ] satisfies Shot[],
};

/** Esempi di laboratori proponibili. I luoghi vanno concordati: non sono ancora definiti. */
export const offers: { title: L; text: L; meta: L }[] = [
  {
    title: { it: 'Carta e luce', en: 'Paper and light' },
    text: {
      it: 'Due giornate per costruire una piccola installazione luminosa in carta, dal progetto al montaggio.',
      en: 'Two days to build a small paper light installation, from design to assembly.',
    },
    meta: { it: 'Weekend · max 8 persone', en: 'Weekend · max 8 people' },
  },
  {
    title: { it: 'Fiori di carta', en: 'Paper flowers' },
    text: {
      it: 'Introduzione al taglio e alla modellatura della carta per creare corolle e foglie, con diversi tipi di carta.',
      en: 'An introduction to cutting and shaping paper to create corollas and leaves, using different kinds of paper.',
    },
    meta: { it: 'Mezza giornata · max 12 persone', en: 'Half a day · max 12 people' },
  },
  {
    title: { it: 'Su misura per team', en: 'Tailored for teams' },
    text: {
      it: 'Laboratori privati per aziende e gruppi, ospitati in studio o nel vostro spazio.',
      en: 'Private workshops for companies and groups, hosted in the studio or in your own space.',
    },
    meta: { it: 'Su richiesta · durata variabile', en: 'On request · variable length' },
  },
];
