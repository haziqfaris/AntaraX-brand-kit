// The README kit: the banner at the top and the footer at the foot of every AntaraX repository's README
// (owner, 26 October 2026: one standard README for every repo under AntaraX, with the AntaraX banner, logo and REKA).
// Same method as build-readme-art.mjs: each file is one self-contained SVG, text drawn as outlines from tools/fonts and
// logos inlined, because GitHub shows an SVG as an image and nothing inside it may load another file.
//
//   npm i -g opentype.js@1.3.4
//   NODE_PATH=$(npm root -g) node tools/build-readme-kit.mjs readme-kit/repos.json           every repo in the list
//   NODE_PATH=$(npm root -g) node tools/build-readme-kit.mjs readme-kit/repos.json yara tinara   just these
//
// Writes readme-kit/<repo>/banner.svg, readme-kit/footer.svg and, for REKA's own repositories (style "reka"), readme-kit/footer-reka.svg. Copy both into the repo as .github/readme/banner.svg and
// .github/readme/footer.svg; the README layout itself is guide/15-readme-standard.md.
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
const width = (s, size, f = F.regular) => f.getAdvanceWidth(s, size);
let DEFS = new Map();
function text(s, x, y, size, { f = F.regular, fill = '#0B1B4F', anchor = 'start', extra = '' } = {}) {
  const w = width(s, size, f), key = `${f.names.fullName.en}|${size}|${s}`;
  if (!DEFS.has(key)) DEFS.set(key, { id: `t${DEFS.size}`, d: f.getPath(s, 0, 0, size).toPathData(1) });
  const ox = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  return `<use href="#${DEFS.get(key).id}" x="${r1(ox)}" y="${r1(y)}" fill="${fill}" ${extra}/>`;
}
const wrap = (s, size, max, f = F.regular) => s.split(' ').reduce((lines, w) => { const l = lines.at(-1); if (l !== undefined && width(`${l} ${w}`, size, f) <= max) lines[lines.length - 1] = `${l} ${w}`; else lines.push(w); return lines; }, []);
// the largest size, down to a floor, at which the string fits in max
const fit = (s, size, max, f, floor) => { while (size > floor && width(s, size, f) > max) size -= 2; return size; };

// ---- an SVG file placed inside another, ids made unique ----
let uid = 0;
function inline(path, x, y, w, h, extra = '') {
  const src = read(path), id = `i${uid++}`;
  const vb = src.match(/<svg\b[^>]*viewBox="([^"]+)"/)[1];
  const inner = src.replace(/^[\s\S]*?<svg\b[^>]*>/, '').replace(/<\/svg>\s*$/, '').replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\bid="([^"]+)"/g, `id="${id}-$1"`).replace(/url\(#([^)]+)\)/g, `url(#${id}-$1)`).replace(/href="#([^"]+)"/g, `href="#${id}-$1"`);
  return `<svg x="${r1(x)}" y="${r1(y)}" width="${r1(w)}" height="${r1(h)}" viewBox="${vb}" preserveAspectRatio="xMidYMid meet" overflow="visible" ${extra}>${inner}</svg>`;
}
const svg = (w, h, label, body, style = '') => { const defs = [...DEFS.values()].map((t) => `<path id="${t.id}" d="${t.d}"/>`).join(''); DEFS = new Map(); return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="${label.replace(/"/g, '&quot;')}">
<defs>${defs}</defs><style>.b{transform-box:fill-box;transform-origin:center}${style}@media (prefers-reduced-motion:reduce){*{animation:none!important}}</style>
${body}</svg>\n`; };

// ---- colour helpers ----
const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
const toHex = (c) => '#' + c.map((v) => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, '0')).join('').toUpperCase();
const mix = (a, b, t) => toHex(hex(a).map((v, i) => v + (hex(b)[i] - v) * t));
// relative luminance (WCAG): a light product colour is darkened before white text sits on it
const lum = (h) => { const [r, g, b] = hex(h).map((v) => { v /= 255; return v <= .03928 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4; }); return .2126 * r + .7152 * g + .0722 * b; };
const onWhiteText = (c) => { let x = c; for (let i = 0; i < 8 && 1.05 / (lum(x) + .05) < 4.5; i++) x = mix(x, '#071233', .18); return x; };
const NAVY = '#0B1B4F', DEEP = '#071233', QUIET = '#C5CCF7', MUTED = '#5B6488', LINE = '#E3E7F2', CANVAS = '#FBFCFE';

// ================= banner =================
// repo: { slug, name, eyebrow, line, chips: [..], colour, logo, credit?, note? }   logo: a path in this kit, or omitted for the AntaraX mark
function banner(r) {
  const W = 1280, H = 400, c = r.colour, glow = mix(c, '#FFFFFF', .35), soft = mix(c, '#FFFFFF', .72);
  const grid = Array.from({ length: 33 }, (_, i) => `<path d="M${i * 40},0V${H}"/>`).join('') + Array.from({ length: 11 }, (_, i) => `<path d="M0,${i * 40}H${W}"/>`).join('');
  const nameSize = fit(r.name, 66, 700, F.bold, 40);
  const lines = wrap(r.line, 24, 720).slice(0, 2);
  let cx = 72;
  const chips = (r.chips || []).map((t, i) => {
    const w = width(t, 16, F.semibold) + 36;
    const g = `<g><rect x="${cx}" y="${300}" width="${r1(w)}" height="38" rx="19" fill="${i ? '#FFFFFF' : onWhiteText(c)}" fill-opacity="${i ? .1 : 1}" stroke="#FFFFFF" stroke-opacity="${i ? .28 : 0}"/>${text(t, cx + 18, 325, 16, { f: F.semibold, fill: '#FFFFFF' })}</g>`;
    cx += w + 10; return g;
  }).join('');
  // the right: the product's logo on a white disc inside a breathing halo of its colour, the AI sparkle orbiting
  const X = 1035, Y = 186, R = 96;
  const logo = r.logo ? inline(r.logo, X - 62, Y - 62, 124, 124) : inline('assets/antarax/antarax-mark.svg', X - 56, Y - 56, 112, 112);
  const style = `@keyframes halo{0%,100%{transform:scale(1);opacity:.5}50%{transform:scale(1.1);opacity:.85}}.halo{animation:halo 5s ease-in-out infinite}`
    + `@keyframes orbit{to{transform:rotate(360deg)}}.orbit{transform-origin:${X}px ${Y}px;animation:orbit 24s linear infinite}`
    + `@keyframes tw{0%,100%{opacity:.35}50%{opacity:1}}.tw{animation:tw 3.2s ease-in-out infinite}`
    + `@keyframes rise{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}.rise{animation:rise .8s ease-out both}`;
  const body = `<defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${DEEP}"/><stop offset=".6" stop-color="${mix(DEEP, c, .28)}"/><stop offset="1" stop-color="${mix(DEEP, c, .5)}"/></linearGradient>
