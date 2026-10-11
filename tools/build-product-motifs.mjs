// Builds each product's signature motif (guide/12): one BaTech motif, drawn simply in the product's own colour.
// Two versions per product: <product>-motif.svg (line only, for faint large use) and <product>-motif-tint.svg
// (line with a light tint fill, for empty states). The motif code lives in the antarax-ai repository. Usage:
//   node tools/build-product-motifs.mjs ../antarax-ai/prototype/site/src/batech.mjs
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const src = process.argv[2];
if (!src) { console.error('Give the path to antarax-ai/prototype/site/src/batech.mjs'); process.exit(1); }
const B = await import(pathToFileURL(path.resolve(src)).href);
const OUT = new URL('../assets/products/', import.meta.url);

// folder, file prefix, motif, product colour
const MOTIFS = [
  ['yara', 'yara', 'riak', '#08B0B3'],
  ['janka', 'janka', 'padi', '#0CC4FB'],
  ['plexyz', 'grid', 'petak', '#2C09B2'],
  ['plexyz', 'crowd', 'orbit', '#2C09B2'],
  ['frame', 'frame', 'intan', '#074AF8'],
  ['angka', 'angka', 'congkak', '#6B3F6B'],
  ['tinara', 'tinara', 'kerawang', '#5B2B4A'],
];
const svg = (body, label) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" role="img" aria-label="${label}">${body}</svg>\n`;
for (const [dir, name, key, c] of MOTIFS) {
  fs.mkdirSync(new URL(`${dir}/`, OUT), { recursive: true });
  const line = B.motif(key, 50, 50, 46, B.mono(c, 'none', 2.4));
  const tint = B.motif(key, 50, 50, 46, B.palette(c, '#FFFFFF', c + '33', c + '22', c, '#FFFFFF', 2.4));
  fs.writeFileSync(new URL(`${dir}/${name}-motif.svg`, OUT), svg(line, `${key} motif`));
  fs.writeFileSync(new URL(`${dir}/${name}-motif-tint.svg`, OUT), svg(tint, `${key} motif`));
  console.log(`${dir}/${name}-motif.svg (${key})`);
}
