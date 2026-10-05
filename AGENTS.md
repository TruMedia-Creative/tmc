# TruMedia Creative

## Project

Nuxt 4 marketing website for TruMedia Creative. It uses Vue, TypeScript, Nuxt UI, Nuxt Content, and pnpm. Run all commands from the repository root.

## Commands

- `pnpm bootstrap` — install dependencies with the frozen lockfile
- `pnpm dev` — start the site at `http://localhost:3010`
- `pnpm check` — run ESLint and Nuxt type checking
- `pnpm format` — check Prettier formatting
- `pnpm build` — create a production build
- `pnpm generate` — generate the static site

## Repository structure

- `app/pages/` — file-based routes
- `app/components/` — shared and feature-specific Vue components
- `app/layouts/` and `app/composables/` — layouts and reusable application logic
- `content/` — schema-validated YAML and Markdown content
- `public/` — static images, videos, and other assets
- `content.config.ts` — Nuxt Content collections and Zod schemas
- `nuxt.config.ts` — modules, runtime configuration, SEO, and route rules
- `docs/` — architecture, workflow, positioning, and decision records


## Agent resources

Shared, vendor-neutral agent resources live in `.agents/`.

- `.agents/skills/` — reusable procedures and domain-specific skills
- `.agents/prompts/` — reusable task prompts

When a task matches an available skill, read the relevant `SKILL.md` before beginning work.

Do not assume files in `.github/` or tool-specific directories are universal agent instructions. Tool-specific configuration should reference these shared resources rather than duplicate them.

## Documentation

Project knowledge lives in `docs/`.

Each documentation domain has a primary document that serves as the source of truth, with supporting documents alongside it.

Key documentation:

- Architecture → `docs/architecture/ARCHITECTURE.md`
- Brand → `docs/brand/BRAND.md`
- Content → `docs/content/CONTENT.md`
- Audits → `docs/audits/`
- Decisions → `docs/decisions/`

When detailed project knowledge is needed, consult the relevant documentation rather than duplicating it in this file.

## Rules

- Use pnpm via Corepack; do not introduce npm or Yarn lockfiles.
- Prefer content in `content/` over hardcoded page copy, and update `content.config.ts` when content shape changes.
- Preserve established Nuxt, Nuxt UI, SEO, accessibility, responsive, and light/dark-mode patterns.
- Do not invent claims, metrics, testimonials, client results, contact details, or brand positioning.
- Keep changes scoped and preserve unrelated work.

## Architecture

Read:

- `docs/architecture/ARCHITECTURE.md`
- `docs/content/CONTENT.md`

Pages query typed Nuxt Content collections and pass data into reusable Vue components. Keep collection schemas centralized in `content.config.ts`, application-wide configuration in `nuxt.config.ts`, and architectural decisions in `docs/decisions/`.

## Brand

Before changing messaging, copy, positioning, or visual identity:

Read:

- `docs/brand/BRAND.md`
- `docs/brand/positioning.md`

## Before completing work

Run the checks appropriate to the change:

- Always: `pnpm check` and `pnpm format`
- Code, configuration, dependency, or schema changes: `pnpm build`
- Static-generation, routing, content, or SEO changes: `pnpm generate`
- UI changes: inspect affected pages at relevant breakpoints and in light/dark mode
