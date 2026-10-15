# A quiet bed for the animatic: a slow pentatonic pad with soft, gamelan-like plucks over it. Placeholder until
# licensed music is chosen.
import numpy as np, wave, sys
SR = 44100; DUR = float(sys.argv[1]); N = int(SR * DUR); t = np.arange(N) / SR
rng = np.random.default_rng(7)
def hz(m): return 440 * 2 ** ((m - 69) / 12)
pad = np.zeros(N)
chords = [[50, 57, 62, 66], [47, 54, 59, 62], [45, 52, 57, 61], [43, 50, 55, 59]]  # D, Bm, A, G voicings
L = 8.0
for k in range(int(DUR / L) + 1):
    a, b = int(k * L * SR), min(N, int((k * L + L + 2) * SR))
    if a >= N: break
    seg = t[a:b] - k * L; env = np.minimum(1, seg / 2.5) * np.minimum(1, np.maximum(0, (L + 2 - seg) / 2.5))
    for m in chords[k % 4]:
        f = hz(m)
        pad[a:b] += env * (np.sin(2 * np.pi * f * seg) + .5 * np.sin(2 * np.pi * f * 1.003 * seg) + .2 * np.sin(2 * np.pi * 2 * f * seg)) * .05
pl = np.zeros(N); scale = [62, 64, 66, 69, 71, 74, 76, 78]
step = .5; pat = [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0]
for i in range(int(DUR / step)):
    if not pat[i % 16] or t[min(N - 1, int(i * step * SR))] < 4: continue
    a = int(i * step * SR); n = min(N - a, int(2.2 * SR)); s = np.arange(n) / SR
    f = hz(scale[rng.integers(len(scale))]); e = np.exp(-s * 3.2)
    pl[a:a + n] += e * (np.sin(2 * np.pi * f * s) + .35 * np.sin(2 * np.pi * f * 2.76 * s) * np.exp(-s * 6)) * .11
mix = pad + pl
# a gentle echo, fades at both ends, then normalise quietly
d = int(.33 * SR); echo = np.zeros(N); echo[d:] = mix[:-d] * .28; mix = mix + echo
mix *= np.minimum(1, t / 2.5) * np.minimum(1, (DUR - t) / 4)
mix = mix / np.max(np.abs(mix)) * .35
st = np.stack([mix, np.roll(mix, int(.012 * SR))], 1)
with wave.open('music.wav', 'wb') as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes((st * 32767).astype(np.int16).tobytes())
print('music.wav', DUR)
