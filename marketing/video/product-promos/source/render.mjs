// Renders one promo film (janka.html, grid.html or frame.html) frame by frame, scores it with
// <name>-sound.mjs, and encodes the web deliverables. Adapted from the Yara intro film's renderer.
//
//   NODE_PATH=$(npm root -g) node render.mjs <janka|grid|frame>                 full render: frames -> master -> 4 web files + poster
//   NODE_PATH=$(npm root -g) node render.mjs <name> --from-master              re-score and re-encode only (after <name>-sound.mjs edits)
//   NODE_PATH=$(npm root -g) node render.mjs <name> --stills 2,6,10            review stills -> out/<name>/still-<t>.png
//
// out/<name>/
//   <name>-intro.mp4 / .webm               with sound  (H.264+AAC / VP9+Opus)
//   <name>-intro-silent.mp4 / .webm        no audio track at all
//   <name>-intro-poster.jpg                1920x1080 poster frame
//
// Frames are seeked, not recorded in real time, so the output is exact on any machine.
// Needs a full ffmpeg (winget install Gyan.FFmpeg, or set FFMPEG). Without one it falls
// back to Playwright's bundled ffmpeg and writes a silent VP8 WebM only.
import { createRequire } from "node:module";
const { chromium } = createRequire(import.meta.url)("playwright");
import { spawn, spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import os from "node:os";

const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, "out", process.argv[2]);
mkdirSync(out, { recursive: true });

const args = process.argv.slice(2);
const NAME = args[0];
if (!NAME || NAME.startsWith("--")) throw new Error("usage: render.mjs <janka|grid|frame> [--stills 2,6] [--from-master]");
const opt = (name, dflt) => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : dflt; };
const stills = opt("--stills", null);
const fromMaster = args.includes("--from-master");
const fps = Number(opt("--fps", 30));
const POSTER_T = { janka: 38, grid: 28.5, frame: 45 }[NAME] ?? 1;

function findFfmpeg() {
  if (process.env.FFMPEG) return { exe: process.env.FFMPEG, full: true };
  if (spawnSync("ffmpeg", ["-version"]).status === 0) return { exe: "ffmpeg", full: true };
  if (process.platform === "win32") {
    const pk = join(process.env.LOCALAPPDATA, "Microsoft/WinGet/Packages");
    const dir = existsSync(pk) && readdirSync(pk).find(d => d.startsWith("Gyan.FFmpeg"));
    if (dir) {
      const build = readdirSync(join(pk, dir)).find(d => d.startsWith("ffmpeg"));
      const exe = build && join(pk, dir, build, "bin", "ffmpeg.exe");
      if (exe && existsSync(exe)) return { exe, full: true };
    }
  }
  const root = process.env.PLAYWRIGHT_BROWSERS_PATH
    || (process.platform === "win32" ? join(process.env.LOCALAPPDATA, "ms-playwright")
      : process.platform === "darwin" ? join(os.homedir(), "Library/Caches/ms-playwright") : join(os.homedir(), ".cache/ms-playwright"));
  const dir = existsSync(root) && readdirSync(root).filter(d => d.startsWith("ffmpeg")).sort().pop();
  if (!dir) throw new Error("No ffmpeg found. Install one (winget install Gyan.FFmpeg) or set FFMPEG.");
  return { exe: join(root, dir, readdirSync(join(root, dir)).find(f => f.startsWith("ffmpeg"))), full: false };
}
const run = (exe, a) => new Promise((res, rej) => spawn(exe, ["-y", "-hide_banner", "-loglevel", "error", ...a], { stdio: "inherit" })
  .on("close", c => (c === 0 ? res() : rej(new Error(`${exe} exited ${c}`)))));
const mb = f => (statSync(f).size / 1048576).toFixed(1) + " MB";

const ff = findFfmpeg();
const master = join(out, "master.mp4");
const wavPath = join(out, "soundtrack.wav");

