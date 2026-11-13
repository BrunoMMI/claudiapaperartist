/**
 * Seconda tornata di asset: foto inviate dalla cliente per la revisione del sito
 * (cartella "Foto Claudiaa"). La cartella sorgente non viene mai modificata.
 *
 *   node scripts/prepare-assets-v2.mjs
 *   NEW_SOURCE="D:/altra/cartella" node scripts/prepare-assets-v2.mjs
 *
 * - foto ridimensionate (lato lungo max 2400px), orientamento EXIF applicato, metadati rimossi
 * - cartella laboratori rigenerata da zero con le foto nuove
 * - sfondo panoramico della citazione (fiore di carta su fondo scuro)
 * - loghi: rigenerati dalla cartella Logo della terza consegna, con margine attorno al disegno
 */
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const SRC = process.env.NEW_SOURCE ?? 'C:/Users/D3t3c/Desktop/Foto Claudiaa';
/** terza consegna: cartella "Sito nuovo 2026" (prefisso "N2:" nelle chiavi sotto) */
const SRC2 = process.env.NEW_SOURCE_2 ?? 'C:/Users/D3t3c/Desktop/Sito nuovo 2026';
const P2 = 'Foto x sito internet';
const OUT = path.resolve('src/assets/photos');
const LOGO = path.resolve('src/assets/logo');
const MAX_EDGE = 2400;

const VALATA = 'Laboratori/Disegno, Materia, Luce - Attraverso la carta';
const OFFICINA = 'Laboratori/Officina della carta - Luce agli scarti';
const URBAN = 'Laboratori/Urban paper. Dalla carta al fiore';
const N2 = `N2:${P2}`;
const VALATA2 = `${N2}/Laboratori/Disegno, Materia, Luce - Attraverso la carta - laboratorio di cartapesta Pro Loco Valata`;
const OFFICINA2 = `${N2}/Laboratori/Officina della carta – Luce agli scarti`;
const URBAN2 = `${N2}/Laboratori/Urban paper. Dalla carta al fiore`;
const MOSTRE2 = `${N2}/Mostre`;

