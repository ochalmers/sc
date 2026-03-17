# Sonocea Brand Exploration Microsite

Premium internal / stakeholder-facing narrative microsite showcasing the latest Sonocea brand development work.

- React + Tailwind + Framer Motion
- Calm, minimal, editorial tone
- Chapter-style sections with a sticky right-hand nav and subtle reveal transitions

## Run locally

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

## Structure

- `src/App.jsx`: page composition + sticky chapter nav
- `src/content/siteContent.js`: primary text/content + palette values + placeholder assets
- `src/sections/*`: the six narrative sections
- `src/components/*`: shared motion / scroll-spy / waveforms

## Swap points (content + assets)

- **Text & labels**: edit `src/content/siteContent.js`
- **Persona imagery**: replace the `image` paths in `siteContent.personas.cards[]` (placeholders currently reference files in `Images/`)
- **Palette values**: edit `siteContent.colour.directions[].swatches`
- **Logo**: `Images/Logo.svg`

## Font

This project loads `AeonikPro-Regular.otf` from the project root via `@font-face`.
