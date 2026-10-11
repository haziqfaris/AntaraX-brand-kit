// BaTech sets for products (guide/14, "BaTech by family"): AntaraX and each of the six families get three
// variations, each in BaTech's three strengths.
//   Variations: panel (sign-in panels, splash, covers), band (headers, banners, wide dividers), spot (cards, empty
//   areas, avatars, small squares).
//   Strengths: quiet (BaTech's light ink, on white or near-white), white (white at 32%, on a panel in the product's
//   own colour), colour (the family pair; AntaraX mixes every family's pair).
// Each family keeps its own shape in every variation: Ripple rings, Edge field, Frame corners, Loom thread, Motion
// trail, Tide swell; AntaraX scatters the whole vocabulary like a constellation. Every rule holds: official drawings
// ('orn' set, 'tech' flowers), mixed motifs from the niche, no straight cut, and the three cameos (Seth, the REKA mark,
// the AntaraX A) once each, drawn large enough to find. Their places go to assets/batech/cameos.json.
//   node tools/build-batech-sets.mjs ../antarax-ai/prototype/site/src/batech.mjs
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const src = process.argv[2];
if (!src) { console.error('Give the path to antarax-ai/prototype/site/src/batech.mjs'); process.exit(1); }
const B = await import(pathToFileURL(path.resolve(src)).href);
B.useMotifSet('orn'); B.useFlowerSet('tech');
const OUT = new URL('../assets/batech/', import.meta.url);

const FAM = {
  ripple: ['#08B0B3', '#0B6E72'], edge: ['#12B76A', '#0B7A47'], frame: ['#074AF8', '#0533A8'],
  loom: ['#4904B3', '#33027D'], motion: ['#FC5D04', '#A83A00'], tide: ['#E9579D', '#9C2B63'],
};
const NICHE = { ...B.MY_NICHE, tide: B.MY_NICHE.unnamed, antarax: B.MY_WEAVE };
const famPal = (f) => B.palette(FAM[f][1], FAM[f][0], '#FFFFFF', FAM[f][1], FAM[f][0], '#FFFFFF', 2);
const FAMKEYS = Object.keys(FAM);
// which family a motif belongs to, so AntaraX's colour version draws each motif in its own family's pair
const famOfMotif = (k) => FAMKEYS.find((f) => NICHE[f].includes(k)) || 'frame';
const STRENGTH = {
  quiet: () => B.mono('#C5CCF7', 'none', 1.8),
  white: () => B.mono('#FFFFFF', 'none', 1.8),
  colour: (brand, k) => famPal(brand === 'antarax' ? famOfMotif(k) : brand),
};
const INK = { quiet: '#C5CCF7', white: '#FFFFFF', colour: null };
const SIZE = { panel: [640, 400], band: [1200, 200], spot: [400, 400] };

const f = (n) => +n.toFixed(1);
const rng = (seed) => () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
const pick = (keys, R) => { let last; return () => { let k; do k = keys[Math.floor(R() * keys.length)]; while (k === last && keys.length > 1); return (last = k); }; };
const stops = (s) => s.map(([o, a]) => `<stop offset="${o}" stop-color="#fff" stop-opacity="${a}"/>`).join('');
const radial = (cx, cy, r, s) => ({ kind: 'radial', cx, cy, r, s });
const linear = (x1, y1, x2, y2, s) => ({ kind: 'linear', x1, y1, x2, y2, s });
const gradDef = (id, g) => g.kind === 'radial' ? `<radialGradient id="${id}" gradientUnits="userSpaceOnUse" cx="${g.cx}" cy="${g.cy}" r="${g.r}">${stops(g.s)}</radialGradient>` : `<linearGradient id="${id}" gradientUnits="userSpaceOnUse" x1="${g.x1}" y1="${g.y1}" x2="${g.x2}" y2="${g.y2}">${stops(g.s)}</linearGradient>`;

