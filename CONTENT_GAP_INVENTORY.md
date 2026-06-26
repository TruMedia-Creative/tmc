# Content Gap Inventory

Generated: 2026-05-16

This inventory groups missing/placeholder items by level and type so each item can be replaced with production-ready assets/copy.

## 1) Route-level gaps (page content still placeholder)

### A. Pages explicitly marked "coming soon"
- `./app/pages/services/content-creation.vue:6`
- `./app/pages/resources/blog.vue:5`
- `./app/pages/resources/case-studies.vue:3-4`
- `./app/pages/resources/guides.vue:3-4`
- `./app/pages/resources/media-kit.vue:3-4`
- `./app/pages/resources/tutorials.vue:3-4`

### B. Pages still using `ImagePlaceholder` blocks (needs real photos/graphics)
**Services**
- `./app/pages/services/marketing-automation.vue:64`
- `./app/pages/services/seo-and-paid-ads.vue:64`
- `./app/pages/services/video-growth-engine.vue:105`

**Solutions**
- `./app/pages/solutions/clarify-your-message.vue:46`
- `./app/pages/solutions/get-more-leads.vue:55`
- `./app/pages/solutions/keep-customers-longer.vue:55`
- `./app/pages/solutions/reach-more-buyers.vue:55`
- `./app/pages/solutions/speed-up-sales.vue:55`
- `./app/pages/solutions/fix-your-live-stream-and-events.vue:55`
- `./app/pages/solutions/products/clarity-to-clients-workshop.vue:36`

**Industries**
- `./app/pages/industries/contractors-manufactures.vue:50`
- `./app/pages/industries/financial-services.vue:50`
- `./app/pages/industries/food-services.vue:50`
- `./app/pages/industries/health-and-wellness.vue:50`
- `./app/pages/industries/live-events-and-entertainment.vue:50`
- `./app/pages/industries/non-profits.vue:46`

## 2) Component-level gaps (template placeholders shown when data is absent)

- `/home/runner/work/tmc/tmc/app/components/projects/ProjectsCaseStudy.vue:87`
  - Shows: `Detailed Case Study Coming Soon`
- `/home/runner/work/tmc/tmc/app/components/projects/ProjectsVideo.vue:89-93`
  - Shows: `Video Placeholder` / `Project video will be added here`

## 3) Content-level copy gaps (placeholder/demo text)

- `/home/runner/work/tmc/tmc/content/2.pricing.yml:75`
- `/home/runner/work/tmc/tmc/content/2.pricing.yml:81`
- `/home/runner/work/tmc/tmc/content/2.pricing.yml:83`
  - Contains lorem/placeholder marketing copy that should be replaced.

## 4) Accessibility + alt-text gaps

- `/home/runner/work/tmc/tmc/content/home/index.yml:73`
  - Internal TODO notes client logo alt text and image standardization still needs completion.
- `/home/runner/work/tmc/tmc/app/components/home/HomeMarquee.vue:21,40,60`
  - Uses repeated generic alt text (`Nuxt UI Screenshot {n}`); should be replaced with meaningful alt text or marked decorative.

## 5) Missing image assets referenced in code/content (broken/missing photo paths)

### A. Missing hero images
- `/home/runner/work/tmc/tmc/app/components/HeroAlternate.vue:46` → `/images/hero/hero-1.jpg`
- `/home/runner/work/tmc/tmc/app/components/HeroAlternate.vue:47` → `/images/hero/hero-2.jpg`
- `/home/runner/work/tmc/tmc/app/components/HeroAlternate.vue:48` → `/images/hero/hero-3.jpg`
- `/home/runner/work/tmc/tmc/app/components/HeroAlternate.vue:49` → `/images/hero/hero-4.jpg`
- `/home/runner/work/tmc/tmc/app/components/HeroAlternate.vue:50` → `/images/hero/hero-5.jpg`
- `/home/runner/work/tmc/tmc/app/components/HeroAlternate.vue:51` → `/images/hero/hero-6.jpg`
- `/home/runner/work/tmc/tmc/app/components/HeroAlternate.vue:52` → `/images/hero/hero-7.jpg`

### B. Missing project hero images
- `/home/runner/work/tmc/tmc/app/pages/projects/church/spruce-run-lutheran.vue:12` → `/images/projects/spruce-run-lutheran/spruce-run-lutheran-hero.png`
- `/home/runner/work/tmc/tmc/app/pages/projects/fiddlers-elbow-country-club.vue:16` → `/images/projects/fiddlers-elbow/fiddlers-elbow-hero.png`
- `/home/runner/work/tmc/tmc/app/pages/projects/olivet-baptist-church.vue:17` → `/images/projects/olivet-baptist-hero.jpg`
- `/home/runner/work/tmc/tmc/app/pages/projects/resurgent.vue:11` → `/images/projects/resurgent/resurgent-hero.png`
- `/home/runner/work/tmc/tmc/app/pages/projects/shore-christian.vue:11` → `/images/projects/shore-christian/shore-christian-hero.png`
- `/home/runner/work/tmc/tmc/app/pages/projects/south-ridge-cc.vue:11` → `/images/projects/south-ridge-cc/south-ridge-cc-hero.png`

### C. Missing project thumbnail images
- `/home/runner/work/tmc/tmc/app/pages/projects/index.vue:7` → `/images/projects/thumbnails/fiddlers-elbow-ballroom.jpg`
- `/home/runner/work/tmc/tmc/app/pages/projects/index.vue:75` → `/images/projects/thumbnails/south-ridge-cc.jpg`
- `/home/runner/work/tmc/tmc/app/pages/projects/index.vue:83` → `/images/projects/thumbnails/shore-christian.jpg`
- `/home/runner/work/tmc/tmc/app/pages/projects/index.vue:91` → `/images/projects/thumbnails/olivet-baptist.jpg`
- `/home/runner/work/tmc/tmc/app/pages/projects/index.vue:99` → `/images/projects/thumbnails/resurgent.jpg`
- `/home/runner/work/tmc/tmc/app/pages/projects/index.vue:107` → `/images/projects/thumbnails/spruce-run-lutheran.jpg`

## 6) Recommended update order

1. Replace missing image files in Section 5 (prevents broken visuals first).
2. Replace `ImagePlaceholder` blocks in Section 1B with page-specific media.
3. Replace coming-soon copy in Section 1A and component placeholders in Section 2.
4. Close alt-text TODO + marquee alt strategy in Section 4.
5. Replace lorem copy in Section 3.
