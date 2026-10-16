// Shared engine for the product promo films, lifted from the Yara intro film: every frame is a pure function of time.
// A film sets window.FILM = { dur, render(t), rings: [[t0, x, y], ...], colours: [c1, c2] } before this runs.
const $ = id => document.getElementById(id);
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, k) => a + (b - a) * k;
const eo = x => 1 - Math.pow(1 - x, 4);
const eio = x => x < .5 ? 8 * x ** 4 : 1 - Math.pow(-2 * x + 2, 4) / 2;
const P = (t, a, b) => eo(clamp((t - a) / (b - a)));
const PIO = (t, a, b) => eio(clamp((t - a) / (b - a)));
const L = (t, a, b) => clamp((t - a) / (b - a));
function st(el, o = 1, x = 0, y = 0, s = 1, r = 0, blur = 0) {
  if (typeof el === 'string') el = $(el);
  el.style.opacity = o.toFixed(4);
  el.style.visibility = o < .002 ? 'hidden' : 'visible';
  el.style.transform = `translate(${x.toFixed(2)}px,${y.toFixed(2)}px) scale(${s.toFixed(4)}) rotate(${r.toFixed(3)}deg)`;
  el.style.filter = blur > .05 ? `blur(${blur.toFixed(2)}px)` : 'none';
}
/* in at a, out at b: a rise-and-settle, then a soft exit */
function show(el, t, a, b, { dy = 26, s0 = .97, out = .45, x = 0, y = 0 } = {}) {
  const i = P(t, a, a + .6), o = b == null ? 0 : P(t, b, b + out);
  st(el, i * (1 - o), x, y + (1 - i) * dy - o * 18, s0 + (1 - s0) * i);
  return i * (1 - o);
}
/* crossfade between states: T = change times; returns opacity per state */
function xf(t, T, f = .22) {
  const o = [];
  for (let k = 0; k <= T.length; k++) {
    const a = k === 0 ? 1 : P(t, T[k - 1], T[k - 1] + f);
    const b = k === T.length ? 0 : P(t, T[k], T[k] + f);
    o.push(a * (1 - b));
  }
  return o;
}
const CHECK = (c, col = '#fff') => `<svg width="${c}" height="${c}" viewBox="0 0 24 24"><path d="M5 12.5l4.2 4.2L19 7" fill="none" stroke="${col}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

/* headlines: split into masked words */
const HL = [...document.querySelectorAll('.hl')].map(el => {
  const words = [];
  const walk = (node, cls) => node.childNodes.forEach(n => {
    if (n.nodeType === 3) n.textContent.split(/(\s+)/).forEach(p => { if (p.trim()) words.push({ text: p, cls }); else if (p) words.push({ space: true }); });
    else walk(n, n.className);
  });
  walk(el, '');
  el.innerHTML = words.map(w => w.space ? ' ' : `<span class="wm"><span class="w ${w.cls || ''}">${w.text}</span></span>`).join('');
  return { el, tin: +el.dataset.in, tout: +el.dataset.out, ws: [...el.querySelectorAll('.w')] };
});
function renderHL(t) {
  HL.forEach(h => {
    const on = t > h.tin - .05 && t < h.tout + .5;
    h.el.style.visibility = on ? 'visible' : 'hidden';
    if (!on) return;
    const out = P(t, h.tout, h.tout + .4);
    h.ws.forEach((w, i) => {
      const a = P(t, h.tin + i * .065, h.tin + i * .065 + .6);
      w.style.transform = `translateY(${((1 - a) * 105 - out * 40).toFixed(2)}%)`;
      w.style.opacity = (Math.min(1, a * 1.4) * (1 - out)).toFixed(3);
    });
  });
}

/* rings: two soft rings, the product colour then AntaraX blue, travel out from a point */
const RINGS = (window.FILM.rings || []).map(([t0, x, y, max = 1500]) => {
  const ns = 'http://www.w3.org/2000/svg', g = document.createElementNS(ns, 'g');
  const mk = (col, w) => { const c = document.createElementNS(ns, 'circle'); c.setAttribute('cx', x); c.setAttribute('cy', y); c.setAttribute('fill', 'none'); c.setAttribute('stroke', col); c.setAttribute('stroke-width', w); g.appendChild(c); return c; };
  const a = mk(window.FILM.colours[0], 3), b = mk(window.FILM.colours[1] || '#0459F7', 2);
  $('rings').appendChild(g);
  return { t0, a, b, max };
});
function renderRings(t) {
  RINGS.forEach(r => {
    [[r.a, 0], [r.b, .22]].forEach(([c, d]) => {
      const k = L(t, r.t0 + d, r.t0 + d + 1.9);
      const on = k > 0 && k < 1;
      c.style.visibility = on ? 'visible' : 'hidden';
      if (!on) return;
      c.setAttribute('r', (eo(k) * r.max).toFixed(1));
      c.style.opacity = ((1 - k) ** 1.6 * .9).toFixed(3);
    });
  });
}

/* playback and render hooks (same contract as the Yara film: window.seek, DURATION, ready) */
const DUR = window.FILM.dur;
function render(t) {
  window.__t = t;
  window.FILM.render(t);
  renderRings(t);
  renderHL(t);
}
const qs = new URLSearchParams(location.search);
function fit() {
  const s = Math.min(innerWidth / 1920, innerHeight / 1080), stg = $('stage');
  stg.style.transform = `translate(${(innerWidth - 1920 * s) / 2}px,${(innerHeight - 1080 * s) / 2}px) scale(${s})`;
}
window.seek = t => { render(t); return true; };
window.DURATION = DUR;
window.ready = document.fonts.ready.then(() => Promise.all(['600 72px Poppins', '400 20px Poppins', '700 20px Poppins', '500 20px "JetBrains Mono"'].map(f => document.fonts.load(f))))
  .then(() => Promise.all([...document.images].map(i => i.decode().catch(() => {}))));
if (qs.has('render')) render(0);
else {
  fit(); addEventListener('resize', fit);
  const hud = $('hud');
  let t0 = null, paused = qs.has('t'), cur = +(qs.get('t') || 0);
  addEventListener('keydown', e => {
    if (e.code === 'Space') { paused = !paused; t0 = null; }
    if (e.code === 'ArrowRight') cur = Math.min(DUR, cur + 1);
    if (e.code === 'ArrowLeft') cur = Math.max(0, cur - 1);
  });
  addEventListener('click', () => { cur = 0; t0 = null; paused = false; });
  window.ready.then(() => {
    const loop = ts => {
      if (!paused) { if (t0 === null) t0 = ts - cur * 1000; cur = (ts - t0) / 1000; if (cur > DUR) { cur = 0; t0 = ts; } }
      render(cur); if (hud) hud.textContent = `${cur.toFixed(2)}s · space pause · ←/→ seek · click restart`;
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  });
}
