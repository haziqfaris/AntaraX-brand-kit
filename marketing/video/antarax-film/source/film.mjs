// AntaraX brand film, animatic v1 (15 Oct 2026). About three minutes: an opening montage, one chapter each for Yara,
// Janka, PLExyz Grid and AX Frame, and a close on the kain-filled "Put it to work." Illustrative photos and the
// products' demo screens stand in for footage until the shoot. Every voiceover line is a caption, so the same cut
// works with no sound at events. Rendered frame by frame with Playwright and piped into ffmpeg.
//   NODE_PATH=$(npm root -g) node film.mjs [--stills]    (writes film.html, the silent video or stills/ beside this file)
import fs from 'node:fs';
import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('playwright');

const HERE = new URL('./', import.meta.url).pathname;
// The film uses the website's photos and logos, so the antarax-ai repository must be checked out next to this
// one (or point ANTARAX_SITE at its site/ folder). The fonts come from this kit.
const KIT = new URL('../../../../', import.meta.url).pathname;
const SITE = (process.env.ANTARAX_SITE || new URL('../../../../../antarax-ai/site/', import.meta.url).pathname).replace(/\/?$/, '/');
const F = (p) => 'file://' + p;
const args = process.argv.slice(2);
const FPS = 30;
const ph = (n) => F(SITE + 'assets/photos/' + fs.readdirSync(SITE + 'assets/photos').filter((f) => f.startsWith(n + '-') && !/-(480|960)\.webp$/.test(f)).sort().pop());
const A = (p) => F(SITE + 'assets/' + p);
const font = (w, f = `poppins-${w}`) => `@font-face{font-family:${f.startsWith('jet') ? 'M' : 'P'};font-weight:${w};src:url(${F(KIT + 'tools/fonts/' + f + '.woff')})}`;

const LOGO = { yara: A('brand/logo-yara.svg'), janka: A('brand/logo-janka.svg'), grid: A('brand/logo-plexyz-grid.svg'), frame: A('brand/logo-frame.svg') };
const CH = {
  yara: ['yara', 'Yara', 'Every job, live.', '#08B0B3'],
  janka: ['janka', 'Janka', 'Stock you won’t run out of.', '#E9579D'],
  grid: ['grid', 'PLExyz Grid', 'Every space, accounted for.', '#7C74F0'],
  frame: ['frame', 'AX Frame', 'In closed pilot', '#074AF8'],
};

