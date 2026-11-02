/**
 * Controllo post-build: link interni, immagini, titoli, H1 e meta description.
 *   npm run build && node scripts/check-links.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('.vercel/output/static');
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));
const files = walk(ROOT);
const pages = files.filter((f) => f.endsWith('.html'));

const exists = (url) => {
  const clean = decodeURIComponent(url.split('#')[0].split('?')[0]);
  if (clean === '' || clean === '/') return true;
  const p = path.join(ROOT, clean);
  return [p, p + '.html', path.join(p, 'index.html')].some((c) => fs.existsSync(c) && fs.statSync(c).isFile());
};

let problems = 0;
const bad = (msg) => {
  problems++;
  console.error('✗', msg);
};

for (const f of pages) {
  const rel = path.relative(ROOT, f);
  const html = fs.readFileSync(f, 'utf8');
  const h1 = (html.match(/<h1[\s>]/g) ?? []).length;
  if (h1 !== 1 && rel !== '404.html') bad(`${rel}: ${h1} elementi H1`);
  if (!/<title>[^<]{5,}<\/title>/.test(html)) bad(`${rel}: title mancante`);
  if (!/<meta name="description" content="[^"]{30,}"/.test(html)) bad(`${rel}: meta description mancante/corta`);
  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    // alt="" (decorativa) viene serializzato come attributo booleano `alt`
    if (!/\balt\b/.test(m[0])) bad(`${rel}: immagine senza alt → ${m[0].slice(0, 80)}`);
  }
  for (const m of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
    const u = m[1];
    if (u.startsWith('//') || u === '/api/contact') continue;
    if (!exists(u)) bad(`${rel}: link/risorsa non trovata ${u}`);
  }
}
console.log(`${pages.length} pagine controllate, ${problems} problemi`);
process.exit(problems ? 1 : 0);
