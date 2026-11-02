# Claudia D'Andrea · Paper Artist

Sito portfolio in **Astro 7 + TypeScript + Tailwind CSS 4**, statico, pronto per **Vercel**.
Unica parte dinamica: la funzione serverless `/api/contact` del modulo contatti.

## Comandi

```bash
npm install
npm run dev        # sviluppo su http://localhost:4321
npm run build      # controllo tipi (astro check) + build di produzione → .vercel/output
node scripts/check-links.mjs   # dopo il build: link interni, immagini, H1, title, description
npm run assets     # rigenera foto e loghi da C:\Users\D3t3c\Desktop\Claudia
```

Richiede Node ≥ 22.23.

## Dove modificare cosa

| Cosa | File |
|---|---|
| Email, social, menu, descrizione generale | `src/config/site.ts` |
| Opere (categorie, titoli, testi alternativi) | `src/data/works.ts` |
| Mostre (elenco completo e gallerie) | `src/data/exhibitions.ts` |
| Laboratori realizzati e proposti | `src/data/workshops.ts` |
| Servizi | `src/data/services.ts` |
| Testo "About" | `src/pages/about.astro` |
| Colori, font, spaziature | `src/styles/global.css` (blocco `@theme`) |
| Informativa privacy | `src/pages/privacy.astro` |
| Redirect dal vecchio sito | `vercel.json` |

### Aggiungere o cambiare una foto

1. Aggiungi una riga in `PHOTOS` dentro `scripts/prepare-assets.mjs` (chiave → file sorgente).
2. `npm run assets` (ridimensiona a max 2400 px, applica l'orientamento e **rimuove EXIF/GPS**; i file originali non vengono toccati).
3. Usa la chiave (`'lavori/nuova-opera'`) in uno dei file `src/data/*.ts`, con un testo alternativo descrittivo.

Le gallerie non ritagliano mai le foto e si adattano da sole al numero e alle proporzioni delle immagini.

## Pubblicazione su Vercel

1. Pubblica la cartella del progetto su un repository GitHub (la cartella `claudiadandrea` deve essere la radice del repo, oppure imposta *Root Directory* = `claudiadandrea` su Vercel).
2. Su [vercel.com](https://vercel.com) → *Add New Project* → importa il repository. Framework: **Astro** (rilevato in automatico). Build command `npm run build`.
3. In *Settings → Environment Variables* imposta (vedi `.env.example`):
   - `RESEND_API_KEY`: chiave API del servizio [Resend](https://resend.com) (gratuito per volumi bassi)
   - `CONTACT_TO_EMAIL`: casella che riceve i messaggi
   - `CONTACT_FROM_EMAIL`: mittente (finché non verifichi un dominio su Resend: `onboarding@resend.dev`)
   - `PUBLIC_SITE_URL`: **lasciala vuota finché non c'è il dominio definitivo**
4. Deploy. Sull'indirizzo provvisorio `*.vercel.app` il sito è `noindex` e `robots.txt` blocca i motori di ricerca.

### Quando arriva il dominio

1. *Settings → Domains* su Vercel: aggiungi il dominio e configura i DNS come indicato.
2. Imposta `PUBLIC_SITE_URL=https://tuodominio.it` (senza slash finale) e rifai il deploy: si attivano indicizzazione, canonical, Open Graph, sitemap (`/sitemap-index.xml`) e `robots.txt`.
3. Se il nuovo sito sostituisce `claudiadandrea.it`, i redirect 301 già presenti in `vercel.json` mappano le vecchie pagine (`/about-me`, `/about-my-art`, `/my-artworks`, `/sculptures`, `/wall-sculptures`, `/light`, `/paper-lamps`, `/exhibitions`, `/contact`) su quelle nuove.
4. Facoltativo: verifica il dominio su Resend e usa un mittente del tuo dominio in `CONTACT_FROM_EMAIL`.

## Modulo contatti

Validazione lato client e server, trappola anti-bot (campo nascosto), controllo del tempo di compilazione, limiti di lunghezza, consenso privacy obbligatorio. Funziona anche senza JavaScript (il server risponde con un redirect). Senza le variabili d'ambiente il form mostra un messaggio chiaro e invita a scrivere via email.
Per una protezione più forte si può aggiungere un captcha (es. Cloudflare Turnstile): comporta però script di terze parti e va riportato nell'informativa.

## Struttura

```
src/
  assets/       logo e foto elaborate (generate da scripts/prepare-assets.mjs)
  components/   Header, Footer, Gallery, Photo, PageHero, Icon
  config/       impostazioni del sito
  data/         contenuti (opere, mostre, laboratori, servizi)
  layouts/      Layout.astro (SEO, JSON-LD, struttura)
  pages/        una pagina per file; api/contact.ts è l'unica funzione serverless
  scripts/      JavaScript del sito (menu, lightbox, comparsa allo scroll)
  styles/       global.css (design system)
scripts/        strumenti da riga di comando (asset, controllo link)
```

## Da completare a cura di Claudia

- **Informativa privacy** (`/privacy`, ora `noindex`): titolare, P.IVA, base giuridica, conservazione, diritti. Va verificata da un professionista.
- **Telefono, indirizzo dello studio, P.IVA**: non presenti nei materiali né sul vecchio sito; si inseriscono in `src/config/site.ts` (`phone`, `address`) e compaiono da soli.
- **Ritratto di Claudia** per la pagina About: non c'è nelle cartelle.
- **Luoghi** dei laboratori proposti (Carta e luce, Fiori di carta): nel documento erano segnati "(luogo)".
- **Liberatorie** per le foto in cui compaiono minori o altre persone (laboratori, inaugurazioni).
- Dominio, account Resend e relative variabili d'ambiente.
