// Janka's score: warm and acoustic. Marimba ostinato and kalimba melody in G major at 88 bpm, a soft shaker,
// a felt kick, swishes as the camera glides from day to day, and small cues on each moment. Times mirror janka.html.
import { createMix } from "./sound-lib.mjs";
const DUR = 40, { I, write } = createMix(DUR, 0x4a4e4b);
const BEAT = 60 / 88;
const PROG = [[55, 59, 62, 66], [52, 55, 59, 62], [48, 52, 55, 59], [50, 54, 57, 62]];   // Gmaj7, Em7, Cmaj7, D
const chordAt = t => PROG[Math.floor(t / (BEAT * 8)) % 4];
// pad under everything, warmer from Meet Janka
for (let k = 0; k * BEAT * 8 < 35.4; k++) { const t = k * BEAT * 8; I.pad(t, BEAT * 8, chordAt(t + .01).map(m => m - 12), { gain: t < 10.9 ? .05 : .075, att: .8, rel: .7, bright: 3 }); }
// marimba ostinato: from the start, quiet; fuller once the week gets busy
const PAT = [0, 2, 1, 3, 2, 1, 3, 2];
for (let b = 0; b * BEAT / 2 < 35.4; b++) {
  const t = b * BEAT / 2, ch = chordAt(t), m = ch[PAT[b % 8] % 4] + 12;
  I.marimba(t, m, { gain: t < 4 ? .07 : .1, pan: b % 2 ? .25 : -.25 });
}
// felt kick and shaker from Tuesday on
for (let b = 0; b * BEAT < 35.4; b++) {
  const t = b * BEAT; if (t < 4.2) continue;
  if (b % 2 === 0) I.kick(t, { gain: .22 });
  I.shaker(t + BEAT / 2, { gain: .03 }); if (t > 10.9) I.shaker(t + BEAT / 4, { gain: .018, pan: -.3 });
}
// the camera glides from day to day: a page-turn swish each time
[[3.9, 2.4], [8.6, 1.4], [15.4, 1.5], [21.0, 1.4], [26.8, 1.4]].forEach(([t, len]) => I.swish(t, len, { gain: .1, bright: .08, pan: .4 }));
// Monday: the rolls; Tuesday: rolls leave, a message arrives
I.kalimba(.6, 74, { gain: .1 }); I.kalimba(.9, 79, { gain: .1 }); I.kalimba(1.6, 78, { gain: .08 });
[4.8, 5.3, 5.8, 6.3].forEach((t, i) => I.pop(t, { freq: 520 + i * 40, pan: .2, gain: .07 }));
I.bell(6.0, 84, { gain: .03, pan: .5, decay: .4 }); I.bell(6.12, 88, { gain: .025, pan: .5, decay: .4 });
[8.8, 9.3, 9.8].forEach((t, i) => I.pop(t, { freq: 500 + i * 40, pan: .2, gain: .07 }));
// Wednesday: the notification, Meet Janka, the receipt prints, the stamp
I.bell(10.9, 83, { gain: .06, decay: .5, pan: .3 }); I.bell(11.02, 86, { gain: .05, decay: .6, pan: .3 });
[[10.95, 67], [11.15, 71], [11.35, 74], [11.6, 79]].forEach(([t, m]) => I.kalimba(t, m, { gain: .12 }));
for (let t = 11.8; t < 13.0; t += .055) I.tick(t, { gain: .025, freq: 3100, pan: .2 });
I.stamp(13.4, { gain: .4 }); I.kalimba(13.5, 79, { gain: .1 }); I.kalimba(13.62, 83, { gain: .1 });
// Thursday: the van, the camera, the lines tick into place
I.whoomp(15.7, { gain: .25, from: 60, to: 40, len: 1.6 });
I.tick(17.88, { gain: .2, freq: 3600 }); I.swish(17.9, .25, { gain: .12, bright: .4 });
[18.4, 18.7, 19.0].forEach((t, i) => { I.tick(t, { gain: .09, freq: 1800 }); I.marimba(t + .02, 74 + i * 3, { gain: .09 }); });
// the back shelves: tags swing in, a softer, questioning moment
[22.8, 23.1, 23.4].forEach((t, i) => I.pizz(t, 62 - i * 2, { gain: .09, pan: .3 }));
// Friday: restocked, the question, the answer
[27.2, 27.5, 27.8, 28.1].forEach((t, i) => I.pop(t, { freq: 560 + i * 60, gain: .07 }));
I.bell(28.8, 84, { gain: .03, decay: .4, pan: -.4 }); I.bell(29.8, 81, { gain: .04, decay: .5, pan: .4 }); I.bell(29.92, 86, { gain: .04, decay: .6, pan: .4 });
// pull back over the week, then the end card resolves home
I.swish(32.6, 2.0, { gain: .12, bright: .05 });
I.pad(35.4, 4.6, [43, 55, 59, 62, 66, 71], { gain: .11, att: .5, rel: 1.2, bright: 4 });
[[35.9, 79], [36.15, 83], [36.5, 86], [37.0, 91]].forEach(([t, m]) => I.kalimba(t, m, { gain: .11 }));
I.marimba(35.9, 55, { gain: .12 });
write("janka", { room: 1.0 });