// A layout is: items [{k, x, y, r, a}], extra drawing (threads, dots) as a function of the ink colour,
// masks (each a list of gradients multiplied together; several lists are added), and cameo spots.
function layout(brand, variant) {
  const [W, H] = SIZE[variant], R = rng((brand.length * 97 + variant.length * 31) % 2147483646 + 1), k = pick(NICHE[brand], R);
  const items = [], dots = [], add = (x, y, r, a = R() * 30 - 15) => items.push({ k: k(), x, y, r, a });
  let extra = () => '', masks = [], cam = [], puzzle = null;
  const ring = (cx, cy, radii, a0, a1) => radii.forEach(([rad, r], i) => { const step = (2.5 * r) / rad; for (let a = a0 + (i % 2) * step / 2; a < a1; a += step) { const x = cx + rad * Math.cos(a), y = cy - rad * Math.sin(a); if (x > -r && x < W + r && y > -r && y < H + r) add(x, y, r); } });
  const fan = (ox, oy, sx, sy, radii) => radii.forEach(([rad, r]) => { for (let a = 0.12; a < Math.PI / 2 - 0.08; a += (2.6 * r) / rad) add(ox + sx * rad * Math.cos(a), oy + sy * rad * Math.sin(a), r); });
  const field = (x0, y0, x1, y1, step, inside = () => true) => { for (let y = y0; y < y1; y += step) for (let x = x0 + ((Math.round((y - y0) / step)) % 2) * step / 2; x < x1; x += step) if (R() > 0.12 && inside(x, y)) add(x + R() * 12 - 6, y + R() * 12 - 6, 12 + (R() > 0.8 ? 9 : R() * 5)); };
  const thread = (pts, every = 92) => { // a smooth curve through points, motifs strung along it alternately each side
    let d = ''; const P = []; for (let i = 0; i < pts.length - 1; i++) for (let t = 0; t <= 1; t += 0.05) { const [x0, y0] = pts[i], [x1, y1] = pts[i + 1]; const e = (1 - Math.cos(t * Math.PI)) / 2; P.push([x0 + (x1 - x0) * t, y0 + (y1 - y0) * e]); }
    d = 'M' + P.map(([x, y]) => `${f(x)},${f(y)}`).join(' L');
    let acc = 0, side = 1;
    for (let i = 1; i < P.length; i++) { acc += Math.hypot(P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1]); if (acc > every) { acc = 0; side = -side; const r = 15 + R() * 7; dots.push([P[i][0], P[i][1]]); add(P[i][0], P[i][1] + side * (r + 4), r); } }
    extra = (ink) => `<path d="${d}" fill="none" stroke="${ink}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>` + dots.map(([x, y]) => `<circle cx="${f(x)}" cy="${f(y)}" r="3" fill="${ink}"/>`).join('');
  };
  const trail = (pt) => { for (let t = 0.02; t < 0.97;) { const [x, y] = pt(t), r = 4 + 26 * t, [x2, y2] = pt(t + 0.01); if (r < 12) dots.push([x, y, r / 3]); else items.push({ k: k(), x, y, r, a: (Math.atan2(y2 - y, x2 - x) * 180) / Math.PI + 90 }); t += (2.3 * Math.max(r, 8)) / Math.hypot(W, H); } extra = (ink) => dots.map(([x, y, r]) => `<circle cx="${f(x)}" cy="${f(y)}" r="${f(r)}" fill="${ink}"/>`).join(''); };
  const S = {
    ripple: {
      panel: () => { ring(0, H, [[120, 25], [205, 21], [290, 17], [372, 14]], 0.06, Math.PI / 2 - 0.05); masks = [[radial(0, H, 400, [[0, 1], [0.55, 0.9], [1, 0]])]]; cam = [[60, H - 50], [150, H - 175], [205, H - 70]]; },
      band: () => { ring(W / 2, H + 20, [[110, 22], [190, 19], [270, 17], [350, 15], [430, 14], [510, 13]], 0.05, Math.PI - 0.05); masks = [[radial(W / 2, H, 560, [[0, 1], [0.6, 0.85], [1, 0]])]]; cam = [[W / 2 - 60, H - 50], [W / 2 + 150, H - 120], [W / 2 - 250, H - 40]]; },
      spot: () => { ring(W / 2, H / 2, [[70, 20], [125, 18], [180, 16]], 0, 2 * Math.PI); masks = [[radial(W / 2, H / 2, 210, [[0, 1], [0.7, 0.9], [1, 0]])]]; cam = [[W / 2, H / 2], [W / 2 + 96, H / 2 - 30], [W / 2 - 96, H / 2 + 30]]; },
    },
    edge: {
      panel: () => { field(34, 34, W, H, 64); masks = [[radial(W / 2, H / 2, 320, [[0, 1], [0.45, 0.85], [0.95, 0]])]]; cam = [[W / 2 - 60, H / 2 + 30], [W / 2 + 90, H / 2 - 30], [W / 2 + 30, H / 2 + 90]]; },
      band: () => { field(30, 30, W, H, 58); masks = [[linear(0, 0, W, 0, [[0, 0], [0.18, 1], [0.82, 1], [1, 0]]), linear(0, 0, 0, H, [[0, 0], [0.3, 1], [0.7, 1], [1, 0]])]]; cam = [[W * 0.32, H / 2], [W * 0.5, H / 2 - 20], [W * 0.68, H / 2 + 10]]; },
      spot: () => { field(30, 30, W, H, 56, (x, y) => Math.hypot(x - W / 2, y - H / 2) < 190); masks = [[radial(W / 2, H / 2, 200, [[0, 1], [0.6, 0.9], [1, 0]])]]; cam = [[W / 2 - 40, H / 2 + 20], [W / 2 + 60, H / 2 - 40], [W / 2 + 20, H / 2 + 80]]; },
    },
    frame: {
      panel: () => { fan(0, 0, 1, 1, [[70, 20], [140, 17], [205, 14]]); fan(W, H, -1, -1, [[70, 20], [140, 17], [205, 14]]); masks = [[radial(0, 0, 250, [[0, 1], [0.6, 0.85], [1, 0]])], [radial(W, H, 250, [[0, 1], [0.6, 0.85], [1, 0]])]]; cam = [[36, 32], [120, 22], [W - 40, H - 34]]; },
      band: () => { fan(0, 0, 1, 1, [[60, 18], [120, 15], [175, 13]]); fan(W, H, -1, -1, [[60, 18], [120, 15], [175, 13]]); masks = [[radial(0, 0, 210, [[0, 1], [0.6, 0.85], [1, 0]])], [radial(W, H, 210, [[0, 1], [0.6, 0.85], [1, 0]])]]; cam = [[34, 30], [110, 24], [W - 40, H - 30]]; },
      spot: () => { for (const [ox, oy, sx, sy] of [[0, 0, 1, 1], [W, 0, -1, 1], [0, H, 1, -1], [W, H, -1, -1]]) fan(ox, oy, sx, sy, [[54, 16], [104, 14]]); masks = [[0, 0], [W, 0], [0, H], [W, H]].map(([x, y]) => [radial(x, y, 150, [[0, 1], [0.6, 0.85], [1, 0]])]); cam = [[30, 30], [W - 30, 30], [30, H - 30]]; },
    },
    loom: {
      panel: () => { thread([[0, 120], [180, 70], [380, 150], [560, 80], [W, 120]]); masks = [[linear(0, 0, W, 0, [[0, 0], [0.15, 1], [0.85, 1], [1, 0]])]]; const d = dots; cam = [[d[1][0], d[1][1] - 40], [d[3][0], d[3][1] + 40], [d[5][0], d[5][1] - 40]]; },
      band: () => { thread([[0, 100], [200, 60], [420, 130], [640, 70], [860, 140], [1060, 80], [W, 100]]); masks = [[linear(0, 0, W, 0, [[0, 0], [0.12, 1], [0.88, 1], [1, 0]])]]; const d = dots; cam = [[d[3][0], d[3][1] - 40], [d[6][0], d[6][1] + 40], [d[9][0], d[9][1] - 40]]; },
      spot: () => { const c = W / 2, pts = []; for (let a = 0; a <= 2 * Math.PI + 0.01; a += Math.PI / 4) pts.push([c + 130 * Math.cos(a) + (a % 2) * 8, c + 120 * Math.sin(a)]); thread(pts, 70); masks = [[radial(c, c, 210, [[0, 1], [0.75, 0.9], [1, 0]])]]; cam = [[c, c], [c - 40, c + 34], [c + 40, c + 34]]; },
    },
    motion: {
      panel: () => { trail((t) => [30 + 590 * t, H - 30 - 300 * t * t * 0.6 - 120 * t]); masks = [[linear(30, H - 30, W - 20, 40, [[0, 0], [0.45, 0.8], [0.92, 1], [1, 0.6]])]]; cam = [[W * 0.55, H * 0.72], [W * 0.68, H * 0.62], [W * 0.82, H * 0.5]]; },
      band: () => { trail((t) => [30 + 1140 * t, H / 2 + 40 * Math.sin(t * 5)]); masks = [[linear(0, 0, W, 0, [[0, 0], [0.4, 0.8], [0.9, 1], [1, 0.4]])]]; cam = [[W * 0.55, H / 2 + 60], [W * 0.7, H / 2 - 60], [W * 0.85, H / 2 + 62]]; },
      spot: () => { trail((t) => [40 + 330 * t, H - 40 - 320 * Math.sin(t * Math.PI / 2)]); masks = [[linear(40, H - 40, W - 30, 40, [[0, 0], [0.4, 0.8], [0.9, 1], [1, 0.6]])]]; cam = [[W * 0.42, H * 0.68], [W * 0.62, H * 0.56], [W * 0.78, H * 0.78]]; },
    },
    tide: {
      panel: () => { puzzle = { W: 1280, H: 340, oy: H - 170 }; masks = 'wave-bottom'; cam = [[W * 0.2, H - 50], [W * 0.5, H - 40], [W * 0.8, H - 55]]; },
      band: () => { puzzle = { W: 2400, H: 300, oy: H - 150 }; masks = 'wave-band'; cam = [[W * 0.25, H * 0.62], [W * 0.5, H * 0.7], [W * 0.75, H * 0.6]]; },
      spot: () => { puzzle = { W: 800, H: 460, oy: H - 230 }; masks = 'wave-circle'; cam = [[W * 0.32, H * 0.7], [W * 0.52, H * 0.78], [W * 0.7, H * 0.66]]; },
    },
    antarax: {
      // a constellation: the whole vocabulary scattered loosely, fading toward the middle where the logo sits
      panel: () => { field(30, 30, W, H, 70, (x, y) => Math.hypot((x - W / 2) / 1.6, y - H / 2) > 110); masks = [[radial(W / 2, H / 2, 380, [[0, 0], [0.3, 0.2], [0.55, 1], [0.92, 1], [1, 0.4]])]]; cam = [[70, 70], [W - 70, H - 70], [W - 90, 80]]; },
      band: () => { puzzle = { W: 2400, H: 400, oy: 0 }; masks = [[linear(0, 0, W, 0, [[0, 0], [0.2, 1], [0.8, 1], [1, 0]]), linear(0, 0, 0, H, [[0, 0], [0.3, 1], [0.7, 1], [1, 0]])]]; cam = [[W * 0.28, H / 2], [W * 0.52, H / 2], [W * 0.76, H / 2]]; },
      spot: () => { field(30, 30, W, H, 62, (x, y) => Math.hypot(x - W / 2, y - H / 2) < 190); masks = [[radial(W / 2, H / 2, 200, [[0, 1], [0.6, 0.9], [1, 0]])]]; cam = [[W / 2, H / 2], [W / 2 + 80, H / 2 - 60], [W / 2 - 80, H / 2 + 60]]; },
    },
  };
  S[brand][variant]();
  return { W, H, items, extra, masks, cam, puzzle, seed: brand.length * 53 + variant.length * 7 };
}

