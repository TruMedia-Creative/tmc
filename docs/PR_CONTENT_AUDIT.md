# PR Spec: Content + UX + SEO Fix Pack (TruMedia Creative)

Goal: Improve credibility, conversion, and SEO by eliminating content mismatches, template artifacts, and performance-heavy UI patterns.

Success criteria

- No project page has mismatched title/summary/client/industry content.
- No irrelevant “nature/travel” blog content is indexed on the main domain.
- Homepage does not render excessive duplicated images/logos in the DOM.
- Video Growth Engine page stepper does not show “Step 0 of 0”.
- Solutions pages do not contain typos or copy/paste placeholder bullets.
- Basic a11y: decorative images hidden from screen readers; headings are logical (single H1).

## P0 — Content integrity fixes (must ship)

### A) Audit + fix all /projects entries

Tasks

- Create a checklist-driven audit of every `/projects/*` page:
  - title matches content
  - client name matches content
  - industry matches content
  - servicesProvided matches content
  - “challenge/solution/results” are specific and believable
- Fix at least these known issues:
  - `/projects/tree-staple` shows Nourish to Heal Shopify rebuild content but is titled “Manufacturing Product Video”
  - `/projects/pjpolke` contains inaccurate “construction projects” phrasing for a manufacturing rep
    Acceptance criteria
- Each project has accurate, client-specific copy and consistent metadata.

### B) Remove or noindex irrelevant blog posts

Tasks

- Identify blog posts that are not business-related (e.g., nature/travel posts).
- Choose one outcomes:
  1. Remove from repo/content, OR
  2. Mark as noindex and exclude from sitemap and internal listings.
     Acceptance criteria
- These posts do not appear in sitemap and have `robots: noindex` if kept.

### C) Fix typos + copy/paste artifacts on solution pages

Tasks

- Fix obvious typos (e.g., “Aimated Intro/Outro” -> “Animated Intro/Outro”).
- Replace repeated placeholder bullets across packages with correct descriptions.
  Acceptance criteria
- Each package section has unique, correct copy.

## P1 — UX + performance improvements

### D) Homepage media duplication cleanup

Problem: homepage renders many repeated “Nuxt UI Screenshot” images/logos; reduce DOM bloat and improve LCP.
Tasks

- Refactor marquee/slider components to minimize duplicated DOM nodes.
- Ensure decorative images have empty alt (`alt=""`) and/or `aria-hidden="true"`.
- Add lazy loading for non-critical images.
  Acceptance criteria
- Homepage renders a minimal set of images for the marquee effect (no excessive repetition).
- Lighthouse: improved LCP and reduced DOM size warnings.

### E) Fix Video Growth Engine stepper state

Problem: shows “Step 0 of 0”.
Tasks

- Ensure stepper receives correct `steps[]` data and current step index.
- Add fallback UI: if steps are empty, hide stepper and show static process blocks.
  Acceptance criteria
- No “0 of 0” state is visible in production.

## P2 — Structural improvements to prevent regressions

### F) Add content schema validation + CI check

Tasks

- Define strict schemas for:
  - projects
  - services
  - solutions
  - industries
  - blog posts
- Add a CI step to validate content on PR:
  - fail build if required fields missing or invalid
  - optionally add a “content lint” script
    Acceptance criteria
- Invalid content cannot be merged without failing checks.

### G) Industry taxonomy alignment

Tasks

- Decide taxonomy:
  - If “Non-Profits” is actually “Churches & Ministries”, rename route and nav label accordingly, OR
  - Broaden page content and create a separate churches page.
    Acceptance criteria
- URL slug, nav label, page H1, and copy all match the same audience.

## Notes for implementation

- Prefer single-source-of-truth data objects for packages and re-use them across solutions pages.
- Keep SEO metadata consistent: title, description, OG tags, canonical.
- Avoid placeholder/template content shipping (add review checklist gating).
