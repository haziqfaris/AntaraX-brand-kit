# 11 Open questions

Decisions the owner has not made yet, each with a recommendation (11 October 2026). Each needs an answer before the related work can be called final. When one is answered, move it to the decisions log.

7. **WhatsApp.** Not yet (owner, 11 October 2026). When it reopens: a WhatsApp Business number on antarax.ai's pilot and demo pages only, answered by the REKA sales team in office hours; never inside a product.

## From the product briefs (11 October 2026)

Raised when each product's brief was checked against its own repository. The briefs in `products/` already follow the recommendation, so nothing is claimed until these are answered.

8. **"Published pricing" for main products.** 02 says the main products have published pricing, but none of Yara, Janka or PLExyz Grid publishes a price: Yara is quoted, Janka has no prices yet, Grid's are not public. *Recommendation:* read it as "pricing on request" until prices are cleared, and change 02 when the first price is published.
9. **Pilots that sign people up directly.** AX Frame's landing page offers "Start free" with its prices shown, and Angka's says "Free during the trial" and leads straight to sign-up. Both are closed pilots in 02. *Recommendation:* keep both as closed pilots and switch their pages to "Request pilot access"; if either should be self-serve, move it out of the closed pilots in 02 instead.
10. **Managed AI for AX Frame and Angka.** 02 says every closed pilot runs as part of Managed AI, but neither repository mentions it. *Recommendation:* keep the rule, and say "REKA sets it up with you" only where REKA really does.
11. **Yara's first customer.** No file confirms the go-live on 30 September, and the customer appears to be on engagement pricing rather than a package. *Recommendation:* confirm both before "live with a client" or "first subscription success" is said anywhere; until then the brief claims neither.
12. **Janka and "AI".** 02 calls Janka "AI inventory forecasting"; its forecasts are statistical, matched to each item, with AI as an optional review on top, and its own marketing brief says "no AI hype". Its repository also loads a tenant with a real catalogue and sales history (`scripts/`). *Recommendation:* lead with "inventory forecasting" and describe AI as a review that people decide on; confirm whether that tenant is a customer, a pilot or demo data.
13. **Tinara and personal data.** The prototype still holds a key-people view and a CRM export with names, emails and LinkedIn profiles, nothing mentions PDPA, the licences of its data sources are unreviewed, and its data is synthetic today. *Recommendation:* remove the contact fields and export before any partner uses real data, review each source's licence, and keep the brief's never-say list until then.
14. **PLExyz Crowd's stage.** Its repository stops on 21 July 2026, runs on simulated signals, and includes heart-rate alert screens. *Recommendation:* confirm whether any real hardware or pilot site exists; keep "is designed to count" wording until a real Wi-Fi source runs; keep the vital-signs screens out of every demo.
15. **Loom and Motion as names.** "Loom" is a well-known video-messaging product, and "Motion" a common software name. AX Frame was renamed for the same reason. *Recommendation:* run a trademark check before either has an app; fall back to "AX Loom" and "AX Motion" if needed.
16. **Loom and Motion on antarax.ai.** Both pilot pages say the product is "open to a small number of teams" though neither has an app; Loom's share image still describes AI agents and workflows; Loom's FAQ promises "without using real customer records". *Recommendation:* fix the site copy and the share image in the `antarax-ai` repository to match the briefs.
17. **Loom and Motion details.** Who buys and who uses each; whether remote control is a capability Motion has today or its design target; how synthetic data may be described for privacy; each product's loaders and signature moment. *Recommendation:* settle buyer and user first; the rest can wait for the apps.