// [kind, duration, options]. A shot fades in over the one before it.
const SHOTS = [
  ['photo', 4.6, { src: ph('home-1'), say: 'You already use AI to write, and to search.', z: [1.04, 1.14], o: '60% 40%' }],
  ['photo', 4.4, { src: ph('yara-1'), say: 'But the work itself still runs on phone calls,', z: [1.12, 1.02], o: '40% 50%' }],
  ['photo', 4, { src: ph('industry-manufacturing-2'), say: 'whiteboards,', z: [1.02, 1.1], o: '50% 40%' }],
  ['photo', 4, { src: ph('inventory-forecasting-malaysia-2'), say: 'and memory.', z: [1.1, 1.02], o: '50% 60%' }],
  ['title', 6.5, { big: 'Get more out of AI than answers.', small: 'AntaraX puts AI into the work itself.' }],

  ['photo', 6.2, { src: ph('job-tracking-software-malaysia-1'), ch: 'yara', say: 'At three in the afternoon, someone calls the floor to ask where a job is.', z: [1.02, 1.12], o: '50% 35%' }],
  ['photo', 6, { src: ph('yara-3'), ch: 'yara', say: 'With Yara, the people doing the work tap Start, Hold or Complete on their phone.', z: [1.12, 1.03], o: '35% 45%' }],
  ['phone', 7, { src: A('yara/step-tap.webp'), ch: 'yara', say: 'Each tap updates the job, right from the floor.', side: 'Start. Hold. Complete.' }],
  ['laptop', 7.5, { src: A('yara/step-live.webp'), ch: 'yara', say: 'So everyone sees where every job stands, live.' }],
  ['photo', 5.6, { src: ph('yara-2'), ch: 'yara', say: 'Nobody has to phone the floor to ask.', z: [1.03, 1.12], o: '40% 40%' }],
  ['photo', 5.6, { src: ph('home-3'), ch: 'yara', say: 'Yara. See where every job stands.', z: [1.1, 1.02], o: '50% 40%' }],

  ['photo', 6, { src: ph('janka-1'), ch: 'janka', say: 'In the store, the item that moves runs out,', z: [1.02, 1.12], o: '60% 40%' }],
  ['photo', 5.6, { src: ph('inventory-forecasting-malaysia-1'), ch: 'janka', say: 'while stock that isn’t moving sits on the shelf.', z: [1.12, 1.03], o: '50% 50%' }],
  ['laptop', 7.5, { src: A('janka/step-forecast.webp'), ch: 'janka', say: 'Janka works out what you’ll need, item by item, from what you actually use.' }],
  ['laptop', 7.5, { src: A('janka/step-drafts.webp'), ch: 'janka', say: 'When stock heads for the reorder point, it drafts the order with its reasoning.' }],
  ['laptop', 6, { src: A('janka/step-reason.webp'), ch: 'janka', say: 'A person approves it before anything goes to a supplier.' }],
  ['photo', 5.6, { src: ph('janka-3'), ch: 'janka', say: 'Janka. Know what to reorder, and when.', z: [1.03, 1.12], o: '45% 40%' }],

  ['photo', 6, { src: ph('industry-logistics-2'), ch: 'grid', say: 'In the warehouse, a zone looks full only when the dock backs up.', z: [1.02, 1.12], o: '40% 40%' }],
  ['photo', 5.4, { src: ph('industry-logistics-1'), ch: 'grid', say: 'So pickers walk the aisles to check.', z: [1.12, 1.03], o: '55% 45%' }],
  ['tablet', 7.5, { src: A('plexyz/step-map.webp'), ch: 'grid', say: 'PLExyz Grid draws your site as it really is, down to each bay.' }],
  ['laptop', 7.5, { src: A('plexyz/step-book.webp'), ch: 'grid', say: 'Every placement is checked against the site’s rules before it is saved. It warns, or it blocks.' }],
  ['photo', 5.6, { src: ph('plexyz-1'), ch: 'grid', say: 'Find any unit, without walking the aisles.', z: [1.03, 1.12], o: '45% 40%' }],
  ['photo', 5.6, { src: ph('products-1'), ch: 'grid', say: 'PLExyz Grid. Every space, accounted for.', z: [1.1, 1.02], o: '55% 45%' }],

  ['photo', 6, { src: ph('software-spend-management-malaysia-1'), ch: 'frame', say: 'In the office, a renewal nobody remembered has just hit the card.', z: [1.02, 1.12], o: '50% 40%' }],
  ['ledger', 8.5, { ch: 'frame', say: 'AX Frame keeps one list of everything you pay for, and warns you before each charge.' }],
  ['photo', 6.4, { src: ph('frame-1'), ch: 'frame', say: 'Every tool has an owner. Its AI proposes where to save, and a person approves.', z: [1.03, 1.12], o: '45% 40%' }],

  ['montage', 7, { srcs: [ph('solutions-1'), ph('contact-1'), ph('plexyz-2'), ph('technology-3')], say: 'Start with the one that hurts most. Connect the others when you’re ready.' }],
  ['logos', 6, { big: 'Born in Malaysia, built for businesses anywhere.' }],
  ['end', 8, {}],
];
let t0 = 0; const XF = .7;
SHOTS.forEach((s, i) => { s.a = t0; s.b = t0 + s[1]; t0 += s[1] - (i < SHOTS.length - 1 ? XF : 0); });
const DUR = Math.ceil(SHOTS.at(-1).b * 10) / 10;

const KAIN_WORDS = F(SITE + 'assets/illo/11c6064c3fb8.svg'), DAYBED = F(SITE + 'assets/illo/5ba9d0a98857.svg'), NIGHTBED = F(SITE + 'assets/illo/b68173d2fdb7.svg');
const SPARK = F(KIT + 'assets/antarax/sparkle.svg'), MARK = F(KIT + 'assets/antarax/antarax-mark.svg'), WORDMARK = F(KIT + 'assets/antarax/antarax-wordmark.svg');

