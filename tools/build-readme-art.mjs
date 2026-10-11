// The pictures in the README: a hero where the AI sparkle becomes each product's logo, the six families, a card
// per product, the nine palettes and "spot the difference". Every file is one self-contained, animated SVG, because
// GitHub shows an SVG as an image: nothing inside it may load another file, so logos are inlined and text is drawn
// as outlines from the fonts in tools/fonts (SIL Open Font License, see tools/fonts/OFL.txt).
// Writes assets/readme/*.svg. Needs opentype.js:
//   npm i -g opentype.js@1.3.4 && NODE_PATH=$(npm root -g) node tools/build-readme-art.mjs
import fs from 'node:fs';
import { createRequire } from 'node:module';
const opentype = createRequire(import.meta.url)('opentype.js');

const KIT = new URL('../', import.meta.url);
const read = (p) => fs.readFileSync(new URL(p, KIT), 'utf8');
const write = (p, s) => { fs.mkdirSync(new URL(p.replace(/[^/]+$/, ''), KIT), { recursive: true }); fs.writeFileSync(new URL(p, KIT), s); console.log(p, `${(s.length / 1024).toFixed(0)} KB`); };
const font = (f) => { const b = fs.readFileSync(new URL(`tools/fonts/${f}`, KIT)); return opentype.parse(b.buffer.slice(b.byteOffset, b.byteOffset + b.length)); };
const F = { regular: font('poppins-400.woff'), semibold: font('poppins-600.woff'), bold: font('poppins-700.woff'), mono: font('jetbrains-mono-500.woff') };
const r1 = (n) => +n.toFixed(1);

// ---- text as outlines ----
const width = (s, size, f = F.regular, track = 0) => f.getAdvanceWidth(s, size) + track * (s.length - 1);
// anchor: start | middle | end. Each distinct string is drawn once into <defs> and placed with <use>.
let DEFS = new Map();
function text(s, x, y, size, { f = F.regular, fill = '#0B1B4F', anchor = 'start', track = 0, extra = '' } = {}) {
  const w = width(s, size, f, track);
  const key = `${f.names.fullName.en}|${size}|${track}|${s}`;
  if (!DEFS.has(key)) {
    let d = '', cx = 0;
    if (!track) d = f.getPath(s, 0, 0, size).toPathData(1);
    else for (const ch of s) { d += f.getPath(ch, cx, 0, size).toPathData(1); cx += f.getAdvanceWidth(ch, size) + track; }
    DEFS.set(key, { id: `t${DEFS.size}`, d });
  }
  const ox = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  return `<use href="#${DEFS.get(key).id}" x="${r1(ox)}" y="${r1(y)}" fill="${fill}" ${extra}/>`;
}
const wrap = (s, size, max, f = F.regular) => s.split(' ').reduce((lines, w) => { const l = lines.at(-1); if (l && width(`${l} ${w}`, size, f) <= max) lines[lines.length - 1] = `${l} ${w}`; else lines.push(w); return lines; }, []);

