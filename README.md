# Canna-Safe Programs — Website

A reference website for the Canna-Safe Programs cannabis food safety
certification framework: 176 requirements across 17 audit sections,
covering edibles, tinctures, topicals, and beverages in Colorado,
California, Washington, Missouri, and Arkansas.

Built with Next.js 16 (App Router, static export), TypeScript, and
Tailwind CSS v4.

## Structure

The site has 12 sections, organized as tabs in the top nav and as
individual routes:

| § | Route | Content |
|---|---|---|
| 1 | `/` | Overview |
| 2 | `/scope` | Product categories, states, out-of-scope sectors |
| 3 | `/mission` | Mission statement and program goals |
| 4 | `/management` | Governance structure, certification pathway, reference materials by state |
| 5 | `/auditors` | Auditor/reviewer qualification ladder and training |
| 6 | `/risk-matrix` | Risk tiers, audit frequency, non-conformance severity |
| 7 | `/risk-classifications` | Risk by product type, ingredient type, supplier process |
| 8 | `/requirements` | **The full 176-requirement register** — searchable/filterable |
| 9 | `/audit` | Audit methodology and certification status lifecycle |
| 10 | `/acronyms` | Glossary of every abbreviation used in the program |
| 11 | `/contact` | Contact channels (edit `src/data/contact.ts`) |
| 12 | `/audit-types` | Audit/certification/training types, and prep guidance |

## Content source

All requirements-register content in `src/data/requirements.json` and
state-reference content in `src/data/states.json` was parsed
programmatically from the underlying Canna-Safe Programs source
documents (Master Requirements Register, Governance Standards,
Compliance Narratives, State Regulatory Reference) to guarantee it
matches the authoritative program documents exactly — nothing in the
register was manually retyped or summarized.

Front-matter copy (Overview, Scope, Mission, Management framing,
Contact) was authored for the web from the same source documents.

## Before you deploy

1. **Add contact details.** `src/data/contact.ts` ships with empty
   email/phone/address/LinkedIn fields — the Contact page will show a
   setup notice until you fill these in.
2. **Update source content if the underlying documents change.**
   Re-run the parser (see `/home/claude/extract` in the build
   environment, or ask Claude to regenerate `requirements.json` and
   `states.json` from updated `.docx` source files) rather than
   hand-editing the JSON.

## Local development

```bash
npm install
npm run dev       # http://localhost:3000
```

## Build & deploy (static export → GitHub Pages)

This repo ships with `.github/workflows/deploy.yml`, which builds and
deploys automatically on every push to `main` — no manual `npm run
build` or branch juggling required. See the setup walkthrough below.

`next.config.ts` auto-detects whether it's building for a *user/org*
Pages site (`your-username.github.io`, served at the domain root) or a
*project* Pages site (any other repo name, served at
`/repo-name/`), and sets `basePath`/`assetPrefix` accordingly — you
don't need to edit it by hand either way.

Manual build (for local preview of the static output):

```bash
npm run build      # outputs static files to ./out
npx serve out       # preview the exported site locally
```

## Design system

Forest green + amber, warm parchment ground, hairline rules, no
filled boxes — matching the existing Canna-Safe Programs document
design standard (print handbook, requirements register, governance
standards). Typography: Fraunces (display), Source Serif 4 (body),
IBM Plex Mono (data/labels). See `src/app/globals.css` for the full
token system.
