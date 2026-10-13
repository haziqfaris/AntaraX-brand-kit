// The open kain A (guide/04, "The kain A"): the kain A with its centre opened the way the family A-marks open
// (the mask circle grows from 95 to 300 in A coordinates), the sparkle taken out, and a blue line drawn round the
// new opening so every cut edge keeps its outline. Its eye is left empty for something else: a QR code, a photo,
// a family icon on a poster.
//   node tools/build-kain-a-open.mjs
// Source: assets/logo/antarax-a-kain.svg, the antarax.ai hero (haziqfaris/antarax-ai,
// prototype/site/src/illustrations.mjs, heroWindow). Copy a new hero over it, then run this again.
import fs from 'node:fs';

const KIT = new URL('../', import.meta.url);
let s = fs.readFileSync(new URL('assets/logo/antarax-a-kain.svg', KIT), 'utf8');

const hole = /<circle cx="625\.5" cy="706" r="95" fill="#000"\/>/;
if (!hole.test(s)) throw new Error('the kain A no longer has its 95 eye at 625.5, 706: check the source before opening it');
s = s.replace(hole, '<circle cx="625.5" cy="706" r="300" fill="#000"/>');

// the A's own clip, so the new outline only runs inside the A
const clip = s.match(/<clipPath id="([^"]+)">/);
if (!clip) throw new Error('no clipPath for the A in the source');

const spark = s.lastIndexOf('<g transform="translate(268 265)"><g class="kain-spark">');
if (spark < 0) throw new Error('no sparkle group in the source');
s = `${s.slice(0, spark)}<g clip-path="url(#${clip[1]})"><circle cx="625.5" cy="706" r="300" fill="none" stroke="#0459F7" stroke-width="9"/></g></svg>\n`;
s = s.replace(/<style>[\s\S]*?<\/style>/, '').replace('its A filled with the BaTech kain', 'open, its A filled with the BaTech kain');

fs.writeFileSync(new URL('assets/logo/antarax-a-kain-open.svg', KIT), s);
console.log('assets/logo/antarax-a-kain-open.svg', `${(s.length / 1024).toFixed(0)} KB`);
