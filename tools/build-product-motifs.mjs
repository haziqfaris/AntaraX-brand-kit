// Builds the BaTech pieces products use (guide/12), with the same recipes as the BaTech guidelines
// (antarax-ai docs/design/batech-guidelines.mjs): official motif drawings ('orn' set, 'tech' flowers),
// family colour pairs, and the Quiet ink. Usage:
//   node tools/build-product-motifs.mjs ../antarax-ai/prototype/site/src/batech.mjs
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const src = process.argv[2];
if (!src) { console.error('Give the path to antarax-ai/prototype/site/src/batech.mjs'); process.exit(1); }
const B = await import(pathToFileURL(path.resolve(src)).href);
B.useMotifSet('orn'); B.useFlowerSet('tech');
const OUT = new URL('../assets/', import.meta.url);

// BaTech family pairs: colour, dark, ground (batech-guidelines.mjs FAM)
const FAM = {
  ripple: ['#08B0B3', '#0B6E72', '#D9F3F2'], edge: ['#12B76A', '#0B7A47', '#DCF5E8'], frame: ['#074AF8', '#0533A8', '#E2EAFE'],
  loom: ['#4904B3', '#33027D', '#EEE6FA'], motion: ['#FC5D04', '#A83A00', '#FFE9DC'], tide: ['#E9579D', '#9C2B63', '#FDE8F1'],
};
const NICHE = { ...B.MY_NICHE, tide: B.MY_NICHE.unnamed };
const famPal = (f) => B.palette(FAM[f][1], FAM[f][0], '#FFFFFF', FAM[f][1], FAM[f][0], '#FFFFFF', 2);
const QUIET = B.mono('#C5CCF7', 'none', 1.8);

