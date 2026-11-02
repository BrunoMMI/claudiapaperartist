import type { APIRoute } from 'astro';
import { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } from 'astro:env/server';

// Unica funzione serverless del sito: tutto il resto è statico.
export const prerender = false;

const MAX = { nome: 120, email: 160, oggetto: 80, messaggio: 4000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const clean = (v: FormDataEntryValue | null, max: number) =>
  String(v ?? '')
    .replace(/\r/g, '')
    .trim()
    .slice(0, max);

export const POST: APIRoute = async ({ request, redirect }) => {
  const wantsJson = (request.headers.get('accept') ?? '').includes('application/json');
  const reply = (ok: boolean, status: number, error?: string) =>
    wantsJson
      ? new Response(JSON.stringify(ok ? { ok } : { ok, error }), {
          status,
          headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
        })
      : redirect(`/contatti?stato=${ok ? 'ok' : 'errore'}#modulo`, 303);

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return reply(false, 400, 'Richiesta non valida.');
  }

  // Anti-spam: campo trappola compilato, oppure invio troppo rapido (< 3 s dal caricamento)
  const tooFast = Number(form.get('t')) > 0 && Date.now() - Number(form.get('t')) < 3000;
  if (clean(form.get('sito'), 200) !== '' || tooFast) return reply(true, 200); // finge successo: il bot non impara nulla

  const nome = clean(form.get('nome'), MAX.nome);
  const email = clean(form.get('email'), MAX.email);
  const oggetto = clean(form.get('oggetto'), MAX.oggetto) || 'Altro';
  const messaggio = clean(form.get('messaggio'), MAX.messaggio);
  const consenso = form.get('privacy') === 'si';

  if (nome.length < 2 || !EMAIL_RE.test(email) || messaggio.length < 10 || !consenso || /[\r\n]/.test(email)) {
    return reply(false, 422, 'Controlla i campi: nome, email, messaggio e consenso privacy sono obbligatori.');
  }

  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) {
    console.error('[contact] RESEND_API_KEY / CONTACT_TO_EMAIL non configurate');
    return reply(false, 503, 'Il modulo non è ancora attivo. Scrivi direttamente via email.');
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: `Sito Claudia D'Andrea <${CONTACT_FROM_EMAIL ?? 'onboarding@resend.dev'}>`,
      to: [CONTACT_TO_EMAIL],
      reply_to: email,
      subject: `[Sito] ${oggetto} – ${nome}`.replace(/[\r\n]/g, ' '),
      text: `Nuovo messaggio dal sito\n\nNome: ${nome}\nEmail: ${email}\nRichiesta: ${oggetto}\n\n${messaggio}\n\nConsenso privacy: sì`,
    }),
  }).catch(() => null);

  if (!res?.ok) {
    console.error('[contact] invio non riuscito', res?.status, await res?.text().catch(() => ''));
    return reply(false, 502, 'Non è stato possibile inviare il messaggio. Riprova tra poco oppure scrivi via email.');
  }
  return reply(true, 200);
};

// Qualsiasi altro metodo: non consentito
export const ALL: APIRoute = () => new Response(null, { status: 405, headers: { Allow: 'POST' } });
