# TruMedia Creative

## project

Nuxt 4 marketing website for TruMedia Creative. It uses Vue, TypeScript, Nuxt UI, Nuxt Content, and pnpm. Run all commands from the repository root.

## commands

- `pnpm bootstrap` — install dependencies with the frozen lockfile
- `pnpm dev` — start the site at `http://localhost:3010`
- `pnpm check` — run ESLint and Nuxt type checking
- `pnpm format` — check Prettier formatting
- `pnpm build` — create a production build
- `pnpm generate` — generate the static site

## repository structure

- `app/pages/` — file-based routes
- `app/components/` — shared and feature-specific Vue components
- `app/layouts/` and `app/composables/` — layouts and reusable application logic
- `content/` — schema-validated YAML and Markdown content
- `public/` — static images, videos, and other assets
- `content.config.ts` — Nuxt Content collections and Zod schemas
- `nuxt.config.ts` — modules, runtime configuration, SEO, and route rules
- `docs/` — architecture, workflow, positioning, and decision records

## rules

- Use pnpm via Corepack; do not introduce npm or Yarn lockfiles.
- Prefer content in `content/` over hardcoded page copy, and update `content.config.ts` when content shape changes.
- Preserve established Nuxt, Nuxt UI, SEO, accessibility, responsive, and light/dark-mode patterns.
- Do not invent claims, metrics, testimonials, client results, contact details, or brand positioning.
- Keep changes scoped and preserve unrelated work.

## architecture

Read:

- `docs/architecture.md`
- `docs/tmc-docs/content-architecture.md`
- `docs/tmc-docs/dev-workflow.md`

Pages query typed Nuxt Content collections and pass data into reusable Vue components. Keep collection schemas centralized in `content.config.ts`, application-wide configuration in `nuxt.config.ts`, and architectural decisions in `docs/decisions/`.

## Brand

Before changing messaging, copy, positioning, or visual identity:

Read:

- `BRAND.md`
- `docs/tmc-docs/positioning.md`

## before completing work

Run the checks appropriate to the change:

- Always: `pnpm check` and `pnpm format`
- Code, configuration, dependency, or schema changes: `pnpm build`
- Static-generation, routing, content, or SEO changes: `pnpm generate`
- UI changes: inspect affected pages at relevant breakpoints and in light/dark mode
