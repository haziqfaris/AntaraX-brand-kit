// Every logo on the same square (guide/14, "Logos"): the drawn shape is measured in a browser, then the SVG's
// viewBox is set to a square around it with the same margin on every logo, so tiles, lockups and lists line up.
// Writes assets/logos/<name>.svg. Needs Playwright (with Chromium):
//   NODE_PATH=$(npm root -g) node tools/build-square-logos.mjs
import fs from 'node:fs';
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('playwright');

const KIT = new URL('../', import.meta.url);
const SRC = {
  yara: 'assets/products/yara/yara-mark.svg', 'ax-frame': 'assets/products/frame/frame-mark.svg',
  loom: 'assets/products/loom/loom-mark.svg', motion: 'assets/products/motion/motion-mark.svg',
  janka: 'assets/products/janka/janka-mark.svg', angka: 'assets/products/angka/angka-mark.svg', lapis: 'assets/products/angka/lapis-mark.svg',
  ...Object.fromEntries(['grid', 'crowd', 'trace', 'flow', 'transit', 'site', 'ward', 'yard'].map((k) => [`plexyz-${k}`, `assets/products/plexyz/plexyz-${k}-mark.svg`])),
  ...Object.fromEntries(fs.readdirSync(new URL('assets/products/tinara/options/', KIT)).map((f) => [f.replace('.svg', '').replace('-logo', ''), `assets/products/tinara/options/${f}`])),
};
const MARGIN = 0.08; // of the square's side, on every edge

const browser = await chromium.launch();
const page = await browser.newPage();
fs.mkdirSync(new URL('assets/logos/', KIT), { recursive: true });
for (const [name, path] of Object.entries(SRC)) {
  const svg = fs.readFileSync(new URL(path, KIT), 'utf8');
  await page.setContent(`<html><body>${svg}</body></html>`);
  const bb = await page.evaluate(() => { const s = document.querySelector('svg'); s.removeAttribute('width'); s.removeAttribute('height'); const b = s.getBBox(); return { x: b.x, y: b.y, w: b.width, h: b.height }; });
  const side = Math.max(bb.w, bb.h) / (1 - 2 * MARGIN), cx = bb.x + bb.w / 2, cy = bb.y + bb.h / 2;
  const vb = [cx - side / 2, cy - side / 2, side, side].map((n) => +n.toFixed(2)).join(' ');
  const out = svg.replace(/<svg\b([^>]*)>/, (m, attrs) => `<svg${attrs.replace(/\s(viewBox|width|height|class)="[^"]*"/g, '')} viewBox="${vb}">`);
  fs.writeFileSync(new URL(`assets/logos/${name}.svg`, KIT), out.endsWith('\n') ? out : out + '\n');
  console.log(`assets/logos/${name}.svg`, vb);
}
await browser.close();
