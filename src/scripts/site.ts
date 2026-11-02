/* Miglioramenti progressivi: il sito funziona anche senza questo file. */

// ── Menu a schermo intero ──────────────────────────────────────────
const overlay = document.getElementById('menu');
const openBtn = document.querySelector<HTMLElement>('[data-menu-open]');
const closeBtn = document.querySelector<HTMLElement>('[data-menu-close]');

function setMenu(open: boolean) {
  if (!overlay) return;
  overlay.classList.toggle('is-open', open);
  openBtn?.setAttribute('aria-expanded', String(open));
  document.documentElement.style.overflow = open ? 'hidden' : '';
  if (open) closeBtn?.focus();
  else openBtn?.focus({ preventScroll: true });
}

// se si arriva con #menu nell'URL, si parte da chiuso
if (location.hash === '#menu') history.replaceState(null, '', location.pathname + location.search);

openBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  setMenu(true);
});
closeBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  setMenu(false);
});
overlay?.addEventListener('click', (e) => {
  if ((e.target as HTMLElement).closest('a[href^="/"]')) setMenu(false);
});
overlay?.addEventListener('keydown', (e) => {
  if (e.key !== 'Tab') return;
  const f = [...overlay.querySelectorAll<HTMLElement>('a[href]')];
  const first = f[0];
  const last = f[f.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && overlay?.classList.contains('is-open')) setMenu(false);
});

// ── Comparsa allo scroll ───────────────────────────────────────────
const reveals = document.querySelectorAll<HTMLElement>('[data-reveal]');
if ('IntersectionObserver' in window && reveals.length) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const en of entries) {
        if (en.isIntersecting) {
          en.target.classList.add('is-in');
          io.unobserve(en.target);
        }
      }
    },
    { threshold: 0.08, rootMargin: '0px 0px -6% 0px' },
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('is-in'));
}

// ── Lightbox ───────────────────────────────────────────────────────
type Item = { href: string; caption: string; alt: string };
let dlg: HTMLDialogElement | null = null;
let items: Item[] = [];
let idx = 0;
let lastFocus: HTMLElement | null = null;

function build() {
  const d = document.createElement('dialog');
  d.className = 'lightbox';
  d.setAttribute('aria-label', 'Galleria fotografica');
  d.innerHTML = `
    <button type="button" class="lightbox__close" aria-label="Chiudi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"><path d="M5 5l14 14M19 5 5 19"/></svg></button>
    <button type="button" class="lightbox__prev" aria-label="Foto precedente"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12H4M10 6l-6 6 6 6"/></svg></button>
    <button type="button" class="lightbox__next" aria-label="Foto successiva"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16M14 6l6 6-6 6"/></svg></button>
    <div class="lightbox__stage"><img alt="" /></div>
    <div class="lightbox__bar" aria-live="polite"><span class="lightbox__cap"></span></div>`;
  document.body.append(d);
  d.querySelector('.lightbox__close')!.addEventListener('click', () => d.close());
  d.querySelector('.lightbox__prev')!.addEventListener('click', () => show(idx - 1));
  d.querySelector('.lightbox__next')!.addEventListener('click', () => show(idx + 1));
  d.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).classList.contains('lightbox__stage')) d.close();
  });
  d.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') show(idx - 1);
    if (e.key === 'ArrowRight') show(idx + 1);
  });
  d.addEventListener('close', () => {
    document.documentElement.style.overflow = '';
    lastFocus?.focus({ preventScroll: true });
  });
  // swipe su touch
  let x0 = 0;
  d.addEventListener('touchstart', (e) => (x0 = e.touches[0].clientX), { passive: true });
  d.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1));
  });
  return d;
}

function show(i: number) {
  if (!dlg || !items.length) return;
  idx = (i + items.length) % items.length;
  const it = items[idx];
  const img = dlg.querySelector('img')!;
  img.src = it.href;
  img.alt = it.alt;
  dlg.querySelector('.lightbox__cap')!.textContent = it.caption || it.alt;
  const many = items.length > 1;
  dlg.querySelector<HTMLElement>('.lightbox__prev')!.hidden = !many;
  dlg.querySelector<HTMLElement>('.lightbox__next')!.hidden = !many;
  // precarica la foto successiva
  if (many) new Image().src = items[(idx + 1) % items.length].href;
}

document.addEventListener('click', (e) => {
  const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[data-lightbox]');
  if (!a || e.metaKey || e.ctrlKey || e.shiftKey || typeof HTMLDialogElement === 'undefined') return;
  e.preventDefault();
  const group = a.dataset.lightbox!;
  const links = [...document.querySelectorAll<HTMLAnchorElement>(`a[data-lightbox="${CSS.escape(group)}"]`)];
  items = links.map((l) => ({ href: l.href, caption: l.dataset.caption ?? '', alt: l.dataset.alt ?? '' }));
  dlg ??= build();
  lastFocus = a;
  show(links.indexOf(a));
  document.documentElement.style.overflow = 'hidden';
  dlg.showModal();
});
