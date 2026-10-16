# Agent rules for the AntaraX brand kit

This repository is the **source of truth for the AntaraX brand**: positioning, product architecture, voice, claims, logo, colour, type, illustration, interface rules and website conventions. Development and marketing work in other repositories should follow it.

## When working in this repository

- Change the guide only for a decision the owner has made, or to correct a fact. Add the decision to `guide/10-decisions-log.md` with its date, in the same change.
- Put anything unresolved in `guide/11-open-questions.md`; do not resolve it silently.
- Keep `tokens/tokens.json` and `tokens/tokens.css` in step. A token change is a change to every consumer; list the consumers affected in the commit message.
- **The `axle` and `shell` tokens feed the Dashboard kit.** `haziqfaris/AntaraX-Dashboard-kit` generates its `axle/tokens.css` from the `axle` section of `tokens/tokens.json`, and its `app/tokens.css` from the `shell` section, and pins the version it used. After changing any token, run `python3 tools/sync-brand-kit.py` in the Dashboard kit and commit there too; its check fails until you do.
- `reference/` holds the documents the guide was built from. Do not edit them to match the guide; the guide supersedes them.
- Write in plain British English, sentence case, no em dashes in customer-facing copy.

## When working in another repository that uses AntaraX

- Read `README.md` and the guide pages relevant to the task before changing copy, layout, colour, illustration or naming.
- Use the names, one-liners, statuses and CTAs in `guide/02-products-and-families.md` exactly. Do not promote a closed pilot to a product, or invent a status.
- Follow the claims rules in `guide/03-voice-and-claims.md`: never invent customers, logos, quotes, metrics, certifications, integrations or maturity.
- **Any work on a product's AXLE** (REKA's staff console), whether a new product, a new page or a change, is built from the AXLE template in [`haziqfaris/AntaraX-Dashboard-kit`](https://github.com/haziqfaris/AntaraX-Dashboard-kit): follow `axle/README.md`, with `axle/SPEC.md` for what to build, `axle/mock/` for how it looks and `axle/tokens.css` for every value. Do not invent a menu group, colour, active-item style or page pattern in the product; raise it instead (owner, 15 October 2026).
- If the work needs a brand decision this kit does not cover, raise it with the owner and record the answer here.
