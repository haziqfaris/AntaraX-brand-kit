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
  ['yara', 'yara', 'awanlarat', 'ripple'], ['yara', 'yara-automation', 'sungai', 'ripple'], ['janka', 'janka', 'padi', 'tide'], ['angka', 'angka', 'congkak', 'tide'],
  ['tinara', 'tinara', 'kerawang', 'tide'], ['plexyz', 'grid', 'petak', 'edge'], ['plexyz', 'crowd', 'orbit', 'edge'],
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

// Family BaTech sets (panel, band, spot in three strengths) are built by tools/build-batech-sets.mjs.

// Tide's family icon (approved 11 October 2026): a crescent moon, which turns the tide, with the family's dot. Drawn to sit with
// the other five family icons (one shape, one dot, flat family colour).
fs.writeFileSync(new URL('families/tide-icon.svg', OUT), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" role="img" aria-label="Tide"><defs><mask id="tc"><rect width="300" height="300" fill="#fff"/><circle cx="178" cy="122" r="74" fill="#000"/></mask></defs><circle cx="140" cy="158" r="88" fill="#E9579D" mask="url(#tc)"/><circle cx="222" cy="214" r="17" fill="#E9579D"/></svg>\n`);
console.log('families/tide-icon.svg (approved)');
