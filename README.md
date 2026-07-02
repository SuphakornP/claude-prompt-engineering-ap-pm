# Claude Prompt Engineering for AP PM

Standalone HTML presentation for teaching AP Thailand Project Manager users how to use Claude with practical prompt engineering, model selection, and clear choices between Claude Chat, Claude Cowork, and Claude Code.

## Open

Open `index.html` in a browser, or run a static server from this folder:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Controls

- `Arrow Right`, `Page Down`, or `Space`: next slide
- `Arrow Left` or `Page Up`: previous slide
- `Home`: first slide
- `End`: last slide
- `N`: toggle speaker notes panel
- `Esc`: close speaker notes panel
- `แหล่งอ้างอิง`: open official reference notes
- Round button: fullscreen

## Files

- `index.html`: presentation deck
- `styles.css`: visual system and responsive layout
- `script.js`: navigation, progress, fullscreen, and notes panel
- `speaker-notes.md`: full talk track for the presenter
- `sources.md`: official Anthropic/Claude references and verification notes
- `assets/`: AP logo/font assets and hero image

## Teaching Scope

The deck covers:

- Prompt as a clear PM brief
- Claude Chat, Projects, and Artifacts
- Claude Cowork for multi-step work across files and apps
- Claude Code for prototypes, dashboards, trackers, and automation
- Model selection across Fable 5, Opus 4.8, Sonnet 5, Haiku 4.5, and Mythos 5 caveats
- Long-context prompting, prompt structure, examples, and asking for usable work outputs

## Source Policy

Model and product claims were checked against official Anthropic, Claude, Claude Help Center, or Claude Platform documentation as of July 2, 2026. See `sources.md`.
