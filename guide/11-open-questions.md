# 11 Open questions

Decisions the owner has not made yet. Each needs an answer before the related work can be called final. When one is answered, move it to the decisions log.

2. **Seth on light grounds.** The REKA character guide says Seth appears only on dark backgrounds (`#07090f`), while the owner's rule puts a Seth batik cameo in every AntaraX illustration, most of them on light cloth. Proposal: the batik cameo is a motif, not the character render, so it is exempt; the full character stays dark-only. Confirm.
3. **Frame app colours.** Converge Frame's primary `#0062FB` to AntaraX blue `#0459F7`? Keep or drop its orange accent `#FB9800` (REKA's brand orange)? *Recommendation (11 October): converge and drop the orange. The palette in 14 does this: Frame blue as the accent, AntaraX blue for actions, halo indigo `#524FE9` in place of the orange.*
5. **Sparkle colour values.** Recorded in `tokens.json` on 11 October from the master file layers (purple `#524FE9`, orange `#F47B3D`, cyan `#0CC4FB`, emerald `#12B76A`, indigo `#7171EA`), because the restyle rule in 12 uses them. Confirm they are final.
6. **Edge sliver.** Nudge Edge's highlight sliver (about 19% larger than source) before Edge art goes to print?
7. **WhatsApp.** Add a WhatsApp click-to-chat button for Malaysian SME buyers? Which number, and who answers?
8. **Trust strip.** Is there a real grant or claimable scheme (for example HRDF for training, MDEC or MIDA incentives) that applies to AntaraX offers and may be stated?
9. **Proof.** Which customers, quotes and figures may be published, and with whose permission (Yara first)?
10. **Blog location.** Confirm reka.re/blog as the shared blog.
11. **Product marketing pages on reka.re.** reka.re/<product> pages with AntaraX branding on REKA's theme: confirm scope and which products first.
12. **Pilot pricing.** Is there a published starting point for a Managed AI pilot, or "terms set per pilot" only?
13. **REKA guidelines vs this kit.** REKA Brand Guidelines v1.0 (June 2026) give AntaraX Heuristik blue `#1268F7` (this kit: `#0459F7`), describe AntaraX as an AI operations platform with Loom (ingest), Ripple (stream), Frame (vision) and Edge (on-device) as sub-products, and keep PLExyz and Tinara as REKA division products. This kit follows the October decisions; the REKA guidelines need updating, or this kit does. See the REKA kit's `guide/01-reconciliation.md`.
14. **Motion and OVERride.** REKA's guidelines list OVERride (Kinetik) as an autonomous vehicle and fleet platform. How does it relate to AntaraX Motion?

### Added 11 October 2026 (brand architecture, 12)

16. **Janka accent and tagline.** Confirm moving the app's primary from REKA orange to Janka's action `#077DA1` with cyan `#0CC4FB` as accent, and the tagline "Track. Forecast. Reorder." (replaces "Unlock", a banned word).
22. **"PLExyz Edge Gateway".** Rename to "PLExyz Gateway" so it does not collide with the AntaraX Edge family.
23. **Product heritage in copy.** Which origin facts may customers see (for example, the year PLExyz started, Grid's flagship customer and pricing, Yara's first customer, the pandemic origin of Yara)? Until confirmed, product sheets keep them internal.

### Added 11 October 2026 (second review)

24. **PLExyz purple.** The line brief gives `#6040CC` (shard accents `#865ACE`, `#281B4F`); the Grid mark and app use violet `#2C09B2` and shard purples `#8542ED` / `#6A2EF0` / `#4407FB`. Which do new PLExyz products take?
25. **PLExyz master mark.** The purple circular PLExyz mark in the line overview has no file in any repository. Add the final SVG to `assets/products/plexyz/`.
26. **PLExyz Crowd's focus.** The pilot app counts building occupancy from Wi-Fi; the line brief describes event safety and congestion in stadiums and venues. One product or two?
27. **Grid's top-bordered stat cards.** 07 rules out coloured top borders in every product UI; Grid's dashboard uses them in zone colours. Replace them (recommended), or allow them inside PLExyz?
28. **Where PLExyz is sold.** The line brief describes enterprise-led, consultative sales by REKA; antarax.ai lists Grid as a main product with "Book a demo", and the reka.re playbook says REKA does not sell PLExyz. Settle which site leads for PLExyz.

### Added 11 October 2026 (BaTech alignment)

29. **BaTech guidelines page is behind the kit.** `antarax-ai/docs/design/batech-guidelines.mjs` still gives Loom the verb Orchestrate (AI agents and workflows) and a waitlist, Motion a waitlist, Frame "Live" and Tinara "Beta", and names the product "Frame". Update it to the October decisions (Loom Synthesize, closed pilots, AX Frame) and add the product placements from 12.
30. **Two sets of family darks and tints.** `tokens.json` family tints and darks are computed (86% and 55%); BaTech's family pairs use their own darks and grounds (for example Ripple dark `#0B6E72` against `#046162`). Both are now in the tokens. Settle on one set.
31. **Signature moments.** Which of the product moments in 12 to build first (Yara's awan larat on Complete, Janka's padi while forecasting, Angka's congkak progress, Tinara's lattice while ranking, Grid's empty layout, Crowd's orbit live indicator, AX Frame's intan record)?
32. **Elements and charts.** Approve the proposals in 12 (loading is approved, 14) (pad end caps, intan markers, drift-band dividers, the awan larat curl under the active tab, motif loaders).
33. **Yara's "Flow" line** clashes with PLExyz Flow. Rename Yara's line (recommended), or rename the PLExyz concept.
34. **AX Frame's "Lens"** (AI analysis): if it is the AI assistant, rename it Assist, the shared name; if it is a view of analysis, keep Lens.

### Added 11 October 2026 (shared product standards, 13)


### Added 11 October 2026 (product identity system, 14)

40. **Yara's motif.** Awan larat now (people's work carried into digital), sungai later for automation. Confirm.
41. **Tinara in garnet.** Tinara moves from plum `#5B2B4A` to garnet `#7A1E3C` with gold, so it no longer sits beside Angka's plum. The marks are rebuilt in garnet. Confirm, or keep plum.
42. **Website lines and app areas.** The playbook's lines (AX Frame's Atlas, Layers, Orbit, Pulse, Ledger, Lens; Yara's Work, Desk, Crew, Flow, View, Assist) and areas (Janka's, Angka's) appear in no app; each app names its own areas (14). Either the apps adopt the lines, or antarax.ai describes products with the apps' own names. Recommended: the website uses the app names now; lines stay working names until a product is built around them.
48. **Create the role mailboxes.** `support@`, `sales@` and `privacy@antarax.ai` must exist before the apps point at them.
