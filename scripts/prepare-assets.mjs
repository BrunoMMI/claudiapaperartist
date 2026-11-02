/**
 * Prepara gli asset del sito partendo dalla cartella sorgente (NON viene mai modificata).
 *
 *   npm run assets
 *   SOURCE_DIR="D:/altra/cartella" npm run assets
 *
 * - Ridimensiona le foto (lato lungo max 2400px), applica l'orientamento EXIF
 *   e rimuove tutti i metadati (GPS compreso) → src/assets/photos/<chiave>.jpg
 * - Ricava dai loghi forniti le versioni trasparenti → src/assets/logo/
 *
 * Per aggiungere una foto: aggiungere una riga a PHOTOS e rilanciare lo script.
 */
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const SOURCE = process.env.SOURCE_DIR ?? 'C:/Users/D3t3c/Desktop/Claudia';
const PHOTOS_SRC = path.join(SOURCE, 'Foto x sito internet');
const OUT = path.resolve('src/assets/photos');
const LOGO_OUT = path.resolve('src/assets/logo');
const MAX_EDGE = 2400;

const listJpg = (dir) =>
  fs.readdirSync(path.join(PHOTOS_SRC, dir)).filter((f) => /\.(jpe?g|png)$/i.test(f)).sort();
const pick = (dir, idx) => idx.map((i) => `${dir}/${listJpg(dir)[i]}`);
const pickNames = (dir, names) => names.map((n) => `${dir}/${n}`);

const ECHI = "Mostre/Echi d'entroterra. Allegoria di un territorio";
const OLTRE = 'Mostre/La luce... Oltre. Raccontando la luce attraverso l\u2019arte'.replace('\u2019', "'");
const VALATA = 'Laboratori/Disegno, Materia, Luce - Attraverso la carta - laboratorio di cartapesta Pro Loco Valata';
const OFFICINA = 'Laboratori/Officina della carta \u2013 Luce agli scarti';
const URBAN = 'Laboratori/Urban paper. Dalla carta al fiore';