const ledgerRows = [
  ['Design suite', 'Subscription', 'Mei Ling', 'Next month', ''],
  ['AI API', 'Usage', 'Daniel', 'Monthly', 'own'],
  ['Company domain', 'Annual', 'Mei Ling', 'Renews soon', 'warn'],
  ['Cloud hosting', 'Usage', 'Daniel', 'Monthly', ''],
  ['Video calls', 'Subscription', 'Farah', 'In 3 months', ''],
];
const shotHTML = (s, i) => {
  const [k, , o] = s;
  if (k === 'photo') return `<div class="shot photo" id="s${i}"><img src="${o.src}" style="transform-origin:${o.o}"></div>`;
  if (k === 'title') return `<div class="shot title" id="s${i}"><img class="bed" src="${NIGHTBED}"><div class="tt"><img class="sp" src="${SPARK}"><h1>${o.big}</h1><p>${o.small}</p></div></div>`;
  if (k === 'logos') return `<div class="shot logos" id="s${i}"><div class="tt"><h2>${o.big}</h2><div class="lg">${['yara', 'janka', 'grid', 'frame'].map((c) => `<span><img src="${LOGO[c]}">${CH[c][1]}</span>`).join('')}</div></div><img class="bed" src="${DAYBED}"></div>`;
  if (k === 'end') return `<div class="shot end" id="s${i}"><img class="words" src="${KAIN_WORDS}"><div class="url"><img src="${MARK}">antarax.ai</div><img class="bed" src="${DAYBED}"></div>`;
  if (k === 'montage') return `<div class="shot montage" id="s${i}">${o.srcs.map((src, j) => `<div class="cell" id="m${i}_${j}"><img src="${src}"></div>`).join('')}</div>`;
  const c = CH[o.ch][3];
  const dev = k === 'phone' ? `<div class="dev phone"><img src="${o.src}"></div>`
    : k === 'tablet' ? `<div class="dev tablet"><img src="${o.src}"></div>`
    : k === 'ledger' ? `<div class="dev laptop"><div class="scr ledger"><div class="lh"><b>AX Frame</b><span>Everything we pay for · example data</span></div>
        <div class="lt"><div class="lr th"><span>Tool</span><span>Kind</span><span>Owner</span><span>Renews</span></div>${ledgerRows.map(([a, b, c2, d, f], r) => `<div class="lr ${f}" id="lr${r}"><span>${a}</span><span>${b}</span><span class="ow">${c2}</span><span class="rn">${d}</span></div>`).join('')}</div>
        <div class="warn" id="lwarn"><i></i>Company domain renews soon. Decide before the charge.</div></div><div class="base"></div></div>`
    : `<div class="dev laptop"><div class="scr"><img src="${o.src}"></div><div class="base"></div></div>`;
  return `<div class="shot screen" id="s${i}" style="--c:${c}"><img class="bed" src="${DAYBED}">${dev}${o.side ? `<div class="side">${o.side}</div>` : ''}</div>`;
};

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
${font(400)}${font(600)}${font(700)}
*{box-sizing:border-box;margin:0}
html,body{width:1920px;height:1080px;overflow:hidden;background:#0B1B4F;font-family:P,sans-serif}
#stage{position:relative;width:1920px;height:1080px;overflow:hidden}
.shot{position:absolute;inset:0;opacity:0;overflow:hidden}
.photo img{width:100%;height:100%;object-fit:cover;will-change:transform}
.photo::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(11,27,79,.25),transparent 22%,transparent 62%,rgba(11,27,79,.55))}
.title{background:radial-gradient(120% 90% at 50% 30%,#163083,#0B1B4F 70%)}
.title .bed,.logos .bed,.end .bed,.screen .bed{position:absolute;left:0;right:0;bottom:0;width:100%;height:230px;object-fit:cover;object-position:bottom}
.title .tt{position:absolute;inset:0;display:grid;place-content:center;justify-items:center;text-align:center;gap:22px;padding-bottom:120px}
.title .sp{width:70px;height:70px}
.title h1{color:#fff;font-weight:600;font-size:104px;line-height:1.05;letter-spacing:-.025em;max-width:1500px}
.title p{color:#B9C6EE;font-size:40px}
.screen{background:#F3F7FF}
.dev{position:absolute;left:53%;top:42%;transform:translate(-50%,-50%)}
.laptop{width:1160px}
.laptop .scr{background:#fff;border:14px solid #0B1B4F;border-bottom-width:18px;border-radius:26px 26px 0 0;overflow:hidden;aspect-ratio:16/9;position:relative}
.laptop .scr>img{width:100%;height:100%;object-fit:contain;object-position:top center;display:block;background:#fff}
.laptop .base{height:26px;background:#0B1B4F;border-radius:0 0 30px 30px;margin:0 -70px;position:relative}
.laptop .base::after{content:"";position:absolute;left:50%;top:0;width:180px;height:10px;border-radius:0 0 12px 12px;background:#24356F;transform:translateX(-50%)}
.phone{width:380px;height:720px;border:18px solid #0B1B4F;border-radius:60px;background:#fff;overflow:hidden;left:38%}
.phone img{width:100%;height:100%;object-fit:cover;object-position:top}
.tablet{width:1120px;aspect-ratio:2/1;border:24px solid #0B1B4F;border-radius:44px;background:#fff;overflow:hidden}
.tablet img{width:100%;height:100%;object-fit:contain;object-position:top center;background:#fff}
.side{position:absolute;left:58%;top:40%;font-size:76px;font-weight:600;color:#0B1B4F;letter-spacing:-.02em;line-height:1.1;max-width:640px}
.ledger{padding:28px 38px;display:flex;flex-direction:column;gap:16px;font-size:26px;color:#0B1B4F}
.lh{display:flex;align-items:baseline;gap:22px}.lh b{font-size:40px;color:#074AF8}.lh span{color:#6B7699;font-size:26px}
.lt{display:grid;gap:4px}
.lr{display:grid;grid-template-columns:2.2fr 1.4fr 1.3fr 1.4fr;padding:10px 16px;border-radius:12px;background:#F6F8FE}
.lr.th{background:none;color:#6B7699;font-size:24px;padding-block:4px}
.lr.warn .rn{color:#B54708;font-weight:600}
.lr .ow{display:flex;align-items:center;gap:10px}.lr .ow::before{content:"";width:26px;height:26px;border-radius:50%;background:#DCE6FF}
.lr.own .ow::before{background:#074AF8}
.warn{display:flex;align-items:center;gap:16px;padding:18px 22px;border:3px solid #F79009;border-radius:14px;background:#FFF6E8;font-weight:600}
.warn i{width:18px;height:18px;border-radius:50%;background:#F79009}
.montage{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:10px;background:#0B1B4F;padding:10px}
.montage .cell{overflow:hidden;border-radius:14px;opacity:0}.montage .cell img{width:100%;height:100%;object-fit:cover}
.logos{background:#F3F7FF}.logos .tt{position:absolute;inset:0;display:grid;place-content:center;justify-items:center;gap:60px;padding-bottom:160px}
.logos h2{font-size:78px;font-weight:600;color:#0B1B4F;letter-spacing:-.02em;max-width:1500px;text-align:center;line-height:1.1}
.lg{display:flex;gap:64px}.lg span{display:flex;align-items:center;gap:18px;font-size:40px;font-weight:600;color:#0B1B4F;opacity:0}.lg img{width:72px;height:72px}
.end{background:#F3F7FF}.end .words{position:absolute;left:50%;top:40%;width:1560px;transform:translate(-50%,-50%)}
.end .url{position:absolute;left:50%;top:68%;transform:translateX(-50%);display:flex;align-items:center;gap:18px;font-size:46px;font-weight:600;color:#0459F7}.end .url img{width:60px;height:60px}
#cap{position:absolute;left:0;right:0;bottom:80px;margin:0 auto;max-width:1600px;text-align:center;opacity:0;z-index:50}
#cap span{display:inline;background:rgba(11,27,79,.88);color:#fff;font-size:50px;font-weight:600;line-height:1.5;padding:8px 22px;border-radius:12px;-webkit-box-decoration-break:clone;box-decoration-break:clone;letter-spacing:-.005em}
#tag{position:absolute;left:64px;top:56px;display:flex;align-items:center;gap:20px;padding:16px 30px 16px 18px;background:rgba(255,255,255,.94);border-radius:22px;opacity:0;z-index:50;box-shadow:0 20px 40px -24px rgba(11,27,79,.6)}
#tag img{width:64px;height:64px}#tag b{display:block;font-size:36px;color:#0B1B4F;line-height:1.1}#tag small{display:block;font-size:24px;color:var(--c);font-weight:600}
#wm{position:absolute;right:30px;bottom:24px;font-size:18px;color:rgba(255,255,255,.75);z-index:60;text-shadow:0 1px 4px rgba(0,0,0,.4)}
</style></head><body><div id="stage">${SHOTS.map(shotHTML).join('')}
<div id="tag"><img id="tagimg" src=""><div><b id="tagname"></b><small id="tagline"></small></div></div>
<div id="cap"><span id="captext"></span></div><div id="wm">Animatic · illustrative images and demo data</div></div>
<script>
const SH=${JSON.stringify(SHOTS.map((s) => ({ k: s[0], a: s.a, b: s.b, o: s[2] })))};
const CH=${JSON.stringify(CH)};const LOGO=${JSON.stringify(LOGO)};
const $=id=>document.getElementById(id);
const cl=(v)=>Math.max(0,Math.min(1,v));const p=(t,a,b)=>cl((t-a)/(b-a));const eo=x=>1-Math.pow(1-x,3);
window.render=t=>{
  let cap='',capA=0,ch=null,chA=0;
  SH.forEach((s,i)=>{
    const el=$('s'+i);const live=t>=s.a&&t<=s.b+.05;
    if(!live){el.style.opacity=0;el.style.visibility='hidden';return}
    el.style.visibility='visible';el.style.zIndex=i;
    const fin=i===0?1:eo(p(t,s.a,s.a+${XF}));el.style.opacity=fin;
    const q=p(t,s.a,s.b);
    if(s.k==='photo'){const z=s.o.z[0]+(s.o.z[1]-s.o.z[0])*q;el.querySelector('img').style.transform='scale('+z+')'}
    if(s.k==='phone'||s.k==='tablet'||s.k==='laptop'||s.k==='ledger'){const d=el.querySelector('.dev');d.style.transform='translate(-50%,-50%) scale('+(1+.035*q)+') translateY('+((1-eo(p(t,s.a,s.a+1.2)))*40)+'px)';const sd=el.querySelector('.side');if(sd){sd.style.opacity=eo(p(t,s.a+1,s.a+1.8))}}
    if(s.k==='ledger'){for(let r=0;r<5;r++){const e=$('lr'+r);e.style.opacity=eo(p(t,s.a+.6+r*.35,s.a+1.1+r*.35))}$('lwarn').style.opacity=eo(p(t,s.a+3.6,s.a+4.2));$('lwarn').style.transform='translateY('+(1-eo(p(t,s.a+3.6,s.a+4.2)))*20+'px)'}
    if(s.k==='title'){el.querySelector('.tt').style.transform='translateY('+(1-eo(p(t,s.a+.2,s.a+1.4)))*30+'px)';el.querySelector('.sp').style.transform='rotate('+(q*40)+'deg)'}
    if(s.k==='montage'){for(let j=0;j<4;j++){const c=$('m'+i+'_'+j);c.style.opacity=eo(p(t,s.a+.2+j*.45,s.a+.8+j*.45));c.querySelector('img').style.transform='scale('+(1.02+.08*q)+')'}}
    if(s.k==='logos'){el.querySelectorAll('.lg span').forEach((e,j)=>{const v=eo(p(t,s.a+1+j*.35,s.a+1.6+j*.35));e.style.opacity=v;e.style.transform='translateY('+(1-v)*24+'px)'})}
    if(s.k==='end'){const v=eo(p(t,s.a+.3,s.a+1.6));el.querySelector('.words').style.transform='translate(-50%,-50%) scale('+(.94+.06*v)+')';el.querySelector('.words').style.opacity=v;el.querySelector('.url').style.opacity=eo(p(t,s.a+1.6,s.a+2.3))}
    if(s.o.say&&t>=s.a+.25&&t<=s.b-.25){cap=s.o.say;capA=Math.min(eo(p(t,s.a+.25,s.a+.8)),1-p(t,s.b-.6,s.b-.25))}
    if(s.o.ch){ch=s.o.ch;chA=Math.max(chA,fin)}
  });
  $('captext').textContent=cap;$('cap').style.opacity=capA;
  if(ch){const c=CH[ch];$('tagimg').src=LOGO[c[0]];$('tagname').textContent=c[1];$('tagline').textContent=c[2];$('tag').style.setProperty('--c',c[3]);
    const first=SH.find(s=>s.o.ch===ch),last=[...SH].reverse().find(s=>s.o.ch===ch);$('tag').style.opacity=Math.min(eo(p(t,first.a+.4,first.a+1.2)),1-p(t,last.b-.9,last.b-.3))}else $('tag').style.opacity=0;
  $('wm').style.color=['logos','end','screen'].includes((SH.filter(s=>t>=s.a).pop()||{}).k)?'rgba(11,27,79,.5)':'rgba(255,255,255,.75)';
};
window.ready=Promise.all([...document.images].map(i=>i.decode().catch(()=>{}))).then(()=>document.fonts.ready);
</script></body></html>`;
fs.writeFileSync(HERE + 'film.html', html);

// the caption track as subtitles, English (Bahasa Malaysia and Japanese follow from this file)
const ts = (x) => { const h = Math.floor(x / 3600), m = Math.floor(x / 60) % 60, s = Math.floor(x) % 60, ms = Math.round((x % 1) * 1000); return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')},${String(ms).padStart(3, '0')}`; };
fs.writeFileSync(HERE + 'antarax-film.en.srt', SHOTS.filter((s) => s[2].say).map((s, n) => `${n + 1}\n${ts(s.a + .25)} --> ${ts(s.b - .25)}\n${s[2].say}\n`).join('\n'));
fs.writeFileSync(HERE + 'shots.json', JSON.stringify(SHOTS.map((s) => ({ kind: s[0], a: +s.a.toFixed(2), b: +s.b.toFixed(2), say: s[2].say || '', ch: s[2].ch || '' })), null, 1));
console.log('duration', DUR, 's,', SHOTS.length, 'shots');

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
const errs = []; page.on('pageerror', (e) => errs.push(e.message)); page.on('requestfailed', (r) => errs.push('failed ' + r.url()));
await page.goto(F(HERE + 'film.html'));
await page.evaluate(() => window.ready);
if (args.includes('--stills')) {
  fs.mkdirSync(HERE + 'stills', { recursive: true });
  const T = SHOTS.map((s) => +(s.a + s[1] * .6).toFixed(2));
  for (const t of T) { await page.evaluate((x) => window.render(x), t); await page.screenshot({ path: `${HERE}stills/t${String(t).padStart(6, '0')}.jpg`, type: 'jpeg', quality: 80 }); }
  console.log('stills', T.length);
} else {
  const out = HERE + 'antarax-film-animatic-video.mp4';
  const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(FPS), '-i', '-', '-c:v', 'libx264', '-preset', 'medium', '-crf', '22', '-pix_fmt', 'yuv420p', out], { stdio: ['pipe', 'inherit', 'inherit'] });
  const N = Math.round(DUR * FPS);
  for (let i = 0; i < N; i++) {
    await page.evaluate((x) => window.render(x), i / FPS);
    const buf = await page.screenshot({ type: 'jpeg', quality: 90 });
    if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once('drain', r));
    if (i % 600 === 0) console.log('frame', i, '/', N);
  }
  ff.stdin.end(); await new Promise((r) => ff.on('close', r));
  console.log(out, (fs.statSync(out).size / 1048576).toFixed(1), 'MB');
}
if (errs.length) console.log('page errors:', errs);
await browser.close();
