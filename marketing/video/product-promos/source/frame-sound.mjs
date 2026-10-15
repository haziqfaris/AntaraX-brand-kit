// AX Frame's score: calm and exact, like the app. Ambient pads in D, felt piano, glass glints as assets arrive,
// a soft pulse once AX Frame organises them, and quiet interface sounds while the app is used: clicks, typing,
// the row landing, the alert, the approval. Times mirror frame.html.
import { createMix } from "./sound-lib.mjs";
const DUR = 46, { I, write, rnd } = createMix(DUR, 0x65737461);
const B = 60 / 76;
const PADS = [[38, 50, 57, 61, 64, 66], [35, 47, 54, 57, 61, 64], [31, 43, 50, 54, 57, 62], [33, 45, 52, 57, 59, 64]];
for (let k = 0; k * B * 4 < 40.8; k++) { const t = k * B * 4; I.pad(t, B * 4, PADS[Math.floor(k / 2) % 4], { gain: t < 9 ? .05 : .065, att: 1.2, rel: 1.0, bright: 3, send: .7 }); }
// the opening: one tool, one felt note; then the glints of everything else arriving
I.piano(.6, 74, { gain: .1, len: 2.5 }); I.bell(.65, 86, { gain: .03, decay: 1.4 });
const PENT = [74, 76, 78, 81, 83, 86, 88, 90, 93];
for (let k = 1; k < 210; k++) { if (k % 3 && k > 30) continue; const a = 3.8 + Math.pow(k / 210, .55) * 4.6; I.bell(a, PENT[(rnd() * PENT.length) | 0], { gain: .024 * (1 - k / 300), decay: .5, pan: rnd() * 1.4 - .7, send: .7 }); }
I.piano(6.3, 38, { gain: .08, len: 2.4 }); I.piano(7.6, 37, { gain: .06, len: 1.4 });
// Meet AX Frame: the halo forms
I.swish(8.6, 1.8, { gain: .06, bright: .06 });
[50, 57, 62, 66, 69, 74, 78].forEach((m, i) => I.piano(9.0 + i * .07, m, { gain: .07, len: 2.2 }));
// the app opens: a soft whoosh, then a gentle pulse under the four uses
I.swish(12.4, 1.0, { gain: .06, bright: .1 }); I.bell(12.9, 81, { gain: .03, decay: .8 });
for (let i = 0; i * B < 40.8; i++) { const t = i * B; if (t < 13.2 || t >= 40.8) continue; I.sub(t, 38, B * .5, { gain: .07 }); I.shaker(t + B / 2, { gain: .012, pan: .2 }); }
// a little felt-piano phrase at the start of each use
[[13.1, [74, 78, 81]], [19.1, [76, 79, 83]], [22.4, [78, 81, 85]], [28.0, [76, 81, 85]], [34.7, [74, 78, 83]]].forEach(([t, ms]) => ms.forEach((m, i) => I.piano(t + i * .18, m, { gain: .05, len: .7 })));
// interface sounds: clicks, typing, the row landing, the total ticking
[14.3, 14.62, 15.95, 16.15, 16.7, 17.05, 19.05, 22.35, 27.95, 28.65, 30.3, 33.3, 34.6, 38.0].forEach(t => I.wood(t, { gain: .07, freq: 2200 }));
[[14.7, 15.2, 12], [15.5, 15.72, 3], [16.2, 16.4, 6]].forEach(([a, b, n]) => { for (let k = 0; k < n; k++) I.tick(a + (b - a) * k / n, { gain: .025, freq: 3200 + (k % 3) * 300, send: .05 }); });
I.pop(17.2, { freq: 900, gain: .05 }); I.bell(17.3, 86, { gain: .03, decay: .6 });
for (let k = 0; k < 8; k++) I.tick(17.3 + k * .075, { gain: .02, freq: 2600, send: .05 });
// the map: the three stacks bloom
[19.2, 19.35, 19.5].forEach((t, i) => I.bell(t + .2, [81, 85, 88][i], { gain: .03, decay: .9, pan: [-.4, .4, 0][i] }));
// the renewal: a soft two-note alert, the notification chime
for (let t = 22.9; t < 26.9; t += 1.26) { I.bell(t, 78, { gain: .025, decay: .6 }); I.bell(t + .2, 74, { gain: .022, decay: .7 }); }
I.bell(23.4, 88, { gain: .05, decay: .5, pan: .5 }); I.bell(23.52, 93, { gain: .045, decay: .7, pan: .5 });
// AI: typing the brief, the sparkle thinking (a soft glass shimmer), the stack arriving, convert
for (let k = 0; k < 18; k++) I.tick(28.7 + k * 1.2 / 18, { gain: .022, freq: 3100 + (k % 3) * 280, send: .05 });
const shimmer = (a, b) => { for (let t = a, k = 0; t < b; t += .11, k++) I.bell(t, [86, 90, 93, 98][k % 4], { gain: .014, decay: .35, pan: Math.sin(k) * .6, send: .8 }); I.pad(a, b - a, [74, 78, 81, 86], { gain: .03, att: .3, rel: .4, bright: 2, send: .9 }); };
shimmer(30.35, 31.45);
[31.65, 31.95, 32.25].forEach((t, i) => I.bell(t, [81, 85, 88][i], { gain: .035, decay: .7 }));
[38, 50, 57, 62, 66, 69, 74].forEach((m, i) => I.piano(33.32 + i * .035, m, { gain: .06, len: 1.4 }));
// Optimize: thinking, the reasoning streams in
shimmer(34.75, 35.6);
for (let k = 0; k < 22; k++) I.tick(35.75 + k * 1.05 / 22, { gain: .014, freq: 3600 + (k % 4) * 200, send: .1 });
// the approval: a warm chord, the total settles down, the price check chimes
[38, 50, 57, 62, 66, 69, 76].forEach((m, i) => I.piano(38.02 + i * .04, m, { gain: .075, len: 2.0 }));
I.bell(38.06, 90, { gain: .03, decay: 1.2 });
for (let k = 0; k < 8; k++) I.tick(38.5 + k * .075, { gain: .02, freq: 2400, send: .05 });
I.bell(38.9, 85, { gain: .035, decay: .6, pan: .3 }); I.bell(39.02, 88, { gain: .03, decay: .8, pan: .3 });
// the halo comes home
I.swish(40.5, 1.6, { gain: .05, bright: .05 });
I.pad(40.9, 5.0, [38, 50, 57, 61, 64, 69], { gain: .09, att: 1.0, rel: 1.6, bright: 3, send: .8 });
[[41.9, 62], [42.2, 66], [42.5, 69], [42.8, 73], [43.1, 76]].forEach(([t, m]) => I.piano(t, m, { gain: .06, len: 2.0 }));
I.bell(43.5, 86, { gain: .03, decay: 1.6 });
write("frame", { room: 1.1, fb: .84, drive: 1.2 });
