# TruMedia Creative Website — Execution Roadmap

This roadmap is designed as a **build-and-operate system**, not a finish-line checklist. It is organized by phases, each with a clear objective, concrete work, durable artifacts, and explicit exit criteria so you always know what to do next.

---

## Phase 0 — Strategic Guardrails (Lock Before You Build)

**Objective**

Eliminate rework and scope drift by freezing the decisions that everything else depends on.

### Inputs

- [x] Positioning statement
- [x] ICP tiers (Primary / Secondary / Tertiary)
- [ ] Core revenue motions (Video → Outreach → Retainers)
- [ ] Explicit non-goals (what the site is _not_ responsible for)

### Work

- [x] Define **primary CTA per audience**
  - [x] Cold traffic → Strategy Call
  - [x] Warm traffic → Package / Offer pages
  - [x] Existing clients → Resources / Docs
- [x] Define **conversion hierarchy**
  - [x] Hero CTA
  - [x] Inline CTAs
  - [x] Exit-intent or last-chance CTAs
- [x] Lock **success metrics**
  - [x] Macro: booked calls, qualified leads
  - [x] Micro: scroll depth, video plays, CTA clicks

### Artifacts Produced

- [x] `docs/positioning.md`
- [x] `docs/cta-map.yml`
- [x] `docs/metrics.yml`

**Exit Criteria**

You can answer "what should this page make someone do?" in one sentence.

---

## Phase 1 — System Architecture & Developer Ergonomics

**Objective**

Make it easy to build pages quickly without thinking about structure or conventions.

### Work

- [x] Finalize Nuxt 4 conventions
  - [x] File and folder naming
  - [ ] Slug rules
  - [x] Content collection taxonomy
- [x] Normalize content schemas
  - [x] Services
  - [x] Industries
  - [x] Solutions
  - [x] Resources
- [ ] Document "golden paths"
  - [ ] How to add a new service
  - [ ] How to add a new industry
  - [ ] How to clone an existing page safely

### Tooling

- [x] pnpm scripts documented and enforced
- [x] Optional pre-commit hooks (lint, typecheck)
- [x] CI expectations documented (lint, typecheck, build)

### Artifacts Produced

- [x] `docs/content-architecture.md`
- [x] Finalized `content.config.ts`

**Exit Criteria**

You can scaffold a new page in under five minutes without second-guessing structure.

---

## Phase 2 — Content Inventory & Gap Mapping

**Objective**

Stop rewriting pages blindly and focus effort where it matters.

### Work

- [x] Inventory all existing YAML and MD content
- [x] Classify each item
  - [x] Keep
  - [x] Rewrite
  - [x] Merge
  - [x] Kill

- [ ] Identify missing assets
  - [ ] Case studies
  - [ ] Objection handlers
  - [ ] Proof blocks

### Artifacts Produced

- [ ] Content audit (spreadsheet or Notion database)
- [ ] `docs/journey-map.md`
- [ ] Page priority list (P0 / P1 / P2)

**Exit Criteria**

You know exactly which pages matter for revenue versus polish.

---

## Phase 3 — Design System & UX Rules

**Objective**

Remove design decisions from daily work.

### Work

- [x] Finalize visual foundations
  - [x] Type scale
  - [x] Spacing tokens
  - [x] Dark/light mode behavior
- [x] Standardize animation usage
  - [x] Entry timing
  - [x] Scroll triggers
  - [x] Clear rules for when _not_ to animate
- [x] Lock iconography and illustration direction
- [x] Define media rules
  - [x] Video aspect ratios
  - [x] Poster image standards
  - [x] Fallback behavior

### Artifacts Produced

- [x] `docs/design-system.md`
- [x] `docs/animation-rules.md`
- [x] `/assets/design/` reference set

**Exit Criteria**

You stop tweaking spacing, fonts, and animations mid-build.

---

## Phase 4 — Revenue Pages (Money First)

**Objective**

Ship pages that can close deals without you present.

### Build Order (Strict)

- [ ] Home
- [ ] Video Growth Engine
- [ ] Outreach Engine
- [ ] Pricing
- [ ] Contact / Booking

### For Each Page

- [ ] One primary promise
- [ ] One primary CTA
- [ ] One proof mechanism
- [ ] One objection handler

### Artifacts Produced

- [ ] Final YAML per page
- [ ] CTA tracking events
- [ ] Page-level QA checklist

**Exit Criteria**

A prospect can understand, trust, and book without emailing you.

---

## Phase 5 — Expansion Pages (Industries, Solutions, Resources)

**Objective**

Scale relevance without creating a maintenance nightmare.

### Work

- [ ] Use base templates only
- [ ] Enforce copy constraints (no essays)
- [ ] Ensure every page
  - [ ] Mentions the buyer role
  - [ ] Shows proof
  - [ ] Links back to a revenue page

### Automation

- [ ] Programmatic OG images
- [ ] Shared SEO defaults
- [ ] Collection-level navigation

### Artifacts Produced

- [ ] Industry coverage matrix
- [ ] Solution cross-link map

**Exit Criteria**

Adding pages increases surface area without increasing workload.

---

