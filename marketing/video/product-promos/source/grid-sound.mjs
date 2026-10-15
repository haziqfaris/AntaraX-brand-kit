// PLExyz Grid's score: 120 bpm electronic in A minor. A four-on-the-floor kick, offbeat hats, a filtered saw
// arpeggio in sixteenths, a sub on the root, risers into the title and the end, an impact on "Blocked." and on
// every cut, and blips for the HUD. One bar is two seconds; the film cuts on the bar. Times mirror grid.html.
import { createMix } from "./sound-lib.mjs";
const DUR = 30, { I, write } = createMix(DUR, 0x67726964);
const B = .5, S16 = B / 4;
const PROG = [[57, 60, 64, 69], [53, 57, 60, 65], [48, 52, 55, 60], [55, 59, 62, 67]];   // Am F C G
const ROOT = [45, 41, 36, 43];
const bar = t => Math.floor(t / 2) % 4;
const inR = (t, rs) => rs.some(([a, b]) => t >= a && t < b);
// opening: drone, a riser, the HUD typing in
I.sub(0, 2, 33, { gain: .25 }); I.riser(.2, 1.8, { gain: .1 });
for (let k = 0; k < 34; k++) I.blip(.2 + k * .035, 93 + (k % 3) * 2, { gain: .018, len: .012, pan: -.5 });
// the groove
const KICK = [[2, 6], [8, 25.5]], HATS = [[2, 6], [8, 20], [22, 25.5]], ARP = [[2, 6], [8, 25.5]], SNARE = [[8, 20]];
for (let i = 0; i * B < 25.5; i++) {
  const t = i * B;
  if (inR(t, KICK) && !(t >= 9.99 && t < 10.5)) I.kick(t, { gain: t >= 20 && t < 22 ? .32 : .45 });
  if (inR(t + B / 2, HATS)) I.hat(t + B / 2, { gain: .05, pan: .25 });
  if (inR(t, SNARE) && i % 2 === 1) I.snare(t, { gain: .11 });
}
for (let i = 0; i * S16 < 25.5; i++) {
  const t = i * S16; if (!inR(t, ARP)) continue;
  const ch = PROG[bar(t)], pat = [0, 1, 2, 3, 2, 1, 3, 2], m = ch[pat[i % 8]] + 12;
  const quiet = t >= 20 && t < 22, cutoff = quiet ? .05 : t < 6 ? .06 + (t - 2) * .015 : .11;
  I.saw(t, m, .1, { gain: quiet ? .045 : .06, pan: i % 2 ? .3 : -.3, cutoff });
  if (t >= 8 && t < 20 && i % 2 === 0) I.hat(t, { gain: .018, pan: -.3, len: .012 });
}
for (let i = 0; i * B < 25.5; i++) { const t = i * B; if (inR(t, [[2, 6], [8, 25.5]])) I.sub(t, ROOT[bar(t)] - 12, B * .8, { gain: .2 }); }
// the floor building: sixteenth blips climbing with the counter
for (let t = 2.2; t < 5.6; t += S16) I.blip(t, 76 + Math.floor((t - 2.2) / 3.4 * 14), { gain: .022, len: .02, pan: .4 });
// into the title: riser, roll, impact; a held chord under it
I.riser(4.4, 1.6, { gain: .16 });
for (let t = 5.5; t < 6; t += S16 / 2) I.snare(t, { gain: .03 + (t - 5.5) * .14 });
I.impact(6.0, { gain: .6 }); I.swish(6.0, 1.6, { gain: .1, bright: .5 }); I.sub(6.0, 1.9, 33, { gain: .3 });
I.pad(6.0, 1.8, [45, 52, 57, 60, 64, 71], { gain: .12, att: .05, rel: .6, bright: 6 });
I.riser(7.0, 1.0, { gain: .1 });
// 02: the booking moves; Blocked. lands on beat; the re-route; three checks pass
I.swish(8.8, 1.1, { gain: .06, bright: .2, pan: .5 });
I.impact(10.0, { gain: .55 }); I.saw(10.0, 46, .45, { gain: .1, cutoff: .2 }); I.saw(10.0, 47, .45, { gain: .08, cutoff: .2 });
[10.0, 10.18, 10.36].forEach(t => { I.blip(t, 84, { gain: .04, len: .08 }); I.blip(t + .09, 79, { gain: .04, len: .08 }); });
I.swish(10.7, .9, { gain: .06, bright: .2, pan: -.4 });
[[11.6, 81], [11.68, 84], [11.76, 88]].forEach(([t, m]) => I.blip(t, m, { gain: .045, len: .06 }));
[11.9, 12.15, 12.4].forEach((t, i) => I.tick(t, { gain: .1, freq: 2600 + i * 300 }));
// 03-05: a hit on every cut; typing; the zoom; the move; the AI picks and the rules' verdicts
[8.0, 14.0, 16.0, 18.0, 20.0].forEach(t => { I.impact(t, { gain: .25 }); I.swish(t - .25, .4, { gain: .07, bright: .4 }); });
for (let k = 0; k < 7; k++) I.blip(14.2 + k * .08, 90 + (k % 2) * 3, { gain: .025, len: .015 });
I.whoomp(14.8, { gain: .18, from: 90, to: 50, len: .8 }); I.blip(15.4, 88, { gain: .05, len: .1 }); I.blip(15.5, 93, { gain: .05, len: .12 });
I.swish(16.3, 1.1, { gain: .07, bright: .25, pan: .4 });
[18.4, 18.65, 18.9].forEach((t, i) => I.blip(t, 81 + i * 2, { gain: .035, len: .05, pan: -.2 + i * .2 }));
I.blip(19.1, 88, { gain: .04, len: .07 }); I.blip(19.22, 88, { gain: .04, len: .07 }); I.saw(19.34, 40, .3, { gain: .07, cutoff: .15 });
// 06: the zones fill; the warning on zone B
I.pad(20.0, 5.4, [45, 52, 57, 60], { gain: .06, att: .6, rel: .5, bright: 3 });
for (let i = 0; i < 4; i++) for (let k = 0; k < 8; k++) I.tick(20.7 + i * .25 + k * .1, { gain: .03, freq: 1800 + k * 120 + i * 200, pan: .4 });
[22.3, 22.55].forEach(t => { I.blip(t, 76, { gain: .04, len: .12 }); I.blip(t + .12, 72, { gain: .04, len: .12 }); });
// the end: riser, impact, the last chord, the URL ticks in
I.riser(24.0, 1.5, { gain: .16 });
I.impact(25.5, { gain: .6 }); I.sub(25.5, 3.6, 33, { gain: .3 });
I.pad(25.5, 3.8, [45, 52, 57, 59, 64, 71], { gain: .13, att: .04, rel: 1.4, bright: 6 });
[[26.0, 81], [26.25, 84], [26.5, 88], [26.75, 93]].forEach(([t, m]) => I.saw(t, m, .25, { gain: .05, cutoff: .09 }));
I.blip(27.0, 93, { gain: .04, len: .1 });
write("grid", { room: .8, drive: 1.6 });
