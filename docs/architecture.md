# Architecture

## Purpose

This document describes the technical architecture, conventions, and important decisions for this repository.

## Tech stack

Document the active stack here.

## App structure

Document major folders and responsibilities here.

## Data flow

Document important data flow here.

## SEO and structured data

`nuxt.config.ts` defines `https://www.trumediacreative.com` as the site URL. Nuxt SEO uses it for canonical URLs and the generated sitemap, which excludes noindex account, coming-soon, and placeholder pages. The Schema.org identity uses the permanent `#organization` ID; `app/composables/useSeoSchema.ts` defines the shared services, page relationships, breadcrumbs, and deliberate homepage image. `SpotlightLayout2` derives project titles, descriptions, and OG images from each project record. Content-driven pages should keep their SEO title, description, H1, and opening copy aligned.

Video indexing is selective. Decorative and supporting homepage, service, and industry videos do not receive `VideoObject` markup. A portfolio or case-study video is eligible when it is prominent on its own page and the page provides its real video metadata. The Tree Staple case study is the only current candidate, but its upload date is not available in the repository, so it does not emit `VideoObject` markup until the date is verified from Vimeo or the asset owner. Its upload date and duration must not be guessed.

The Nuxt redirect inventory contains `/docs` → `/docs/getting-started` and the legacy duplicate `/projects/nourish-to-heal-2` → `/projects/nourish-to-heal` (301). The Search Console sample paths for services, industries, and other projects map to application pages rather than configured Nuxt redirects. HTTP and host-normalization redirects, external rich-result validation, and Search Console URL inspection/recrawl require deployment-level verification.

## Validation

Use the project commands listed in `.github/copilot-instructions.md`.

## Decisions

Record major architecture decisions in `docs/decisions/`.
