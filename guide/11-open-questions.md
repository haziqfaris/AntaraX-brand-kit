# 11 Open questions

Decisions the owner has not made yet, each with a recommendation (11 October 2026). Each needs an answer before the related work can be called final. When one is answered, move it to the decisions log.

7. **WhatsApp.** Not yet (owner, 11 October 2026). When it reopens: a WhatsApp Business number on antarax.ai's pilot and demo pages only, answered by the REKA sales team in office hours; never inside a product.

## From the product briefs (11 October 2026)

Raised when each product's brief was checked against its own repository. Questions 8 to 11, 13, 14 and 15 were answered the same day and are in 10 (sixteenth review).

12. **Janka's real-data tenant.** Janka's repository loads a tenant with a real catalogue and sales history (`scripts/`). *Recommendation:* confirm whether it is a customer, a pilot or demo data before Janka claims any use.
16. **AX Loom and AX Motion on antarax.ai.** Both pilot pages still use the short names, and say the product is "open to a small number of teams" though neither has an app; AX Loom's share image still describes AI agents and workflows; its FAQ promises "without using real customer records". *Recommendation:* fix the copy, the names and the share image in the `antarax-ai` repository to match the briefs.
17. **AX Loom and AX Motion details.** Who buys and who uses each; whether remote control is a capability AX Motion has today or its design target; how synthetic data may be described for privacy; each product's loaders and signature moment. *Recommendation:* settle buyer and user first; the rest can wait for the apps.
18. **Prices on AX Frame's landing page.** Sign-up there is fine (10), but the page also shows prices, and 03 keeps money to calculators while every product is sold as Managed AI. *Recommendation:* take the prices off the landing page and quote them, as for every other product.

## From the antarax.ai site audit (14 October 2026)

Facts only the owner can give. Until each is answered, the site says only what the code shows and leaves the rest out.

19. **Family verbs: British or American spelling.** The families page uses "Synthesize" and "Optimize" while the rest of the site is British English. *Recommendation:* "Synthesise" and "Optimise", unless the verbs are meant as fixed product terms.
20. **Where Janka's data comes from.** The site says Janka works from recorded movements and imports items and orders from CSV. Is anything else promised to buyers (an ERP export, a scanner app)? *Recommendation:* keep to CSV and recorded movements until a second route is built.
21. **PLExyz Grid's trial length and AI launch.** The pricing table says "Trial POC, time-boxed" and "The AI features, being prepared for launch". *Recommendation:* publish the trial length; name the AI features only once a provider key is live and the evaluation thresholds pass.
22. **How far ahead AX Frame warns, and how.** The site says a renewal is "flagged ahead of its date". *Recommendation:* state the number of days and the channel (email, in-app) once confirmed from `haziqfaris/axframe`.
23. **Are pilots paid?** Pilot pages say "Terms set per pilot". *Recommendation:* say whether a pilot is free, paid or credited against a later subscription, in one line on the pilots page.
24. **A reply time for demo and pilot requests.** Contact promises only that "a real person reads every message". *Recommendation:* commit to a reply time the team can keep (for example one working day) and say it on Contact and the forms.

## From the email layout (18 October 2026)

25. **A signature motif for YaraOne and for Lapisan.** The first emails a person gets show the product's motif (13 section 4), and neither has one in 12's motif map, so theirs show none. *Recommendation:* draw YaraOne's from the Ripple niche, as Yara's sibling but not its awan larat, and give Lapisan one from the AntaraX cloth; add each to `assets/products/` and to the email service's art.

## From AwanGan's decision 0021 (25 October 2026)

26. **Classification answered 25–27 October 2026:** AwanGan and BumiNyata are Nalar products; Cebis Loom and AX Frame are in Loom; AX Loom is retired as the current product name. The **remaining** question concerns the icon, palettes, motifs and distinct product marks, tracked in 27–28 below. See [16](16-product-family-architecture.md).


## Six-family brand migration (27 October 2026)

These are open design/rollout questions; the six-family taxonomy itself is approved.

27. **Nalar family visual system:** choose its family symbol, accessible colour pair and dark/ground tones, BaTech composition and motifs. The light blue in earlier discussion was illustrative, not an approved token. Distinct AwanGan/BumiNyata product marks also remain to be designed.
28. **Loom identity with two existing A-marks:** retain AX Frame's current blue colour, four-corner mark and intan motif. Decide how its Loom family badge, BaTech treatment and email/sign-in layouts coexist with Cebis Loom's woven A-mark without a logo collision. Audit Frame legacy assets before removing any.
29. **Brand/website rollout:** update the Families, Products, Technology and other website references, search content, generated motifs, social/export assets, kit tokens and product README references only after design approval, source reconciliation, relevant checks and separate deployment approval. Review historical references, not rewrite historical decision logs.
30. **Future classifications:** Jentera's possible Ripple association, HelAI's possible Nalar hardware role, and future robots/drones under Motion are not approved product launches or confirmed shipping capabilities. Revisit their real customer promises before adopting official marks/statuses.