/** chiave di output → file sorgente (relativo a "Foto x sito internet") */
const PHOTOS = {
  // ── Lavori · installazioni luminose
  'lavori/atena-1': `${ECHI}/20251003_105110.jpg`,
  'lavori/atena-2': 'Lavori/Installazioni/IMG_1286.1.JPG',
  'lavori/atena-3': 'Lavori/Installazioni/IMG_1323.JPG',
  'lavori/primavera': 'Lavori/Installazioni/Primavera 3.jpeg',
  'lavori/primavera-2': 'Lavori/Installazioni/Primavera 2.jpeg',
  'lavori/estate': 'Lavori/Installazioni/Estate 2.jpeg',
  'lavori/autunno': 'Lavori/Installazioni/Autunno 1.jpeg',
  'lavori/inverno': 'Lavori/Installazioni/Inverno 1.jpeg',
  'lavori/quattro-stagioni': 'Lavori/Installazioni/4 stagioni.jpeg',
  // ── Lavori · sculture
  'lavori/figura-1': 'Lavori/Sculptures/con sfondo #091117.JPG',
  'lavori/figura-2': 'Lavori/Sculptures/IMG_1276 con sfondo #091117.JPG',
  'lavori/toscana': 'Lavori/Sculptures/Toscana.JPG',
  'lavori/unlimited': 'Lavori/Sculptures/Unlimited.JPG',
  'lavori/light-1': 'Lavori/Sculptures/Light/Light No. 1.JPG',
  'lavori/light-2': 'Lavori/Sculptures/Light/Light No. 2.JPG',
  'lavori/light-3': 'Lavori/Sculptures/Light/Light No. 3.JPG',
  'lavori/light-4': 'Lavori/Sculptures/Light/Light No. 4.JPG',
  'lavori/light-5': 'Lavori/Sculptures/Light/Light No. 5.JPG',
  'lavori/light-6': 'Lavori/Sculptures/Light/Light No. 6.JPG',
  // ── Lavori · paper lamps
  'lavori/ballerina-di-flamenco': 'Lavori/Paper lamps/Ballerina di Flamenco.jpg',
  'lavori/cantante-lirica': 'Lavori/Paper lamps/Cantante lirica.JPG',
  'lavori/dama-con-farfalla': 'Lavori/Paper lamps/Dama con Farfalla.jpg',
  // ── Allestimenti (la foto P1011024 è esclusa: contiene il nome di una persona privata)
  'allestimenti/torta-18': 'Allestimenti/IMG_4023.JPG',
  'allestimenti/candela-18': 'Allestimenti/IMG_4075.JPG',
  'allestimenti/scatole-1': 'Allestimenti/IMG_4076.JPG',
  'allestimenti/scatola': 'Allestimenti/IMG_4077.JPG',
  'allestimenti/tavolo': 'Allestimenti/IMG_4078.JPG',
  // ── Mostre
  'mostre/la-luce-oltre-locandina': `${OLTRE}/La luce ...oltre - locandina.jpeg`,
  'mostre/echi-cartellino': `${ECHI}/Foto cartellino mostra.jpeg`,
  'mostre/echi-sala': `${ECHI}/WhatsApp Image 2025-10-13 at 18.42.32.jpeg`,
  'mostre/echi-opera': `${ECHI}/WhatsApp Image 2025-10-13 at 18.47.37.jpeg`,
  'mostre/echi-visita': `${ECHI}/WhatsApp Image 2025-10-13 at 18.45.23.jpeg`,
  'mostre/luce-di-carta-locandina': 'Mostre/Luce di carta/Social.Lucedicarta.png',
  'mostre/luce-di-carta-parete': 'Mostre/Luce di carta/20240321_160147.jpg',
  'mostre/luce-di-carta-sala': 'Mostre/Luce di carta/20240321_160526.jpg',
  'mostre/luce-di-carta-opere': 'Mostre/Luce di carta/20240321_173957.jpg',
  'mostre/luce-di-carta-rilievo': 'Mostre/Luce di carta/IMG_0941.JPG',
  'mostre/luce-di-carta-pareti': 'Mostre/Luce di carta/IMG_0969.JPG',
  'mostre/luce-di-carta-specchio': 'Mostre/Luce di carta/IMG_0977.JPG',
  'mostre/luce-di-carta-lampada': 'Mostre/Luce di carta/IMG_0993 (1).JPG',
  'mostre/luce-di-carta-vernice': 'Mostre/Luce di carta/20240321_155608.jpg',
  'mostre/wonder-1': 'Mostre/Wonder/IMG_1259.JPG',
  'mostre/wonder-2': 'Mostre/Wonder/IMG_1266.JPG',
  'mostre/wonder-3': 'Mostre/Wonder/IMG_1268.JPG',
  'mostre/wonder-4': 'Mostre/Wonder/IMG_1270.JPG',
  'mostre/wonder-5': 'Mostre/Wonder/IMG_1303.JPG',
  'mostre/london-1': 'Mostre/On tour London X-mas Edition/IMG-20221220-WA0012.jpg',
  'mostre/london-2': 'Mostre/On tour London X-mas Edition/IMG-20221220-WA0018.jpg',
  'mostre/london-3': 'Mostre/On tour London X-mas Edition/IMG-20221220-WA0021.jpg',
  'mostre/london-4': 'Mostre/On tour London X-mas Edition/IMG-20221220-WA0038.jpg',
};

// ── Laboratori (selezione per indice nell'elenco ordinato della cartella)
[0, 3, 5, 10, 13, 15, 8].forEach((n, i) => {
  PHOTOS[`laboratori/officina-${i + 1}`] = pick(OFFICINA, [n])[0];
});
[3, 8, 9, 11, 13, 14, 16, 21].forEach((n, i) => {
  PHOTOS[`laboratori/valata-${i + 1}`] = pick(VALATA, [n])[0];
});
[2, 3, 7, 0].forEach((n, i) => {
  PHOTOS[`laboratori/urban-paper-${i + 1}`] = pick(URBAN, [n])[0];
});

/** sfondi decorativi: ritaglio panoramico dal centro dell'immagine */
const CROPS = {
  'sfondi/carta-piegata': { src: 'Sfondi/20260428_124327.jpg', width: 2400, height: 1100, top: 0.33 },
};

