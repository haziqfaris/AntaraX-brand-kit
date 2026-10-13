// The AntaraX intro video animatic (marketing/video/intro-60s/, storyboard v3): any business, one question ("can you
// take on a bigger order?"), the answer scattered, then connect what you have, fill four gaps (paperwork, jobs, stock,
// space) and the outcome: free up cash, make room, say yes to more work. A deterministic timeline (render(t) draws every
// frame from the time alone), rendered frame by frame with Playwright and piped into ffmpeg. Layout and timing only:
// the reference for whoever makes the real video. Needs Playwright (with Chromium) and ffmpeg:
//   NODE_PATH=$(npm root -g) node tools/build-intro-animatic.mjs [--stills]
import fs from 'node:fs';
import os from 'node:os';
import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('playwright');

const KIT = new URL('../', import.meta.url).pathname;
const OUT = KIT + 'marketing/video/intro-60s/';
const HERE = fs.mkdtempSync(os.tmpdir() + '/ax-intro-') + '/';
const F = (p) => 'file://' + p;
const args = process.argv.slice(2);
const FPS = 30, DUR = 60;

const kain = fs.readFileSync(KIT + 'assets/antarax/antarax-a-kain.svg', 'utf8');
const si = kain.lastIndexOf('<g transform="translate(268 265)"><g class="kain-spark">');
fs.writeFileSync(HERE + 'kain-nospark.svg', kain.slice(0, si).replace(/<style>[\s\S]*?<\/style>/, '') + '</svg>\n');
const IMG = {
  kain: F(HERE + 'kain-nospark.svg'), kainOpen: F(KIT + 'assets/antarax/antarax-a-kain-open.svg'),
  spark: F(KIT + 'assets/antarax/sparkle.svg'), mark: F(KIT + 'assets/antarax/antarax-mark.svg'),
  wordmark: F(KIT + 'assets/antarax/antarax-wordmark-white.svg'), reka: F(KIT + 'assets/reka/reka-lockup-white.svg'),
  qr: F(KIT + 'marketing/qr/qr-antarax-meet.svg'),
  managed: F(KIT + 'assets/antarax/sparkle.svg'),
  yara: F(KIT + 'assets/product-logos/yara.svg'), janka: F(KIT + 'assets/product-logos/janka.svg'), grid: F(KIT + 'assets/product-logos/plexyz-grid.svg'),
};
const SPARKMONO = fs.readFileSync(KIT + 'assets/antarax/sparkle-mono.svg', 'utf8').trim().replace('<svg ', '<svg style="width:30px;height:30px;flex:none" ');
const font = (w, f = `poppins-${w}`) => `@font-face{font-family:${f.startsWith('jet') ? 'M' : 'P'};font-weight:${w};src:url(${F(KIT + 'tools/fonts/' + f + '.woff')})}`;

