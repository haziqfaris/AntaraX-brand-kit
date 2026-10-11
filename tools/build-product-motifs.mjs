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
  ['yara', 'yara', 'riak', 'ripple'], ['janka', 'janka', 'padi', 'tide'], ['angka', 'angka', 'congkak', 'tide'],
  ['tinara', 'tinara-empty', 'bungaraya', 'tide'], ['plexyz', 'grid', 'petak', 'edge'], ['plexyz', 'crowd', 'orbit', 'edge'],
  ['frame', 'frame', 'intan', 'frame'],
];
for (const [dir, name, key, fam] of PRODUCTS) {
  fs.mkdirSync(new URL(`products/${dir}/`, OUT), { recursive: true });
  fs.writeFileSync(new URL(`products/${dir}/${name}-motif.svg`, OUT), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6 112 112" role="img" aria-label="${key}">${B.BATECH[key].m(famPal(fam))}</svg>\n`);
  console.log(`products/${dir}/${name}-motif.svg  ${key} in ${fam}`);
}

// family Quiet bands: the family's niche corak in the Quiet ink, for dividers, sign-in edges and email headers
fs.mkdirSync(new URL('families/bands/', OUT), { recursive: true });
for (const fam of Object.keys(FAM)) {
  const [W, H, body] = B.puzzle({ band: 'awan', keys: NICHE[fam], pal: QUIET, seed: fam.length * 53 + 11, W: 1000, H: 200, cables: 0, wrap: true });
  fs.writeFileSync(new URL(`families/bands/${fam}-quiet.svg`, OUT), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" aria-hidden="true">${body}</svg>\n`);
  console.log(`families/bands/${fam}-quiet.svg`);
}

// Tinara's mark is the kerawang motif itself: the official drawing in Tinara's plum and gold,
// a light version for dark grounds, and a small version (3x3 lattice) for 24px and below.
{
  const f = (n) => +n.toFixed(2), PL = '#5B2B4A', GD = '#D6A84F', LT = '#F3E3EE';
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
