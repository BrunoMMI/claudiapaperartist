import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/photos/**/*.{jpg,jpeg,png}', {
  eager: true,
});

/** Restituisce l'immagine dalla chiave, es. photo('lavori/atena-1') → src/assets/photos/lavori/atena-1.jpg */
export function photo(key: string): ImageMetadata {
  const hit = files[`/src/assets/photos/${key}.jpg`] ?? files[`/src/assets/photos/${key}.png`];
  if (!hit) throw new Error(`Foto non trovata: "${key}". Controlla src/assets/photos/ e scripts/prepare-assets.mjs`);
  return hit.default;
}

export interface Shot {
  /** chiave della foto (percorso senza estensione in src/assets/photos) */
  key: string;
  /** testo alternativo descrittivo */
  alt: string;
  /** didascalia visibile, opzionale */
  title?: string;
  caption?: string;
}