<radialGradient id="gl"><stop offset="0" stop-color="${glow}" stop-opacity=".9"/><stop offset=".55" stop-color="${c}" stop-opacity=".35"/><stop offset="1" stop-color="${c}" stop-opacity="0"/></radialGradient>
<clipPath id="card"><rect width="${W}" height="${H}" rx="28"/></clipPath></defs>
<g clip-path="url(#card)"><rect width="${W}" height="${H}" fill="url(#bg)"/><g stroke="#FFFFFF" stroke-opacity=".05">${grid}</g>
<circle class="b halo" cx="${X}" cy="${Y}" r="${R + 110}" fill="url(#gl)"/>
<circle cx="${X}" cy="${Y}" r="${R + 22}" fill="none" stroke="#FFFFFF" stroke-opacity=".22" stroke-width="2" stroke-dasharray="2 12"/>
<g class="orbit">${inline('assets/antarax/sparkle.svg', X + R + 4, Y - 18, 36, 36, 'class="tw"')}</g>
<circle cx="${X}" cy="${Y}" r="${R}" fill="#FFFFFF"/>${logo}
<g class="rise">${inline('assets/antarax/antarax-mark-white.svg', 72, 46, 34, 34)}${text('AntaraX', 114, 71, 19, { f: F.semibold, fill: '#FFFFFF' })}${text(r.eyebrow, 72, 128, 17, { f: F.semibold, fill: soft })}</g>
<g class="rise" style="animation-delay:.12s">${text(r.name, 70, 194, nameSize, { f: F.bold, fill: '#FFFFFF' })}</g>
<g class="rise" style="animation-delay:.24s">${lines.map((l, i) => text(l, 72, 240 + i * 31, 24, { fill: QUIET })).join('')}</g>
<g class="rise" style="animation-delay:.36s">${chips}</g>
${text(`${r.name} · ${r.credit || 'by AntaraX'}`, X, Y + R + 62, 15, { f: F.semibold, fill: '#FFFFFF', anchor: 'middle' })}
${text(r.note || 'AntaraX, a product line of REKA Inisiatif Sdn Bhd', 72, 378, 13, { fill: '#8F9AC9' })}</g>`;
  return svg(W, H, `${r.name}: ${r.line}`, body, style);
}

// ================= footer =================
function footer() {
  const W = 1280, H = 220;
  const body = `<defs><clipPath id="card"><rect width="${W}" height="${H}" rx="24"/></clipPath><linearGradient id="bar" x1="0" x2="1"><stop offset="0" stop-color="#0459F7"/><stop offset=".5" stop-color="#4904B3"/><stop offset="1" stop-color="#FB9800"/></linearGradient></defs>