// product signature motifs: one motif, full colour in the family pair (the BaTech empty-state picture).
// Tinara's signature motif, kerawang, is its logo (built below), so its empty states use bunga raya, the Tide family flower.
const PRODUCTS = [
  ['yara', 'yara', 'gear', 'ripple'], ['janka', 'janka', 'padi', 'tide'], ['angka', 'angka', 'congkak', 'tide'],
  ['tinara', 'tinara-empty', 'bungaraya', 'tide'], ['plexyz', 'grid', 'petak', 'edge'], ['plexyz', 'crowd', 'orbit', 'edge'],
  ['frame', 'frame', 'intan', 'frame'],
];
for (const [dir, name, key, fam] of PRODUCTS) {
  fs.mkdirSync(new URL(`products/${dir}/`, OUT), { recursive: true });
  fs.writeFileSync(new URL(`products/${dir}/${name}-motif.svg`, OUT), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6 112 112" role="img" aria-label="${key}">${B.BATECH[key].m(famPal(fam))}</svg>\n`);
  console.log(`products/${dir}/${name}-motif.svg  ${key} in ${fam}`);
}

// family Quiet bands, never straight-cut (BaTech: mixed patterns, not straight lines). Same masks as the site's
// drift band (illustrations.mjs mixBand): <family>-quiet-drift.svg fades out at top and bottom and softens at
// both ends, for dividers and email headers; <family>-quiet-edge.svg fades only upward, to sit against the
// bottom edge of a panel, where BaTech allows a crop.
fs.mkdirSync(new URL('families/bands/', OUT), { recursive: true });
const fade = (id, W, H, v, h) => {
  const g = (k, x2, y2, stops) => `<linearGradient id="${id}${k}" x1="0" y1="0" x2="${x2}" y2="${y2}">${stops.map(([o, a]) => `<stop offset="${o}" stop-color="#fff" stop-opacity="${a}"/>`).join('')}</linearGradient><mask id="${id}${k}m" maskUnits="userSpaceOnUse" x="0" y="0" width="${W}" height="${H}"><rect width="${W}" height="${H}" fill="url(#${id}${k})"/></mask>`;
  return [`${g('v', 0, 1, v)}${g('h', 1, 0, h)}`, `${id}hm`, `${id}vm`];
};
for (const fam of Object.keys(FAM)) {
  // drift is drawn at a divider's proportions (12:1) so it is always shown whole, fade and all; never crop it
  const cloth = { drift: B.puzzle({ band: 'awan', keys: NICHE[fam], pal: QUIET, seed: fam.length * 53 + 11, W: 1200, H: 100, big: 44, mid: 32, small: 22, cables: 0, bridges: false, wrap: false }),
    edge: B.puzzle({ band: 'awan', keys: NICHE[fam], pal: QUIET, seed: fam.length * 53 + 11, W: 1000, H: 200, cables: 0, bridges: false, wrap: false }) };
  for (const v of ['drift', 'edge']) {
    const [W, H, body] = cloth[v];
    const [defs, hm, vm] = v === 'drift'
      ? fade(`bd${fam}`, W, H, [[0, 0], [0.32, 1], [0.68, 1], [1, 0]], [[0, 0], [0.2, 1], [0.8, 1], [1, 0]])
      : fade(`be${fam}`, W, H, [[0, 0], [0.55, 1], [1, 1]], [[0, 1], [1, 1]]);
    fs.writeFileSync(new URL(`families/bands/${fam}-quiet-${v}.svg`, OUT), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" aria-hidden="true"><defs>${defs}</defs><g mask="url(#${hm})"><g mask="url(#${vm})">${body}</g></g></svg>\n`);
    console.log(`families/bands/${fam}-quiet-${v}.svg`);
  }
}

// Tinara's mark is the kerawang motif itself: the official drawing in Tinara's plum and gold,
// a light version for dark grounds, and a small version (3x3 lattice) for 24px and below.
{
  const f = (n) => +n.toFixed(2), PL = '#7A1E3C', GD = '#D6A84F', LT = '#FBE6EC'; // garnet and gold (guide/14)
  const full = (P) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="4 4 92 92" role="img" aria-label="Tinara">${B.BATECH.kerawang.m(P)}</svg>\n`;
  const small = (tile, open, ink) => {
    const pos = (i) => 26 + i * 24, dia = (x, y, s) => `M${f(x)},${f(y - s)} L${f(x + s)},${f(y)} L${f(x)},${f(y + s)} L${f(x - s)},${f(y)} Z`;
    let o = `<rect x="8" y="8" width="84" height="84" rx="14" fill="${tile}" stroke="${ink}" stroke-width="2"/>`;
    for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) o += `<path d="${dia(pos(c), pos(r), 9)}" fill="${open}"/>`;
    const path = [[0, 2], [1, 1], [2, 1], [2, 0]].map(([c, r]) => [pos(c), pos(r)]);
    o += `<path d="M${path.map((p) => p.join(',')).join(' L')}" fill="none" stroke="${GD}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`;
    o += path.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5.5" fill="${GD}"/>`).join('');
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="4 4 92 92" role="img" aria-label="Tinara">${o}</svg>\n`;
  };
  const T = {
    'tinara-mark.svg': full(B.palette(PL, PL, PL, GD, GD, '#FFFFFF', 2.2)),
    'tinara-mark-light.svg': full(B.palette(PL, LT, LT, GD, PL, '#FFFFFF', 2.2)),
    'tinara-mark-small.svg': small(PL, '#FFFFFF', PL),
    'tinara-mark-small-light.svg': small(LT, PL, LT),
  };
  for (const [n, svg] of Object.entries(T)) { fs.writeFileSync(new URL(`products/tinara/${n}`, OUT), svg); console.log(`products/tinara/${n}`); }
}

// Family compositions (guide/14): one shape per family, so each family's BaTech reads differently while every
// rule holds: official drawings in the Quiet ink, mixed motifs from the family's niche, no straight cut (each
// fades out, or meets only a container's own edge), and the three cameos once each, small, inside the area.
{
  const DIR = new URL('families/compositions/', OUT); fs.mkdirSync(DIR, { recursive: true });
  const rng = (seed) => () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const f = (n) => +n.toFixed(1);
  const M = (k, x, y, r, a = 0) => B.motif(k, x, y, r, QUIET, f(a));
  const cameos = (spots) => ['seth', 'reka', 'antarax'].map((k, i) => M(k, spots[i][0], spots[i][1], 9)).join('');
  const pick = (keys, R) => { let last; return () => { let k; do k = keys[Math.floor(R() * keys.length)]; while (k === last && keys.length > 1); return (last = k); }; };
  const radial = (id, cx, cy, r, stops) => `<radialGradient id="${id}g" gradientUnits="userSpaceOnUse" cx="${cx}" cy="${cy}" r="${r}">${stops.map(([o, a]) => `<stop offset="${o}" stop-color="#fff" stop-opacity="${a}"/>`).join('')}</radialGradient>`;
  const linear = (id, x1, y1, x2, y2, stops) => `<linearGradient id="${id}g" gradientUnits="userSpaceOnUse" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}">${stops.map(([o, a]) => `<stop offset="${o}" stop-color="#fff" stop-opacity="${a}"/>`).join('')}</linearGradient>`;
  const masked = (W, H, grads, body) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" aria-hidden="true"><defs>${grads.map(([id, g]) => `${g}<mask id="${id}" maskUnits="userSpaceOnUse" x="0" y="0" width="${W}" height="${H}"><rect width="${W}" height="${H}" fill="url(#${id}g)"/></mask>`).join('')}</defs>${grads.reduceRight((inner, [id]) => `<g mask="url(#${id})">${inner}</g>`, body)}</svg>\n`;
  const C = {};

  // Ripple · Rings: motifs on arcs spreading from one corner, smaller as they travel. Sits in a corner;
  // the two container edges are its only crop.
  { const W = 640, H = 400, R = rng(11), k = pick(NICHE.ripple, R); let b = '';
    [[120, 25], [205, 21], [290, 17], [372, 14]].forEach(([rad, r], ring) => {
      const step = (2.5 * r) / rad, off = (ring % 2) * step / 2;
      for (let a = 0.06 + off; a < Math.PI / 2 - 0.05; a += step) b += M(k(), rad * Math.cos(a), H - rad * Math.sin(a), r, R() * 40 - 20);
    });
    b += cameos([[60, H - 50], [150, H - 175], [205, H - 70]]);
    C['ripple-rings'] = masked(W, H, [['rr', radial('rr', 0, H, 400, [[0, 1], [0.55, 0.9], [1, 0]])]], b); }

  // Edge · Field: a loose grid of motifs, read through one soft spot that fades on every side, like a sensor's view.
  { const W = 640, H = 360, R = rng(23), k = pick(NICHE.edge, R); let b = '';
    for (let y = 34; y < H; y += 64) for (let x = 34 + ((y / 64) % 2) * 32; x < W; x += 64) if (R() > 0.12) b += M(k(), x + R() * 14 - 7, y + R() * 14 - 7, 13 + (R() > 0.8 ? 10 : R() * 5), R() * 20 - 10);
    b += cameos([[W / 2 - 60, H / 2 + 30], [W / 2 + 90, H / 2 - 30], [W / 2 + 30, H / 2 + 90]]);
    C['edge-field'] = masked(W, H, [['ef', radial('ef', W / 2, H / 2, 320, [[0, 1], [0.45, 0.85], [0.95, 0]])]], b); }

  // Frame · Corners: two small fans in opposite corners, framing the content between them, fading inward.
  { const W = 800, H = 420, R = rng(37), k = pick(NICHE.frame, R); let b = '';
    for (const [ox, oy, sx, sy] of [[0, 0, 1, 1], [W, H, -1, -1]]) [[70, 20], [140, 17], [205, 14]].forEach(([rad, r]) => {
      for (let a = 0.12; a < Math.PI / 2 - 0.08; a += (2.6 * r) / rad) b += M(k(), ox + sx * rad * Math.cos(a), oy + sy * rad * Math.sin(a), r, R() * 30 - 15);
    });
    b += cameos([[34, 30], [W - 30, H - 40], [W - 150, H - 30]]);
    const fan = (id, cx, cy) => radial(id, cx, cy, 250, [[0, 1], [0.6, 0.85], [1, 0]]);
    C['frame-corners'] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" aria-hidden="true"><defs>${fan('fa', 0, 0)}${fan('fb', W, H)}<mask id="fm" maskUnits="userSpaceOnUse" x="0" y="0" width="${W}" height="${H}"><rect width="${W}" height="${H}" fill="url(#fag)"/><rect width="${W}" height="${H}" fill="url(#fbg)"/></mask></defs><g mask="url(#fm)">${b}</g></svg>\n`; }

  // Loom · Thread: one awan larat thread wandering across, motifs strung on it, both ends fading out.
  { const W = 1200, H = 150, R = rng(41), k = pick(NICHE.loom, R); const y = (x) => 75 + 26 * Math.sin(x / 110) + 10 * Math.sin(x / 37);
    let d = `M0,${f(y(0))}`; for (let x = 8; x <= W; x += 8) d += ` L${x},${f(y(x))}`;
    let b = `<path d="${d}" fill="none" stroke="#C5CCF7" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`;
    for (let x = 70, i = 0; x < W - 40; x += 92 + R() * 30, i++) { const dy = i % 2 ? -1 : 1, r = 16 + R() * 7; b += `<circle cx="${f(x)}" cy="${f(y(x))}" r="3" fill="#C5CCF7"/>` + M(k(), x, y(x) + dy * (r + 4), r, R() * 30 - 15); }
    b += cameos([[340, y(340) - 30], [640, y(640) + 30], [880, y(880) - 30]]);
    C['loom-thread'] = masked(W, H, [['lt', linear('lt', 0, 0, W, 0, [[0, 0], [0.15, 1], [0.85, 1], [1, 0]])]], b); }

  // Motion · Trail: motifs along a rising path, growing toward the leading end; the trail fades behind it.
  { const W = 900, H = 300, R = rng(53), k = pick(NICHE.motion, R); const pt = (t) => [40 + 820 * t, 270 - 230 * t * t * 0.6 - 90 * t];
    let b = ''; for (let t = 0.02; t < 0.97;) { const [x, y] = pt(t), r = 4 + 28 * t, [x2, y2] = pt(t + 0.01); b += r < 12 ? `<circle cx="${f(x)}" cy="${f(y)}" r="${f(r / 3)}" fill="#C5CCF7"/>` : M(k(), x, y, r, (Math.atan2(y2 - y, x2 - x) * 180) / Math.PI + 90); t += (2.3 * Math.max(r, 8)) / 900; }
    b += cameos([[pt(0.55)[0], pt(0.55)[1] + 46], [pt(0.72)[0] - 10, pt(0.72)[1] + 56], [pt(0.86)[0] - 44, pt(0.86)[1] + 50]]);
    C['motion-trail'] = masked(W, H, [['mt', linear('mt', 40, 270, 860, 40, [[0, 0], [0.45, 0.8], [0.92, 1], [1, 0.6]])]], b); }

  // Tide · Swell: the family's corak rising from the bottom edge in a wave, fading upward. Its crop is the
  // container's bottom edge only; its top is the wave, softened.
  { const W = 1600, H = 340; const [, , body] = B.puzzle({ band: 'awan', keys: NICHE.tide, pal: QUIET, seed: 97, W, H, big: 40, mid: 30, small: 22, cables: 0, bridges: false, wrap: false, cameos: ['seth', 'reka', 'antarax'] });
    let d = `M0,${H}`; for (let x = 0; x <= W; x += 10) d += ` L${x},${f(120 + 50 * Math.sin(x / 230 + 0.6) + 16 * Math.sin(x / 71))}`; d += ` L${W},${H} Z`;
    C['tide-swell'] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" aria-hidden="true"><defs><filter id="tsb" x="-5%" y="-30%" width="110%" height="160%"><feGaussianBlur stdDeviation="14"/></filter>${linear('ts', 0, 0, 0, H, [[0.15, 0], [0.6, 1], [1, 1]])}<mask id="ts" maskUnits="userSpaceOnUse" x="0" y="0" width="${W}" height="${H}"><path d="${d}" fill="url(#tsg)" filter="url(#tsb)"/><rect y="${H - 30}" width="${W}" height="30" fill="#fff"/></mask></defs><g mask="url(#ts)">${body}</g></svg>\n`; }

  for (const [n, svg] of Object.entries(C)) { fs.writeFileSync(new URL(`${n}.svg`, DIR), svg); console.log(`families/compositions/${n}.svg`); }
}

// Tide's family icon (proposed): a crescent moon, which turns the tide, with the family's dot. Drawn to sit with
// the other five family icons (one shape, one dot, flat family colour).
fs.writeFileSync(new URL('families/tide-icon.svg', OUT), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" role="img" aria-label="Tide"><defs><mask id="tc"><rect width="300" height="300" fill="#fff"/><circle cx="178" cy="122" r="74" fill="#000"/></mask></defs><circle cx="140" cy="158" r="88" fill="#E9579D" mask="url(#tc)"/><circle cx="222" cy="214" r="17" fill="#E9579D"/></svg>\n`);
console.log('families/tide-icon.svg (proposed)');
