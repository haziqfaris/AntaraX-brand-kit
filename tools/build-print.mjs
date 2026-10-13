// Event print (guide/04, "The kain A"; guide/10, 13 October 2026): the navy roll-up bunting, 80 x 200 cm, and the
// A3 QR poster, each as a PDF with bleed and at trim size, plus a small preview. CSS px are real size
// (96 px = 1 in), so each PDF page is the physical sheet. Both QR codes lead to antarax.ai/meet, the event page.
// Writes assets/print/. Needs Playwright (with Chromium):
//   NODE_PATH=$(npm root -g) node tools/build-print.mjs
import fs from 'node:fs';
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('playwright');

const KIT = new URL('../', import.meta.url).pathname;
const OUT = KIT + 'assets/print/';
const F = (p) => 'file://' + KIT + p;
const IMG = {
  kain: F('assets/logo/antarax-a-kain.svg'),
  kainOpen: F('assets/logo/antarax-a-kain-open.svg'),
  qr: F('assets/print/qr-antarax-meet.svg'), // https://antarax.ai/meet, error correction Q
  reka: F('assets/reka/reka-lockup-white.svg'),
};
const mm = (v) => v / 25.4 * 96;
const fonts = [400, 600, 700].map((w) => `@font-face{font-family:P;font-weight:${w};src:url(${F(`tools/fonts/poppins-${w}.woff`)})}`).join('');
const NAVY = 'background-color:#071233;background-image:linear-gradient(rgba(255,255,255,0.045) 2px,transparent 2px),linear-gradient(90deg,rgba(255,255,255,0.045) 2px,transparent 2px);';

// the trim box sits inside the bleed; the background fills the whole sheet
const sheet = (tw, th, bleed, inner) => {
  const b = mm(bleed), W = tw + 2 * b, H = th + 2 * b;
  return { W, H, html: `<!doctype html><html><head><meta charset="utf-8"><style>${fonts}
@page{size:${W}px ${H}px;margin:0}html,body{margin:0;padding:0}body{width:${W}px;height:${H}px;${NAVY}font-family:P,sans-serif;color:#fff;-webkit-print-color-adjust:exact;print-color-adjust:exact;overflow:hidden;position:relative}
.trim{position:absolute;left:${b}px;top:${b}px;width:${tw}px;height:${th}px;box-sizing:border-box}
</style></head><body><div class="trim">${inner}</div></body></html>` };
};

// ---- roll-up bunting, 80 x 200 cm: the kain A large; the QR card low, just above the REKA line at the foot ----
// The bottom 8 cm goes into the stand's base: only the REKA lines sit near it.
const BW = mm(800), BH = mm(2000);
const A = 2544, AH = Math.round(A * 780 / 760), eye = { x: 0.494 * A, y: (706 - 240) / 780 * AH }, glow = 0.333 * A;
const bunting = `<div style="width:100%;height:100%;box-sizing:border-box;padding:300px 240px 330px;display:flex;flex-direction:column">
<span style="font-size:190px;font-weight:600;letter-spacing:-0.01em;line-height:1.2">AntaraX</span>
<div style="margin-top:250px;display:flex;align-items:center;gap:44px;color:#7FD9FF;font-size:116px;font-weight:600"><span style="width:62px;height:62px;background:#7FD9FF;transform:rotate(45deg);border-radius:12px;flex:none"></span><span>AI products for business</span></div>
<h1 style="margin:90px 0 0;font-size:300px;line-height:1.04;font-weight:700;letter-spacing:-0.025em"><span style="display:block;white-space:nowrap">Put intelligence</span><span style="display:block;white-space:nowrap">to work.</span></h1>
<p style="margin:120px 0 0;font-size:124px;line-height:1.3;color:#C5CCF7">Software that runs your jobs, your stock and your space, with AI where it helps.</p>
<div style="position:relative;margin-top:200px;width:${A}px;height:${AH}px;flex:none">
<div style="position:absolute;left:${(eye.x - glow / 2).toFixed(0)}px;top:${(eye.y - glow / 2).toFixed(0)}px;width:${glow.toFixed(0)}px;height:${glow.toFixed(0)}px;border-radius:50%;background:radial-gradient(circle,rgba(4,89,247,0.42) 0%,rgba(4,89,247,0.16) 45%,rgba(7,18,51,0) 72%)"></div>
<img src="${IMG.kain}" alt="" style="position:absolute;left:0;top:0;width:${A}px;height:${AH}px"></div>
<div style="margin-top:auto;background:#fff;border-radius:96px;padding:100px 110px;display:flex;align-items:center;gap:110px;color:#0B1B4F">
<img src="${IMG.qr}" alt="" style="width:600px;height:600px;flex:none">
<div style="display:flex;flex-direction:column;gap:28px"><span style="font-size:150px;font-weight:700;line-height:1.05">Scan to meet us</span><span style="font-size:170px;font-weight:600;color:#0459F7;line-height:1.05">antarax.ai/meet</span><span style="font-size:84px;color:#3B4469">Get more out of AI than answers.</span></div></div>
<div style="margin-top:140px;display:flex;align-items:center;gap:56px"><span style="font-size:96px;color:#C5CCF7">AntaraX is the AI product line of</span><img src="${IMG.reka}" alt="REKA" style="height:170px;width:606px"></div>
<p style="margin:70px 0 0;font-size:64px;color:#8F9AC9">REKA Inisiatif Sdn Bhd, Kuala Lumpur · reka.re</p></div>`;

