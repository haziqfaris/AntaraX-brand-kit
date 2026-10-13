# AntaraX intro video, 60 seconds

Storyboard v3, 13 October 2026. `antarax-intro-animatic.mp4` is the animatic: layout and timing for whoever makes the real video, built from this kit's own assets. It is silent; the captions stand in for the voice-over. Every product screen and figure in it is demo data.

**The idea.** A customer asks a growing business: "We'd like a bigger order next month. Can you take it on?" The answer is in a chat group, a spreadsheet, a full inbox and someone's memory, so the safe answer is no. AntaraX keeps the tools the business already trusts, our team connects them, and AntaraX fills each gap. Asked again, the owner can see the cash to free up, the room to use and the team's load, and says yes.

| Time | Scene | Voice-over |
|---|---|---|
| 0:00 | The question | A customer asks: can you take on a bigger order next month? The answer is in a chat group, a spreadsheet, a full inbox and someone's memory. |
| 0:10 | What it costs | When nobody can see the whole picture, the safe answer is no. Cash sits on the shelf, and good work goes elsewhere. |
| 0:15 | The promise | AntaraX connects what you have, fills the gaps, and puts AI to work on it. |
| 0:21 | Connect | Already have tools you trust? Keep them. Our team connects them to AntaraX. |
| 0:29 | Fill the gaps | Where there's a gap, we fill it. Managed AI reads, sorts and drafts your paperwork. Yara shows every job, live, so you know what your team can take on. Janka shows the stock that isn't moving, so you can free up the cash in it. PLExyz Grid shows the space you have, so you can make room for more. |
| 0:44 | The outcome | Ask again, and you can see the answer. AntaraX flags, forecasts and drafts. You decide, and say yes to more. On screen: "Free up cash. Make room. Say yes to more work." |
| 0:53 | Book a demo | See it on your own work. Book a demo at antarax.ai/meet. |

`stills/` has one frame per scene, named by order and time.

## Rules for whoever makes it

- **Outcome lines, never figures** (guide/03, claims rule 3). The ringgit and counts on screen are demo data and say so.
- **Connecting and paperwork are services.** "Our team connects them to AntaraX"; paperwork is REKA's Managed AI. Their tools are generic icons: no software brand names or logos.
- **No single combined dashboard.** Janka, PLExyz Grid and Yara answer side by side, each under its own name.
- No customer names. The credit is "AntaraX is the AI product line of REKA", never "Powered by". The sparkle draws on and breathes; it never spins or flips. British English, sentence case, no em dashes.

## Cut-downs

60 s master (16:9) · 30 s (16:9, 1:1) · 15 s (9:16, 1:1) · 6 s bumper · 12 s silent hero loop for antarax.ai (scenes 4 and 5) · silent booth loop ending on the QR card.

## Rebuilding

    NODE_PATH=$(npm root -g) node tools/build-intro-animatic.mjs            # the MP4
    NODE_PATH=$(npm root -g) node tools/build-intro-animatic.mjs --stills   # the stills
