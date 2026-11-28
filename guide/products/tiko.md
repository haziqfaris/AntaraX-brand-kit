# Tiko

Tide family (Decide). **Private pilot**, working name (registered 5 November 2026, id `tiko`). A friendly, action-first CRM for Malaysian SMEs. Layer **L2 Products** (17). Branding settled on 11 November 2026 (10).

## Brief

*Facts from `haziqfaris/antarax-tiko` (`docs/PRODUCT_BRIEF.md`, `docs/DECISIONS.md`). Names, the one-liner and the question are in 02 and win over this sheet.*

**For whom.** SME owners, sales and business-development staff and small team leads in Malaysia, many of them new to a CRM.

**The problem.** "Which leads need us today, and what is the next step on each?"

**What it does.** Tiko captures a lead from a message in under a minute, keeps a next step on every lead and deal, and moves deals through the team's own pipeline. The phone is for capture and updates, the desktop for the overview. Every lead deserves a next step.

**What it is not.** Not Tinara: Tinara tells a team which companies to approach next; Tiko keeps every lead and deal the team already has moving, with a next step on each. The two are not integrated. Not a payment gateway for a business's own customers.

**Claims.** No public claims while it is a private pilot. No customers, metrics or launch before the owner sets them.

**How it is sold.** A private pilot with 3 to 5 invited businesses, nowhere on antarax.ai (02). It stays private until its name clears legal review and 2 of 3 unrelated pilots pay to continue. Plans are **Terra · Nova · Galaxy** (13), for the app's Starter, Team and Business; prices are not set. Terra's descriptor against Tiko's two seats is 11, question 35.

## Name

- Write **Tiko**. A working name until it clears legal review (11, question 31b). Credit: "Tiko · by AntaraX".
- The wordmark is lowercase "tiko." in Poppins Bold, its dot in the highlight.
- The AI is **Assist**, with the sparkle (12).

## Mark: Tiko Classic's head

The head is the mark (owner, 11 November 2026): a white helmet in navy ink, a deep-ink faceplate with a purple cast, white eyes and smile, the crest in Tide pink. Files: `assets/products/tiko/tiko-mark.svg`, `-small` (24px and below), `-mono`, and `assets/product-logos/tiko.svg`. The production character pack (Tiko's Q-06, 11 question 31d) keeps this construction.

The full character appears only where it does a job, always with words: onboarding steps, capture review, empty states, the won moment. Never on boards, tables, figures, critical alerts or reports, and never in place of the sparkle (07, 12 "A character as a mark").

## Motif: gelombang

**Gelombang** (a wave drawn as a clock signal, Tide pair): every move keeps the rhythm going. Inside Tiko it is always Quiet, by the owner's choice (4 November 2026): empty states and the won moment only. `assets/products/tiko/tiko-motif.svg`, `tiko-motif-quiet.svg`. Its BaTech set is Tide's swell.

## Colour

Purple `#7A5FFF` leads; it acts in `#6A4DF5` (5.26:1), hovers in `#5B3FE0` and writes on its lavender `#EDEBFF` in `#4B2FC9`. **The highlight is Tide pink `#E9579D`** (owner, 11 November 2026), not REKA orange: the wordmark dot, the crest and "Needs attention", never text on white; words on its tint in `#7D094B`, a filled highlight in `#BF2E79`. Ground `#FAF9FC`. Full palette in 14 and `tokens/product-palettes.json` (`tiko`).

## Type and the shared core

Poppins for everything, **JetBrains Mono for every number**, as in every product (13 §3). Text and status colours are the shared core: navy `#0B1B4F`, body `#3B4469`, ok, warn and fault (12). AntaraX blue is the focus ring.

## What changes in the app

From `haziqfaris/antarax-tiko`, when it is next touched:

- `#FB9800` → Tide pink `#E9579D` for the dot, the crest and the counts (D-013, `src/app/globals.css`, `src/styles/tiko-shell.css`).
- Figures from Poppins to JetBrains Mono (D-012; the exception in `antarax-kit.lock` goes).
- Ink `#0F172A`, `#475569`, `#64748B` and its own status colours → the shared core (D-014, Q-05).
- The placeholder head (`public/brand/tiko-mark.svg`, `src/components/brand/marks.tsx`) and app icons → the kit's mark.
- Plan names shown as Terra, Nova and Galaxy with who each is for.
