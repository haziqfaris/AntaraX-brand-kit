# 15 The README standard

Every repository under AntaraX opens with the same kind of README (owner, 26 October 2026): **visually beautiful, readable by someone who is not an engineer, with detailed links and explanations of what is inside and how to use it, and the AntaraX banner, logo and REKA on every one.** A visitor should understand what the repository is in ten seconds, find what they came for in thirty, and never meet a wall of setup commands before they know what the thing does.

## The parts, in order

| # | Part | What it holds |
|---|---|---|
| 1 | **Banner** | `.github/readme/banner.svg`, drawn by `tools/build-readme-kit.mjs` from `readme-kit/repos.json`: the AntaraX mark, what kind of thing it is, the name, one plain line, the status chips and the product's logo with "by AntaraX" ("by REKA" for REKA's own frameworks). Full width, centred. |
| 2 | **Badges** | One centred row of shields.io badges in brand colours: status, where it lives (a live address), the main language or stack, version. Only true facts. |
| 3 | **The one-liner** | Bold, centred: what it is, in one sentence a non-engineer understands. Under it, who it is for. |
| 4 | **Quick links** | One centred row: the live product or page, the user guide, the docs, the brand sheet, the decisions. Only links that exist. |
| 5 | **Status note** | A GitHub alert (`> [!NOTE]`, or `> [!IMPORTANT]` for anything a reader must not miss): the honest state today (live, closed pilot, by arrangement, internal, prototype) and anything not built yet. |
| 6 | **What it is** | Two to four short paragraphs in plain words: the problem, what it does about it, what it is not. No jargon before it is explained. |
| 7 | **Who it is for** | A short list or table of the people who use it and what each gets. |
| 8 | **What it does** | The main features as a table (feature, what it means for you) or short cards. Real features only. |
| 9 | **How it works** | A small diagram where it helps (GitHub draws Mermaid), and how it fits with the rest of AntaraX: Lapisan, AwanGan, AntaraX email, AXLE, the kits. |
| 10 | **What's inside this repository** | A table of the top-level folders and key files, each linked, each with one line on what it holds and when you would open it. |
| 11 | **How to use it** | Three levels, each its own subsection: **just look** (the live address, a demo, screenshots), **run it on your computer** (numbered steps with prerequisites first), and **everyday tasks** (a table of commands and what each does). Commands are copied from the repository's own scripts and docs, never invented. |
| 12 | **Documentation map** | A table of the docs that exist, grouped (start here, how it works, decisions, operations), each linked with one line. |
| 13 | **For developers and agents** | Links to `AGENTS.md`, `CLAUDE.md`, contributing rules, the checks to run before a pull request, and where the deeper technical notes are. |
| 14 | **Help and contact** | Where to ask, the support address the product uses, and how to report a problem. |
| 15 | **Footer** | `.github/readme/footer.svg` (AntaraX and REKA), then one centred line: "AntaraX is the product line of REKA Inisiatif Sdn Bhd · antarax.ai · reka.re", the licence (the `LICENSE` file if there is one, otherwise "Private and proprietary. © 2026 REKA Inisiatif Sdn Bhd. All rights reserved.") and the last-updated date. |

Part 1 and part 15 always appear. A part with nothing true to say is left out rather than padded.

## Rules

- **Nothing is lost.** The repository's previous README content stays: what belongs in the new layout moves there; long technical sections (setup details, environment variables, deployment runbooks) move word for word to `docs/DEVELOPING.md` (or the repository's existing developer doc) with links fixed, and the new README links to it. Check nothing else in the repository links to an anchor that moved.
- **True, plain and in the kit's voice** ([03](03-voice-and-claims.md)): sentence case, no em dashes, Malaysian English spelling, no invented customers, figures, integrations, certifications or maturity. Status words exactly as [02](02-products-and-families.md) sets them.
- **Links are relative** inside the repository (they work on GitHub and in a clone) and full addresses outside it. Every link is checked.
- **Pictures** live in `.github/readme/`: the banner, the footer and any screenshots. SVGs are self-contained (GitHub shows them as images). Real screens are labelled as demo data where they are.
- **No emoji as decoration.** Structure comes from headings, tables, alerts and the banner.
- **Names:** the product names as in [02](02-products-and-families.md), "by AntaraX" as the credit, "a product line of REKA Inisiatif Sdn Bhd" where REKA is named. REKA's own frameworks (Heuristiks, RESAM) credit "by REKA" and say they are used across AntaraX.
- **REKA's own repositories look like REKA, not AntaraX** (owner, 26 October 2026). Heuristiks and RESAM take `"style": "reka"` in `readme-kit/repos.json`: the banner follows [haziqfaris/reka-brand-kit](https://github.com/haziqfaris/reka-brand-kit) (near-black `#0B0B0C`, orange `#FB9800` as the accent, chamfer cuts and never rounded corners, HUD corner brackets, mono labels, the public stripe, the REKA mark), the footer is `readme-kit/footer-reka.svg` (copied as `.github/readme/footer.svg`), the badges use `0B0B0C` and `FB9800`, the voice is REKA's (`ai-docs/reka-brand-voice.md` in that kit), and the footer line is "REKA Inisiatif Sdn Bhd · AI for the physical world · reka.re". The layout is the same.

## The skeleton

```markdown
<p align="center"><img src=".github/readme/banner.svg" width="100%" alt="NAME: ONE-LINER"></p>

<p align="center">
<img alt="status" src="https://img.shields.io/badge/status-STATUS-0459F7?style=flat-square">
<img alt="where" src="https://img.shields.io/badge/live-ADDRESS-0B1B4F?style=flat-square">
</p>

<p align="center"><b>ONE SENTENCE A NON-ENGINEER UNDERSTANDS.</b><br>For WHO.</p>

<p align="center"><a href="…">Live</a> · <a href="…">User guide</a> · <a href="docs/">Docs</a> · <a href="https://github.com/haziqfaris/AntaraX-brand-kit/blob/claude/inspiring-davinci-6ehjo4/guide/products/…">Brand sheet</a></p>

> [!NOTE]
> STATUS TODAY, HONESTLY.

## What it is
## Who it is for
## What it does
## How it works
## What's inside this repository
## How to use it
### Just look
### Run it on your computer
### Everyday tasks
## Documentation map
## For developers and agents
## Help and contact

<p align="center"><img src=".github/readme/footer.svg" width="100%" alt="AntaraX, put intelligence to work. AntaraX is the product line of REKA Inisiatif Sdn Bhd."></p>
<p align="center"><sub>AntaraX is the product line of REKA Inisiatif Sdn Bhd · <a href="https://antarax.ai">antarax.ai</a> · <a href="https://reka.re">reka.re</a><br>LICENCE LINE · Last updated DATE</sub></p>
```

## Making the banner

1. Add or edit the repository's entry in [`readme-kit/repos.json`](../readme-kit/repos.json).
2. `npm i -g opentype.js@1.3.4 && NODE_PATH=$(npm root -g) node tools/build-readme-kit.mjs readme-kit/repos.json SLUG`
3. Copy `readme-kit/SLUG/banner.svg` and `readme-kit/footer.svg` to the repository's `.github/readme/`.