## Phase 6 — Tracking, SEO, and Feedback Loops

**Objective**

Know what is working without guessing.

### Work

- [ ] Finalize analytics stack
- [ ] Define conversion events
- [x] Implement SEO hygiene
  - [x] `useSeoMeta` everywhere
  - [ ] Sitemap validation
  - [ ] OG image coverage
- [ ] Add lightweight reporting dashboards

### Artifacts Produced

- [ ] `docs/analytics-events.md`
- [x] SEO checklist
- [ ] Post-launch review cadence

**Exit Criteria**

You can answer "what page is pulling its weight?" in under two minutes.

---

## Phase 7 — Iteration & Scale

**Objective**

Turn the site into an asset, not a recurring project.

### Ongoing Cadence

- [ ] Weekly: friction log
- [ ] Monthly: page-level optimizations
- [ ] Quarterly: offer and positioning review

### Backlog Themes

- [ ] Personalization
- [ ] Industry-specific demos
- [ ] Interactive proof (calculators, flows)

**Exit Criteria**

Changes are incremental, intentional, and revenue-driven.

---

## Operating Note

Treat this document as a living system. Each phase should be marked:

- [ ] Not Started
- [ ] In Progress
- [ ] Locked

Once a phase is locked, changes require intent—not impulse.

---

## Recent Activity (Last 24 Hours)

### January 2, 2026

- **PR #39 Merged**: Move contact page content from hardcoded strings to YAML
  - Created `content/contact.yml` with contact information and hero copy
  - Added contact page schema in `content.config.ts` with comprehensive validation
  - Updated `app/pages/contact.vue` to load data from content collection
  - **Phase Impact**: Advanced Phase 1 (System Architecture) by normalizing content schemas
  - **Benefit**: Marketing team can update contact info without code changes, supports future i18n

- **PR #38 Merged**: Replace inline font styles with semantic CSS utility class for header CTA
  - Created `.header-cta-button` utility class in `main.css` for consistent header CTA styling
  - Applied semantic class to Contact Us button in `AppHeader.vue`
  - **Phase Impact**: Advanced Phase 3 (Design System & UX Rules) by standardizing button styling
  - **Benefit**: Removed inline style decisions, improved maintainability and consistency

- **PR #37 Merged**: Extract header navigation data to content system
  - Moved hardcoded mega menu navigation from `AppHeader.vue` to `content/navigation.yml`
  - Created `createNavigationItemSchema()` and `createNavigationGroupSchema()` in `content.config.ts`
  - Reduced component from 362 lines to 91 lines by replacing hardcoded arrays with content queries
  - **Phase Impact**: Advanced Phase 1 (System Architecture) by normalizing content schemas
  - **Benefit**: Navigation updates require editing YAML only, no code changes needed

- **PR #36 Merged**: Move footer navigation to content tree for versioning
  - Created `content/footer.yml` with footer navigation structure (Solutions, Services, Industries, Resources)
  - Added footer schema to `content.config.ts` for type-safe validation
  - Refactored `AppFooter.vue` from 155-line hardcoded array to async content query
  - **Phase Impact**: Advanced Phase 1 (System Architecture) by keeping copy/URLs versioned
  - **Benefit**: Footer navigation stays in sync with marketing site content

- **PR #35 Merged**: Prepare TruMedia Creative website for public launch
  - Enabled 17+ disabled pages across Services, Solutions, and Industries sections
  - Enhanced meta titles and descriptions for all major pages with B2B-focused keywords
  - Added accessibility improvements (aria-label for icon-only buttons, verified alt text)
  - Fixed typos and updated Privacy Policy effective date to January 2, 2026
  - Created `LAUNCH_READINESS_REPORT.md` with comprehensive launch checklist
  - **Phase Impact**: Advanced Phase 6 (Tracking, SEO, and Feedback Loops) with SEO optimization
  - **Benefit**: Website ready for public launch with 152 routes successfully prerendered, zero security vulnerabilities

- **PR #34 Merged**: Implement all easy and medium TODOs
  - Updated README.md with TruMedia Creative documentation replacing boilerplate
  - Removed obsolete TODOs from component files
  - Cleaned up 8 content file TODOs (removed placeholder comments)
  - Added photo gallery infrastructure to 2 project pages
  - Standardized 6 project pages using BaseProject component, reducing code by 274 lines
  - **Phase Impact**: Advanced Phase 2 (Content Inventory) by cleaning up placeholders
  - **Benefit**: Improved code maintainability and consistency across project pages

- **PR #33 Merged**: Reorganize content into architectural directories and consolidate schemas
  - Migrated from flat structure with numeric prefixes to semantic directories (`/home`, `/services`, `/solutions`, `/industries`, `/projects`)
  - Created reusable schema builders: `createPageMetaSchema()`, `createHeroSchema()`, `createSectionSchema()`, etc.
  - Reduced `content.config.ts` from 1,680 lines to 636 lines (62% reduction)
  - **Phase Impact**: Advanced Phase 1 (System Architecture) per `/content/tmc-docs/content-architecture.md`
  - **Benefit**: Eliminated schema duplication, standardized page types, all 31 collections validate successfully
