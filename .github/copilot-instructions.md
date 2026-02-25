# Copilot Instructions: TruMedia Creative SaaS Website

This is a Nuxt.js 4 application for TruMedia Creative's marketing website built with the Nuxt UI template architecture.

## Architecture Overview

**Content-Driven Design**: Content is managed through YAML files in `/content/` with structured schema validation via `content.config.ts`. Pages query content using `queryCollection()` pattern.

**Component Structure**:

- `/app/components/` - Reusable components organized by feature (home/, services/, projects/)
- `/app/pages/` - Route-based pages with async data fetching from content collections
- `/app/layouts/` - Layout wrappers (default.vue provides app structure with AppHeader/AppFooter)

**Content Pattern**: Each page follows this data flow:

```ts
const { data: page } = await useAsyncData("page-name", () =>
  queryCollection("collection-name").first(),
);
```

## Development Workflow

**Package Management**: Uses `pnpm` (not npm/yarn). Key commands:

- `pnpm bootstrap` - Enable Corepack and install dependencies (first-time setup)
- `pnpm dev` - Development server on http://localhost:3000
- `pnpm build` - Production build
- `pnpm generate` - Static site generation
- `pnpm preview` - Preview production build locally
- `pnpm lint` - ESLint check (configured with @nuxt/eslint)
- `pnpm typecheck` - TypeScript validation
- `pnpm format` - Check code formatting with Prettier
- `pnpm format:fix` - Fix code formatting with Prettier
- `pnpm fix` - Auto-fix formatting and linting issues
- `pnpm check` - Run lint, typecheck, and build - **Use before finalizing changes**
- `pnpm clean` - Clean Nuxt cache and build artifacts (runs `npx nuxt cleanup`)

**Bootstrap & Check Sequence** (use this order):

```sh
pnpm bootstrap   # first-time: enables Corepack + installs deps with frozen lockfile
pnpm check       # validates lint + types + build
```

- Always run from repo root
- Use Node version from `.nvmrc` (Node 22)
- Use pnpm via Corepack only — do not use npm or yarn
- Skip reinstall if `node_modules` is already populated; run `pnpm install --frozen-lockfile` only when lockfile changes
- Prefer `pnpm fix` to auto-correct formatting/lint before running `pnpm check`

**Content Updates**: Edit YAML files in `/content/` which automatically sync with pages. Schema validation in `content.config.ts` ensures type safety.

**Testing & Validation**:

- Always run `pnpm check` before committing changes
- Verify development server runs without errors after changes
- Test content changes by viewing affected pages in browser
- For component changes, verify in both light and dark modes

## Key Conventions

**Component Naming**:

- Page-specific components use prefix (HomeHeroTitle, HomeSections)
- Generic components use descriptive names (FadeInUp, ProcessTab)
- All components auto-imported via `components: true`

**Animation Pattern**: FadeInUp wrapper with staggered delays:

```vue
<FadeInUp :delay="0.2">
  <component />
</FadeInUp>
```

**SEO Structure**: Every page implements:

```ts
useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
});
```

## Content Schema System

**Validation**: Content uses Zod schemas defined in `content.config.ts` with reusable schema builders:

- `createLinkSchema()` for buttons/links
- `createImageSchema()` for media
- `createFeatureItemSchema()` for feature lists

**Collection Pattern**: Content files use numeric prefixes (0.index.yml, 1.services.yml) for ordering.

## Styling & UI

**Framework**: Nuxt UI 4 components with Tailwind CSS
**Theme**: Supports dark/light mode via `useColorMode()`
**Fonts**: Adobe Fonts integration (orr3dhh kit)
**Icons**: Uses Iconify with Lucide icons (`i-lucide-*`)

## Service Integration

**Analytics**: Google Analytics via nuxt-gtag
**SEO**: @nuxtjs/seo module with OG image generation
**Forms**: HoneyBook integration for lead capture
**Performance**: Image optimization via @nuxt/image

## Critical Files to Reference

- `content.config.ts` - Schema definitions and validation
- `nuxt.config.ts` - Module configuration and app settings
- `app/app.vue` - Global meta tags and navigation data
- `/content/0.index.yml` - Homepage content example
- `app/pages/index.vue` - Content query and component usage pattern

## Development Notes

- TypeScript enabled with strict type checking
- ESLint uses @nuxt/eslint with 1tbs brace style
- All components auto-imported, no manual imports needed
- Content changes reflect immediately in dev mode
- Build targets static generation for deployment

## Build Artifacts & Git

**Files to Ignore** (already configured in .gitignore):

- `.output`, `.nuxt`, `.nitro`, `.cache`, `dist` - Nuxt build outputs
- `node_modules` - Dependencies
- `.data` - Nuxt content database
- `*.log` - Log files

**Committing Changes**: After making changes, use `pnpm check` to ensure code quality before committing.

## Error Handling & Validation

**Content Validation**: All YAML content is validated against Zod schemas in `content.config.ts`. Schema errors will show in console during dev.

**Type Safety**: Use TypeScript types from auto-generated `.nuxt/` directory. Run `pnpm typecheck` to catch type errors.

**Common Patterns**:

- Provide fallback content for async data: `v-if="page?.title"` pattern
- Use optional chaining for nested content: `page.value?.seo?.title || page.value?.title`
- Handle loading states for content queries
- Validate required image alt text for accessibility