<g clip-path="url(#card)"><rect width="${W}" height="${H}" fill="${CANVAS}"/><rect width="${W}" height="6" fill="url(#bar)"/>
${inline('assets/antarax/antarax-mark.svg', 72, 58, 56, 56)}${text('AntaraX', 142, 96, 30, { f: F.bold, fill: NAVY })}
${text('Put intelligence to work.', 72, 150, 19, { f: F.semibold, fill: '#0459F7' })}${text('AI products for operations teams · antarax.ai', 72, 180, 15, { fill: MUTED })}
<path d="M640 46V174" stroke="${LINE}" stroke-width="2"/>
${inline('assets/reka/reka-lockup.svg', 700, 58, 190, 56)}
${text('AntaraX is the product line of REKA Inisiatif Sdn Bhd,', 700, 150, 16, { fill: NAVY })}${text('a deeptech R&D company in Kuala Lumpur, Malaysia · reka.re', 700, 178, 16, { fill: MUTED })}</g>`;
  return svg(W, H, 'AntaraX, put intelligence to work. AntaraX is the product line of REKA Inisiatif Sdn Bhd, Kuala Lumpur, Malaysia.', body);
}

// ================= REKA's own repositories =================
// REKA's frameworks (Heuristiks, RESAM) look like REKA, not AntaraX (owner, 26 October 2026), from haziqfaris/reka-brand-kit:
// near-black #0B0B0C with orange #FB9800 as the accent, warm light #F7F6F3, chamfer cuts and never rounded corners, HUD
// corner brackets, mono labels, the public stripe, and the REKA mark (whose HUD may turn slowly: REKA's own motion rule).
const RK = { dark: '#0B0B0C', dark1: '#161618', dark3: '#26262C', ink: '#F1F1F0', ink2: '#B9B9BD', mute: '#76767C', orange: '#FB9800', light: '#F7F6F3', lightInk: '#1D1D1D', lightInk2: '#565656', border: '#E5E4E1' };
const chamfer = (x, y, w, h, c) => `M${x + c},${y}H${x + w - c}L${x + w},${y + c}V${y + h - c}L${x + w - c},${y + h}H${x + c}L${x},${y + h - c}V${y + c}Z`;
const brackets = (x, y, w, h, l, col, op = .55) => `<g fill="none" stroke="${col}" stroke-width="2" opacity="${op}"><path d="M${x},${y + l}V${y}H${x + l}"/><path d="M${x + w - l},${y}H${x + w}V${y + l}"/><path d="M${x},${y + h - l}V${y + h}H${x + l}"/><path d="M${x + w - l},${y + h}H${x + w}V${y + h - l}"/></g>`;
const stripe = (y, h, W, op = 1) => { const tw = 3071.5 * (h / 119); let s = ''; for (let x = -tw * .2; x < W; x += tw) s += inline('assets/reka/reka-pubstripe-tile.svg', x, y, tw, h, `opacity="${op}"`); return s; };
function rekaBanner(r) {
  const W = 1280, H = 400;
  const dots = Array.from({ length: 32 }, (_, i) => Array.from({ length: 10 }, (_, j) => `<circle cx="${20 + i * 40}" cy="${20 + j * 40}" r="1.2"/>`).join('')).join('');
  const nameSize = fit(r.name, 66, 700, F.bold, 40);
  const lines = wrap(r.line, 24, 720).slice(0, 2);
  let cx = 72;
  const chips = (r.chips || []).map((t, i) => {
    const w = width(t.toUpperCase(), 14, F.mono) + 32;
    const g = `<g><path d="${chamfer(cx, 300, w, 36, 7)}" fill="${i ? 'none' : RK.orange}" stroke="${i ? RK.dark3 : 'none'}" stroke-width="1.5"/>${text(t.toUpperCase(), cx + 16, 323, 14, { f: F.mono, fill: i ? RK.ink2 : RK.dark })}</g>`;
    cx += w + 10; return g;
  }).join('');
  const X = 1040, Y = 190;
  const style = `@keyframes spin{to{transform:rotate(360deg)}}.spin{transform-origin:${X}px ${Y}px;animation:spin 12s linear infinite}`
    + `@keyframes scan{0%,100%{transform:translateY(-118px);opacity:0}10%,90%{opacity:.5}50%{transform:translateY(118px)}}.scan{animation:scan 6s ease-in-out infinite}`
    + `@keyframes rise{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}.rise{animation:rise .8s cubic-bezier(.2,.85,.2,1) both}`;
  const body = `<defs><clipPath id="card"><path d="${chamfer(0, 0, W, H, 28)}"/></clipPath><clipPath id="win"><path d="${chamfer(X - 130, Y - 130, 260, 260, 18)}"/></clipPath>
