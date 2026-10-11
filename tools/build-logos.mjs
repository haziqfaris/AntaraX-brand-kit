// Builds the logos that were missing, and the options the owner chooses between (guide/14, "Logos"):
//   - Loom and Motion A-marks, in the same construction as Yara's and AX Frame's;
//   - the PLExyz line marks (Crowd, Trace, Flow, Transit, Site, Ward, Yard): the force field and shard
//     from PLExyz Grid's official mark, with each product's spatial context on the floor;
//   - Tinara logo options, none of them its motif (the owner chose the signal idea; variations of it);
//   - PLExyz Grid in AntaraX colours (owner, 11 October 2026): the owner's files stay as *-original.svg and the
//     zone colours move to their AntaraX equivalents in the mark, wordmark and lockups.
//   node tools/build-logos.mjs
import fs from 'node:fs';

const KIT = new URL('../', import.meta.url);
const read = (p) => fs.readFileSync(new URL(p, KIT), 'utf8');
const write = (p, s) => { fs.mkdirSync(new URL(p.replace(/[^/]+$/, ''), KIT), { recursive: true }); fs.writeFileSync(new URL(p, KIT), s); console.log(p); };
const f = (n) => +n.toFixed(1);

// ---- A-marks: the A body and its hole from AX Frame's mark, with the family icon from the master file ----
{
  const frame = read('assets/products/frame/frame-mark.svg');
  const icons = JSON.parse(read('assets/families/famicons.json'));
  const head = frame.slice(0, frame.indexOf('<g transform="translate(186.50'));
  for (const [fam, dir] of [['Loom', 'loom'], ['Motion', 'motion']]) {
    const [t, body] = icons[fam].icon.split('|');
    // centre the icon in the A's hole (357.5, 441 in the A's own space) from the bounds of its absolute path points
    const sc = +t.match(/scale\(([\d.]+)\)/)[1], nums = [...body.matchAll(/ d="([^"]+)"/g)].flatMap((m) => [...m[1].matchAll(/(-?[\d.]+),(-?[\d.]+)/g)].map((q) => [+q[1], +q[2]]));
    const xs = nums.map((q) => q[0]), ys = nums.map((q) => q[1]), cx = (Math.min(...xs) + Math.max(...xs)) / 2, cy = (Math.min(...ys) + Math.max(...ys)) / 2;
    const tt = `transform="translate(${f(357.5 - cx * sc)},${f(441 - cy * sc)}) scale(${sc})"`;
    write(`assets/products/${dir}/${dir}-mark.svg`, `${head.replace('mask-wm-frame-stacked', `mask-wm-${dir}-stacked`).replace('url(#mask-wm-frame-stacked)', `url(#mask-wm-${dir}-stacked)`)}<g ${tt}>${body}</g>\n          </g></svg>\n`);
  }
}

// ---- PLExyz line marks ----
// Grid's zones in their AntaraX equivalents: teal to sparkle cyan, orange to sparkle orange, pink to Tide pink, lavender to an indigo tint
const AXC = (t) => t.replaceAll('#4FD7D1', '#0CC4FB').replaceAll('#FD9001', '#F47B3D').replaceAll('#FD4F85', '#E9579D').replaceAll('#CBB6FA', '#B9B8F5');
for (const n of ['mark', 'wordmark', 'lockup-horizontal', 'lockup-centered']) write(`assets/products/plexyz/plexyz-grid-${n}.svg`, AXC(read(`assets/products/plexyz/plexyz-grid-${n}-original.svg`)));
const grid = read('assets/products/plexyz/plexyz-grid-mark.svg');
const paths = [...grid.matchAll(/<path [^>]*\/>/g)].map((m) => m[0]);
const FIELD = paths[0], SHARD = paths.slice(9).join('');
const T = [390, 363], R = [773, 620], B = [390, 865], L = [4, 620]; // floor corners
const P = (u, v) => [0, 1].map((i) => (1 - u) * (1 - v) * T[i] + u * (1 - v) * R[i] + u * v * B[i] + (1 - u) * v * L[i]);
const pt = (u, v) => P(u, v).map(f).join(',');
const quad = (u0, v0, u1, v1) => `M${pt(u0, v0)} L${pt(u1, v0)} L${pt(u1, v1)} L${pt(u0, v1)} Z`;
const dot = (u, v, r, fill, stroke = '#2C09B2') => { const [x, y] = P(u, v); return `<ellipse cx="${f(x)}" cy="${f(y)}" rx="${r}" ry="${f(r * 0.62)}" fill="${fill}" stroke="${stroke}" stroke-width="6"/>`; };
const line = (pts, stroke, w = 14, extra = '') => `<path d="M${pts.map(([u, v]) => pt(u, v)).join(' L')}" fill="none" stroke="${stroke}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" ${extra}/>`;
const Z = { lav: '#B9B8F5', teal: '#0CC4FB', orange: '#F47B3D', pink: '#E9579D', ink: '#2C09B2', floor: '#EFEFFD' };
const slab = (c) => `<path d="M4,620 L390,865 L773,620 L773,670 L390,915 L4,670 Z" fill="${c}" stroke="${Z.ink}" stroke-width="7" stroke-linejoin="round"/><path d="M390,865 L390,915" stroke="${Z.ink}" stroke-width="7"/>`;
const floor = `<path d="M${pt(0, 0)} L${pt(1, 0)} L${pt(1, 1)} L${pt(0, 1)} Z" fill="${Z.floor}" stroke="${Z.ink}" stroke-width="7" stroke-linejoin="round"/>`;
const mark = (ctx, sideColour) => `<svg viewBox="-40 -40 860 1000" xmlns="http://www.w3.org/2000/svg">${FIELD}${slab(sideColour)}${floor}${ctx}${SHARD}</svg>\n`;
const CONTEXT = {
  // scattered entities: people counted as dots, never faces
  crowd: [[.18, .3, Z.teal], [.3, .62, Z.pink], [.42, .82, Z.orange], [.62, .7, Z.teal], [.78, .4, Z.pink], [.82, .82, Z.teal], [.55, .9, Z.pink], [.2, .78, Z.orange], [.72, .18, Z.orange]].map(([u, v, c]) => dot(u, v, 46, c)).join(''),
  // a tag, its last-seen trail, and where it is now
  trace: line([[.14, .86], [.3, .7], [.46, .74], [.62, .56], [.8, .58]], Z.ink, 14, 'stroke-dasharray="2 30"') + `<path d="M${pt(.08, .8)} L${pt(.22, .8)} L${pt(.22, .94)} L${pt(.08, .94)} Z" fill="${Z.orange}" stroke="${Z.ink}" stroke-width="6" stroke-linejoin="round"/>` + dot(.8, .58, 62, Z.teal) + dot(.8, .58, 24, '#fff'),
  // movement: a path across the space
  flow: line([[.05, .55], [.3, .3], [.55, .62], [.8, .38], [.96, .52]], Z.pink, 26) + line([[.05, .55], [.3, .3], [.55, .62], [.8, .38], [.96, .52]], '#fff', 6, 'stroke-dasharray="18 22"'),
  // routes between points
  transit: line([[.12, .2], [.5, .2], [.5, .8], [.88, .8]], Z.orange, 30) + [[.12, .2, Z.teal], [.5, .5, Z.pink], [.88, .8, Z.teal]].map(([u, v, c]) => dot(u, v, 54, c)).join('') + dot(.5, .2, 26, '#fff') + dot(.5, .8, 26, '#fff'),
  // layers of a site, stacked
  site: [0, 1, 2].map((i) => `<path d="${quad(.18, .18, .82, .82)}" transform="translate(0 ${-i * 46})" fill="${[Z.teal, Z.orange, Z.pink][i]}" stroke="${Z.ink}" stroke-width="6" stroke-linejoin="round" opacity="${1 - i * .08}"/>`).join(''),
  // walled rooms
  ward: `<path d="${quad(0, 0, .5, .5)}" fill="${Z.teal}"/><path d="${quad(.5, .5, 1, 1)}" fill="${Z.pink}"/>` + line([[.5, 0], [.5, .38]], Z.ink, 16) + line([[.5, .58], [.5, 1]], Z.ink, 16) + line([[0, .5], [.36, .5]], Z.ink, 16) + line([[.6, .5], [1, .5]], Z.ink, 16),
  // parking lanes with vehicles
  yard: [.25, .5, .75].map((v) => line([[.04, v], [.96, v]], Z.ink, 7, 'stroke-dasharray="30 26"')).join('') + [[.12, .1], [.42, .1], [.72, .1], [.26, .58], [.56, .58], [.12, .82], [.72, .82]].map(([u, v], i) => `<path d="${quad(u, v, u + .16, v + .1)}" fill="${[Z.orange, Z.teal, Z.pink][i % 3]}" stroke="${Z.ink}" stroke-width="6" stroke-linejoin="round"/>`).join(''),
};
const SIDE = { crowd: Z.teal, trace: Z.orange, flow: Z.pink, transit: Z.orange, site: Z.teal, ward: Z.teal, yard: Z.orange };
for (const [k, ctx] of Object.entries(CONTEXT)) write(`assets/products/plexyz/plexyz-${k}-mark.svg`, mark(ctx, SIDE[k]));

// ---- Tinara logo options (none of them its motif, kerawang) ----
{
  const G = '#7A1E3C', GL = '#CB6881', AU = '#D6A84F';
  const svg = (b, label) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" role="img" aria-label="${label}">${b}</svg>\n`;
  write('assets/products/tinara/options/tinara-logo-c1-signal.svg', svg(
    `<circle cx="38" cy="62" r="26" fill="${G}"/><circle cx="38" cy="62" r="9" fill="#FFFFFF"/><path d="M62,34 A30,30 0 0 1 66,46" stroke="${AU}" stroke-width="8" stroke-linecap="round" fill="none"/><path d="M68,20 A46,46 0 0 1 80,46" stroke="${AU}" stroke-width="8" stroke-linecap="round" fill="none"/><circle cx="86" cy="14" r="6" fill="${AU}"/>`, 'Tinara, option C: the signal'));
  // variations of the signal (the owner's choice): one company, and a gold signal reaching out from it
  const arcs = (cx, cy, r1, r2, a0, a1, w = 8) => [r1, r2].map((r) => { const p = (a) => [cx + r * Math.cos(a * Math.PI / 180), cy + r * Math.sin(a * Math.PI / 180)].map(f).join(','); return `<path d="M${p(a0)} A${r},${r} 0 0 1 ${p(a1)}" stroke="${AU}" stroke-width="${w}" stroke-linecap="round" fill="none"/>`; }).join('');
  const V = {
    'c2-tile': [`<rect x="8" y="44" width="48" height="48" rx="14" fill="${G}"/><circle cx="32" cy="68" r="8" fill="#FFFFFF"/>${arcs(56, 44, 18, 32, -80, -10)}<circle cx="88" cy="12" r="6" fill="${AU}"/>`, 'the company as a tile'],
    'c3-antenna': [`<path d="M50,92 V46" stroke="${G}" stroke-width="14" stroke-linecap="round"/><circle cx="50" cy="40" r="13" fill="${G}"/><circle cx="50" cy="40" r="5" fill="#FFFFFF"/>${arcs(50, 40, 24, 38, -150, -30)}`, 'a T that broadcasts'],
    'c4-chosen': [`<circle cx="18" cy="70" r="10" fill="${GL}"/><circle cx="44" cy="70" r="10" fill="${GL}"/><circle cx="74" cy="66" r="16" fill="${G}"/><circle cx="74" cy="66" r="6" fill="#FFFFFF"/>${arcs(74, 66, 26, 40, -110, -30)}`, 'many companies, one signalling'],
    'c5-ping': [`<circle cx="44" cy="56" r="22" fill="${G}"/><circle cx="44" cy="56" r="8" fill="#FFFFFF"/>${arcs(44, 56, 32, 44, -170, -10)}<circle cx="86" cy="22" r="6" fill="${AU}"/>`, 'a wider ping'],
    'c6-open': [`<path d="M14,40 A30,30 0 1 1 30,82 L14,92 Z" fill="${G}"/><circle cx="44" cy="58" r="8" fill="#FFFFFF"/>${arcs(44, 58, 34, 46, -70, 10)}`, 'a signal that opens a conversation'],
  };
  for (const [k, [b, label]] of Object.entries(V)) write(`assets/products/tinara/options/tinara-logo-${k}.svg`, svg(b, `Tinara, signal option: ${label}`));
}
