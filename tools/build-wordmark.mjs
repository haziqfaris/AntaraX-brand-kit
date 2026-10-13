// The AntaraX wordmark (guide/04): "ant" + the A mark + "rax", Poppins 700, lower case, the A standing in for the
// second "a". Rebuilt from the master file's live wordmark (reference/antarax-brand-guidelines.html, .wordmark:
// letter-spacing -0.01em; the A in a 0.82em box, 0.005em either side, 0.035em below centre) with the letters as
// outlines, so it never depends on a font. Two files:
//   assets/logo/antarax-wordmark.svg        navy letters, blue A, colour sparkle (light grounds)
//   assets/logo/antarax-wordmark-white.svg  white letters, white A, colour sparkle (navy, blue and dark grounds; 04)
// Also writes assets/ai/sparkle-mono.svg, the sparkle in one colour (currentColor), for bullets and small marks.
//   NODE_PATH=$(npm root -g) node tools/build-wordmark.mjs
import fs from 'node:fs';
import { createRequire } from 'node:module';
const opentype = createRequire(import.meta.url)('opentype.js');

const KIT = new URL('../', import.meta.url);
const read = (p) => fs.readFileSync(new URL(p, KIT), 'utf8');
const buf = fs.readFileSync(new URL('tools/fonts/poppins-700.woff', KIT));
const font = opentype.parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length));
const r = (n) => +n.toFixed(2);

// the A and its sparkle, exactly as the master file draws them
const master = read('reference/antarax-brand-guidelines.html');
const at = master.indexOf('data-dl-label="AntaraX Wordmark"');
const icon = master.slice(master.indexOf('<svg class="wm-icon"', at), master.indexOf('</svg>', at) + 6);
const vb = icon.match(/viewBox="([^"]+)"/)[1].split(' ').map(Number); // 250 235 760 815
const [aGroup, sGroup] = [...icon.matchAll(/<g>[\s\S]*?<\/g>|<g mask="url\(#mask-wordmark\)">[\s\S]*?<\/g>/g)].map((m) => m[0]);
const aPaths = [...aGroup.matchAll(/<path d="([^"]+)"/g)].map((m) => m[1]);
const sPaths = [...sGroup.matchAll(/<path d="([^"]+)" style="fill:([^;]+);"/g)].map((m) => [m[1], m[2]]);
if (aPaths.length !== 3 || sPaths.length !== 5) throw new Error('the master wordmark changed: expected 3 A paths and 5 sparkle paths');

// layout in em/1000, as the master's CSS lays it out (inline-flex, align-items: center, line-height 1)
const EM = 1000, LS = -0.01 * EM;
const { ascender, descender } = font.tables.hhea;
const baseline = (EM - (ascender - descender)) / 2 + ascender;
const word = (t, x) => { let d = '', cx = x; for (const ch of t) { d += font.getPath(ch, cx, baseline, EM).toPathData(2); cx += font.getAdvanceWidth(ch, EM) + LS; } return { d, end: cx }; };
const ant = word('ant', 0);
const box = 0.82 * EM, iconX = ant.end + 0.005 * EM, iconTop = (EM - box) / 2 + 0.035 * EM;
const k = box / Math.max(vb[2], vb[3]); // preserveAspectRatio meet
const ix = iconX + (box - vb[2] * k) / 2 - vb[0] * k, iy = iconTop + (box - vb[3] * k) / 2 - vb[1] * k;
const rax = word('rax', iconX + box + 0.005 * EM);

// bounds of the ink, for a tight viewBox
const bb = ['ant', 'rax'].map((t, i) => font.getPath(t, i ? iconX + box + 5 : 0, baseline, EM).getBoundingBox());
const top = Math.min(...bb.map((b) => b.y1), iconTop), bottom = Math.max(...bb.map((b) => b.y2), iconTop + box);
const pad = 0.04 * EM, W = rax.end - LS, H = bottom - top;
const make = (text, a, mid) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${r(-pad)} ${r(top - pad)} ${r(W + 2 * pad)} ${r(H + 2 * pad)}" role="img" aria-label="AntaraX">
<defs><mask id="${mid}" maskUnits="userSpaceOnUse" x="-500" y="-500" width="2000" height="2000"><rect x="-500" y="-500" width="2000" height="2000" fill="#fff"/><circle cx="357.5" cy="441" r="95" fill="#000"/></mask></defs>
<path d="${ant.d}${rax.d}" fill="${text}"/>
<g transform="translate(${r(ix)} ${r(iy)}) scale(${r(k * 1e5) / 1e5})"><g transform="translate(268 265)"><g mask="url(#${mid})">${aPaths.map((d) => `<path d="${d}" fill="${a}"/>`).join('')}</g><g>${sPaths.map(([d, c]) => `<path d="${d}" fill="${c}"/>`).join('')}</g></g></g>
</svg>\n`;
const write = (p, s) => { fs.writeFileSync(new URL(p, KIT), s); console.log(p, `${(s.length / 1024).toFixed(1)} KB`); };
write('assets/logo/antarax-wordmark.svg', make('#0B1B4F', '#0459F7', 'axw-hole'));
write('assets/logo/antarax-wordmark-white.svg', make('#FFFFFF', '#FFFFFF', 'axw-hole-w'));

// the sparkle in one colour: every piece of assets/ai/sparkle.svg filled with currentColor, with a hairline in the
// same colour so the seams between the pieces close
const sp = read('assets/ai/sparkle.svg').replace(/style="fill:[^;"]+;?"/g, 'fill="currentColor" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"').replace(/fill="#[0-9A-Fa-f]{3,6}"/g, 'fill="currentColor"').replace('aria-label="AntaraX AI sparkle"', 'aria-label="AntaraX AI sparkle, one colour"');
write('assets/ai/sparkle-mono.svg', sp);
