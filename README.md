# SPIKE research hub

A responsive, accessible, dependency-free research website with an ORNL-inspired green-and-blue palette for **Spiking Transformers for Neuromorphic AI**, the ORNL / Duke / University of Delaware collaboration. Prepared as a GitHub Pages test site for SC26.

## Preview locally

```bash
cd /home/jhd/Work/snn_github_page
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://localhost:8000. All assets and downloads use relative links, so the site also works under a GitHub Pages repository path. No Node, npm, build, or external font service is required.

## Maintain the page

- `index.html`: research overview, demos, publication/resources, roadmap, people, and contact.
- `styles.css`: responsive layout and visual design.
- `app.js`: educational leaky integrate-and-fire visualization; honors reduced motion and pauses in background tabs.
- `assets/superneuromat.bib`: downloadable complete paper citation.
- `SPIKE-SC26-Demo-3.pptx`: supplied source presentation, linked for download.
- `docs/research-notes.md`: sources, interpretation limits, and editorial checks.

Edit and push to `main` to update the GitHub Pages site. Hosting is configured to serve `/` on `main` with `.nojekyll`. Keep this independent repository separate from any parent workspace repository.

## Content principles

Keep plans, reported simulation results, estimates, and hardware measurements distinct. The interactive neuron is illustrative. The toy attention demo's exhaustive accuracy is not a generalization result. Review `docs/research-notes.md` when adding claims.

## Checks

```bash
python3 scripts/check_site.py
```

The checker validates local links, anchor targets, duplicate IDs, required content, and relative asset paths. Browser layout and the interactive visualization should also be reviewed on desktop and mobile.