/** chiave → file sorgente (relativo a SRC) */
const PHOTOS = {
  'home/laboratori': 'Laboratori/Immagine comertina per sezione laboratori su pagina Home.jpeg',
  'lavori/primavera-dettaglio': 'Installazioni luminose - Primavera/Primavera dettaglio .jpeg',
  'lavori/figura-3': 'Sculture/IMG_0717.JPG',
  'lavori/figura-4': 'Sculture/IMG_3119.JPG',
  'about/claudia': 'Foto Claudia.jpg',
  'allestimenti/torta-blu': 'Allestimenti/P1010998.1.jpg',
  'allestimenti/locandina-18': 'Allestimenti/Locandina compleanno Chiara.png',
  'allestimenti/segnalibro': 'Allestimenti/Segnalibro.png',

  // Laboratori · Disegno, Materia, Luce (la prima è la locandina)
  'laboratori/valata-1': `${VALATA2}/Locandina corso estivo bambini_20260525_115207_0000.jpg`,
  'laboratori/valata-2': `${VALATA2}/20260629_100605.jpg`,
  'laboratori/valata-3': `${VALATA2}/20260629_100547.jpg`,
  'laboratori/valata-4': `${VALATA2}/20260714_110710.jpg`,
  'laboratori/valata-5': `${VALATA2}/20260714_110719.jpg`,
  'laboratori/valata-6': `${VALATA2}/20260714_110728.jpg`,
  'laboratori/valata-7': `${VALATA2}/IMG-20260629-WA0043.jpg`,
  'laboratori/valata-8': `${VALATA2}/IMG-20260629-WA0049.jpg`,
  'laboratori/valata-9': `${VALATA2}/IMG-20260629-WA0050.jpg`,
  'laboratori/valata-10': `${VALATA2}/IMG-20260728-WA0011.jpg`,
  'laboratori/valata-11': `${VALATA2}/IMG-20260728-WA0012.jpg`,

  // Laboratori · Officina della carta (la locandina arriva dalla consegna precedente; le foto con i bambini sono quelle con il volto coperto)
  'laboratori/officina-1': `${OFFICINA}/WhatsApp Image 2026-11-07 at 09.20.11.jpeg`,
  'laboratori/officina-2': `${OFFICINA2}/20251128_110012.jpg`,
  'laboratori/officina-3': `${OFFICINA2}/20251128_110132.jpg`,
  'laboratori/officina-4': `${OFFICINA2}/20251128_110336.jpg`,
  'laboratori/officina-5': `${OFFICINA2}/20251128_110410.jpg`,
  'laboratori/officina-6': `${OFFICINA2}/20251128_110611.jpg`,
  'laboratori/officina-7': `${OFFICINA2}/20251201_103949.jpg`,
  'laboratori/officina-8': `${OFFICINA2}/20251201_104422.jpg`,
  'laboratori/officina-9': `${OFFICINA2}/20251201_104509.jpg`,
  'laboratori/officina-10': `${OFFICINA2}/20251201_105126.jpg`,
  'laboratori/officina-11': `${OFFICINA2}/20251201_140448.jpg`,
  'laboratori/officina-12': `${OFFICINA}/WhatsApp Image 2026-11-08 at 19.40.13 (1).jpeg`,
  'laboratori/officina-13': `${OFFICINA}/WhatsApp Image 2026-11-08 at 19.40.14.jpeg`,
  'laboratori/officina-14': `${OFFICINA2}/IMG-20251215-WA0022.jpg`,
  'laboratori/officina-15': `${OFFICINA2}/IMG-20251215-WA0025.jpg`,

  // Laboratori · Urban paper (screenshot del sito WWF esclusi; foto con bambini in primo piano: solo quelle con volto coperto)
  'laboratori/urban-paper-1': `${URBAN2}/IMG-20261003-WA0038.jpg`,
  'laboratori/urban-paper-2': `${URBAN2}/IMG-20261003-WA0015.jpg`,
  'laboratori/urban-paper-3': `${URBAN2}/IMG-20261003-WA0034.jpg`,
  'laboratori/urban-paper-4': `${URBAN}/laboratorio 3 ottobre 2026.jpeg`,
  'laboratori/urban-paper-5': `${URBAN}/WhatsApp Image 2026-11-08 at 19.08.08 (1).jpeg`,
  'laboratori/urban-paper-6': `${URBAN}/WhatsApp Image 2026-11-08 at 19.08.08.jpeg`,
  'laboratori/urban-paper-7': `${URBAN2}/IMG-20261003-WA0049.jpg`,

  // Lavori
  'lavori/figura-5': `${N2}/Lavori/Sculptures/IMG_1276.JPG`,
  'lavori/dama-con-farfalla-2': `${N2}/Dama con farfalla - dietro.png`,

  // Allestimenti
  'allestimenti/cerchio': `${N2}/Allestimenti/P1011006.1.jpg`,
  'allestimenti/locandina-cavalletto': `${N2}/Allestimenti/P1011024.JPG`,

  // Mostre: locandine e foto nuove
  'mostre/better-life-locandina': `${MOSTRE2}/2022/Better Life ART CAN DO IT Italian Edition - locandina.jpg`,
  'mostre/better-life-brochure': `${MOSTRE2}/2022/Better Life ART CAN DO IT Italian Edition - brochure.jpg`,
  'mostre/echi-locandina': `${MOSTRE2}/Echi d'entroterra. Allegoria di un territorio/Locandina echi d'entroterra.jpeg`,
  'mostre/echi-atena': `${MOSTRE2}/Echi d'entroterra. Allegoria di un territorio/Atena - echi d'entroterra.jpeg`,
  'mostre/wonder-locandina': `${MOSTRE2}/Wonder/Locandina Wonder.jpeg`,
  'mostre/wonder-6': `${MOSTRE2}/Wonder/IMG_1312.JPG`,
  'mostre/wonder-7': `${MOSTRE2}/Wonder/IMG_1334.jpg`,
  'mostre/wonder-8': `${MOSTRE2}/Wonder/IMG_1346.JPG`,
  'mostre/luce-di-carta-cavalletto': `${MOSTRE2}/Luce di carta/20240321_160231.jpg`,
  'mostre/luce-di-carta-angolo': `${MOSTRE2}/Luce di carta/20240321_160333.jpg`,
  'mostre/luce-di-carta-visita': `${MOSTRE2}/Luce di carta/20240321_162152.jpg`,
  'mostre/luce-di-carta-cartello': `${MOSTRE2}/Luce di carta/IMG_0997.JPG`,
  'mostre/luce-di-carta-visitatore': `${MOSTRE2}/Luce di carta/IMG_1028.JPG`,
};

