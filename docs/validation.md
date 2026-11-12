# Local verification

Verified November 10, 2026.

- Local reference checker: 33 references; 18 unique element IDs; no missing local links, anchors, or JavaScript element targets.
- Chromium: no horizontal overflow at widths 1440, 1024, 768, 390, and 360 pixels.
- Browser interaction checks: input slider updates, pause/resume, reset, spike generation, and evidence disclosure pass.
- Reduced-motion preference starts the neuron simulation paused.
- No browser JavaScript errors during verification.
- Desktop and mobile screenshots are stored locally in `.preview/` (ignored by Git).

## Publication

The user explicitly approved public publication of the website, supplied SC26 presentation, and research details on November 10, 2026.

- Repository: https://github.com/sanjay-das-in/snn-spike-sc26
- GitHub Pages target: https://sanjay-das-in.github.io/snn-spike-sc26/
- Publication source: `main`, repository root.

## Green-and-blue design refresh

Updated the site with an ORNL-inspired palette (deep blue, blue links, green accents), larger text, and clearer research copy. Rechecked all five viewport widths, interactive controls, reduced-motion behavior, and browser errors successfully. The existing research scope and evidence qualifications are preserved.

## Presentation removal

Removed all presentation download links and excluded the PowerPoint file from the current published source at the user’s request. The local original is retained. Previously published commits still contain the file in GitHub history.

## Research media refresh — November 12, 2026

- Verified both recorded videos play in Chromium and the attention animation has working play/pause controls.
- Verified all three figure dialogs open, display their images, close with Escape, and restore keyboard focus.
- Confirmed no horizontal page overflow at 1440, 1024, 768, 390, and 360 pixels.
- Confirmed reduced-motion mode leaves the animation and neuron simulation paused initially.
- Rechecked existing neuron controls and found no browser JavaScript errors.
- New media use relative paths, deferred video loading, and web-ready copies. The original large media files remain local and are excluded from publication.
