// Builds each product's cloth: AntaraX BaTech motifs from the product's family, in the product's own colours (guide/12).
// The motif code lives in the antarax-ai repository. Usage:
//   node tools/build-product-cloths.mjs ../antarax-ai/prototype/site/src/batech.mjs
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const src = process.argv[2];
if (!src) { console.error('Give the path to antarax-ai/prototype/site/src/batech.mjs'); process.exit(1); }
const B = await import(pathToFileURL(path.resolve(src)).href);
const OUT = new URL('../assets/products/', import.meta.url);

// pal: ink, then four fills (a, b, c, d) from the product's own palette; bg: the product's near-white ground
const CLOTHS = {
  'yara/yara-cloth.svg':     { keys: B.MY_NICHE.ripple, med: B.MY_MEDALLION.ripple, pal: ['#046162', '#08B0B3', '#0459F7', '#DCF4F4', '#9FE3E4'], bg: '#F2FBFB' },
  'janka/janka-cloth.svg':   { keys: ['padi', 'bungaraya', 'gelombang', 'benih', 'daun'], med: ['padi'], pal: ['#0B1B4F', '#0CC4FB', '#F47B3D', '#DDF7FE', '#FFE3D3'], bg: '#F5FCFF' },
  'plexyz/grid-cloth.svg':   { keys: B.MY_NICHE.edge, med: ['petak'], pal: ['#2C09B2', '#4FD7D1', '#FD9001', '#FD4F85', '#CBB6FA'], bg: '#F7F5FE' },
  'frame/frame-cloth.svg':   { keys: B.MY_NICHE.frame, med: B.MY_MEDALLION.frame, pal: ['#042988', '#074AF8', '#0459F7', '#DCE6FE', '#9DB8FF'], bg: '#F3F7FF' },
  'angka/angka-cloth.svg':   { keys: ['congkak', 'bungaraya', 'padi', 'gelombang', 'benih'], med: ['congkak'], pal: ['#4E2C4F', '#6B3F6B', '#FFB493', '#CFB0DC', '#EDDCD2'], bg: '#FAF7F2' },
  'tinara/tinara-cloth.svg': { keys: ['kerawang', 'bungaraya', 'gelombang', 'intan', 'padi'], med: ['kerawang'], pal: ['#5B2B4A', '#8B4E87', '#D6A84F', '#F3E3EE', '#EBD7A6'], bg: '#FDF6FA' },
};

for (const [file, c] of Object.entries(CLOTHS)) {
  const [ink, a, b, cc, d] = c.pal;
  const seed = path.basename(file, '-cloth.svg').length * 131 + 7;
  const [W, H, body] = B.puzzle({ keys: c.keys, pal: B.palette(ink, a, b, cc, d, '#FFFFFF', 2.2), seed, W: 600, H: 600, big: 66, mid: 46, small: 30, cables: 0, mirror: true, medallions: c.med, band: 'awan', wrap: false, bg: c.bg });
  fs.writeFileSync(new URL(file, OUT), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}">${body}</svg>`);
  console.log(file);
}