if (!fromMaster) {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
  await page.goto(pathToFileURL(join(here, `${NAME}.html`)).href + "?render=1");
  await page.evaluate(() => window.ready);
  const duration = await page.evaluate(() => window.DURATION);
  const stage = page.locator("#stage");
  const shot = async (t, o) => { await page.evaluate(x => window.seek(x), t); return stage.screenshot(o); };

  if (stills) {
    for (const t of stills.split(",").map(Number)) { await shot(t, { path: join(out, `still-${t}.png`) }); console.log(`still-${t}.png`); }
    await browser.close();
    process.exit(0);
  }

  await shot(POSTER_T, { path: join(out, `${NAME}-intro-poster.jpg`), type: "jpeg", quality: 88 });

  // near-lossless master: every later encode starts from this, never from a lossy web file
  const target = ff.full ? master : join(out, `${NAME}-intro-silent.webm`);
  const codec = ff.full
    ? ["-c:v", "libx264", "-preset", "slow", "-crf", "10", "-tune", "animation", "-pix_fmt", "yuv420p"]
    : ["-c:v", "libvpx", "-b:v", "14M", "-crf", "6", "-qmin", "2", "-qmax", "24", "-deadline", "good", "-cpu-used", "0", "-pix_fmt", "yuv420p"];
  const enc = spawn(ff.exe, ["-y", "-loglevel", "error", "-f", "image2pipe", "-c:v", "mjpeg", "-framerate", String(fps), "-i", "pipe:0", ...codec, target],
    { stdio: ["pipe", "inherit", "inherit"] });
  const done = new Promise((res, rej) => enc.on("close", c => (c === 0 ? res() : rej(new Error(`ffmpeg exited ${c}`)))));
  const frames = Math.round(duration * fps), started = Date.now();
  for (let i = 0; i < frames; i++) {
    const jpg = await shot(i / fps, { type: "jpeg", quality: 98 });
    if (!enc.stdin.write(jpg)) await new Promise(r => enc.stdin.once("drain", r));
    if (i % fps === 0) process.stdout.write(`\rframes ${(i / fps).toFixed(0)}s / ${duration}s`);
  }
  enc.stdin.end();
  await done;
  await browser.close();
  console.log(`\n${frames} frames in ${((Date.now() - started) / 1000).toFixed(0)}s`);
  if (!ff.full) { console.log(`Only a silent VP8 WebM was possible: ${target}`); process.exit(0); }
}

if (!ff.full) throw new Error("--from-master needs a full ffmpeg.");
if (!existsSync(master)) throw new Error("No out/master.mp4 yet. Run a full render first.");

// score
await new Promise((res, rej) => spawn(process.execPath, [join(here, `${NAME}-sound.mjs`)], { stdio: "inherit" }).on("close", c => (c ? rej(new Error("soundtrack failed")) : res())));
const wav = wavPath;
const loud = ["-af", "loudnorm=I=-16:TP=-1.5:LRA=11", "-ar", "48000"];   // streaming-level loudness, no clipping

// The master comes from JPEG frames with a BT.470 matrix. Whether it ends up full or limited range depends on
// the ffmpeg build (this one already writes it limited and tagged "tv"), so the input range and matrix are read
// from the master's own tags rather than assumed: forcing in_range=pc on a limited master compresses it twice
// and greys the whites. Every web file is converted to the standard: limited range, BT.709, tagged as such.
const color = ["-vf", "scale=out_range=tv:out_color_matrix=bt709,format=yuv420p",
  "-color_range", "tv", "-colorspace", "bt709", "-color_primaries", "bt709", "-color_trc", "bt709"];
const mp4v = [...color, "-c:v", "libx264", "-preset", "slow", "-crf", "19", "-tune", "animation", "-profile:v", "high", "-level", "4.1", "-pix_fmt", "yuv420p", "-g", "60", "-movflags", "+faststart"];
const vp9 = [...color, "-c:v", "libvpx-vp9", "-crf", "30", "-b:v", "0", "-row-mt", "1", "-deadline", "good", "-cpu-used", "2", "-g", "60", "-pix_fmt", "yuv420p"];
const files = {
  [`${NAME}-intro.mp4`]: ["-i", master, "-i", wav, "-map", "0:v", "-map", "1:a", ...mp4v, ...loud, "-c:a", "aac", "-b:a", "192k", "-shortest"],
  [`${NAME}-intro-silent.mp4`]: ["-i", master, "-map", "0:v", ...mp4v, "-an"],
  [`${NAME}-intro.webm`]: ["-i", master, "-i", wav, "-map", "0:v", "-map", "1:a", ...vp9, ...loud, "-c:a", "libopus", "-b:a", "160k", "-shortest"],
  [`${NAME}-intro-silent.webm`]: ["-i", master, "-map", "0:v", ...vp9, "-an"],
};
for (const [name, a] of Object.entries(files)) {
  await run(ff.exe, [...a, join(out, name)]);
  console.log(`${name.padEnd(24)} ${mb(join(out, name))}`);
}
