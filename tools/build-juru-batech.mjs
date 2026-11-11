// Builds Juru BaTech: the characters of Juru's agents (guide/06, "Juru BaTech").
// Each character keeps its own shape, outline, eyes and prop, and wears its BaTech motif as Quiet batik
// inside the body: the official drawing from batech.mjs ('orn' set, 'tech' flowers), one light ink, no fills.
// Usage: node tools/build-juru-batech.mjs ../antarax-ai/prototype/site/src/batech.mjs
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const src = process.argv[2];
if (!src) { console.error('Give the path to antarax-ai/prototype/site/src/batech.mjs'); process.exit(1); }
const B = await import(pathToFileURL(path.resolve(src)).href);
B.useMotifSet('orn'); B.useFlowerSet('tech');
const OUT = new URL('../assets/juru/', import.meta.url);
fs.mkdirSync(OUT, { recursive: true });

// Agent groups and their colour pairs [fill, line] (open question: these or the family pair, 11).
const GROUP = {
  platform: ['#EFEDE7', '#0B0B0C'], test: ['#E2F3EF', '#0A7562'], change: ['#E6EFFE', '#1268F7'],
  ops: ['#EEE9FB', '#6040CC'], build: ['#F8ECE4', '#A4552A'], assure: ['#E3F3F4', '#0F7C86'],
};
// name, role, group, shape, eyes, prop, motif, proposed (missing today)
const AGENTS = [
  ['helm', 'Orchestrator', 'platform', 'hex', 'dots', 'helm', 'suria', true],
  ['plot', 'Planner', 'test', 'squircle', 'dots', 'flag', 'wau', false],
  ['click', 'Tester, one per user role', 'test', 'circle', 'dots', 'check', 'telang', false],
  ['fox', 'Attacker', 'test', 'blob', 'squint', 'mask', 'ketamguri', false],
  ['gauge', 'AI evaluator', 'test', 'pill', 'wide', 'gauge', 'atom', true],
  ['sift', 'Triager', 'test', 'tri', 'dots', 'funnel', 'rebung', false],
  ['proof', 'Verifier', 'test', 'circle', 'mono', 'monocle', 'cakerawala', false],
  ['scribe', 'Reporter', 'test', 'squircle', 'happy', 'bubble', 'komet', false],
  ['desk', 'Concierge', 'change', 'pill', 'happy', 'headset', 'satelit', false],
  ['trace', 'Investigator', 'change', 'blob', 'wide', 'glass', 'jaring', false],
  ['brick', 'Builder', 'change', 'squircle', 'dots', 'hat', 'gear', false],
  ['spar', 'Challenger, six angles', 'change', 'hex', 'squint', 'six', 'tanjung', false],
  ['spare', 'Standby', 'change', 'circle', 'dots', 'dashed', 'lengan', false],
  ['tick', 'Scheduler', 'ops', 'hex', 'dots', 'clock', 'bintang', false],
  ['flare', 'Incident helper', 'ops', 'tri', 'wide', 'bell', 'percik', true],
  ['sprout', 'Kickoff agent', 'build', 'pill', 'happy', 'sprout', 'benih', false],
  ['keeper', 'Records keeper', 'build', 'squircle', 'dots', 'book', 'daun', true],
  ['scales', 'Readiness reviewer', 'assure', 'circle', 'mono', 'scale', 'gasing', false],
  ['loop', 'Playbook runner', 'assure', 'pill', 'dots', 'loop', 'robot', true],
];

