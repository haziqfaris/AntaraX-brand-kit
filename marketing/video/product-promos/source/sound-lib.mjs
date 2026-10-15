// Procedural sound for the product promo films: a mix bus, instruments and a small room, after the Yara film's
// soundtrack. Each film's score imports createMix(dur) and writes out/<name>/soundtrack.wav.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

export const SR = 48000, TAU = Math.PI * 2;
export const mtof = m => 440 * 2 ** ((m - 69) / 12);

export function createMix(DUR, seed0 = 0x5eed) {
  const N = Math.round(SR * DUR);
  const dryL = new Float32Array(N), dryR = new Float32Array(N), wetL = new Float32Array(N), wetR = new Float32Array(N);
  let seed = seed0;
  const rnd = () => { seed |= 0; seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const noise = () => rnd() * 2 - 1;
  const lp = () => { let y = 0; return (x, k) => (y += k * (x - y)); };
  function voice(start, len, fn, { pan = 0, gain = 1, send = .25 } = {}) {
    const i0 = Math.max(0, Math.round(start * SR)), i1 = Math.min(N, Math.round((start + len) * SR));
    const a = (pan + 1) * Math.PI / 4, gl = Math.cos(a) * gain, gr = Math.sin(a) * gain;
    for (let i = i0; i < i1; i++) { const s = fn((i - i0) / SR, 1 / SR); dryL[i] += s * gl; dryR[i] += s * gr; wetL[i] += s * gl * send; wetR[i] += s * gr * send; }
  }
  const I = {
    bell(t0, m, { gain = .14, pan = 0, decay = 1.6, send = .55 } = {}) { const f = mtof(m); voice(t0, decay * 2.2, t => Math.min(1, t / .004) * Math.exp(-t / decay) * (Math.sin(TAU * f * t) + .32 * Math.sin(TAU * f * 2.76 * t) * Math.exp(-t / (decay * .35))), { gain, pan, send }); },
    marimba(t0, m, { gain = .16, pan = 0, send = .3 } = {}) { const f = mtof(m); voice(t0, 1.2, t => Math.min(1, t / .002) * (Math.sin(TAU * f * t) * Math.exp(-t / .38) + .45 * Math.sin(TAU * f * 3.93 * t) * Math.exp(-t / .05) + .2 * Math.sin(TAU * f * 9.2 * t) * Math.exp(-t / .015)), { gain, pan, send }); },
    kalimba(t0, m, { gain = .12, pan = 0, send = .45 } = {}) { const f = mtof(m); voice(t0, 2, t => Math.min(1, t / .003) * (Math.sin(TAU * f * t) * Math.exp(-t / .7) + .3 * Math.sin(TAU * f * 5.4 * t) * Math.exp(-t / .08)), { gain, pan, send }); },
    piano(t0, m, { gain = .16, pan = 0, len = 1.6, send = .35 } = {}) { const f = mtof(m); voice(t0, len + .4, t => { let s = 0; for (let h = 1; h <= 7; h++) s += Math.sin(TAU * f * h * (1 + .0004 * h * h) * t) * Math.exp(-t * (1.6 + h * .9)) / h ** 1.1; return s * Math.min(1, t / .003) * (t > len ? Math.exp(-(t - len) / .08) : 1); }, { gain, pan, send }); },
    pizz(t0, m, { gain = .14, pan = 0 } = {}) { const f = mtof(m); voice(t0, .5, t => Math.min(1, t / .002) * Math.exp(-t / .09) * (Math.sin(TAU * f * t) + .5 * Math.sin(TAU * f * 2 * t) + .25 * Math.sin(TAU * f * 3 * t)), { gain, pan, send: .25 }); },
    sub(t0, m, len, { gain = .3, send = .02 } = {}) { const f = mtof(m); voice(t0, len + .1, t => Math.sin(TAU * f * t) * Math.min(1, t / .01) * Math.exp(-Math.max(0, t - len) / .05) * (1 - .25 * t / (len + .1)), { gain, send }); },
    saw(t0, m, len, { gain = .07, pan = 0, cutoff = .12, send = .3 } = {}) { const f = mtof(m), filt = lp(), f2 = lp(); voice(t0, len + .15, t => { let s = 0; for (let h = 1; h <= 14; h++) s += Math.sin(TAU * f * h * t) / h; const env = Math.min(1, t / .005) * Math.exp(-t / (len * .9)); return f2(filt(s * env, cutoff), cutoff * 1.4); }, { gain, pan, send }); },
    kick(t0, { gain = .45 } = {}) { let ph = 0; voice(t0, .45, t => { ph += TAU * (44 + 90 * Math.exp(-t / .025)) / SR; return Math.sin(ph) * Math.exp(-t / .17) * Math.min(1, t / .002); }, { gain, send: .03 }); },
    hat(t0, { gain = .04, pan = .2, len = .022 } = {}) { const f = lp(); voice(t0, .1, t => { const n = noise(); return (n - f(n, .4)) * Math.exp(-t / len); }, { gain, pan, send: .08 }); },
    snare(t0, { gain = .12, pan = 0 } = {}) { const f = lp(); voice(t0, .3, t => (f(noise(), .5) * Math.exp(-t / .08) + Math.sin(TAU * 190 * t) * Math.exp(-t / .05) * .5), { gain, pan, send: .2 }); },
    shaker(t0, { gain = .035, pan = .3 } = {}) { const f = lp(), g = lp(); voice(t0, .12, t => { const n = noise(); return (f(n, .6) - g(n, .15)) * Math.sin(Math.PI * Math.min(1, t / .1)); }, { gain, pan, send: .1 }); },
    tick(t0, { gain = .2, pan = 0, freq = 2400, send = .3 } = {}) { voice(t0, .12, t => Math.exp(-t / .018) * (Math.sin(TAU * freq * t) * .7 + Math.sin(TAU * freq * 1.51 * t) * .3 + noise() * .25 * Math.exp(-t / .004)), { gain, pan, send }); },
    wood(t0, { gain = .2, pan = 0, freq = 1250 } = {}) { voice(t0, .1, t => Math.exp(-t / .012) * (Math.sin(TAU * freq * t) + .4 * Math.sin(TAU * freq * 2.3 * t)), { gain, pan, send: .2 }); },
    whoomp(t0, { gain = .5, from = 120, to = 38, len = 1.3 } = {}) { let ph = 0; const air = lp(); voice(t0, len + .3, t => { const f = to + (from - to) * Math.exp(-t / .18); ph += TAU * f / SR; const env = Math.min(1, t / .012) * Math.exp(-t / (len * .38)); return env * Math.sin(ph) + air(noise(), .02 + .1 * Math.exp(-t / .2)) * Math.min(1, t / .08) * Math.exp(-t / .5) * .9; }, { gain, send: .35 }); },
    swish(t0, len, { gain = .14, pan = 0, bright = .12, send = .3 } = {}) { const f = lp(), g = lp(); voice(t0, len, t => { const x = t / len, env = Math.sin(Math.PI * Math.min(1, x)) ** 1.5; return (f(noise(), bright * (.4 + x)) - g(noise(), .01)) * env * 2.2; }, { gain, pan, send }); },
    riser(t0, len, { gain = .12 } = {}) { const f = lp(); voice(t0, len, t => { const x = t / len; return f(noise(), .01 + .3 * x * x) * x * x * 3; }, { gain, send: .4 }); },
    impact(t0, { gain = .5 } = {}) { let ph = 0; const f = lp(); voice(t0, 1.4, t => { ph += TAU * (30 + 70 * Math.exp(-t / .06)) / SR; return Math.tanh(2.5 * Math.sin(ph)) * Math.exp(-t / .35) + f(noise(), .3) * Math.exp(-t / .06) * 1.2; }, { gain, send: .35 }); },
    blip(t0, m, { gain = .08, pan = 0, len = .09 } = {}) { const f = mtof(m); voice(t0, len + .02, t => Math.sign(Math.sin(TAU * f * t)) * .6 * Math.min(1, t / .002) * (t > len ? 0 : 1), { gain, pan, send: .15 }); },
    stamp(t0, { gain = .45 } = {}) { let ph = 0; const f = lp(); voice(t0, .5, t => { ph += TAU * (70 + 110 * Math.exp(-t / .02)) / SR; return Math.sin(ph) * Math.exp(-t / .09) + f(noise(), .45) * Math.exp(-t / .03) * 1.4; }, { gain, send: .15 }); },
    pop(t0, { gain = .1, pan = 0, freq = 700 } = {}) { const f = lp(); voice(t0, .15, t => Math.exp(-t / .03) * (Math.sin(TAU * (freq * (1 + .6 * Math.exp(-t / .01))) * t) * .6 + f(noise(), .25) * .8), { gain, pan, send: .2 }); },
    pad(t0, len, notes, { gain = .08, att = 1, rel = .8, pan = .5, send = .5, bright = 4 } = {}) {
      notes.forEach((m, ni) => { const f = mtof(m); [-1, 1].forEach(side => { const det = 1 + side * .0025, ph = rnd() * TAU; voice(t0, len + rel * 3, t => { let s = 0; for (let h = 1; h <= bright; h++) s += Math.sin(TAU * f * det * h * t + ph * h) / h ** 1.7; return s * Math.min(1, t / att) * (t > len ? Math.exp(-(t - len) / rel) : 1) / notes.length; }, { gain, pan: side * pan, send }); }); });
    },
  };
  function reverb(inp, delays, ap, fb = .8) {
    const out = new Float32Array(N), combs = delays.map(d => ({ buf: new Float32Array(d), i: 0, lp: 0 }));
    for (let n = 0; n < N; n++) { let s = 0; for (const c of combs) { const y = c.buf[c.i]; c.lp = y * .72 + c.lp * .28; c.buf[c.i] = inp[n] + c.lp * fb; c.i = (c.i + 1) % c.buf.length; s += y; } out[n] = s / combs.length; }
    for (const d of ap) { const buf = new Float32Array(d); let i = 0; for (let n = 0; n < N; n++) { const b = buf[i], y = -out[n] + b; buf[i] = out[n] + b * .5; i = (i + 1) % d; out[n] = y; } }
    return out;
  }
  function write(name, { room = .9, fb = .8, drive = 1.4 } = {}) {
    const rvL = reverb(wetL, [1557, 1617, 1491, 1422, 1277, 1356], [556, 441], fb), rvR = reverb(wetR, [1580, 1640, 1514, 1445, 1300, 1379], [579, 464], fb);
    const L = new Float32Array(N), R = new Float32Array(N); let peak = 0;
    for (let n = 0; n < N; n++) { const fade = Math.min(1, n / (SR * .03)) * Math.min(1, (N - n) / (SR * .5)); L[n] = Math.tanh((dryL[n] + rvL[n] * room) * drive) * fade; R[n] = Math.tanh((dryR[n] + rvR[n] * room) * drive) * fade; peak = Math.max(peak, Math.abs(L[n]), Math.abs(R[n])); }
    const norm = .89 / peak, wav = Buffer.alloc(44 + N * 4);
    wav.write("RIFF", 0); wav.writeUInt32LE(36 + N * 4, 4); wav.write("WAVE", 8); wav.write("fmt ", 12); wav.writeUInt32LE(16, 16); wav.writeUInt16LE(1, 20); wav.writeUInt16LE(2, 22); wav.writeUInt32LE(SR, 24); wav.writeUInt32LE(SR * 4, 28); wav.writeUInt16LE(4, 32); wav.writeUInt16LE(16, 34); wav.write("data", 36); wav.writeUInt32LE(N * 4, 40);
    for (let n = 0; n < N; n++) { wav.writeInt16LE(Math.round(Math.max(-1, Math.min(1, L[n] * norm)) * 32767), 44 + n * 4); wav.writeInt16LE(Math.round(Math.max(-1, Math.min(1, R[n] * norm)) * 32767), 46 + n * 4); }
    const here = dirname(fileURLToPath(import.meta.url)), dir = join(here, "out", name);
    mkdirSync(dir, { recursive: true }); writeFileSync(join(dir, "soundtrack.wav"), wav);
    console.log(`out/${name}/soundtrack.wav  ${DUR}s, peak normalised from ${peak.toFixed(3)}`);
  }
  return { I, voice, noise, rnd, lp, write, N };
}