// ---- an SVG file placed inside another, ids made unique ----
let uid = 0;
function inline(path, x, y, w, h, extra = '') {
  const src = read(path), id = `i${uid++}`;
  const vb = src.match(/<svg\b[^>]*viewBox="([^"]+)"/)[1];
  const inner = src.replace(/^[\s\S]*?<svg\b[^>]*>/, '').replace(/<\/svg>\s*$/, '').replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\bid="([^"]+)"/g, `id="${id}-$1"`).replace(/url\(#([^)]+)\)/g, `url(#${id}-$1)`).replace(/href="#([^"]+)"/g, `href="#${id}-$1"`);
  return `<svg x="${r1(x)}" y="${r1(y)}" width="${r1(w)}" height="${r1(h)}" viewBox="${vb}" preserveAspectRatio="xMidYMid meet" overflow="visible" ${extra}>${inner}</svg>`;
}
const svg = (w, h, label, body, style = '') => { const defs = [...DEFS.values()].map((t) => `<path id="${t.id}" d="${t.d}"/>`).join(''); DEFS = new Map(); return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="${label}">
<defs>${defs}</defs><style>.b{transform-box:fill-box;transform-origin:center}${style}@media (prefers-reduced-motion:reduce){*{animation:none!important}}</style>
${body}</svg>\n`; };

// ---- the brand ----
const NAVY = '#0B1B4F', DEEP = '#071233', BLUE = '#0459F7', BODY = '#3B4469', MUTED = '#5B6488', QUIET = '#C5CCF7', LINE = '#E3E7F2', CANVAS = '#FBFCFE';
const FAM = {
  Ripple: { verb: 'Operate', line: 'Work that moves.', c: '#08B0B3', dark: '#0B6E72', tint: '#D9F3F2', icon: 'ripple' },
  Edge: { verb: 'Perceive', line: 'Sense the real world.', c: '#12B76A', dark: '#0B7A47', tint: '#DCF5E8', icon: 'edge' },
  Frame: { verb: 'Understand', line: 'Know what you depend on.', c: '#074AF8', dark: '#0533A8', tint: '#E2EAFE', icon: 'frame' },
  Loom: { verb: 'Synthesize', line: 'Weave it together.', c: '#4904B3', dark: '#33027D', tint: '#EEE6FA', icon: 'loom' },
  Motion: { verb: 'Navigate', line: 'Every vehicle, within reach.', c: '#FC5D04', dark: '#A83A00', tint: '#FFE9DC', icon: 'motion' },
  Tide: { verb: 'Optimize', line: "Read what's coming.", c: '#E9579D', dark: '#9C2B63', tint: '#FDE8F1', icon: 'tide' },
};
const PAL = JSON.parse(read('tokens/product-palettes.json')).products;
const P = [
  { k: 'yara', name: 'Yara', logo: 'yara', fam: 'Ripple', motif: 'awan larat', mf: 'assets/products/yara/yara-motif.svg', status: 'Main', line: 'See where every job stands, live.' },
  { k: 'janka', name: 'Janka', logo: 'janka', fam: 'Tide', motif: 'padi', mf: 'assets/products/janka/janka-motif.svg', status: 'Main', line: "Know what you'll need before you run out." },
  { k: 'grid', name: 'PLExyz Grid', logo: 'plexyz-grid', fam: 'Edge', motif: 'petak', mf: 'assets/products/plexyz/grid-motif.svg', status: 'Main', line: "Know what's in your warehouse, and where it goes." },
  { k: 'crowd', name: 'PLExyz Crowd', logo: 'plexyz-crowd', fam: 'Edge', motif: 'orbit', mf: 'assets/products/plexyz/crowd-motif.svg', status: 'Closed pilot', line: 'Know how your building is really used. No cameras.' },
  { k: 'frame', name: 'AX Frame', logo: 'ax-frame', fam: 'Frame', motif: 'intan', mf: 'assets/products/frame/frame-motif.svg', status: 'Closed pilot', line: 'Know what your business depends on.' },
  { k: 'angka', name: 'Angka', logo: 'angka', fam: 'Tide', motif: 'congkak', mf: 'assets/products/angka/angka-motif.svg', status: 'Closed pilot', line: 'A finance workspace for business owners who are not accountants.' },
  { k: 'tinara', name: 'Tinara', logo: 'tinara', fam: 'Tide', motif: 'kerawang', mf: 'assets/products/tinara/tinara-motif.svg', status: 'Closed pilot', line: 'Know which Malaysian companies to sell to, and why.' },
  { k: 'loom', name: 'AX Loom', logo: 'loom', fam: 'Loom', motif: 'tenun', mf: null, status: 'Closed pilot', line: 'Your data, woven together.' },
  { k: 'motion', name: 'AX Motion', logo: 'motion', fam: 'Motion', motif: 'cengkih', mf: null, status: 'Closed pilot', line: 'Every vehicle in view, and within reach.' },
];
for (const p of P) Object.assign(p, PAL[p.k].roles, { scale: PAL[p.k].scale });

// goo: the two shapes melt into each other while one becomes the other (14, "Loading"); only ever on during a morph
const goo = (id, sd) => `<filter id="${id}" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur in="SourceGraphic" stdDeviation="${sd}" result="b"/><feColorMatrix in="b" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -9" result="g"/><feComposite in="SourceGraphic" in2="g" operator="atop"/></filter>`;
const pct = (n) => `${+n.toFixed(3)}%`;

// ================= hero =================
{
  const W = 1280, H = 460, SLOT = 3.2, N = P.length, T = SLOT * N;
  // within a slot: sparkle, morph in, the logo, morph out, sparkle
  const A = 0.22, B = 0.36, C = 0.72, D = 0.86;
  const at = (i, f) => ((i + f) / N) * 100;
  let kfSpark = '', kfGoo = '';
  const spark = [], gooOn = [];
  for (let i = 0; i < N; i++) {
    spark.push([at(i, 0), 1, .9], [at(i, A), 1, 1], [at(i, B), 0, .62], [at(i, C), 0, .62], [at(i, D), 1, 1.04], [at(i, 1) - .001, 1, .9]);
    gooOn.push([at(i, A) - .01, at(i, B) + .2], [at(i, C) - .01, at(i, D) + .2]);
  }
  kfSpark = spark.map(([p, o, s]) => `${pct(p)}{opacity:${o};transform:scale(${s})}`).join('');
  kfGoo = `0%{filter:none}` + gooOn.map(([a, b]) => `${pct(a)}{filter:none}${pct(a + .005)}{filter:url(#hg)}${pct(b)}{filter:url(#hg)}${pct(b + .005)}{filter:none}`).join('') + `100%{filter:none}`;
  const kfLogo = (i) => `0%{opacity:0;transform:scale(.72)}${pct(at(i, 0))}{opacity:0;transform:scale(.72)}${pct(at(i, A))}{opacity:0;transform:scale(.72)}${pct(at(i, B))}{opacity:1;transform:scale(1.05)}${pct(at(i, B) + 1)}{opacity:1;transform:scale(1)}${pct(at(i, C))}{opacity:1;transform:scale(1)}${pct(at(i, D))}{opacity:0;transform:scale(.72)}100%{opacity:0;transform:scale(.72)}`;
  const kfCap = (i) => `0%{opacity:0}${pct(at(i, A + .06))}{opacity:0}${pct(at(i, B))}{opacity:1}${pct(at(i, C))}{opacity:1}${pct(at(i, D - .04))}{opacity:0}100%{opacity:0}`;
  const cx = 1010, cy = 200, R = 120, L = 150;
  let style = `@keyframes sp{${kfSpark}}@keyframes go{${kfGoo}}.sp{animation:sp ${T}s ease-in-out infinite}.go{animation:go ${T}s linear infinite}`;
  style += `@keyframes halo{0%,100%{transform:scale(1);opacity:.55}50%{transform:scale(1.08);opacity:.9}}.halo{animation:halo 4.8s ease-in-out infinite}`;
  style += `@keyframes drift{0%,100%{transform:translate(0,0)}50%{transform:translate(-14px,8px)}}.drift{animation:drift 18s ease-in-out infinite}`;
  style += `@keyframes rise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}.rise{animation:rise .9s ease-out both}`;
  const logos = P.map((p, i) => { style += `@keyframes l${i}{${kfLogo(i)}}@keyframes c${i}{${kfCap(i)}}`; return `<g class="b" style="animation:l${i} ${T}s ease-in-out infinite;opacity:0">${inline(`assets/logos/${p.logo}.svg`, cx - L / 2, cy - L / 2, L, L)}</g>`; }).join('');
  const caps = P.map((p, i) => { const f = FAM[p.fam]; const label = `${p.name} · ${p.fam}`; const w = width(label, 20, F.semibold); return `<g style="animation:c${i} ${T}s linear infinite;opacity:0"><circle cx="${r1(cx - w / 2 - 14)}" cy="${cy + R + 47}" r="6" fill="${f.c}"/>${text(label, cx + 6, cy + R + 54, 20, { f: F.semibold, fill: '#FFFFFF', anchor: 'middle' })}</g>`; }).join('');
  const grid = Array.from({ length: 33 }, (_, i) => `<path d="M${i * 40},0V${H}" />`).join('') + Array.from({ length: 12 }, (_, i) => `<path d="M0,${i * 40}H${W}" />`).join('');
  const chips = [['9', 'products'], ['6', 'families'], ['1', 'kit']];
  let chx = 72;
  const chipRow = chips.map(([n, l]) => { const w = width(n, 18, F.mono) + width(l, 16) + 40; const g = `<g><rect x="${chx}" y="330" width="${r1(w)}" height="40" rx="20" fill="#FFFFFF" fill-opacity=".08" stroke="#FFFFFF" stroke-opacity=".18"/>${text(n, chx + 16, 356, 18, { f: F.mono, fill: '#7FD9FF' })}${text(l, chx + 24 + width(n, 18, F.mono), 356, 16, { fill: QUIET })}</g>`; chx += w + 12; return g; }).join('');
  const body = `<defs>${goo('hg', 5)}<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${DEEP}"/><stop offset="1" stop-color="#0D2266"/></linearGradient><radialGradient id="glow"><stop offset="0" stop-color="${BLUE}" stop-opacity=".55"/><stop offset="1" stop-color="${BLUE}" stop-opacity="0"/></radialGradient><clipPath id="card"><rect width="${W}" height="${H}" rx="28"/></clipPath></defs>
<g clip-path="url(#card)"><rect width="${W}" height="${H}" fill="url(#bg)"/><g stroke="#FFFFFF" stroke-opacity=".05">${grid}</g>
<g class="drift" opacity=".5">${inline('assets/batech/antarax/spot-white.svg', cx - 250, cy - 250, 500, 500)}</g>
<circle class="b halo" cx="${cx}" cy="${cy}" r="${R + 70}" fill="url(#glow)"/>
<circle cx="${cx}" cy="${cy}" r="${R}" fill="#FFFFFF"/><circle cx="${cx}" cy="${cy}" r="${R + 10}" fill="none" stroke="#FFFFFF" stroke-opacity=".25" stroke-width="2" stroke-dasharray="2 10"/>
<g class="go"><g class="b sp">${inline('assets/ai/sparkle.svg', cx - 82, cy - 82, 164, 164)}</g>${logos}</g>
${caps}${text('AI thinking: the sparkle becomes each product', cx, cy + R + 84, 15, { fill: QUIET, anchor: 'middle' })}
<g class="rise">${inline('assets/logo/antarax-mark-white.svg', 60, 52, 64, 64)}${text('AntaraX', 126, 95, 24, { f: F.semibold, fill: '#FFFFFF' })}</g>
<g class="rise" style="animation-delay:.15s">${text('Put intelligence to work.', 72, 170, 18, { f: F.semibold, fill: '#7FD9FF' })}${text('AntaraX brand kit', 70, 236, 64, { f: F.bold, fill: '#FFFFFF' })}</g>
<g class="rise" style="animation-delay:.3s">${text('How AntaraX looks, sounds and is organised.', 72, 284, 22, { fill: QUIET })}</g>
<g class="rise" style="animation-delay:.45s">${chipRow}</g>
${text('by REKA Inisiatif Sdn Bhd · Kuala Lumpur', 72, 418, 14, { fill: '#8F9AC9' })}</g>`;
  write('assets/readme/hero.svg', svg(W, H, 'AntaraX brand kit: the AI sparkle becomes each product logo in turn', body, style));
}

// ================= families =================
{
  const W = 1280, H = 330, gap = 16, tw = (W - 2 * 24 - 5 * gap) / 6;
  const names = { Ripple: 'Yara', Edge: 'PLExyz Grid, Crowd', Frame: 'AX Frame', Loom: 'AX Loom', Motion: 'AX Motion', Tide: 'Janka, Angka, Tinara' };
  let style = `@keyframes br{0%,100%{transform:scale(1) translateY(0)}50%{transform:scale(1.08) translateY(-4px)}}.br{animation:br 3.2s ease-in-out infinite}`;
  const tiles = Object.entries(FAM).map(([n, f], i) => {
    const x = 24 + i * (tw + gap), mx = x + tw / 2;
    const lines = wrap(names[n], 13, tw - 28);
    return `<g><rect x="${r1(x)}" y="24" width="${r1(tw)}" height="${H - 48}" rx="20" fill="${f.tint}"/>
<rect x="${r1(x + 24)}" y="36" width="${r1(tw - 48)}" height="5" rx="2.5" fill="${f.c}"/>
<g class="b br" style="animation-delay:${(-i * 0.53).toFixed(2)}s">${inline(`assets/families/${f.icon}-icon.svg`, mx - 52, 50, 104, 84)}</g>
${text(n, mx, 172, 24, { f: F.semibold, fill: f.dark, anchor: 'middle' })}
${text(f.verb, mx, 198, 14, { f: F.mono, fill: f.dark, anchor: 'middle', extra: 'opacity=".8"' })}
${text(f.line, mx, 230, width(f.line, 14) > tw - 20 ? 12.5 : 14, { fill: NAVY, anchor: 'middle' })}
<path d="M${r1(x + 20)},250H${r1(x + tw - 20)}" stroke="${f.c}" stroke-opacity=".35" stroke-dasharray="3 5"/>
${lines.map((l, j) => text(l, mx, 274 + j * 18, 13, { f: F.semibold, fill: BODY, anchor: 'middle' })).join('')}</g>`;
  }).join('');
  write('assets/readme/families.svg', svg(W, H, 'The six families: Ripple, Edge, Frame, Loom, Motion and Tide, with their products', `<rect width="${W}" height="${H}" rx="28" fill="#FFFFFF"/><rect x=".5" y=".5" width="${W - 1}" height="${H - 1}" rx="28" fill="none" stroke="${LINE}"/>${tiles}`, style));
}

// ================= product cards =================
P.forEach((p, i) => {
  const W = 400, H = 560, f = FAM[p.fam], s = p.scale;
  const style = `@keyframes fl{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-6px) scale(1.03)}}.fl{animation:fl 4s ease-in-out infinite;animation-delay:${(-i * 0.45).toFixed(2)}s}@keyframes tw{0%,100%{opacity:.18}50%{opacity:.32}}.tw{animation:tw 5s ease-in-out infinite}`;
  const st = p.status === 'Main';
  const stW = width(p.status, 13, F.semibold) + 24;
  const lines = wrap(p.line, 16, W - 64);
  const rows = [
    ['Family', `<circle cx="146" cy="${0}" r="6" fill="${f.c}"/>`, `${p.fam} · ${f.verb}`],
    ['Motif', '', p.motif],
    ['Acts in', '', p.action],
    ['Tokens', '', `--${p.k}-*`],
  ];
  const y0 = 392;
  const rowSvg = rows.map(([lab, , val], j) => {
    const y = y0 + j * 38;
    let mark = '';
    if (lab === 'Family') mark = `<circle cx="140" cy="${y - 5}" r="7" fill="${f.c}"/>`;
    if (lab === 'Motif') mark = p.mf ? inline(p.mf, 130, y - 17, 22, 22) : `<circle cx="140" cy="${y - 5}" r="7" fill="none" stroke="${f.c}" stroke-width="2" stroke-dasharray="2 3"/>`;
    if (lab === 'Acts in') mark = `<rect x="132" y="${y - 14}" width="18" height="18" rx="5" fill="${p.action}"/>`;
    if (lab === 'Tokens') mark = `<path d="M134,${y - 10}l-4,5l4,5M146,${y - 10}l4,5l-4,5" fill="none" stroke="${MUTED}" stroke-width="2" stroke-linecap="round"/>`;
    const mono = lab === 'Acts in' || lab === 'Tokens';
    return `${j ? `<path d="M32,${y - 26}H${W - 32}" stroke="${LINE}"/>` : ''}${text(lab, 32, y, 14, { fill: MUTED })}${mark}${text(val + (lab === 'Motif' && !p.mf ? ' (to come)' : ''), 162, y, mono ? 14 : 15, { f: mono ? F.mono : F.semibold, fill: NAVY })}`;
  }).join('');
  const body = `<defs><clipPath id="cc"><rect width="${W}" height="${H}" rx="26"/></clipPath><linearGradient id="hd" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${s['50']}"/><stop offset="1" stop-color="${s['200']}"/></linearGradient></defs>
<g clip-path="url(#cc)"><rect width="${W}" height="${H}" fill="#FFFFFF"/><rect width="${W}" height="236" fill="url(#hd)"/>
<clipPath id="hc"><rect width="${W}" height="236"/></clipPath><g clip-path="url(#hc)"><g class="tw">${inline(`assets/families/${f.icon}-icon.svg`, 214, 96, 240, 180)}</g></g>
<circle cx="${W / 2}" cy="128" r="90" fill="${p.accent}" opacity=".12"/>
${text(String(i + 1).padStart(2, '0'), 28, 46, 15, { f: F.mono, fill: s['800'] })}${text(`/ 0${P.length}`, 54, 46, 15, { f: F.mono, fill: s['800'], extra: 'opacity=".55"' })}
<rect x="${r1(W - 24 - stW)}" y="26" width="${r1(stW)}" height="28" rx="14" fill="${st ? s['800'] : '#FFFFFF'}" ${st ? '' : `stroke="${s['300']}"`}/>${text(p.status, W - 24 - stW / 2, 45, 13, { f: F.semibold, fill: st ? '#FFFFFF' : s['800'], anchor: 'middle' })}
<g class="b fl"><rect x="${W / 2 - 66}" y="62" width="132" height="132" rx="30" fill="#FFFFFF"/><rect x="${W / 2 - 66}" y="62" width="132" height="132" rx="30" fill="none" stroke="${s['200']}" stroke-width="1.5"/>${inline(`assets/logos/${p.logo}.svg`, W / 2 - 54, 74, 108, 108)}</g>
${text(p.name, 32, 280, 30, { f: F.semibold, fill: NAVY })}${text('by AntaraX', 34 + width(p.name, 30, F.semibold) + 10, 280, 15, { fill: MUTED })}
${lines.map((l, j) => text(l, 32, 312 + j * 22, 16, { fill: BODY })).join('')}
${rowSvg}
<rect x="0" y="${H - 8}" width="${W}" height="8" fill="${p.action}"/></g>
<rect x=".75" y=".75" width="${W - 1.5}" height="${H - 1.5}" rx="26" fill="none" stroke="${LINE}" stroke-width="1.5"/>`;
  write(`assets/readme/card-${p.logo}.svg`, svg(W, H, `${p.name} by AntaraX: ${p.fam} family, ${p.motif} motif, acts in ${p.action}`, body, style));
});

// ================= palettes =================
{
  const steps = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];
  const W = 1280, top = 80, rh = 58, H = top + P.length * rh + 40, x0 = 250, sw = (W - x0 - 40) / steps.length;
  const lum = (hex) => { const [r, g, b] = [1, 3, 5].map((k) => parseInt(hex.slice(k, k + 2), 16) / 255).map((c) => (c <= .04045 ? c / 12.92 : ((c + .055) / 1.055) ** 2.4)); return .2126 * r + .7152 * g + .0722 * b; };
  let style = `@keyframes pop{from{transform:scale(.82)}to{transform:none}}.pop{animation:pop .5s cubic-bezier(.2,.9,.3,1.3) both}`;
  const rows = P.map((p, i) => {
    const y = top + i * rh;
    const cells = steps.map((k, j) => {
      const c = p.scale[k], x = x0 + j * sw, act = c.toUpperCase() === p.action.toUpperCase();
      return `<g class="b pop" style="animation-delay:${(i * .06 + j * .035).toFixed(2)}s"><rect x="${r1(x + 2)}" y="${y}" width="${r1(sw - 4)}" height="44" rx="10" fill="${c}"/>${act ? `<rect x="${r1(x - 1)}" y="${y - 3}" width="${r1(sw + 2)}" height="50" rx="12" fill="none" stroke="${NAVY}" stroke-width="2.5"/>` : ''}${text(act ? 'action' : k, x + sw / 2, y + 27, 12, { f: F.mono, fill: lum(c) > .35 ? NAVY : '#FFFFFF', anchor: 'middle' })}</g>`;
    }).join('');
    return `${inline(`assets/logos/${p.logo}.svg`, 32, y + 4, 36, 36)}${text(p.name, 80, y + 28, 17, { f: F.semibold, fill: NAVY })}${cells}`;
  }).join('');
  const head = steps.map((k, j) => text(k, x0 + j * sw + sw / 2, top - 14, 12, { f: F.mono, fill: MUTED, anchor: 'middle' })).join('');
  const body = `<rect width="${W}" height="${H}" rx="28" fill="#FFFFFF"/><rect x=".5" y=".5" width="${W - 1}" height="${H - 1}" rx="28" fill="none" stroke="${LINE}"/>
${text('Nine palettes, eleven steps each', 32, 48, 22, { f: F.semibold, fill: NAVY })}${text('Outlined: the step each product acts in. All in tokens/product-palettes.css', W - 32, 48, 16, { fill: MUTED, anchor: 'end' })}
${rows}`;
  write('assets/readme/palettes.svg', svg(W, H, 'Nine product palettes, eleven steps each, with each product action colour outlined', body, style));
}