<radialGradient id="gl"><stop offset="0" stop-color="${RK.orange}" stop-opacity=".28"/><stop offset="1" stop-color="${RK.orange}" stop-opacity="0"/></radialGradient></defs>
<g clip-path="url(#card)"><rect width="${W}" height="${H}" fill="${RK.dark}"/><g fill="#FFFFFF" opacity=".07">${dots}</g>
<circle cx="${X}" cy="${Y}" r="250" fill="url(#gl)"/>
<path d="${chamfer(X - 130, Y - 130, 260, 260, 18)}" fill="${RK.dark1}" stroke="${RK.dark3}" stroke-width="2"/>
<g clip-path="url(#win)"><g class="spin" opacity=".35">${inline('assets/reka/reka-hud.svg', X - 118, Y - 118, 236, 236)}</g><rect class="scan" x="${X - 130}" y="${Y - 1}" width="260" height="2" fill="${RK.orange}"/></g>
${inline('assets/reka/reka-mark.svg', X - 70, Y - 70, 140, 140)}${brackets(X - 146, Y - 146, 292, 292, 22, RK.orange, .7)}
${text(`${r.name.toUpperCase()} // ${(r.credit || 'by REKA').toUpperCase()}`, X, Y + 182, 13, { f: F.mono, fill: RK.ink2, anchor: 'middle' })}
<g class="rise">${inline('assets/reka/reka-lockup.svg', 72, 44, 132, 37)}${text(`// ${r.eyebrow.toUpperCase()}`, 72, 128, 15, { f: F.mono, fill: RK.orange })}</g>
<g class="rise" style="animation-delay:.12s">${text(r.name, 70, 194, nameSize, { f: F.bold, fill: RK.ink })}</g>
<g class="rise" style="animation-delay:.24s">${lines.map((l, i) => text(l, 72, 240 + i * 31, 24, { fill: RK.ink2 })).join('')}</g>
<g class="rise" style="animation-delay:.36s">${chips}</g>
${text(r.note || 'REKA Inisiatif Sdn Bhd · AI for the physical world · reka.re', 72, 376, 13, { f: F.mono, fill: RK.mute })}
${brackets(14, 14, W - 28, H - 28, 30, RK.orange, .45)}${stripe(H - 12, 12, W, .9)}</g>`;
  return svg(W, H, `${r.name}: ${r.line}`, body, style);
}
function rekaFooter() {
  const W = 1280, H = 220;
  const body = `<defs><clipPath id="card"><path d="${chamfer(0, 0, W, H, 22)}"/></clipPath></defs>
<g clip-path="url(#card)"><rect width="${W}" height="${H}" fill="${RK.light}"/>${stripe(0, 14, W)}
${inline('assets/reka/reka-lockup.svg', 72, 54, 214, 60)}
${text('AI for the physical world.', 72, 150, 20, { f: F.semibold, fill: RK.lightInk })}${text('Born on Southeast Asian roads. Built for global operations.', 72, 180, 15, { fill: RK.lightInk2 })}
<path d="M660 48V178" stroke="${RK.border}" stroke-width="2"/>
${text('// REKA INISIATIF SDN BHD', 720, 82, 14, { f: F.mono, fill: '#E65D01' })}
${text('Kuala Lumpur, Malaysia', 720, 118, 18, { f: F.semibold, fill: RK.lightInk })}${text('reka.re · holla@reka.re', 720, 148, 16, { fill: RK.lightInk2 })}
${text('Used across REKA’s projects and AntaraX, its AI product line.', 720, 178, 15, { fill: RK.lightInk2 })}
${brackets(10, 24, W - 20, H - 34, 24, RK.orange, .5)}</g>`;
  return svg(W, H, 'REKA Inisiatif Sdn Bhd. AI for the physical world. Kuala Lumpur, Malaysia, reka.re.', body);
}

const [cfg, ...only] = process.argv.slice(2);
if (!cfg) { console.error('usage: node tools/build-readme-kit.mjs readme-kit/repos.json [slug ...]'); process.exit(1); }
const repos = JSON.parse(fs.readFileSync(cfg, 'utf8')).repos.filter((r) => !only.length || only.includes(r.slug));
for (const r of repos) write(`readme-kit/${r.slug}/banner.svg`, r.style === 'reka' ? rekaBanner(r) : banner(r));
write('readme-kit/footer.svg', footer());
write('readme-kit/footer-reka.svg', rekaFooter());
