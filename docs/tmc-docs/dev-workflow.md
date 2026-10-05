## Artifact 5 — Developer Workflow (`docs/dev-workflow.md`)

### Daily Operating Loop

pnpm dev

pnpm lint

pnpm typecheck

pnpm build (before push)

### Branching Rules

- `main` → production
- `feat/*` → new pages or systems
- `fix/*` → bugs only

No long‑lived branches.

---

### Commit Discipline

**Format**

[type]: short description

**Types**

- feat
- fix
- content
- chore

Example:

content: add video growth engine hero copy

---

### Pre‑Commit Expectations (Optional but Recommended)

- ESLint
- TypeScript checks
- Content schema validation

If a hook blocks you, fix the issue — do not bypass.

---

### CI Expectations

A build is considered healthy only if:

- Lint passes
- Typecheck passes
- Build completes without warnings

---

### Definition of Done (Any Page)

- YAML validated
- `useSeoMeta` present
- Primary CTA mapped correctly
- Responsive checked
- Lighthouse run (informational)
