import type { ImageMetadata } from 'astro';
import { tr, type L, type Lang } from '../i18n';

const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/photos/**/*.{jpg,jpeg,png}', {
  eager: true,
});

/** Restituisce l'immagine dalla chiave, es. photo('lavori/atena-1') → src/assets/photos/lavori/atena-1.jpg */
export function photo(key: string): ImageMetadata {
  const hit = files[`/src/assets/photos/${key}.jpg`] ?? files[`/src/assets/photos/${key}.png`];
  if (!hit) throw new Error(`Foto non trovata: "${key}". Controlla src/assets/photos/ e scripts/prepare-assets*.mjs`);
  return hit.default;
}

export interface Shot {
  /** chiave della foto (percorso senza estensione in src/assets/photos) */
  key: string;
  /** testo alternativo descrittivo (non è visibile: serve a screen reader e motori di ricerca) */
  alt: L;
  /** titolo dell'opera, mostrato come unica didascalia: stringa fissa (nome proprio) o testo nelle due lingue */
  title?: string | L;
  /** didascalia aggiuntiva opzionale (es. misure e tecnica), mostrata solo se presente */
  caption?: string;
}

/** Titolo visibile di una foto nella lingua richiesta (stringa vuota se la foto non ha titolo). */
export const titleOf = (s: Pick<Shot, 'title'>, lang: Lang): string =>
  !s.title ? '' : typeof s.title === 'string' ? s.title : tr(s.title, lang);
