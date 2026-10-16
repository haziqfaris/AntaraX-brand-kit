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

## From hosting Ripple's workflow tool (15 October 2026)

26. **The workflow tool's name, and the bare ripple.antarax.ai.** The app calls itself "AntaraX Ripple (Lite)", but "AntaraX Ripple" names the family (02), and only `/workflow` is served on `ripple.antarax.ai`. *Recommendation:* give the tool a product name under the naming rules in 02 before it is shown to customers; until a Ripple page exists, redirect `ripple.antarax.ai/` to `/workflow/`.

27. **Ripple's workflow tool in the AntaraX shell.** Ripple now follows the shell (Dashboard kit 1.4.0), with five differences recorded in its `antarax-kit.lock`: it uses the Ripple teal palette published as `yara`; its standard pages are routes under `/workflow/`; as an internal REKA tool it has no sign-in, organisation, roles, billing or legal pages of its own; feedback and support go to `support@go.antarax.ai` until YaraOne's front office exists; and its AI outcomes are not reported, because it does not call the AI gateway yet. *Recommendation:* give Ripple automation its own entry in `tokens/product-palettes.json` (anchored on Ripple teal, so its values stay as they are) once the tool's name is settled (question 26), and accept the other four as recorded until the tool is shown to customers.
