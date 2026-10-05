## Artifact 4 — Content Architecture (`docs/content-architecture.md`)

### Core Principle

Content structure must scale **horizontally** (more pages) without increasing **cognitive load** (more decisions).

### Content Collections (Authoritative)

/content

    /home

    /services

    /solutions

    /industries

    /projects

    /resources

    /blog

    /docs

    /changelog

Each collection:

- Has one base layout
- Has one schema
- Is queryable as a group

---

### Slug Rules (Non‑Negotiable)

- kebab‑case only
- no dates in slugs
- no adjectives unless required for clarity
- slugs must survive a 3‑year horizon

**Good**

- `/services/video-growth-engine`
- `/solutions/outreach-engine`

**Bad**

- `/services/best-video-marketing`
- `/blog/2025-video-tips`

---

### Page Types & Responsibilities

| Type     | Purpose          | CTA Allowed         |
| -------- | ---------------- | ------------------- |
| Home     | Orient + route   | Strategy Call       |
| Service  | Sell one outcome | Strategy Call       |
| Solution | Explain system   | Learn / Case Study  |
| Industry | Relevance        | Strategy Call       |
| Project  | Proof            | View Services       |
| Resource | Authority        | Subscribe / Explore |

---

### YAML Ownership Rules

- Content lives in YAML or MD — never hardcoded
- Components receive **data**, not copy
- No page owns its own schema

---

### Golden Path: Add a New Service

1. Duplicate existing service YAML
2. Update slug + title + hero
3. Validate schema
4. Run lint + build
5. Ship

No design changes allowed during this flow.
