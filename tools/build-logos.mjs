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
// PLExyz master mark (proposed): the line's own mark, for PLExyz as a whole. "Same space. Same entity. Different
// behaviour": the master shows the space and the entity with no behaviour, so the floor is empty. Two forms: the
// mark on a violet disc (the round mark in the line overview), and the bare mark.
{
  const bare = mark('', Z.lav);
  write('assets/products/plexyz/plexyz-master-mark.svg', bare);
  const inner = bare.replace(/^<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
  write('assets/products/plexyz/plexyz-master-disc.svg', `<svg viewBox="-150 -110 1080 1080" xmlns="http://www.w3.org/2000/svg"><circle cx="390" cy="430" r="530" fill="${Z.ink}"/><g transform="translate(390 430) scale(.78) translate(-390 -460)">${inner.replaceAll('stroke="#2C09B2"', 'stroke="#FFFFFF"').replace('fill="#EFEFFD"', 'fill="#3A1FC4"')}</g></svg>\n`);
}

// ---- Tinara's logo: the signal (owner chose C1 on 11 October 2026) ----
// One garnet company, two gold arcs and a dot reaching out from it: the company ready to buy. Never its motif (kerawang).
{
  const G = '#7A1E3C', AU = '#D6A84F';
  const svg = (b, label) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" role="img" aria-label="${label}">${b}</svg>\n`;
  const signal = (body, core, gold, w = 8) => `<circle cx="38" cy="62" r="26" fill="${body}"/><circle cx="38" cy="62" r="9" fill="${core}"/><path d="M62,34 A30,30 0 0 1 66,46" stroke="${gold}" stroke-width="${w}" stroke-linecap="round" fill="none"/><path d="M68,20 A46,46 0 0 1 80,46" stroke="${gold}" stroke-width="${w}" stroke-linecap="round" fill="none"/><circle cx="86" cy="14" r="6" fill="${gold}"/>`;
  write('assets/products/tinara/tinara-logo.svg', svg(signal(G, '#FFFFFF', AU), 'Tinara'));
  // for navy and dark grounds: the company in a light garnet, its core the ground colour
  write('assets/products/tinara/tinara-logo-light.svg', svg(signal('#F7ACBB', '#071233', AU), 'Tinara'));
  // 24px and below: one heavier arc and the dot, so the signal still reads
  write('assets/products/tinara/tinara-logo-small.svg', svg(`<circle cx="38" cy="62" r="28" fill="${G}"/><circle cx="38" cy="62" r="10" fill="#FFFFFF"/><path d="M64,30 A40,40 0 0 1 72,52" stroke="${AU}" stroke-width="12" stroke-linecap="round" fill="none"/><circle cx="84" cy="16" r="9" fill="${AU}"/>`, 'Tinara'));
}


// ---- AwanGan's logo: the cloud in orbit (owner, 11 November 2026: "AwanGan should be cloud and orbit") ----
// Its own mark (AwanGan is no longer an A-mark stand-in): a cloud (awan) in Nalar gold, a navy ring round it and a
// sparkle cyan moon on the ring. Where the ring's front passes over the cloud, and round the moon, a gap is cut
// (a mask, so it shows the ground on any colour): cloud and orbit stay two shapes down to 24px. Solid ring round a
// solid body, unlike PLExyz Crowd's orbit motif (a thin dashed ellipse with signal arcs). Variants: full colour,
// -small (24px and below: a heavier ring, a larger moon, a wider gap), -white (navy and dark grounds), -mono (currentColor).
{
  const svg = (b, label) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" role="img" aria-label="${label}">${b}</svg>\n`;
  const RING = { cx: 50, cy: 55, rx: 46, ry: 12.5, rot: -13 };
  const rad = (d) => (d * Math.PI) / 180;
  const onRing = (t) => { const { cx, cy, rx, ry, rot } = RING, x = rx * Math.cos(rad(t)), y = ry * Math.sin(rad(t)); return [f(cx + x * Math.cos(rad(rot)) - y * Math.sin(rad(rot))), f(cy + x * Math.sin(rad(rot)) + y * Math.cos(rad(rot)))]; };
  const halfRing = (front) => { const { cx, cy, rx, ry, rot } = RING; return `M${cx - rx},${cy} A${rx},${ry} 0 0 ${front ? 0 : 1} ${cx + rx},${cy}`; };
  const tr = `transform="rotate(${RING.rot} ${RING.cx} ${RING.cy})"`;
  const cloud = '<circle cx="28.5" cy="51" r="14.5"/><circle cx="50" cy="38.5" r="20.5"/><circle cx="71.5" cy="48" r="15"/><rect x="14" y="50" width="72" height="23" rx="11.5"/>';
  const mark = ({ id, body, ring, moon, w = 7, gap = 10.5, mr = 6.5, t = 28 }) => {
    const [mx, my] = onRing(t);
    return `<defs><mask id="${id}" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100"><rect width="100" height="100" fill="#fff"/><path d="${halfRing(true)}" ${tr} fill="none" stroke="#000" stroke-width="${gap}" stroke-linecap="round"/><circle cx="${mx}" cy="${my}" r="${f(mr + gap / 2.6)}" fill="#000"/></mask><mask id="${id}r" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100"><rect width="100" height="100" fill="#fff"/><circle cx="${mx}" cy="${my}" r="${f(mr + gap / 2.6)}" fill="#000"/></mask></defs>`
      + `<g mask="url(#${id}r)"><path d="${halfRing(false)}" ${tr} fill="none" stroke="${ring}" stroke-width="${w}" stroke-linecap="round"/></g>`
      + `<g fill="${body}" mask="url(#${id})">${cloud}</g>`
      + `<g mask="url(#${id}r)"><path d="${halfRing(true)}" ${tr} fill="none" stroke="${ring}" stroke-width="${w}" stroke-linecap="round"/></g>`
      + `<circle cx="${mx}" cy="${my}" r="${mr}" fill="${moon}"/>`;
  };
  const GOLD = '#B48B02', NAVY = '#0B1B4F', CYAN = '#0CC4FB';
  write('assets/products/awangan/awangan-mark.svg', svg(mark({ id: 'awg', body: GOLD, ring: NAVY, moon: CYAN }), 'AwanGan'));
  write('assets/products/awangan/awangan-mark-small.svg', svg(mark({ id: 'awgs', body: GOLD, ring: NAVY, moon: CYAN, w: 9.5, gap: 12.5, mr: 8.5 }), 'AwanGan'));
  // on navy and dark grounds: a white cloud, a gold ring, the cyan moon
  write('assets/products/awangan/awangan-mark-white.svg', svg(mark({ id: 'awgw', body: '#FFFFFF', ring: GOLD, moon: CYAN }), 'AwanGan'));
  write('assets/products/awangan/awangan-mark-mono.svg', svg(mark({ id: 'awgm', body: 'currentColor', ring: 'currentColor', moon: 'currentColor' }), 'AwanGan'));
}

// ---- BumiNyata's logo: two peaks over the ground (owner, 11 November 2026: the recommended M2) ----
// Its own mark: two peaks in clay over the ground and what lies beneath, the three levels of its antarax.ai page (up the
// mountain, on the ground, underground). Navy ground line, dark clay underground, one sparkle orange highlight: every byte
// kept on its own ground. Variants: full colour, -small (24px and below), -white (navy and dark grounds), -mono.
{
  const svg = (b, label) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" role="img" aria-label="${label}">${b}</svg>\n`;
  const mark = ({ peaks, ground, under, dot, small = false }) => small
    ? `<path d="M8,66 L34,25 Q40,16 46,25 L55,39 L62,30 Q67,23 72,30 L92,66 Z" fill="${peaks}"/><rect x="7" y="72" width="86" height="11" rx="5.5" fill="${ground}"/><rect x="19" y="87" width="44" height="10" rx="5" fill="${under}"/><circle cx="76" cy="92" r="6.5" fill="${dot}"/>`
    : `<path d="M10,69 L35,29 Q40,21 45,29 L55,45 L62,35 Q67,28 72,35 L90,69 Z" fill="${peaks}"/><rect x="9" y="74" width="82" height="9" rx="4.5" fill="${ground}"/><rect x="21" y="87" width="44" height="8" rx="4" fill="${under}"/><circle cx="74" cy="91" r="5" fill="${dot}"/>`;
  const CLAY = '#8A5A2E', NAVY = '#0B1B4F', UNDER = '#603C1A', ORANGE = '#F47B3D';
  write('assets/products/buminyata/buminyata-mark.svg', svg(mark({ peaks: CLAY, ground: NAVY, under: UNDER, dot: ORANGE }), 'BumiNyata'));
  write('assets/products/buminyata/buminyata-mark-small.svg', svg(mark({ peaks: CLAY, ground: NAVY, under: UNDER, dot: ORANGE, small: true }), 'BumiNyata'));
  // on navy and dark grounds: white peaks, a gold ground line, light clay beneath
  write('assets/products/buminyata/buminyata-mark-white.svg', svg(mark({ peaks: '#FFFFFF', ground: '#B48B02', under: '#E2BC9D', dot: ORANGE }), 'BumiNyata'));
  write('assets/products/buminyata/buminyata-mark-mono.svg', svg(mark({ peaks: 'currentColor', ground: 'currentColor', under: 'currentColor', dot: 'currentColor' }), 'BumiNyata'));
}

// ---- Tiko's logo: Tiko Classic's head (owner, 11 November 2026: the recommended K1) ----
// The head is the mark, redrawn to the own-mark rules (12): white helmet, navy ink, a deep-ink faceplate with a purple cast,
// the crest in Tiko's highlight, Tide pink. A logo is not decoration (07); the full character appears only where it does a
// job, with words. Until the production pack (Tiko Q-06) is drawn, this is the kit's mark; the pack keeps its construction.
// Variants: full colour, -small (24px and below: heavier ink, larger eyes), -mono.
{
  const svg = (b, label) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" role="img" aria-label="${label}">${b}</svg>\n`;
  const head = ({ crest, ink, plate, face, helmet, w = 5, eye = 5.2, small = false }) => `<path d="M44,17 Q50,4 58,9 L56,20 H45 Z" fill="${crest}"/><rect x="12" y="18" width="76" height="72" rx="32" fill="${helmet}" stroke="${ink}" stroke-width="${w}"/><rect x="${small ? 21 : 23}" y="${small ? 33 : 35}" width="${small ? 58 : 54}" height="${small ? 42 : 38}" rx="18" fill="${plate}"/><circle cx="40" cy="52" r="${eye}" fill="${face}"/><circle cx="60" cy="52" r="${eye}" fill="${face}"/>${small ? '' : `<path d="M43,62 Q50,67.5 57,62" fill="none" stroke="${face}" stroke-width="3.4" stroke-linecap="round"/>`}`;
  const PINK = '#E9579D', NAVY = '#0B1B4F', PLATE = '#2A1D6E';
  write('assets/products/tiko/tiko-mark.svg', svg(head({ crest: PINK, ink: NAVY, plate: PLATE, face: '#FFFFFF', helmet: '#FFFFFF' }), 'Tiko'));
  write('assets/products/tiko/tiko-mark-small.svg', svg(head({ crest: PINK, ink: NAVY, plate: PLATE, face: '#FFFFFF', helmet: '#FFFFFF', w: 7, eye: 7, small: true }), 'Tiko'));
  // one colour: the helmet is the ground, the ink and faceplate take the colour, the face is cut out
  write('assets/products/tiko/tiko-mark-mono.svg', svg(`<defs><mask id="tkm" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100"><rect width="100" height="100" fill="#fff"/><circle cx="40" cy="52" r="5.2" fill="#000"/><circle cx="60" cy="52" r="5.2" fill="#000"/><path d="M43,62 Q50,67.5 57,62" fill="none" stroke="#000" stroke-width="3.4" stroke-linecap="round"/></mask></defs><g fill="currentColor"><path d="M44,17 Q50,4 58,9 L56,20 H45 Z"/><rect x="12" y="18" width="76" height="72" rx="32" fill="none" stroke="currentColor" stroke-width="5"/><rect x="23" y="35" width="54" height="38" rx="17" mask="url(#tkm)"/></g>`, 'Tiko'));
}
