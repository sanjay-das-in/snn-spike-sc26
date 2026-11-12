# SPIKE content and evidence notes

This research hub is prepared for SC26. Content is based on the supplied project deck and research media; results are attributed to those materials.

## Sources

- SPIKE SC26 presentation (not distributed on this site): project title, DOE Genesis Mission Phase 1 context, November 18, 2026 Chicago demo date, research directions, demo presenters, collaborator names, and roadmap.
- [SuperNeuroMAT paper](https://arxiv.org/abs/2608.08479): paper title, complete citation, simulator description.
- [ORNL/superneuromat](https://github.com/ORNL/superneuromat): public software and documentation entry points.

## New research media (November 12, 2026)

- `assets/media/spiking-attention-demo.mp4`: a web-optimized copy of the supplied trained-QKV recording. It shows three trained spiking networks running on one FPGA accelerator; displayed power and energy values are Vivado estimates.
- `assets/media/spiking-graph-learning.mp4`: the supplied Cora graph-learning walkthrough, with the original video stream retained.
- `assets/media/attention-flow.mp4`: a web video derived from the supplied attention GIF, showing the six logical stages of the 404-neuron toy model.
- `assets/media/hyperneuro-scaling.png`: supplied HyperNeuro architecture, project-reported network sizes, preliminary weak scaling results, and future targets. The site does not treat targets as achieved results.
- `assets/media/ferroelectric-circuits.png`: supplied FeFET–TFT circuit schematic and simulated responses; integrated fabrication remains a next step in the figure.
- `assets/media/attention-and-spikes.png`: supplied conceptual illustration; sentence attention weights are illustrative.

The recordings and figures do not reinstate distribution of the presentation file. Original source media are retained locally; the site publishes web copies with descriptive filenames.

## Interpretation

- Slides 55–68 describe a finite two-bit attention demo: 404 neurons, 1,313 physical synapses, 524 unique learned weights, six logical ticks, and 256/256 inputs verified. The fitted and verified domains overlap completely. This is not evidence of generalization or full transformer deployment.
- The illustrative web neuron is an independent educational model. It does not run the trained demo, reproduce a simulator benchmark, or measure hardware.
- Phase 1 / Phase 2 items are objectives. Cora accuracy targets, HyperNeuro scale targets, and chip fabrication are plans unless supported by specific artifacts. The new FPGA recording documents a hardware demonstration of the toy attention circuit; it does not establish full transformer deployment.
- Energy figures in the deck include model-dependent estimates. No measured chip power or energy claim is made on this site. The separate local Native-spike-programming evidence package is not treated as the same model or published here.
- Team institution groupings follow slides 23 and 79 and the demo overview. Robinson Pino is listed separately because an institution and project role were not established by the supplied material. No affiliation was inferred from an email address.
- The deck spells the collaborator's name “Tuofu Zhama”; verify preferred spelling before final conference release.
- The weekly meeting has no supplied weekday, time, or timezone. No meeting invitation or schedule was invented.
- No SC26 booth, room, session time, or acceptance status is inferred.

## Before the conference release

Confirm names and preferred affiliations; review the presentation for public release; add the official event/session link and location when available; add public HyperNeuro, SAM, video, dataset, and hardware links when the project supplies them. Do not invent repository URLs or benchmark results.