// ================= spot the difference =================
{
  const pairs = [
    ['by AntaraX', 'Powered by AntaraX', 'the credit line'],
    ['RM1,200', 'RM 1,200', 'money'],
    ['11 Oct 2026 · 14:30', '10/11/2026 · 2:30 PM', 'dates and times on screen'],
    ['Nova · for teams', 'Nova', 'plan names'],
    ['support@go.antarax.ai', 'hello@reka.re', 'who customers write to'],
    ['Organisation', 'Organization', 'spelling'],
    ['draws on, lights up, breathes', 'spins, flips', 'loaders'],
  ];
  const W = 1280, top = 104, rh = 64, H = top + pairs.length * rh + 28, half = 470;
  let style = `@keyframes wob{0%,86%,100%{transform:rotate(0)}90%{transform:rotate(-6deg)}94%{transform:rotate(6deg)}}.wob{animation:wob 3.5s ease-in-out infinite}`;
  const OK = '#12B76A', BAD = '#F04438';
  const tick = (x, y) => `<circle cx="${x}" cy="${y}" r="13" fill="${OK}"/><path d="M${x - 6},${y}l4,4l8,-9" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;
  const cross = (x, y, i) => `<g class="b wob" style="animation-delay:${(i * .4).toFixed(1)}s"><circle cx="${x}" cy="${y}" r="13" fill="${BAD}"/><path d="M${x - 5},${y - 5}l10,10M${x + 5},${y - 5}l-10,10" stroke="#fff" stroke-width="3" stroke-linecap="round"/></g>`;
  const mono = (s) => /[0-9@]/.test(s);
  const rows = pairs.map(([good, bad, what], i) => {
    const y = top + i * rh;
    return `<g>
<rect x="32" y="${y}" width="${half}" height="50" rx="14" fill="#E9F8F0"/>${tick(60, y + 25)}${text(good, 86, y + 32, 18, { f: mono(good) ? F.mono : F.semibold, fill: '#0B5E3A' })}
<rect x="${32 + half + 16}" y="${y}" width="${half}" height="50" rx="14" fill="#FDECEB"/>${cross(32 + half + 44, y + 25, i)}${text(bad, 32 + half + 70, y + 32, 18, { f: mono(bad) ? F.mono : F.semibold, fill: '#A1271D', extra: 'opacity=".9"' })}
<path d="M${32 + half + 70},${y + 26}h${r1(width(bad, 18, mono(bad) ? F.mono : F.semibold))}" stroke="#A1271D" stroke-width="2" opacity=".55"/>
${text(what, W - 32, y + 31, 15, { fill: MUTED, anchor: 'end' })}</g>`;
  }).join('');
  const body = `<rect width="${W}" height="${H}" rx="28" fill="#FFFFFF"/><rect x=".5" y=".5" width="${W - 1}" height="${H - 1}" rx="28" fill="none" stroke="${LINE}"/>
${text('Spot the difference', 32, 50, 24, { f: F.semibold, fill: NAVY })}${text('On brand', 60, 84, 14, { f: F.semibold, fill: '#0B7A47' })}${text('Off brand', 32 + half + 44, 84, 14, { f: F.semibold, fill: '#A1271D' })}${text('Where the rules live: 12, 13 and 14', W - 32, 50, 16, { fill: MUTED, anchor: 'end' })}
${rows}`;
  write('assets/readme/spot-the-difference.svg', svg(W, H, 'Spot the difference: seven on-brand and off-brand pairs', body, style));
}