// ---- A3 poster, 297 x 420 mm: the open kain A with the QR code in its eye ----
const AW = mm(297), AHt = mm(420);
const aW = 820, aH = Math.round(aW * 780 / 760), hx = 0.494 * aW, hy = (706 - 240) / 780 * aH, q = 420;
const a3 = `<div style="width:100%;height:100%;box-sizing:border-box;padding:84px 80px 70px;display:flex;flex-direction:column;align-items:center;text-align:center">
<div style="display:flex;align-items:center;gap:16px;color:#7FD9FF;font-size:32px;font-weight:600"><span style="width:18px;height:18px;background:#7FD9FF;transform:rotate(45deg);border-radius:4px;flex:none"></span><span>AntaraX · AI products for business</span></div>
<h1 style="margin:26px 0 0;font-size:96px;line-height:1.05;font-weight:700;letter-spacing:-0.02em">Nice to meet you.</h1>
<div style="position:relative;margin-top:36px;width:${aW}px;height:${aH}px;flex:none">
<img src="${IMG.kainOpen}" alt="" style="position:absolute;left:0;top:0;width:${aW}px;height:${aH}px">
<div style="position:absolute;left:${(hx - q / 2).toFixed(1)}px;top:${(hy - q / 2).toFixed(1)}px;width:${q}px;height:${q}px;background:#fff;border-radius:34px;display:flex;align-items:center;justify-content:center;box-shadow:0 0 0 10px rgba(4,89,247,0.35)"><img src="${IMG.qr}" alt="" style="width:${q - 30}px;height:${q - 30}px"></div></div>
<p style="margin:30px 0 0;font-size:44px;line-height:1.3;color:#C5CCF7">Scan to see what AntaraX can do for you.</p>
<p style="margin:8px 0 0;font-size:64px;font-weight:600;color:#fff">antarax.ai/meet</p>
<div style="margin-top:auto;display:flex;align-items:center;gap:20px"><span style="font-size:28px;color:#C5CCF7">AntaraX is the AI product line of</span><img src="${IMG.reka}" alt="REKA" style="height:50px;width:178px"></div>
<p style="margin:14px 0 0;font-size:20px;color:#8F9AC9">REKA Inisiatif Sdn Bhd, Kuala Lumpur · reka.re</p></div>`;

const jobs = [
  ['antarax-bunting-80x200cm-5mm-bleed', BW, BH, 5, bunting, null],
  ['antarax-bunting-80x200cm-trim', BW, BH, 0, bunting, 0.16],
  ['antarax-a3-qr-meet-3mm-bleed', AW, AHt, 3, a3, null],
  ['antarax-a3-qr-meet-trim', AW, AHt, 0, a3, 0.5],
];
fs.mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch();
for (const [name, tw, th, bleed, inner, preview] of jobs) {
  const s = sheet(tw, th, bleed, inner), tmp = `${OUT}.${name}.html`;
  fs.writeFileSync(tmp, s.html);
  const page = await browser.newPage({ viewport: { width: Math.ceil(s.W), height: Math.ceil(s.H) }, deviceScaleFactor: preview || 1 });
  await page.goto('file://' + tmp); await page.evaluate(() => document.fonts.ready); await page.waitForTimeout(400);
  await page.pdf({ path: `${OUT}${name}.pdf`, width: `${s.W}px`, height: `${s.H}px`, printBackground: true, pageRanges: '1' });
  if (preview) await page.screenshot({ path: `${OUT}${name.replace(/-trim$/, '')}-preview.png` });
  await page.close(); fs.unlinkSync(tmp);
  console.log(`assets/print/${name}.pdf`, `${(s.W / 96 * 25.4).toFixed(0)} x ${(s.H / 96 * 25.4).toFixed(0)} mm`);
}
await browser.close();
