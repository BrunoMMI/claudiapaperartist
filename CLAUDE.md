# CLAUDE.md

Sito portfolio di **Claudia D'Andrea · Paper Artist**. Astro 7 + TypeScript + Tailwind CSS 4, statico, deploy su Vercel.
Bilingue: italiano in radice, inglese sotto `/en`. L'unica parte dinamica è `src/pages/api/contact.ts` (modulo contatti, via Resend).
Dettagli operativi e pubblicazione: `README.md`.

## Comandi

```bash
npm run dev                          # http://localhost:4321
npm run build                        # astro check (tipi) + build → .vercel/output
node scripts/check-links.mjs         # dopo il build: link interni, immagini, H1, title, description
node scripts/prepare-assets-v3.mjs   # importa/ridimensiona le foto nuove in src/assets/photos
```

Prima di dichiarare finito un lavoro: `npx astro check` (0 errori) e, se tocchi pagine o dati, `npm run build` + `check-links`.

## Dove sta cosa

| Cosa | File |
|---|---|
| Rotte IT/EN e voci di menu | `src/i18n/index.ts` (ogni pagina ha una rotta IT e una EN) |
| Contatti, social, descrizione, flag di indicizzazione | `src/config/site.ts` |
| Categorie e foto dei Lavori (installazioni, sculture, paper lamps, allestimenti) | `src/data/works.ts` |
| Mostre / laboratori / servizi | `src/data/exhibitions.ts`, `workshops.ts`, `services.ts` |
| Testi delle pagine | `src/views/*.astro` (le pagine in `src/pages/` sono solo wrapper `lang="it"` / `lang="en"`) |
| SEO, JSON-LD, hreflang | `src/layouts/Layout.astro` |
| Stili e design system | `src/styles/global.css` (un solo file, blocco `@theme` per colori e font) |
| Redirect dal vecchio sito | `vercel.json` |

## Regole del progetto

- **Ogni testo ha due lingue**: oggetti `{ it, en }` (tipo `L`). Mai aggiungere testo solo in italiano.
- **Una pagina nuova** = rotta in `i18n/index.ts` + vista in `src/views` + due wrapper in `src/pages` (IT) e `src/pages/en` + coppia in `serialize` del sitemap in `astro.config.mjs` (hreflang) + `vercel.json` se sostituisce un vecchio indirizzo.
- **Foto**: le foto stanno in `src/assets/photos/<sezione>/<nome>.jpg` e si usano per chiave (`'lavori/atena-3'`), mai per percorso. Per aggiungerne: nuova riga in `PHOTOS` di `scripts/prepare-assets-v3.mjs` e poi lo script. Le sorgenti sono sul Desktop dell'utente e non vanno mai modificate. Non rilanciare `prepare-assets.mjs` / `-v2` (rigenerano cartelle da zero).
- **Le foto non vanno mai ritagliate** (niente teste tagliate): caroselli con altezza fissa e larghezza libera, `object-fit: contain` dove serve. Le tessere con `cover` (Home, "Selezione lavori") hanno `object-position` per tenere il viso.
- **Didascalie**: sotto le foto si mostra solo il titolo (`title`: stringa o `{it,en}`), mai la descrizione. `alt` è obbligatorio, descrittivo, nelle due lingue, ma non visibile.
- **Gli alt della "Selezione lavori" in Home puntano alle foto per indice** (`categories[n].shots[i]`): se togli o sposti foto in `works.ts`, riallinea gli indici in `featured`.
- **Foto eliminate**: se un file non è più referenziato (`grep -rn "chiave'" src`), rimuoverlo con `git rm`. Attenzione: alcune foto sono usate in più sezioni (es. `officina-3/14/15/16` in Christmas lights e Servizi, `luce-di-carta-opere` come immagine social di Mostre).
- **Persone**: foto con minori solo se il volto è già coperto; non pubblicare dati personali non richiesti.
- **Privacy**: il sito non usa cookie né analytics. Se aggiungi script di terze parti, cookie, analytics o nuovi fornitori, aggiorna `src/views/Privacy.astro`.
- **File con fine riga CRLF** (Windows): se modifichi con script, mantieni CRLF. Gli editor normali non danno problemi.
- Responsive: controllare almeno 390 px (telefono), 820 px (tablet), 1440 px (PC). Il menu a tendina sotto 1024 px, voci in riga sopra. Nessuno scorrimento orizzontale della pagina.

## SEO e GEO

- Finché `PUBLIC_SITE_URL` è vuota il sito è `noindex` e `robots.txt` blocca tutto (anteprime `*.vercel.app`). Con il dominio definitivo si attivano canonical, hreflang, Open Graph, sitemap (`/sitemap-index.xml`).
- Title ≤ 60 caratteri (con il suffisso " · Claudia D'Andrea"), description 120-160, un solo H1 per pagina.
- Dati strutturati in `Layout.astro` (Person, WebSite, WebPage, BreadcrumbList) + nodi specifici nelle viste (CollectionPage, Service, Event, AboutPage, Article).
- `/llms.txt` (`src/pages/llms.txt.ts`) riassume chi è Claudia, cosa offre e dove trovare ogni sezione, per i motori di risposta: tenerlo allineato a pagine e servizi.

## Deploy

Progetto Vercel `claudiapaperartist`, repository `BrunoMMI/claudiapaperartist`, ramo `main`. Variabili d'ambiente (non nel repo): `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, `PUBLIC_SITE_URL`. Vedi `.env.example`.
