# SPIKE research hub

A responsive, accessible, dependency-free research website with an ORNL-inspired green-and-blue palette for **Spiking Transformers for Neuromorphic AI**, the ORNL / Duke / University of Delaware collaboration. Prepared as a GitHub Pages test site for SC26.

## Maintain the page

- `index.html`: research overview, demos, publication/resources, roadmap, people, and contact.
- `styles.css`: responsive layout and visual design.
- `app.js`: educational leaky integrate-and-fire visualization; honors reduced motion and pauses in background tabs.
- `assets/media/`: web-ready demo recordings, animation, figures, and video posters.
- `assets/superneuromat.bib`: downloadable complete paper citation.
- The source SC26 presentation is retained locally and excluded from publication.
- `docs/research-notes.md`: sources, interpretation limits, and editorial checks.

Edit and push to `main` to update the GitHub Pages site. Hosting is configured to serve `/` on `main` with `.nojekyll`. Keep this independent repository separate from any parent workspace repository.

## Content principles

Keep plans, reported simulation results, estimates, and hardware measurements distinct. The interactive neuron is illustrative. The toy attention demo's exhaustive accuracy is not a generalization result. Review `docs/research-notes.md` when adding claims.

## Checks

```bash
python3 scripts/check_site.py
```

The checker validates local links, anchor targets, duplicate IDs, required content, and relative asset paths. Browser layout and the interactive visualization should also be reviewed on desktop and mobile.
