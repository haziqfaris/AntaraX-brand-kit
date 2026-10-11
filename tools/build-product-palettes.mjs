// Builds each product's colour palette (guide/14): an 11-step scale in OKLCH around the product's own colour,
// the roles an app needs, and a chart set. Writes tokens/product-palettes.json and tokens/product-palettes.css.
//   node tools/build-product-palettes.mjs
// Chart sets were chosen by searching orders of the shared chart hues and keeping the first that passes every
// check of the dataviz palette validator, light on #FFFFFF and dark on #071233 (lightness band, chroma floor,
// adjacent colour-blind separation >= 8, normal-vision floor >= 15, contrast >= 3:1). Re-validate if you edit them.
import fs from 'node:fs';

const hex2rgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
const lin = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
const gam = (c) => (c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055);
function hex2oklch(h) {
  const [r, g, b] = hex2rgb(h).map(lin);
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b), m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b), s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  const L = 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s, A = 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s, B = 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s;
  return [L, Math.hypot(A, B), ((Math.atan2(B, A) * 180) / Math.PI + 360) % 360];
}
function oklch2rgb([L, C, H]) {
  const A = C * Math.cos((H * Math.PI) / 180), B = C * Math.sin((H * Math.PI) / 180);
  const l = (L + 0.3963377774 * A + 0.2158037573 * B) ** 3, m = (L - 0.1055613458 * A - 0.0638541728 * B) ** 3, s = (L - 0.0894841775 * A - 1.291485548 * B) ** 3;
  return [4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s, -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s, -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s];
}
function oklch2hex([L, C, H]) { // reduce chroma until the colour fits sRGB
  let rgb = oklch2rgb([L, C, H]);
  while (rgb.some((v) => v < -1e-4 || v > 1 + 1e-4) && C > 0) { C -= 0.002; rgb = oklch2rgb([L, C, H]); }
  return '#' + rgb.map((v) => Math.round(Math.min(1, Math.max(0, gam(Math.min(1, Math.max(0, v))))) * 255).toString(16).padStart(2, '0')).join('').toUpperCase();
}
const relL = (h) => { const [r, g, b] = hex2rgb(h).map(lin); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
const contrast = (a, b) => { const x = relL(a), y = relL(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); };

const STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
const LT = [0.975, 0.945, 0.89, 0.82, 0.73, 0.64, 0.55, 0.47, 0.39, 0.31, 0.24]; // OKLCH lightness per step
const CF = [0.1, 0.22, 0.45, 0.7, 0.9, 1, 1, 0.92, 0.8, 0.66, 0.52]; // share of the anchor's chroma per step
const BLUE = '#0459F7', DARK = '#071233';

// anchor: the product's own colour, placed exactly on its nearest step. Every product acts in its own colour
// (the first step that passes 4.5:1 with white text); AntaraX blue stays the focus ring.
const PRODUCTS = {
  yara: { name: 'Yara', anchor: '#08B0B3', secondary: '#0B1B4F', amark: true, character: 'Ripple teal and navy: calm, clear, made for the shop floor' },
  frame: { name: 'AX Frame', anchor: '#074AF8', secondary: '#524FE9', amark: true, character: 'Frame blue with halo indigo: precise, technical, one world in view' },
  janka: { name: 'Janka', anchor: '#0CC4FB', secondary: '#F47B3D', character: 'Signal cyan with the spark orange from its mark: alert, forward-looking' },
  grid: { name: 'PLExyz Grid', anchor: '#2C09B2', secondary: '#0CC4FB', character: 'Shard violet with the four zones in AntaraX colours: spatial, vivid, exact', ground: '#F7F7FA' },
  crowd: { name: 'PLExyz Crowd', anchor: '#6040CC', secondary: '#0CC4FB', character: 'PLExyz purple with a zone teal, until Crowd has its own theme' },
  angka: { name: 'Angka', anchor: '#6B3F6B', secondary: '#E9906B', character: 'Warm plum with Lapis peach on a paper ground: friendly money', ground: '#FAF7F2' },
  tinara: { name: 'Tinara', anchor: '#7A1E3C', secondary: '#D6A84F', character: 'Garnet with gold: discreet, valuable, considered (proposed)' },
  loom: { name: 'Loom', anchor: '#4904B3', secondary: '#0B1B4F', amark: true, character: 'Loom violet' },
  motion: { name: 'Motion', anchor: '#FC5D04', secondary: '#0B1B4F', amark: true, character: 'Motion orange' },
};
const CHARTS = JSON.parse(fs.readFileSync(new URL('./product-charts.json', import.meta.url), 'utf8'));

const out = {}, css = [];
for (const [k, p] of Object.entries(PRODUCTS)) {
  const build = (hex, exact = true) => { const [L, C, H] = hex2oklch(hex); const out = LT.map((l, i) => oklch2hex([l, Math.max(C, 0.06) * CF[i], H]));
    let at = 0; LT.forEach((l, i) => { if (Math.abs(l - L) < Math.abs(LT[at] - L)) at = i; }); if (exact) out[at] = hex; return [out, at, H]; };
  const [s, at, H] = build(p.anchor);
  const scale = Object.fromEntries(STEPS.map((n, i) => [n, s[i]]));
  const [s2] = build(p.secondary);
  const secondaryScale = Object.fromEntries(STEPS.map((n, i) => [n, s2[i]]));
  // neutrals: greys leaning a little toward the product's hue, for grounds, borders and quiet fills.
  // Text stays the shared navy and body colours (05), so every product reads the same.
  const NL = [0.985, 0.965, 0.93, 0.88, 0.78, 0.66, 0.55, 0.45, 0.36, 0.27, 0.2];
  const n = NL.map((l, i) => oklch2hex([l, [0.004, 0.006, 0.009, 0.012, 0.016, 0.018, 0.02, 0.022, 0.024, 0.026, 0.028][i], H]));
  const neutral = Object.fromEntries(STEPS.map((k, i) => [k, n[i]]));
  const own = contrast(p.anchor, '#FFFFFF') >= 4.5 ? at : s.findIndex((h, i) => i >= at && contrast(h, '#FFFFFF') >= 4.5);
  const onDark = [...s.keys()].filter((i) => i <= 5 && contrast(s[i], DARK) >= 4.5).pop();
  const roles = {
    action: s[own], 'action-hover': s[own + 1], 'action-pressed': s[own + 2], accent: p.anchor, 'accent-text': s[own],
    tint: s[0], subtle: s[1], 'accent-border': s[2], 'on-tint': s[8], secondary: p.secondary, 'dark-accent': s[onDark], focus: BLUE,
  };
  const ui = {
    surface: { ground: p.ground || '#FFFFFF', raised: '#FFFFFF', sunken: neutral[50], hover: neutral[100], selected: s[0], overlay: 'rgba(11,27,79,.48)' },
    text: { strong: '#0B1B4F', body: '#3B4469', muted: '#5B6488', disabled: neutral[400], 'on-action': '#FFFFFF', link: s[own] },
    border: { subtle: neutral[100], default: neutral[200], strong: neutral[400], input: neutral[500] },
    status: { ok: ['#12B76A', '#E7F8EF', '#067647'], warn: ['#F79009', '#FEF4E6', '#B54708'], fault: ['#F04438', '#FEECEB', '#B42318'], info: ['#0459F7', '#E6EEFE', '#0347C8'] },
    dark: { ground: '#071233', raised: '#0C1B47', sunken: '#050D26', border: 'rgba(157,184,255,.16)', strong: '#EAF0FF', body: '#B6C3EA', muted: '#8E9CC8', accent: s[onDark], action: s[onDark], 'on-action': '#071233' },
  };
  out[k] = { name: p.name, kind: p.amark ? 'A-mark' : 'own-mark', character: p.character, anchor: p.anchor, 'anchor-step': STEPS[at], scale, 'secondary-scale': secondaryScale, neutral, roles, ui, chart: CHARTS[k].chart, 'chart-dark': CHARTS[k].chartDark, 'chart-after-product': CHARTS[k].names,
    contrast: { 'action-on-white': +contrast(roles.action, '#FFFFFF').toFixed(2), 'accent-text-on-white': +contrast(roles['accent-text'], '#FFFFFF').toFixed(2), 'dark-accent-on-dark': +contrast(roles['dark-accent'], DARK).toFixed(2) } };
  css.push(`  /* ${p.name}: ${p.character} */`);
  css.push('  ' + STEPS.map((n) => `--${k}-${n}: ${scale[n]};`).join(' '));
  css.push('  ' + Object.entries(roles).map(([r, v]) => `--${k}-${r}: ${v};`).join(' '));
  css.push('  ' + STEPS.map((n) => `--${k}-secondary-${n}: ${secondaryScale[n]};`).join(' '));
  css.push('  ' + STEPS.map((n) => `--${k}-neutral-${n}: ${neutral[n]};`).join(' '));
  css.push('  ' + [...Object.entries(ui.surface).map(([r, v]) => [`surface-${r}`, v]), ...Object.entries(ui.text).map(([r, v]) => [`text-${r}`, v]), ...Object.entries(ui.border).map(([r, v]) => [`border-${r}`, v])].map(([r, v]) => `--${k}-${r}: ${v};`).join(' '));
  css.push('  ' + CHARTS[k].chart.map((v, i) => `--${k}-chart-${i + 1}: ${v};`).join(' '));
}
fs.writeFileSync(new URL('../tokens/product-palettes.json', import.meta.url), JSON.stringify({ note: 'Built by tools/build-product-palettes.mjs (guide/14). Do not edit by hand.', products: out }, null, 2) + '\n');
fs.writeFileSync(new URL('../tokens/product-palettes.css', import.meta.url), `/* Product palettes (guide/14). Built by tools/build-product-palettes.mjs; do not edit by hand.\n   Dark mode: use each product's --<p>-dark-accent and chart-dark values from product-palettes.json on #071233. */\n:root {\n${css.join('\n')}\n}\n`);
for (const [k, v] of Object.entries(out)) console.log(k.padEnd(7), v.roles.action, v.roles['accent-text'], v.contrast);