async function photo(key, rel) {
  const dst = path.join(OUT, `${key}.jpg`);
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  const abs = rel.startsWith('N2:') ? path.join(SRC2, rel.slice(3)) : path.join(SRC, rel);
  await sharp(abs)
    .rotate()
    .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: 'inside', withoutEnlargement: true })
    .flatten({ background: '#ffffff' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(dst);
  console.log('✓', key);
}

/** Fiore di carta su fondo scuro → striscia panoramica: il fiore a destra, il testo sul fondo a sinistra. */
async function band() {
  const W = 2400;
  const H = 1000;
  const src = path.join(SRC2, P2, 'Sfondi/Fiori di carta/20261101_193219.jpg');
  const meta = await sharp(src).rotate().metadata();
  // quadrato attorno al fiore (centrato nell'immagine originale)
  const side = Math.round(meta.width * 0.98);
  const left = Math.round((meta.width - side) / 2);
  const top = Math.round(meta.height * 0.38 - side / 2);
  const square = await sharp(src)
    .rotate()
    .extract({ left, top: Math.max(0, top), width: side, height: Math.min(side, meta.height - Math.max(0, top)) })
    .resize(H, H, { fit: 'cover' })
    .toBuffer();
  // fondo: la colonna di pixel sul bordo sinistro del quadrato, stirata verso sinistra (nessuna giunzione visibile)
  const edge = await sharp(square).extract({ left: 0, top: 0, width: 6, height: H }).blur(4).toBuffer();
  const filler = await sharp(edge).resize(W - H, H, { fit: 'fill' }).blur(8).toBuffer();
  const dst = path.join(OUT, 'sfondi/fiore-di-carta.jpg');
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  await sharp({ create: { width: W, height: H, channels: 3, background: '#000000' } })
    .composite([
      { input: filler, left: 0, top: 0 },
      { input: square, left: W - H, top: 0 },
    ])
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(dst);
  console.log('✓ sfondi/fiore-di-carta');
}

/**
 * Loghi dalla cartella "Logo" della terza consegna: la luminanza diventa il canale alpha (nessuna modifica
 * alla forma), il colore viene impostato a tinta unita, poi si ritaglia attorno al disegno e si aggiunge
 * un margine, così il tratto non tocca mai il bordo dell'immagine.
 */
async function logoFrom(file, out, rgb, { onDark }) {
  const { data, info } = await sharp(path.join(SRC2, 'Logo', file)).greyscale().raw().toBuffer({ resolveWithObject: true });
  const { width: w, height: h } = info;
  const rgba = Buffer.alloc(w * h * 4);
  let x0 = w, y0 = h, x1 = 0, y1 = 0;
  for (let i = 0; i < w * h; i++) {
    const lum = data[i];
    const a = onDark ? lum : 255 - lum;
    const alpha = a < 14 ? 0 : a; // toglie il rumore JPEG dello sfondo
    rgba[i * 4] = rgb[0];
    rgba[i * 4 + 1] = rgb[1];
    rgba[i * 4 + 2] = rgb[2];
    rgba[i * 4 + 3] = alpha;
    if (alpha > 40) {
      const x = i % w;
      const y = (i / w) | 0;
      if (x < x0) x0 = x;
      if (x > x1) x1 = x;
      if (y < y0) y0 = y;
      if (y > y1) y1 = y;
    }
  }
  const cw = x1 - x0 + 1;
  const ch = y1 - y0 + 1;
  const pad = Math.round(Math.max(cw, ch) * 0.06);
  await sharp(rgba, { raw: { width: w, height: h, channels: 4 } })
    .extract({ left: x0, top: y0, width: cw, height: ch })
    .extend({ top: pad, bottom: pad, left: pad, right: pad, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(LOGO, out));
  console.log('✓ logo', out, `${cw + 2 * pad}x${ch + 2 * pad}`);
}
async function logos() {
  const DARK = [27, 25, 23];
  const LIGHT = [244, 241, 236];
  await logoFrom('Disegno logo nero sfondo bianco.jpg', 'logo-mark-dark.png', DARK, { onDark: false });
  await logoFrom('Disegno logo bianco sfondo nero.jpg', 'logo-mark-light.png', LIGHT, { onDark: true });
  await logoFrom('Logo nero sfondo bianco Paper Artist.jpg', 'logo-full-dark.png', DARK, { onDark: false });
  await logoFrom('Logo bianco sfondo nero Paper Artist.jpg', 'logo-full-light.png', LIGHT, { onDark: true });
}

// laboratori rigenerati da zero: le foto vecchie non servono più
fs.rmSync(path.join(OUT, 'laboratori'), { recursive: true, force: true });
for (const [key, rel] of Object.entries(PHOTOS)) await photo(key, rel);
await band();
await logos();
