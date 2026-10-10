# What makes batik read as Malaysian

**Purpose:** design brief for BaTech, the AntaraX corak. Researched on 9 October 2026 from search-result excerpts. Page fetching was blocked, so peer-reviewed sources are mostly UiTM and academic abstracts. Items marked [UNVERIFIED] had no solid source.

## Findings

### Motifs
- **Flowers lead.** Floral motifs are the most prominent in Malaysian block batik. They are larger, simpler and more freely arranged than Javanese ones. ([ResearchGate 348552348](https://www.researchgate.net/publication/348552348))
- **Typical motifs:**
  - Bunga raya (hibiscus, the national flower)
  - Bunga tanjung
  - Bunga telang and ketam guri. Kraftangan is moving to gazette both as Kelantan identity motifs under Geographical Indication. ([Bernama](https://www.bernama.com/en/features/news.php?id=1884845), [Utusan](https://www.utusan.com.my/berita/2021/04/bunga-ketam-guri-telang-bakal-jadi-identiti-batik-kelantan/))
  - Padi (Kedah)
  - Pucuk rebung (growth and resilience; a row of them sits in the kepala)
  - Awan larat (an endless scroll)
  - Daun
  - Kelantan geometry: wau bulan circles, semicircles and rhombi
- **Javanese motifs, so avoid as signatures:** kawung, parang, truntum, mega mendung. They come from Yogyakarta, Surakarta and Cirebon; kawung and parang were court "larangan" (restricted) motifs. ([Wikipedia: Indonesian batik patterns](https://en.wikipedia.org/wiki/Indonesian_batik_patterns))
- **No living beings.**
  - Human and animal figures are rare; they are stylised away, in line with Islamic values. ([UiTM 3638](https://ir.uitm.edu.my/id/eprint/3638/))
  - Butterflies are the usual exception.
  - A robot with a face, eyes or a body reads as figurative.

### Composition, technique and colour
- **Layout:**
  - Kepala: a band of pucuk rebung/tumpal triangles.
  - Badan: the main body.
  - Papan: flanking panels.
  - Tepi: narrow edges.
  - Source: [British Museum](https://www.britishmuseum.org/collection/object/A_As1934-0307-57). This structure is shared with Javanese pesisir (north-coast) sarongs.
- **Technique:**
  - Batik blok/cap (stamped): clean repeats.
  - Batik lukis (hand-painted): colour brushed inside the wax line, shading within a motif. This is a Malaysian signature. ([UMK journal](https://journal.umk.edu.my/index.php/teniat/article/download/1430/830/4602))
- **Colour:** bright, vivid and lighter: magenta, teal, leaf green, saffron. Javanese sogan browns and indigo are the opposite.
- **Crackle:** no source either way [UNVERIFIED]. Use sparingly, if at all.
- **Official:**
  - Kraftangan defines Malaysian batik as fully or partly handcrafted, with motifs reflecting Malaysian culture.
  - Federal civil servants wear batik on Thursdays.
  - A "Batik Malaysia" certification mark is [UNVERIFIED].

## What it means for BaTech
- **Lead with Malaysian motifs** rebuilt from technology:
  - bunga raya (a probe with signal pads)
  - bunga telang (a lens)
  - ketam guri (rhombic chip leaves)
  - bunga tanjung (a hub)
  - wau bulan (a sensor in the sky)
  - awan larat (an endless circuit trace)
  - intan (a faceted diamond)
- **Replace parang cables** with awan larat tendril bands.
- **Drop kawung** as a signature.
- **No robot faces** in the corak. Seth Linton appears as a character in his own dark card, never inside the batik.
- **Use the kepala/badan structure** for cloths and long pages.
- **Brushed lukis gradients** for the open look (M2). Keep the stamp-clean repeat (M1) where density is wanted.
- **Rename the arrangements in plain words.** "Parang" and "Ceplok" are Javanese terms; call them "flowing band" and "mirrored medallion".

Code: `prototype/site/src/batech.mjs`. Live comparison: `docs/design/batech-decisions.html`.