function render(brand, variant, strength, L) {
  const { W, H } = L, P = (k) => STRENGTH[strength](brand, k);
  const ink = INK[strength] || FAM[brand === 'antarax' ? 'frame' : brand][1];
  let body = '';
  if (L.puzzle) {
    const pal = strength === 'colour' ? (brand === 'antarax' ? B.brandPal : famPal(brand)) : STRENGTH[strength]();
    const [, , b] = B.puzzle({ band: 'awan', keys: NICHE[brand], pal, seed: L.seed, W: L.puzzle.W, H: L.puzzle.H, big: 52, mid: 38, small: 28, cables: 0, bridges: false, wrap: false, cameos: [] });
    body = `<g transform="translate(0 ${L.puzzle.oy}) scale(${W / L.puzzle.W})">${b}</g>`;
  } else body = L.items.map(({ k, x, y, r, a }) => B.motif(k, f(x), f(y), f(r), P(k), f(a))).join('') + L.extra(ink);
  body += ['seth', 'reka', 'antarax'].map((k, i) => B.motif(k, f(L.cam[i][0]), f(L.cam[i][1]), 17, strength === 'colour' ? famPal(brand === 'antarax' ? FAMKEYS[i * 2] : brand) : STRENGTH[strength]())).join('');
  // masks: each entry is a product of gradients; entries are added (several soft areas)
  let defs = '', g = body;
  const id = `${brand[0]}${variant[0]}${strength[0]}`;
  if (typeof L.masks === 'string') {
    const wave = (y0, amp) => { let d = ''; for (let x = 0; x <= W; x += 10) d += ` L${x},${f(y0 + amp * Math.sin(x / (W / 7) + 0.6) + amp * 0.3 * Math.sin(x / (W / 22)))}`; return d; };
    if (L.masks === 'wave-bottom') defs = `<filter id="${id}b" x="-5%" y="-30%" width="110%" height="160%"><feGaussianBlur stdDeviation="12"/></filter>${gradDef(id + 'g', linear(0, 0, 0, H, [[0.35, 0], [0.75, 1], [1, 1]]))}<mask id="${id}" maskUnits="userSpaceOnUse" x="0" y="0" width="${W}" height="${H}"><path d="M0,${H}${wave(H * 0.72, 22)} L${W},${H} Z" fill="url(#${id}g)" filter="url(#${id}b)"/></mask>`;
    if (L.masks === 'wave-band') defs = `<filter id="${id}b" x="-5%" y="-30%" width="110%" height="160%"><feGaussianBlur stdDeviation="10"/></filter>${gradDef(id + 'h', linear(0, 0, W, 0, [[0, 0], [0.12, 1], [0.88, 1], [1, 0]]))}<mask id="${id}" maskUnits="userSpaceOnUse" x="0" y="0" width="${W}" height="${H}"><path d="M0,${H}${wave(H * 0.35, 24)} L${W},${H} Z" fill="url(#${id}h)" filter="url(#${id}b)"/></mask>`;
    if (L.masks === 'wave-circle') defs = `<filter id="${id}b" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="10"/></filter><clipPath id="${id}c"><circle cx="${W / 2}" cy="${H / 2}" r="${W / 2 - 6}"/></clipPath><mask id="${id}" maskUnits="userSpaceOnUse" x="0" y="0" width="${W}" height="${H}"><path d="M0,${H}${wave(H * 0.48, 22)} L${W},${H} Z" fill="#fff" filter="url(#${id}b)" clip-path="url(#${id}c)"/></mask>`;
    g = `<g mask="url(#${id})">${body}</g>`;
  } else {
    // add the areas: one mask whose rects each carry the product of their gradients (as nested groups)
    const areas = L.masks.map((prod, ai) => { const ids = prod.map((gr, gi) => { const gid = `${id}${ai}${gi}`; defs += gradDef(gid, gr) + `<mask id="${gid}m" maskUnits="userSpaceOnUse" x="0" y="0" width="${W}" height="${H}"><rect width="${W}" height="${H}" fill="url(#${gid})"/></mask>`; return gid + 'm'; }); return ids; });
    g = areas.length === 1 ? areas[0].reduceRight((inner, m) => `<g mask="url(#${m})">${inner}</g>`, body) : areas.map((ids) => ids.reduceRight((inner, m) => `<g mask="url(#${m})">${inner}</g>`, body)).join('');
  }
  const wrap = strength === 'white' ? `<g opacity=".32">${g}</g>` : g;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" aria-hidden="true"><defs>${defs}</defs>${wrap}</svg>\n`;
}

const CAM = {};
for (const brand of ['antarax', ...FAMKEYS]) {
  fs.mkdirSync(new URL(`${brand}/`, OUT), { recursive: true });
  for (const variant of ['panel', 'band', 'spot']) {
    const L = layout(brand, variant);
    CAM[`${brand}-${variant}`] = { size: [L.W, L.H], spots: L.cam.map(([x, y], i) => [['seth', 'reka', 'antarax'][i], f(x), f(y), 17]) };
    for (const strength of ['quiet', 'white', 'colour']) fs.writeFileSync(new URL(`${brand}/${variant}-${strength}.svg`, OUT), render(brand, variant, strength, L));
    console.log(`assets/batech/${brand}/${variant}-{quiet,white,colour}.svg`);
  }
}
fs.writeFileSync(new URL('cameos.json', OUT), JSON.stringify(CAM, null, 1) + '\n');