// their own tools: generic line icons, never a brand
const ICON = {
  accounting: '<rect x="10" y="6" width="28" height="36" rx="4"/><rect x="15" y="11" width="18" height="8" rx="2"/><path d="M16 26h2M23 26h2M30 26h2M16 33h2M23 33h2M30 33h2"/>',
  sheets: '<rect x="6" y="8" width="36" height="32" rx="4"/><path d="M6 18h36M6 29h36M18 8v32M30 8v32"/>',
  chat: '<path d="M8 8h24a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H18l-8 6v-6H8a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4z"/><path d="M40 16a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-2v5l-6-5h-8"/>',
  mail: '<rect x="5" y="10" width="38" height="28" rx="4"/><path d="M6 12l18 14 18-14"/>',
  system: '<ellipse cx="24" cy="11" rx="14" ry="5"/><path d="M10 11v26c0 2.8 6.3 5 14 5s14-2.2 14-5V11M10 24c0 2.8 6.3 5 14 5s14-2.2 14-5"/>',
};
const icon = (k, c = '#C5CCF7', s = 42) => `<svg width="${s}" height="${s}" viewBox="0 0 48 48" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">${ICON[k]}</svg>`;
const TOOLS = [['accounting', 'Accounting'], ['sheets', 'Spreadsheets'], ['chat', 'Chat groups'], ['mail', 'Email and documents'], ['system', 'Your own system']];
const TY = (i) => 196 + i * 124, HUBY = 496;
// [logo, name, outcome line, gap label, gap now, line colour]
const SLOTS = [
  ['managed', 'Managed AI', 'Reads, sorts and drafts your paperwork.', 'Paperwork', 'Piling up in the inbox', '#5B8CFF'],
  ['yara', 'Yara', 'Every job, live. Know what you can take on.', 'Jobs', 'Status by phone', '#3FD0D3'],
  ['janka', 'Janka', 'Free up cash stuck in stock that isn’t moving.', 'Stock', 'Cash sitting on the shelf', '#4CD5FC'],
  ['grid', 'PLExyz Grid', 'Make room for more with the space you have.', 'Space', 'Nobody’s quite sure', '#A99BFF'],
];
const SY = (j) => 191 + j * 156;
const MINI = [
  // paperwork: documents sorted into folders, one ticked
  `<rect x="6" y="10" width="34" height="44" rx="4" fill="#EEF3FF" stroke="#5B8CFF" stroke-width="2"/><path d="M13 22h20M13 30h20M13 38h12" stroke="#9DB6FF" stroke-width="3"/><rect id="doc" x="48" y="4" width="34" height="44" rx="4" fill="#fff" stroke="#5B8CFF" stroke-width="2"/><path d="M4 74h40l6 8h70v32H4z" fill="#DCE6FF"/><path d="M90 30l10 10 18-20" id="tick" stroke="#12B76A" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round" pathLength="1"/>`,
  // jobs: a mini board, one card moving along
  `<rect x="0" y="0" width="40" height="110" rx="8" fill="#F2F5FC"/><rect x="46" y="0" width="40" height="110" rx="8" fill="#F2F5FC"/><rect x="92" y="0" width="40" height="110" rx="8" fill="#F2F5FC"/><rect x="5" y="8" width="30" height="20" rx="4" fill="#fff" stroke="#E3E8F5"/><rect x="51" y="36" width="30" height="20" rx="4" fill="#fff" stroke="#E3E8F5"/><rect x="97" y="8" width="30" height="20" rx="4" fill="#fff" stroke="#E3E8F5"/><rect id="mc1" x="51" y="8" width="30" height="20" rx="4" fill="#08B0B3"/>`,
  // stock: items by value, the ones not moving flagged
  `${[70, 46, 88, 30, 58, 22].map((h, k) => `<rect id="bar${k}" x="${k * 22}" y="${104 - h}" width="16" height="${h}" rx="3" fill="${k === 0 || k === 2 ? '#F47B3D' : '#CFE9F7'}"/>`).join('')}<path d="M0 108h132" stroke="#C9D3EE" stroke-width="2"/>`,
  // space: bays, three freed
  `${Array.from({ length: 8 }, (_, k) => `<rect id="bay${k}" x="${(k % 4) * 33}" y="${Math.floor(k / 4) * 56 + 4}" width="28" height="46" rx="5" fill="#2C09B2" stroke="#2C09B2" stroke-width="2"/>`).join('')}`,
];

