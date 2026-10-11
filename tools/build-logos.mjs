// Builds the logos that were missing, and the options the owner chooses between (guide/14, "Logos"):
//   - Loom and Motion A-marks, in the same construction as Yara's and AX Frame's;
//   - the PLExyz line marks (Crowd, Trace, Flow, Transit, Site, Ward, Yard): the force field and shard
//     from PLExyz Grid's official mark, with each product's spatial context on the floor;
//   - three Tinara logo options, none of them its motif;
//   - reconciled options for PLExyz Grid (zones in their AntaraX equivalents) and Janka (a bolder J in its own colour).
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
const grid = read('assets/products/plexyz/plexyz-grid-mark.svg');
const paths = [...grid.matchAll(/<path [^>]*\/>/g)].map((m) => m[0]);
const FIELD = paths[0], SHARD = paths.slice(9).join('');
const T = [390, 363], R = [773, 620], B = [390, 865], L = [4, 620]; // floor corners
const P = (u, v) => [0, 1].map((i) => (1 - u) * (1 - v) * T[i] + u * (1 - v) * R[i] + u * v * B[i] + (1 - u) * v * L[i]);
const pt = (u, v) => P(u, v).map(f).join(',');
const quad = (u0, v0, u1, v1) => `M${pt(u0, v0)} L${pt(u1, v0)} L${pt(u1, v1)} L${pt(u0, v1)} Z`;
const dot = (u, v, r, fill, stroke = '#2C09B2') => { const [x, y] = P(u, v); return `<ellipse cx="${f(x)}" cy="${f(y)}" rx="${r}" ry="${f(r * 0.62)}" fill="${fill}" stroke="${stroke}" stroke-width="6"/>`; };
const line = (pts, stroke, w = 14, extra = '') => `<path d="M${pts.map(([u, v]) => pt(u, v)).join(' L')}" fill="none" stroke="${stroke}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" ${extra}/>`;
const Z = { lav: '#CBB6FA', teal: '#4FD7D1', orange: '#FD9001', pink: '#FD4F85', ink: '#2C09B2', floor: '#EFE9FE' };
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

// ---- Reconciled options ----
// Grid: the same mark, its zones in their AntaraX equivalents (Grid keeps its own until the owner chooses)
write('assets/products/plexyz/options/plexyz-grid-mark-antarax-colours.svg', grid.replaceAll('#4FD7D1', '#0CC4FB').replaceAll('#FD9001', '#F47B3D').replaceAll('#FD4F85', '#E9579D').replaceAll('#CBB6FA', '#B9B8F5'));
// Janka: a bolder J in Janka's own colour, so its weight sits with the flat marks; ticks and spark unchanged
{
  const j = read('assets/products/janka/janka-mark.svg');
  let n = 0;
  write('assets/products/janka/options/janka-mark-bold.svg', j.replace(/<path d="([^"]+)" fill="#0B1B4F"\/>/g, (m, d) => (++n === 1 ? `<path d="${d}" fill="#077DA1" stroke="#077DA1" stroke-width="7" stroke-linejoin="round"/>` : m)).replace(/fill="#0CC4FB"\/>/, 'fill="#0CC4FB" stroke="#0CC4FB" stroke-width="5" stroke-linejoin="round"/>'));
}

// ---- Tinara logo options (none of them its motif, kerawang) ----
{
  const G = '#7A1E3C', GL = '#CB6881', AU = '#D6A84F';
  const svg = (b, label) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" role="img" aria-label="${label}">${b}</svg>\n`;
  write('assets/products/tinara/options/tinara-logo-a-rank.svg', svg(
    `<rect x="14" y="52" width="18" height="34" rx="9" fill="${GL}"/><rect x="41" y="38" width="18" height="48" rx="9" fill="${GL}"/><rect x="68" y="24" width="18" height="62" rx="9" fill="${G}"/><circle cx="77" cy="12" r="8" fill="${AU}"/>`, 'Tinara, option A: the next one'));
  write('assets/products/tinara/options/tinara-logo-b-opening.svg', svg(
    `<path d="M22,12 H78 A14,14 0 0 1 92,26 V62 A14,14 0 0 1 78,76 H40 L22,92 V76 A14,14 0 0 1 8,62 V26 A14,14 0 0 1 22,12 Z" fill="${G}"/><path d="M30,32 H62 M46,32 V60" stroke="#FFFFFF" stroke-width="9" stroke-linecap="round"/><circle cx="72" cy="32" r="6.5" fill="${AU}"/>`, 'Tinara, option B: the opening line'));
  write('assets/products/tinara/options/tinara-logo-c-signal.svg', svg(
    `<circle cx="38" cy="62" r="26" fill="${G}"/><circle cx="38" cy="62" r="9" fill="#FFFFFF"/><path d="M62,34 A30,30 0 0 1 66,46" stroke="${AU}" stroke-width="8" stroke-linecap="round" fill="none"/><path d="M68,20 A46,46 0 0 1 80,46" stroke="${AU}" stroke-width="8" stroke-linecap="round" fill="none"/><circle cx="86" cy="14" r="6" fill="${AU}"/>`, 'Tinara, option C: the signal'));
}
