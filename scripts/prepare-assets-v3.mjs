/**
 * Terza tornata di asset: cartella "Sito Claudiaaa" (foto per la revisione di novembre 2026).
 * La cartella sorgente non viene mai modificata.
 *
 *   node scripts/prepare-assets-v3.mjs
 *   NEW_SOURCE="D:/altra/cartella" node scripts/prepare-assets-v3.mjs
 *
 * - foto ridimensionate (lato lungo max 2400px), orientamento EXIF applicato, metadati rimossi
 * - nessun ritaglio: le proporzioni originali restano quelle della foto
 */
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const SRC = process.env.NEW_SOURCE ?? 'C:/Users/D3t3c/Desktop/Sito Claudiaaa';
/** cartella "Nuova cartella (2)": foto del 24/11/2026 (prefisso "N3:" nelle chiavi sotto) */
const SRC3 = process.env.NEW_SOURCE_3 ?? 'C:/Users/D3t3c/Desktop/Nuova cartella (2)';
const OUT = path.resolve('src/assets/photos');
const MAX_EDGE = 2400;

const PHOTOS = {
  // Paper lamps: le altre due opere (Ballerina, Ragazza che legge) e i due primi piani
  'lavori/ballerina': 'Paper lamps/Ballerina.jpg',
  'lavori/ballerina-primo-piano': 'Paper lamps/Ballerina in primo piano.jpg',
  'lavori/ragazza-che-legge': 'Paper lamps/Ragazza che legge.jpg',
  'lavori/ragazza-che-legge-primo-piano': 'Paper lamps/Ragazza che legge in primo piano.jpg',
  // Allestimenti: foto non ancora presenti nel sito
  'allestimenti/torta-ritratto': 'Allestimenti/IMG_4023.1.jpg',
  // Installazioni luminose: Primavera fotografata di giorno (sostituisce "primavera-dettaglio" nella galleria)
  'lavori/primavera-giorno': 'N3:WhatsApp Image 2026-11-24 at 04.20.06 (5).jpeg',
  // Installazioni luminose: Estate fotografata di giorno
  'lavori/estate-giorno': 'N3:WhatsApp Image 2026-11-24 at 04.20.05 (10).jpeg',
  // Installazioni luminose: Autunno fotografato di giorno
  'lavori/autunno-giorno': 'N3:WhatsApp Image 2026-11-24 at 04.20.03 (3).jpeg',
  // Installazioni luminose: Inverno fotografato di giorno
  'lavori/inverno-giorno': 'N3:WhatsApp Image 2026-11-24 at 04.20.07 (4).jpeg',
  // Laboratori · Christmas lights: addobbi di carta piegata
  'laboratori/officina-16': 'Laboratori/Officina della carta - Luce agli scarti/Officina della carta – Luce agli scarti/20251201_105059.jpg',
  // Laboratori · Urban paper: serie completa dalla cartella "Urban paper. Dalla carta al fiore" (sostituisce la serie precedente)
  'laboratori/urban-paper-1': 'Laboratori/Urban paper. Dalla carta al fiore/IMG-20261003-WA0048.jpg',
  'laboratori/urban-paper-2': 'Laboratori/Urban paper. Dalla carta al fiore/IMG-20261003-WA0049.jpg',
  'laboratori/urban-paper-3': 'Laboratori/Urban paper. Dalla carta al fiore/laboratorio 3 ottobre 2026.jpeg',
  'laboratori/urban-paper-4': 'Laboratori/Urban paper. Dalla carta al fiore/WhatsApp Image 2026-11-08 at 19.08.08 (1).jpeg',
  'laboratori/urban-paper-5': 'Laboratori/Urban paper. Dalla carta al fiore/WhatsApp Image 2026-11-08 at 19.08.08.jpeg',
  'laboratori/urban-paper-6': 'Laboratori/Urban paper. Dalla carta al fiore/Screenshot_20261030_140511_Ecosia.jpg',
  'laboratori/urban-paper-7': 'Laboratori/Urban paper. Dalla carta al fiore/Screenshot_20261030_140534_Ecosia.jpg',
  'laboratori/urban-paper-8': 'Laboratori/Urban paper. Dalla carta al fiore/Screenshot_20261030_140724_Ecosia.jpg',
  // Laboratori · Disegno, Materia, Luce: serie dalla cartella (la locandina "valata-1" non cambia)
  'laboratori/valata-2': 'Laboratori/Disegno, Materia, Luce - Attraverso la carta/20260629_100605.jpg',
  'laboratori/valata-3': 'Laboratori/Disegno, Materia, Luce - Attraverso la carta/20261113_104306.jpg',
  'laboratori/valata-4': 'Laboratori/Disegno, Materia, Luce - Attraverso la carta/IMG-20260629-WA0049.jpg',
  'laboratori/valata-5': 'Laboratori/Disegno, Materia, Luce - Attraverso la carta/IMG-20260629-WA0050.jpg',
  'laboratori/valata-6': 'Laboratori/Disegno, Materia, Luce - Attraverso la carta/IMG-20260728-WA0011.jpg',
  'laboratori/valata-7': 'Laboratori/Disegno, Materia, Luce - Attraverso la carta/IMG-20260728-WA0012.jpg',
  'laboratori/valata-8': 'Laboratori/Disegno, Materia, Luce - Attraverso la carta/WhatsApp Image 2026-11-08 at 19.40.13.jpeg',
  // Laboratori · Officina della carta: serie dalla cartella (la locandina "officina-1" non cambia)
  'laboratori/officina-20': 'Laboratori/Officina della carta - Luce agli scarti/20251201_095050.jpg',
  'laboratori/officina-21': 'Laboratori/Officina della carta - Luce agli scarti/20251201_104422.jpg',
  'laboratori/officina-22': 'Laboratori/Officina della carta - Luce agli scarti/20251201_140448.jpg',
  'laboratori/officina-23': 'Laboratori/Officina della carta - Luce agli scarti/IMG-20251215-WA0024.jpg',
  'laboratori/officina-24': 'Laboratori/Officina della carta - Luce agli scarti/WhatsApp Image 2026-11-08 at 19.40.13 (1).jpeg',
  'laboratori/officina-25': 'Laboratori/Officina della carta - Luce agli scarti/WhatsApp Image 2026-11-08 at 19.40.14.jpeg',
  // Sfondi: fiori di carta su fondo scuro
  'sfondi/fiore-1': 'Altri sfondi/20261111_131117.jpg',
  'sfondi/fiore-2': 'Altri sfondi/20261111_131150.jpg',
  'sfondi/fiore-3': 'Altri sfondi/20261111_132251.jpg',
};

for (const [key, rel] of Object.entries(PHOTOS)) {
  const srcFile = rel.startsWith('N3:') ? path.join(SRC3, rel.slice(3)) : path.join(SRC, rel);
  if (!fs.existsSync(srcFile)) {
    console.log('– salto (file sorgente non più presente, foto già importata):', key);
    continue;
  }
  const dst = path.join(OUT, `${key}.jpg`);
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  await sharp(rel.startsWith('N3:') ? path.join(SRC3, rel.slice(3)) : path.join(SRC, rel))
    .rotate()
    .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: 'inside', withoutEnlargement: true })
    .flatten({ background: '#ffffff' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(dst);
  console.log('✓', key);
}
