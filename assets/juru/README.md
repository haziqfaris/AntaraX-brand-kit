# Juru BaTech

The characters of Juru's agents (guide 06, "Juru BaTech"). One SVG per agent, 64 by 64, and `index.json` with each agent's role, group, motif and whether it is still proposed.

Rebuild after a change to an agent or to `batech.mjs`:

```sh
node tools/build-juru-batech.mjs ../antarax-ai/prototype/site/src/batech.mjs
```

Never edit an SVG by hand, and never redraw a motif: the batik comes from the official drawing.