function body(sh, f, s, dash) {
  const a = ` fill="${f}" stroke="${s}" stroke-width="2.6"${dash ? ' stroke-dasharray="4 3"' : ''}`;
  if (sh === 'circle') return `<circle cx="32" cy="36" r="21"${a}/>`;
  if (sh === 'squircle') return `<rect x="11" y="15" width="42" height="42" rx="15"${a}/>`;
  if (sh === 'pill') return `<rect x="15" y="11" width="34" height="48" rx="17"${a}/>`;
  if (sh === 'tri') return `<path d="M32 13 L54 54 Q55 57 52 57 L12 57 Q9 57 10 54 Z"${a} stroke-linejoin="round"/>`;
  if (sh === 'hex') return `<path d="M32 13 L51 24 L51 47 L32 58 L13 47 L13 24 Z"${a} stroke-linejoin="round"/>`;
  return `<path d="M32 14 C46 13 55 24 53 37 C52 50 42 58 31 57 C19 56 10 48 11 35 C12 23 20 15 32 14 Z"${a}/>`;
}
const INK = '#0B0B0C';
function eyes(e, y) {
  if (e === 'happy') return `<path d="M22 ${y} q3 -4 6 0 M36 ${y} q3 -4 6 0" stroke="${INK}" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;
  if (e === 'squint') return `<path d="M21 ${y - 1} l7 2 M43 ${y - 1} l-7 2" stroke="${INK}" stroke-width="2.6" stroke-linecap="round"/>`;
  if (e === 'wide') return `<circle cx="25" cy="${y}" r="4.2" fill="${INK}"/><circle cx="39" cy="${y}" r="4.2" fill="${INK}"/><circle cx="26.3" cy="${y - 1.4}" r="1.3" fill="#FFFFFF"/><circle cx="40.3" cy="${y - 1.4}" r="1.3" fill="#FFFFFF"/>`;
  if (e === 'mono') return `<circle cx="25" cy="${y}" r="3" fill="${INK}"/><circle cx="39" cy="${y}" r="5.5" fill="#FFFFFF" stroke="${INK}" stroke-width="2"/><circle cx="39" cy="${y}" r="2.4" fill="${INK}"/>`;
  return `<circle cx="25" cy="${y}" r="3.2" fill="${INK}"/><circle cx="39" cy="${y}" r="3.2" fill="${INK}"/>`;
}
function prop(x, s) {
  const st = `stroke="${s}" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"`;
  switch (x) {
    case 'helm': return `<circle cx="32" cy="36" r="27" ${st} stroke-dasharray="3 5" opacity=".7"/>`;
    case 'flag': return `<path d="M44 16 V4 M44 4 L54 7 L44 10" ${st}/>`;
    case 'check': return `<path d="M25 47 l5 5 l9 -10" ${st}/>`;
    case 'mask': return `<rect x="17" y="31" width="30" height="11" rx="5.5" fill="${INK}" opacity=".85"/><circle cx="25" cy="36.5" r="2.4" fill="#FFFFFF"/><circle cx="39" cy="36.5" r="2.4" fill="#FFFFFF"/>`;
    case 'gauge': return `<path d="M22 52 a10 10 0 0 1 20 0" ${st}/><path d="M32 52 l5 -6" ${st}/>`;
    case 'funnel': return `<path d="M22 6 H42 L35 14 V19 H29 V14 Z" ${st}/>`;
    case 'monocle': return `<path d="M44 37 v12" ${st}/>`;
    case 'bubble': return `<path d="M44 6 h14 a3 3 0 0 1 3 3 v7 a3 3 0 0 1 -3 3 h-7 l-4 4 v-4 h-3 a3 3 0 0 1 -3 -3 v-7 a3 3 0 0 1 3 -3 Z" ${st}/>`;
    case 'headset': return `<path d="M16 36 a16 16 0 0 1 32 0" ${st}/><rect x="12" y="34" width="6" height="10" rx="3" fill="${s}"/><rect x="46" y="34" width="6" height="10" rx="3" fill="${s}"/>`;
    case 'glass': return `<circle cx="48" cy="14" r="6" ${st}/><path d="M52 18 l6 6" ${st}/>`;
    case 'hat': return `<path d="M15 20 a17 12 0 0 1 34 0 Z" fill="${s}"/><path d="M11 20 H53" ${st}/>`;
    case 'six': return `<g fill="${s}"><circle cx="32" cy="7" r="2.6"/><circle cx="43" cy="10" r="2.6"/><circle cx="21" cy="10" r="2.6"/><circle cx="52" cy="17" r="2.6"/><circle cx="12" cy="17" r="2.6"/></g>`;
    case 'clock': return `<circle cx="50" cy="13" r="8" ${st}/><path d="M50 9 v4 l3 2" ${st}/>`;
    case 'bell': return `<path d="M43 18 a7 7 0 0 1 14 0 v5 l2 3 H41 l2 -3 Z" ${st}/><path d="M48 29 h4" ${st}/>`;
    case 'sprout': return `<path d="M32 15 V6 M32 9 c-6 0 -8 -4 -8 -6 c5 0 8 2 8 6 M32 8 c5 0 8 -3 8 -5 c-5 0 -8 2 -8 5" ${st}/>`;
    case 'book': return `<path d="M22 47 h20 M22 47 v6 h20 v-6" ${st}/>`;
    case 'scale': return `<path d="M32 4 V14 M20 8 H44 M20 8 l-5 9 h10 Z M44 8 l-5 9 h10 Z" ${st}/>`;
    case 'loop': return `<path d="M44 14 a7 7 0 1 1 7 7" ${st}/><path d="M51 21 l-3 -1 M51 21 l0 -3" ${st}/>`;
  }
  return '';
}
const index = [];
for (const [name, role, g, sh, ey, ac, motif, proposed] of AGENTS) {
  const [f, s] = GROUP[g];
  const y = sh === 'tri' ? 44 : sh === 'pill' ? 32 : 37;
  const tx = { tri: [1, 13], pill: [1, 4] }[sh] || [1, 5];
  const quiet = B.BATECH[motif].m(B.mono(s, 'none', 2.6));
  const dash = proposed || ac === 'dashed';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="${name[0].toUpperCase() + name.slice(1)}, ${role}">` +
    `<defs><clipPath id="b">${body(sh, '#000', 'none', false)}</clipPath></defs>` +
    (ac === 'helm' ? prop('helm', s) : '') + body(sh, f, 'none', false) +
    `<g clip-path="url(#b)" opacity=".6"><g transform="translate(${tx[0]} ${tx[1]}) scale(.62)">${quiet}</g></g>` +
    `<circle cx="25" cy="${y}" r="6" fill="${f}"/><circle cx="39" cy="${y}" r="6" fill="${f}"/>` +
    body(sh, 'none', s, dash) + eyes(ey, y) + (ac !== 'helm' ? prop(ac, s) : '') + '</svg>\n';
  fs.writeFileSync(new URL(`${name}.svg`, OUT), svg);
  index.push({ name, role, group: g, motif, proposed });
  console.log(`juru/${name}.svg  ${motif}${proposed ? '  (proposed agent)' : ''}`);
}
fs.writeFileSync(new URL('index.json', OUT), JSON.stringify(index, null, 1) + '\n');
