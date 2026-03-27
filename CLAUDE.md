# AgentPath 智路

## What This Is
12-week bilingual learning companion for becoming an agentic AI professional.
Terminal hacker aesthetic (monospace, green-on-dark, CLI vibes).

## Tech Stack
- Vanilla TypeScript + esbuild + Tailwind CSS v4
- Hash-based SPA router, localStorage state, JSON content files
- Cloudflare Pages deployment

## Commands
- `npm run dev` — watch mode (esbuild + tailwind)
- `npm run build` — production build to dist/
- `npm run deploy` — build + deploy to Cloudflare Pages

## Build
`dist/` folder contains: app.js, styles.css, index.html, content/, public assets.
Content JSON files are copied to dist/content/ and fetched at runtime.

## Design
- Colors: bg #0f172a, green #00ff88, amber #ffbb00, indigo #6366f1
- Font: JetBrains Mono (monospace throughout)
- All UI classes prefixed with `ap-` in Tailwind theme
- Progress bars use ▓░ block characters
- Cards styled as terminal windows (3 dots header)

## i18n
- EN/ZH bilingual, toggle in header
- Content stored as separate JSON files per language
- UI strings in src/i18n.ts

## State
- All state in localStorage under key `agentpath`
- Single object: xp, level, streak, lessons, milestones, projects, games, badges, skills, lang