async function photo(key, rel) {
  const src = path.join(PHOTOS_SRC, rel);
  const dst = path.join(OUT, `${key}.jpg`);
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  await sharp(src)
    .rotate()
    .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: 'inside', withoutEnlargement: true })
    .flatten({ background: '#ffffff' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(dst);
}

async function crop(key, { src, width, height, top }) {
  const dst = path.join(OUT, `${key}.jpg`);
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  const img = sharp(path.join(PHOTOS_SRC, src)).rotate();
  const { width: w, height: h } = await img.clone().metadata();
  const ch = Math.round((w * height) / width);
  await img
    .extract({ left: 0, top: Math.round((h - ch) * top), width: w, height: ch })
    .resize({ width, height })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(dst);
}

/**
 * Loghi: la luminanza del logo originale (nero su bianco) diventa il canale alpha,
 * il colore viene impostato a pieno. Forma e proporzioni NON vengono modificate.
 */
async function logo(srcName, outName, rgb, { gold = false } = {}) {
  const src = path.join(SOURCE, 'Logo', srcName);
  fs.mkdirSync(LOGO_OUT, { recursive: true });
  const base = sharp(src).rotate().removeAlpha().greyscale();
  const { data, info } = await base.raw().toBuffer({ resolveWithObject: true });
  const px = info.width * info.height;
  const rgba = Buffer.alloc(px * 4);
  for (let i = 0; i < px; i++) {
    const v = data[i];
    // gold: sfondo nero → alpha = luminosità. dark/light: sfondo bianco → alpha = 255 - luminosità
    let a = gold ? v : 255 - v;
    a = Math.max(0, Math.min(255, Math.round(((a - 18) / (255 - 18 * 2)) * 255)));
    rgba[i * 4] = rgb[0];
    rgba[i * 4 + 1] = rgb[1];
    rgba[i * 4 + 2] = rgb[2];
    rgba[i * 4 + 3] = a;
  }
  await sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } })
    .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 }, threshold: 8 })
    .resize({ width: 1200, withoutEnlargement: true })
    .png({ compressionLevel: 9 })
    .toFile(path.join(LOGO_OUT, outName));
}

const only = process.argv[2];
let n = 0;
for (const [key, rel] of Object.entries(PHOTOS)) {
  if (only && !key.startsWith(only)) continue;
  if (!fs.existsSync(path.join(PHOTOS_SRC, rel))) {
    console.error('MANCANTE:', rel);
    process.exitCode = 1;
    continue;
  }
  await photo(key, rel);
  n++;
}
for (const [key, c] of Object.entries(CROPS)) await crop(key, c);

const FULL = 'WhatsApp Image 2026-10-28 at 14.18.05.jpeg';
const MARK = 'WhatsApp Image 2026-10-28 at 14.18.06.jpeg';
await logo(FULL, 'logo-full-dark.png', [27, 25, 23]);
await logo(FULL, 'logo-full-light.png', [244, 241, 236]);
await logo(MARK, 'logo-mark-dark.png', [27, 25, 23]);
await logo(MARK, 'logo-mark-light.png', [244, 241, 236]);
// ── Immagine social (OG) e icone ──────────────────────────────────
if (!only) {
  const L = (f) => path.join(LOGO_OUT, f);
  const atena = await sharp(path.join(OUT, 'lavori/atena-1.jpg')).resize({ height: 630 }).toBuffer();
  const logoOg = await sharp(L('logo-full-light.png')).resize({ width: 520 }).toBuffer();
  const logoH = (await sharp(logoOg).metadata()).height;
  await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#0b0b0c' } })
    .composite([
      { input: atena, left: 1200 - 355 - 120, top: 0 },
      { input: logoOg, left: 90, top: Math.round((630 - logoH) / 2) },
    ])
    .jpeg({ quality: 86 })
    .toFile(path.resolve('src/assets/og-default.jpg'));

  for (const [size, file] of [[64, 'favicon.png'], [180, 'apple-touch-icon.png']]) {
    const mark = await sharp(L('logo-mark-dark.png')).resize({ height: Math.round(size * 0.68) }).toBuffer();
    await sharp({ create: { width: size, height: size, channels: 4, background: '#f5f3ef' } })
      .composite([{ input: mark, gravity: 'center' }])
      .png()
      .toFile(path.resolve('public', file));
  }
}
console.log(`Foto elaborate: ${n} · loghi: 4 · crop: ${Object.keys(CROPS).length}`);