const win = (title, body, extra = '') => `<div class="win" ${extra}><div class="bar"><i></i><i></i><i></i><span>${title}</span></div><div class="wb">${body}</div></div>`;
const pill = (t, extra = '') => `<div style="background:#fff;border-radius:12px;padding:6px 12px;width:max-content;${extra}">${t}</div>`;
const Q = 'We’d like a bigger order next month. Can you take it on?';
const msg = (id) => `<div class="msg" id="${id}" style="left:440px;top:110px;width:1040px;background:#fff;color:var(--ink);display:flex;gap:20px;align-items:center"><div style="width:58px;height:58px;border-radius:50%;background:#E4E9F5;flex:none;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:700;color:var(--muted)">C</div><div><div style="font-size:19px;color:var(--muted)">Customer · 9:00 am</div>${Q}</div></div>`;

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
${font(400)}${font(600)}${font(700)}${font(500, 'jetbrains-mono-500')}
:root{--navy:#071233;--ink:#0B1B4F;--muted:#5B6690;--line:#E3E8F5;--blue:#0459F7;--sky:#7FD9FF;--lilac:#C5CCF7;--teal:#08B0B3;--cyan:#0CC4FB;--orange:#F47B3D;--violet:#2C09B2;--warn:#F79009;--ok:#12B76A}
*{box-sizing:border-box}html,body{margin:0;width:1920px;height:1080px;overflow:hidden}
body{background-color:var(--navy);background-image:radial-gradient(1200px 800px at 50% 45%,rgba(4,89,247,.16),transparent 70%),linear-gradient(rgba(255,255,255,.035) 2px,transparent 2px),linear-gradient(90deg,rgba(255,255,255,.035) 2px,transparent 2px);background-size:auto,96px 96px,96px 96px;font-family:P,sans-serif;color:#fff;position:relative}
.abs{position:absolute}.sc{position:absolute;inset:0;opacity:0}
.mono{font-family:M,monospace;font-variant-numeric:tabular-nums}
.panel{position:absolute;background:#fff;border-radius:28px;color:var(--ink);box-shadow:0 40px 80px rgba(0,0,0,.35)}
.tag{font-family:M,monospace;font-size:18px;letter-spacing:.06em;color:var(--muted);text-transform:uppercase}
#cap{position:absolute;left:50%;bottom:52px;transform:translateX(-50%);width:max-content;max-width:1680px;text-align:center;font-size:40px;line-height:1.3;background:rgba(7,18,51,.8);padding:14px 32px;border-radius:18px;opacity:0}
#hud{position:absolute;left:44px;top:34px;font-family:M,monospace;font-size:20px;letter-spacing:.06em;color:rgba(255,255,255,.42);text-transform:uppercase}
#tc{position:absolute;right:44px;top:34px;font-family:M,monospace;font-size:20px;color:rgba(255,255,255,.42)}
.head{position:absolute;left:0;right:0;top:96px;text-align:center;font-size:54px;font-weight:700;letter-spacing:-.02em}
.msg{position:absolute;border-radius:26px;padding:18px 28px;font-size:32px;line-height:1.35;box-shadow:0 20px 50px rgba(0,0,0,.3)}
.win{position:absolute;width:560px;height:250px;border-radius:20px;background:#F5F7FC;color:var(--ink);overflow:hidden;box-shadow:0 24px 50px rgba(0,0,0,.35)}
.win .bar{height:44px;background:#E4E9F5;display:flex;align-items:center;gap:8px;padding:0 16px;font-size:19px;color:var(--muted)}
.win .bar i{width:12px;height:12px;border-radius:50%;background:#C3CBE0;display:block}.win .bar span{margin-left:10px}
.win .wb{padding:16px 20px;font-size:21px;line-height:1.35}
.ring{position:absolute;border-radius:24px;border:5px solid var(--sky);box-shadow:0 0 0 8px rgba(127,217,255,.18);opacity:0}
.flag{position:absolute;background:var(--warn);color:#2A1700;font-weight:600;font-size:22px;border-radius:12px;padding:6px 14px;white-space:nowrap;opacity:0}
.clock{position:absolute;right:120px;top:150px;font-family:M,monospace;font-size:30px;background:rgba(255,255,255,.08);border:2px solid rgba(197,204,247,.35);border-radius:999px;padding:6px 22px;color:var(--lilac)}
.ind{display:flex;gap:12px;flex-wrap:wrap}.ind span{border:2px solid rgba(197,204,247,.45);border-radius:999px;padding:6px 18px;font-size:24px;color:var(--lilac)}
.tool{position:absolute;left:110px;width:480px;height:104px;border-radius:22px;background:rgba(255,255,255,.06);border:2px solid rgba(197,204,247,.35);display:flex;align-items:center;gap:20px;padding:0 24px;font-size:28px;font-weight:600;opacity:0}
.hub{position:absolute;left:830px;top:${HUBY - 110}px;width:220px;height:220px;border-radius:52px;background:#fff;box-shadow:0 0 0 14px rgba(4,89,247,.22),0 30px 60px rgba(0,0,0,.35);opacity:0}
.hub img{position:absolute;inset:30px;width:160px;height:160px}
.slot{position:absolute;left:1200px;width:640px;height:142px;border-radius:22px;border:3px dashed rgba(197,204,247,.55);opacity:0;overflow:hidden}
.slot .gap{position:absolute;inset:0;padding:20px 28px}
.slot .fill{position:absolute;inset:0;background:#fff;color:var(--ink);display:flex;align-items:center;gap:20px;padding:0 20px;opacity:0}
.lt{width:100px;height:100px;border-radius:24px;background:#fff;box-shadow:0 0 0 2px #E3E8F5;flex:none;position:relative}.lt img{position:absolute;inset:10px;width:80px;height:80px}
.chip{display:inline-flex;align-items:center;gap:8px;border-radius:999px;padding:5px 14px;font-size:20px;font-weight:600}
.btn{border-radius:14px;font-weight:600;display:flex;align-items:center;justify-content:center}
.oc{position:absolute;top:250px;width:440px;height:250px;padding:26px}
.oc .big{font-size:52px;font-weight:700;letter-spacing:-.02em;margin-top:10px}
</style></head><body>

<!-- 1-2 the question, four places to look, what it costs -->
<div class="sc" id="s1">
 ${msg('q1')}
 ${win('Team chat', `<div style="display:grid;gap:8px">${pill('Do we have stock for a bigger order?')}${pill('Not sure. Check the sheet')}${pill('Will ask tomorrow', 'color:var(--muted)')}</div>`, 'id="w0" style="left:340px;top:300px"')}
 ${win('stock-final-v3.xlsx', `<div style="display:grid;grid-template-columns:2fr 1fr 1fr;gap:4px;font-size:19px">${['Item', 'On hand', 'Last sold', 'Item A', '?', '3 wk ago', 'Item B', '1,200', '5 mo ago', 'Item C', '840', '7 mo ago'].map((c, i) => `<div style="background:${i < 3 ? '#E4E9F5' : '#fff'};padding:4px 8px;${c === '?' ? 'color:#C2410C;font-weight:700' : ''}">${c}</div>`).join('')}</div>`, 'id="w1" style="left:1020px;top:300px"')}
 ${win('Inbox · 46 unread', `<div style="display:grid;gap:6px;font-size:19px">${[['INV-0932.pdf', 'Supplier invoice'], ['DO-1187 scan.jpg', 'Delivery order'], ['Quotation request', 'From a customer'], ['Claim form.pdf', 'To be filed']].map(([a, b]) => `<div style="display:flex;justify-content:space-between;background:#fff;border-radius:8px;padding:5px 12px"><span>${a}</span><span style="color:var(--muted)">${b}</span></div>`).join('')}</div>`, 'id="w2" style="left:340px;top:600px"')}
 ${win('Someone’s memory', '<div style="display:flex;gap:22px;align-items:center;margin-top:10px"><svg width="90" height="110" viewBox="0 0 90 110" fill="none" stroke="#5B6690" stroke-width="4"><circle cx="45" cy="32" r="22"/><path d="M8 106c0-22 16-38 37-38s37 16 37 38"/></svg><div style="background:#fff;border-radius:20px;padding:14px 18px;font-size:22px">“I think there’s space at the back. And the team might be free.”</div></div>', 'id="w3" style="left:1020px;top:600px"')}
 ${[0, 1, 2, 3].map((i) => `<div class="ring" id="r${i}" style="left:${(i % 2 ? 1020 : 340) - 10}px;top:${(i < 2 ? 300 : 600) - 10}px;width:580px;height:270px"></div>`).join('')}
 <div class="flag" id="f0" style="left:1250px;top:282px">Cash tied up in stock</div>
 <div class="flag" id="f1" style="left:640px;top:582px">Paperwork piling up</div>
 <div class="clock" id="clock">9:00 am</div>
 <div class="head" id="h1b" style="top:440px;font-size:96px;opacity:0;text-shadow:0 10px 40px rgba(7,18,51,.9)">So the safe answer is no.</div>
</div>

<!-- 3 the promise, for any business -->
<div class="sc" id="s3">
 <div class="abs" id="glow" style="left:434px;top:474px;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,rgba(4,89,247,.55),rgba(4,89,247,.18) 45%,rgba(7,18,51,0) 72%)"></div>
 <img class="abs" id="kain" src="${IMG.kain}" style="left:170px;top:110px;width:838px;height:860px;transform-origin:49.4% 59.7%">
 <img class="abs" id="wm3" src="${IMG.wordmark}" style="left:1100px;top:200px;height:96px">
 <div class="abs" id="t3" style="left:1100px;top:330px;font-size:124px;line-height:1.04;font-weight:700;letter-spacing:-.025em">Put intelligence<br>to work.</div>
 <div class="abs ind" id="ind" style="left:1100px;top:760px;width:760px">${['Factories', 'Warehouses', 'Distributors', 'Shops', 'Offices', 'Services'].map((x) => `<span>${x}</span>`).join('')}</div>
</div>

<!-- 4-5 connect what you have, fill the gaps -->
<div class="sc" id="s4">
 <div class="head" id="h4a">Keep the tools you already trust.</div>
 <div class="head" id="h4b" style="opacity:0">Fill the gaps with AntaraX.</div>
 <svg class="abs" style="left:0;top:0" width="1920" height="1080" fill="none">
  ${TOOLS.map((_, i) => `<path id="pt${i}" d="M590 ${TY(i) + 52} C 720 ${TY(i) + 52}, 680 ${HUBY}, 830 ${HUBY}" stroke="#7FD9FF" stroke-width="4" stroke-linecap="round"/>`).join('')}
  ${SLOTS.map((s, j) => `<path id="ps${j}" d="M1050 ${HUBY} C 1130 ${HUBY}, 1120 ${SY(j) + 71}, 1200 ${SY(j) + 71}" stroke="${s[5]}" stroke-width="4" stroke-linecap="round"/>`).join('')}
  ${Array.from({ length: 15 }, (_, i) => `<circle id="dot${i}" r="7" fill="#7FD9FF"/>`).join('')}
 </svg>
 ${TOOLS.map(([k, n], i) => `<div class="tool" id="tool${i}" style="top:${TY(i)}px">${icon(k)}<span>${n}</span></div>`).join('')}
 <div class="hub" id="hub"><img src="${IMG.mark}"></div>
 <div class="abs" id="hubl" style="left:700px;width:480px;top:${HUBY + 144}px;text-align:center;opacity:0"><div style="font-size:30px;font-weight:700">AntaraX</div><div style="font-size:21px;color:var(--lilac);margin-top:4px">Connected for you by the REKA team</div></div>
 ${SLOTS.map(([k, n, line, gap, now], j) => `<div class="slot" id="slot${j}" style="top:${SY(j)}px">
  <div class="gap" id="gap${j}"><div class="tag" style="color:var(--lilac)">Gap</div><div style="font-size:30px;font-weight:700;margin-top:4px">${gap}</div><div style="font-size:22px;color:var(--lilac)">${now}</div></div>
  <div class="fill" id="fill${j}"><div class="lt"><img src="${IMG[k]}" ${k === 'managed' ? 'style="inset:18px;width:64px;height:64px"' : ''}></div><div style="flex:1;min-width:0"><div style="font-size:28px;font-weight:700">${n}</div><div style="font-size:21px;line-height:1.3;color:var(--muted)">${line}</div></div>
   <svg width="132" height="114" viewBox="0 0 132 114" style="flex:none">${MINI[j]}</svg></div>
 </div>`).join('')}
</div>

<!-- 6 the answer: the outcome -->
<div class="sc" id="s6">
 ${msg('q6')}
 <div class="panel oc" id="o0" style="left:250px"><div style="display:flex;align-items:center;gap:12px"><div class="lt" style="width:52px;height:52px;border-radius:14px"><img src="${IMG.janka}" style="inset:5px;width:42px;height:42px"></div><b style="font-size:24px">Janka</b><span class="tag" style="margin-left:auto">demo data</span></div>
  <div style="font-size:22px;color:var(--muted);margin-top:16px">Stock not moving</div><div class="big mono" id="cash">RM 48,200</div><span class="chip" style="background:#FFF1E8;color:#B4501B;margin-top:10px">Cash you can free up</span></div>
 <div class="panel oc" id="o1" style="left:740px"><div style="display:flex;align-items:center;gap:12px"><div class="lt" style="width:52px;height:52px;border-radius:14px"><img src="${IMG.grid}" style="inset:5px;width:42px;height:42px"></div><b style="font-size:24px">PLExyz Grid</b><span class="tag" style="margin-left:auto">demo data</span></div>
  <div style="font-size:22px;color:var(--muted);margin-top:16px">Free pallet space</div><div class="big mono" id="space">120 spots</div><span class="chip" style="background:#EFEBFF;color:#2C09B2;margin-top:10px">Room for more</span></div>
 <div class="panel oc" id="o2" style="left:1230px"><div style="display:flex;align-items:center;gap:12px"><div class="lt" style="width:52px;height:52px;border-radius:14px"><img src="${IMG.yara}" style="inset:5px;width:42px;height:42px"></div><b style="font-size:24px">Yara</b><span class="tag" style="margin-left:auto">demo data</span></div>
  <div style="font-size:22px;color:var(--muted);margin-top:16px">Jobs this week</div><div class="big mono">14 on track</div><span class="chip" style="background:#E7F8EF;color:#0A7A45;margin-top:10px">Team has room</span></div>
 <div class="panel" id="qd" style="left:250px;top:540px;width:900px;height:120px;border-radius:22px;display:flex;align-items:center;gap:20px;padding:0 26px">
  <div class="lt" style="width:64px;height:64px;border-radius:16px"><img src="${IMG.managed}" style="inset:12px;width:40px;height:40px"></div>
  <div style="flex:1"><div style="font-size:24px;font-weight:700">Quotation drafted: bigger order, next month</div><div style="font-size:19px;color:var(--muted)">Managed AI · from the customer’s email and your price list</div></div>
  <div class="btn" id="abtn" style="height:60px;width:170px;background:var(--blue);color:#fff;font-size:22px"><span id="abtnt">Approve</span></div>
  <svg class="abs" id="hand" width="56" height="68" viewBox="0 0 32 38"><path d="M3 2 L3 30 L10 24 L15 35 L20 33 L15 22 L25 22 Z" fill="#fff" stroke="#0B1B4F" stroke-width="2.4" stroke-linejoin="round"/></svg>
  <div class="abs" id="rip" style="width:24px;height:24px;border-radius:50%;border:4px solid var(--blue);opacity:0"></div>
 </div>
 <div class="msg" id="rep" style="left:1180px;top:556px;background:var(--blue);color:#fff;opacity:0">Yes, we can take it on. <span class="mono" style="font-size:20px;opacity:.75;margin-left:8px">9:04 am</span></div>
 <div class="head" id="oh" style="top:730px;font-size:72px;opacity:0">Free up cash. Make room. Say yes to more work.</div>
</div>

<!-- 7 end card -->
<div class="sc" id="s8">
 <img class="abs" id="kainO" src="${IMG.kainOpen}" style="left:170px;top:90px;width:800px;height:821px">
 <div class="abs" id="qrt" style="left:${170 + 0.494 * 800 - 205}px;top:${90 + (706 - 240) / 780 * 821 - 205}px;width:410px;height:410px;background:#fff;border-radius:34px;box-shadow:0 0 0 10px rgba(4,89,247,.35);display:flex;align-items:center;justify-content:center"><img src="${IMG.qr}" style="width:376px;height:376px"></div>
 <div class="abs" id="e1" style="left:1080px;top:210px;display:flex;align-items:center;gap:16px;color:var(--sky);font-size:30px;font-weight:600">${SPARKMONO}<span>AI products for business</span></div>
 <img class="abs" id="e2" src="${IMG.wordmark}" style="left:1080px;top:280px;height:92px">
 <div class="abs" id="e3" style="left:1080px;top:430px;font-size:112px;font-weight:700;letter-spacing:-.025em;line-height:1">Book a demo</div>
 <div class="abs" id="e4" style="left:1080px;top:570px;font-size:68px;font-weight:600;color:var(--sky)">antarax.ai/meet</div>
 <div class="abs" id="e5" style="left:1080px;top:730px;display:flex;align-items:center;gap:22px"><span style="font-size:30px;color:var(--lilac)">AntaraX is the AI product line of</span><img src="${IMG.reka}" style="height:54px;width:${54 * 2874 / 806}px"></div>
 <div class="abs" id="e6" style="left:1080px;top:806px;font-size:24px;color:#8F9AC9">Built in Malaysia, for businesses anywhere.</div>
</div>

<img class="abs" id="spark" src="${IMG.spark}" style="left:0;top:0;width:100px;height:100px;opacity:0">
<div id="cap"></div><div id="hud"></div><div id="tc"></div>

<script>
const $=(id)=>document.getElementById(id);
const cl=(x,a=0,b=1)=>Math.min(b,Math.max(a,x));
const io=(x)=>x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2, eo=(x)=>1-Math.pow(1-x,3);
const p=(t,a,b)=>cl((t-a)/(b-a));
const win=(t,a,b,f=.5)=>Math.min(p(t,a,a+f),1-p(t,b-f,b));
const lerp=(a,b,k)=>a+(b-a)*k;
const set=(el,o,tr)=>{el=typeof el==='string'?$(el):el;el.style.opacity=o;if(tr!==undefined)el.style.transform=tr};
const rise=(id,t,a,b,f=.6)=>{const k=eo(p(t,a,a+f));set(id,Math.min(k,1-p(t,b-.4,b)),'translateY('+(1-k)*28+'px)')};

const SCENES=[[0,'The question'],[10,'What it costs'],[15.5,'The promise'],[21,'Connect'],[29.6,'Fill the gaps'],[44,'The outcome'],[53,'Book a demo']];
const CAPS=[[.6,4.6,'A customer asks: can you take on a bigger order next month?'],[4.8,9.8,'The answer is in a chat group, a spreadsheet, a full inbox and someone\\u2019s memory.'],
 [10.2,12.8,'When nobody can see the whole picture, the safe answer is no.'],[12.9,15.4,'Cash sits on the shelf, and good work goes elsewhere.'],
 [16.8,20.9,'AntaraX connects what you have, fills the gaps, and puts AI to work on it.'],
 [21.6,29.3,'Already have tools you trust? Keep them. Our team connects them to AntaraX.'],
 [29.9,33.4,'Where there\\u2019s a gap, we fill it. Managed AI reads, sorts and drafts your paperwork.'],[33.6,37,'Yara shows every job, live, so you know what your team can take on.'],
 [37.2,40.6,'Janka shows the stock that isn\\u2019t moving, so you can free up the cash in it.'],[40.8,43.8,'PLExyz Grid shows the space you have, so you can make room for more.'],
 [44.6,48.6,'Ask again, and you can see the answer.'],[48.8,52.8,'AntaraX flags, forecasts and drafts. You decide, and say yes to more.'],[53.6,59.6,'See it on your own work. Book a demo at antarax.ai/meet.']];

function sparkAt(x,y,size,o){const s=$('spark');s.style.opacity=o;s.style.transform='translate('+(x-50)+'px,'+(y-50)+'px) scale('+size/100+')'}

window.render=function(t){
 let si=0;for(let i=0;i<SCENES.length;i++)if(SCENES[i][0]<=t)si=i;
 $('hud').textContent='Animatic draft v3 · '+String(si+1).padStart(2,'0')+' '+SCENES[si][1];
 $('tc').textContent=Math.floor(t/60)+':'+String(Math.floor(t%60)).padStart(2,'0');
 let cap='',co=0;for(const c of CAPS)if(t>=c[0]&&t<c[1]){cap=c[2];co=win(t,c[0],c[1],.3)}
 $('cap').textContent=cap;$('cap').style.opacity=co;
 let sp=null;

 // 1-2
 set('s1',win(t,0,16.1,.4));
 rise('q1',t,.3,16.1);
 const dim=t>=10?1-.72*p(t,10,10.8):1;
 for(let i=0;i<4;i++){const a=1.6+i*.45,k=eo(p(t,a,a+.6));set('w'+i,k*dim,'translateY('+(1-k)*36+'px) rotate('+[-1.2,1,.8,-.9][i]*k+'deg)');
  const ra=4.6+i*1.3;set('r'+i,Math.min(p(t,ra,ra+.25),1-p(t,ra+1.1,ra+1.35)))}
 rise('f0',t,10.9,16.1,.4);rise('f1',t,11.3,16.1,.4);
 const mins=Math.round(lerp(0,160,io(p(t,10.2,12.4))));$('clock').textContent=(9+Math.floor(mins/60))+':'+String(mins%60).padStart(2,'0')+' am';set('clock',p(t,.8,1.3));
 const hb=eo(p(t,12.4,13.1));set('h1b',Math.min(hb,1-p(t,15.3,15.8)),'scale('+(.94+.06*hb)+')');
 if(t>=15.1){const m=io(p(t,15.1,16));for(let i=0;i<4;i++){const dx=(i%2?-1:1)*340*m,dy=(i<2?1:-1)*150*m;$('w'+i).style.transform='translate('+dx+'px,'+dy+'px) scale('+(1-.6*m)+')';$('w'+i).style.opacity=(1-m)*.28}}

 // 3
 set('s3',win(t,15.5,21.2,.4));
 const eye=[170+414,110+514];
 if(t>=15.7&&t<21.4){const m=io(p(t,15.7,16.7));sp=[lerp(960,eye[0],m),lerp(560,eye[1],m),lerp(20,156,eo(p(t,15.7,16.3))),1];if(t>=20.8){const n=io(p(t,20.8,21.4));sp=[lerp(eye[0],940,n),lerp(eye[1],${HUBY},n),lerp(156,160,n),1-p(t,21.2,21.4)]}}
 const kk=eo(p(t,16.3,17.3));set('kain',kk,'scale('+(.94+.06*kk)+')');set('glow',kk*.9);
 rise('wm3',t,16.9,21);rise('t3',t,17.3,21);rise('ind',t,18.2,21,.7);

 // 4-5
 set('s4',win(t,21,44.4,.4));
 set('h4a',Math.min(p(t,21.6,22.2),1-p(t,29.2,29.6)));set('h4b',p(t,29.6,30.1));
 for(let i=0;i<5;i++){const a=21.8+i*.3,k=eo(p(t,a,a+.5));set('tool'+i,k,'translateX('+(1-k)*-40+'px)')}
 const hk=eo(p(t,21.3,22));set('hub',hk,'scale('+(.8+.2*hk)+')');set('hubl',p(t,25.6,26.2));
 for(let i=0;i<5;i++){const e=$('pt'+i),L=e.getTotalLength();e.style.strokeDasharray=L;e.style.strokeDashoffset=L*(1-io(p(t,23.2+i*.25,24.2+i*.25)))}
 const FT=[30,33.6,37.2,40.8];
 for(let j=0;j<4;j++){const e=$('ps'+j),L=e.getTotalLength();e.style.strokeDasharray=L;e.style.strokeDashoffset=L*(1-io(p(t,FT[j]-.2,FT[j]+.4)))}
 for(let d=0;d<15;d++){const c=$('dot'+d);const line=d%5,ph=Math.floor(d/5)/3;const e=$('pt'+line),L=e.getTotalLength();
  const u=((t*.45+ph+line*.13)%1);const pt=e.getPointAtLength(u*L);c.setAttribute('cx',pt.x);c.setAttribute('cy',pt.y);c.style.opacity=t>25?Math.min(1,p(t,25,25.6))*(.35+.65*Math.sin(u*Math.PI)):0}
 for(let j=0;j<4;j++){const a=28.2+j*.3,k=eo(p(t,a,a+.5));set('slot'+j,k,'translateX('+(1-k)*40+'px)');
  const fk=eo(p(t,FT[j]+.2,FT[j]+.7));set('fill'+j,fk);set('gap'+j,1-fk);$('slot'+j).style.borderStyle=fk>.5?'solid':'dashed';$('slot'+j).style.borderColor=fk>.5?'transparent':'rgba(197,204,247,.55)'}
 // minis
 const dm=io(p(t,31,32));$('doc').setAttribute('y',lerp(4,70,dm));$('doc').style.opacity=1-p(t,31.8,32.1);$('tick').style.strokeDasharray=1;$('tick').style.strokeDashoffset=1-io(p(t,32.1,32.7));
 $('mc1').setAttribute('x',lerp(51,97,io(p(t,35,35.8))));
 [0,2].forEach((k)=>{$('bar'+k).style.opacity=1-.7*p(t,39,39.6)});
 [1,2,6].forEach((k)=>{const e=$('bay'+k),f=p(t,42.2+k*.08,42.6+k*.08);e.setAttribute('fill',f>.5?'#EAFBF1':'#2C09B2');e.setAttribute('stroke',f>.5?'#12B76A':'#2C09B2')});

 // 6 the outcome
 set('s6',win(t,44,53.2,.4));
 rise('q6',t,44.2,53.2);
 for(let i=0;i<3;i++)rise('o'+i,t,44.9+i*.35,53.2,.6);
 const cash=Math.round(lerp(0,48200,io(p(t,45.2,46.4))));$('cash').textContent='RM '+cash.toLocaleString('en-GB');
 rise('qd',t,46.6,53.2,.5);
 const hm=io(p(t,47.2,48));$('hand').style.left=lerp(900,790,hm)+'px';$('hand').style.top=lerp(120,58,hm)+'px';$('hand').style.opacity=Math.min(p(t,47.1,47.3),1-p(t,49.4,49.8));
 const tp=p(t,48,48.6);$('rip').style.left='778px';$('rip').style.top='48px';$('rip').style.opacity=t>=48&&t<48.6?1-tp:0;$('rip').style.transform='scale('+(1+tp*5)+')';
 $('abtnt').textContent=t>=48.15?'Approved':'Approve';$('abtn').style.background=t>=48.15?'#12B76A':'#0459F7';
 rise('rep',t,48.7,53.2,.5);
 const oh=eo(p(t,49.8,50.5));set('oh',Math.min(oh,1-p(t,52.8,53.2)),'scale('+(.96+.04*oh)+')');

 // 7 end card
 set('s8',p(t,53,53.5));
 const ko=eo(p(t,53.1,54.1));set('kainO',ko,'scale('+(.95+.05*ko)+')');const qk=eo(p(t,53.9,54.5));set('qrt',qk,'scale('+(.85+.15*qk)+')');
 ['e1','e2','e3','e4','e5','e6'].forEach((id,i)=>rise(id,t,54.1+i*.25,61));

 if(sp)sparkAt(sp[0],sp[1],sp[2],sp[3]);else $('spark').style.opacity=0;
};
window.ready=Promise.all([...document.images].map(i=>i.decode().catch(()=>{}))).then(()=>document.fonts.ready);
</script></body></html>`;
fs.writeFileSync(HERE + 'animatic3.html', html);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
const errs = [];
page.on('pageerror', (e) => errs.push(e.message));
await page.goto(F(HERE + 'animatic3.html'));
await page.evaluate(() => window.ready);

if (args.includes('--stills')) {
  const T = [3.2, 9.4, 14.2, 19.6, 27.6, 34.8, 43.6, 51.4, 58];
  fs.mkdirSync(OUT + 'stills', { recursive: true });
  for (const t of T) { await page.evaluate((x) => window.render(x), t); await page.screenshot({ path: `${OUT}stills/${String(T.indexOf(t) + 1).padStart(2, '0')}-${String(t).replace('.', '_')}s.jpg`, type: 'jpeg', quality: 80 }); }
  console.log('stills', T.join(' '));
} else {
  fs.mkdirSync(OUT, { recursive: true });
  const out = OUT + 'antarax-intro-animatic.mp4';
  const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(FPS), '-i', '-', '-c:v', 'libx264', '-preset', 'slow', '-crf', '24', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', out], { stdio: ['pipe', 'inherit', 'inherit'] });
  for (let i = 0; i < DUR * FPS; i++) {
    await page.evaluate((x) => window.render(x), i / FPS);
    const buf = await page.screenshot({ type: 'jpeg', quality: 92 });
    if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once('drain', r));
  }
  ff.stdin.end();
  await new Promise((r) => ff.on('close', r));
  console.log(out, (fs.statSync(out).size / 1048576).toFixed(1), 'MB');
}
if (errs.length) console.log('page errors:', errs);
await browser.close();
fs.rmSync(HERE, { recursive: true, force: true });
