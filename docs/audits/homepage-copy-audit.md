# TruMedia Creative Homepage Copy Audit

Source audited: `content/home/index.yml`
Brand guide: `BRAND.md`
Scope: copy audit only. No homepage source, app code, or deployment changes made.

## Executive verdict

Overall severity: **revise**.

The homepage is directionally closer to the new TruMedia positioning than a generic creative-agency page: it mentions B2B expertise, clarity, proof, systems, sales cycles, and the right buyers. However, the hierarchy still does not answer the core homepage questions fast enough: what TruMedia does, who it is specifically for, why it matters, why TruMedia, and what to do next. The strongest brand idea in `BRAND.md` is "video-led B2B marketing systems for industrial companies" with the promise "Clearer messaging. Stronger proof. Better-fit leads." The current page instead opens with broad revenue and sales language, uses several generic-agency CTAs, includes unsupported expected-results claims, and contains proof/availability issues around featured clients, results, testimonials, and case studies.

Best near-term move: rewrite the hero and first two homepage sections around the approved hierarchy from `BRAND.md` sections 16-18 and 31, then tighten the rest of the page to support clarity, credibility, conversion, and consistency without overstating proof.

## Brand standards used for this audit

Key standards from `BRAND.md`:

- Primary position: "A creative technology studio for industrial and B2B businesses that need clearer messaging, stronger proof, and better-fit leads." (`BRAND.md` lines 15-25)
- Core offer: "Video-led B2B marketing systems built around clarity, credibility, conversion, and consistency." (`BRAND.md` line 19)
- Core idea: "Turn expertise into trust." (`BRAND.md` lines 33-68)
- Homepage must quickly answer what TruMedia does, who it is for, what problem it solves, why TruMedia, what outcome, and what the visitor should do next. (`BRAND.md` lines 817-845)
- Preferred hero direction: "Marketing systems for industrial companies that need clearer messaging, stronger proof, and better leads." (`BRAND.md` lines 849-860)
- CTA discipline: use specific CTAs such as "Book a Strategy Call," "View Services," "Review Our Approach," and avoid vague CTAs when clearer action is possible. (`BRAND.md` lines 879-915)
- Proof discipline: do not invent results, testimonials, awards, client logos, rankings, guarantees, conversion rates, or revenue growth. Use process-based credibility when proof is missing. (`BRAND.md` lines 1220-1258)
- Method/process discipline: do not publish a named or fixed process unless it is present in approved source material or confirmed by Lar; describe supported capabilities plainly when confirmation is pending. (`BRAND.md` section 15)

Correction note: Method naming requires an approved source or owner confirmation before publication. This audit therefore treats unconfirmed process language as copy that needs validation, not as an approved TruMedia framework.

## Section-by-section findings

### 1. Page title, meta description, and SEO fields

Current keys/text:

- `title`: "New Jersey Based Digital Marketing Agency"
- `description`: "Helping industrial, financial, and service brands explain what they do, prove it works, and get in front of the right people."
- `seo.title`: "Video-Led Growth for B2B Companies | TruMedia Creative"
- `seo.description`: "New Jersey-based digital marketing agency helping B2B and expert-led companies clarify their message, create sales-ready content, and deploy repeatable growth systems. Video production, web design, and marketing automation services."

Severity: **revise**.

Reason tied to `BRAND.md`: The title and SEO description partially fit the brand, but "digital marketing agency" is broader and more generic than the preferred category language. `BRAND.md` favors "creative technology studio" and "video-led B2B marketing systems for industrial companies" to avoid full-service agency drift. The phrase "industrial, financial, and service brands" is less focused than the primary audience: industrial, technical, and B2B companies.

Recommended replacement copy:

- `title`: "Video-Led B2B Marketing Systems for Industrial Companies"
- `description`: "TruMedia Creative helps industrial and B2B companies clarify their message, capture stronger proof, and build practical systems that support sales and better-fit leads."
- `seo.title`: "Video-Led B2B Marketing Systems | TruMedia Creative"
- `seo.description`: "TruMedia Creative helps industrial and B2B companies turn complex expertise into clear websites, credible video content, case studies, and practical lead generation systems."

Proof/evidence gaps: None if phrased as services/process. Avoid implying measurable growth results.

### 2. Hero

Current keys/text:

- `hero.headline`: "Marketing That Turns B2B Expertise Into Revenue"
- `hero.title`: "We Help Brands Sell More Stuff."
- `hero.description`: blank
- `hero.photo.alt`: "Team collaborating on video marketing strategy"
- Primary CTA: "Book a Growth Strategy Call"
- Secondary CTA: "See Our Work"

Severity: **revise**.

Reason tied to `BRAND.md`: The hero should answer the homepage questions within seconds. Current copy is too broad and revenue-forward. "Brands" is less precise than industrial/B2B companies. "Sell More Stuff" is casual and generic; it may undercut credibility with industrial/technical buyers. "Turns B2B Expertise Into Revenue" implies a business outcome that may be too strong unless supported by proof. The blank description misses the chance to explain video-led but not video-only.

Recommended replacement copy:

- `hero.headline`: "Marketing systems for industrial companies that need clearer messaging, stronger proof, and better leads."
- `hero.title`: "Turn complex B2B expertise into content buyers can understand, trust, and act on."
- `hero.description`: "TruMedia Creative helps industrial and technical businesses build clear websites, credible video content, case studies, and practical lead generation systems that support real sales conversations."
- Primary CTA: "Book a Strategy Call"
- Secondary CTA: "Review Our Approach" or "View Services" unless `/projects` has true case studies/work proof ready.

Proof/evidence gaps: If "See Our Work" leads to real project examples, it can stay. If the page suggests case studies/results that do not exist, use "Review Our Approach" or "View Services" until proof assets are ready.

### 3. First problem section: `sections[0]` / `outdated-marketing`

Current keys/text:

- `title`: "Are You Struggling With...?"
- `description`: "If this sounds familiar, you don’t need louder marketing. You need clarity, proof, and a system that works together."
- CTA label: "Don't Worry. We Can Help."
- CTA headline: "Let's chat about your marketing challenges."
- Video title: "Outdated Marketing Video"
- Feature titles/descriptions:
  - "Stale marketing" / `#How do we modernize it without losing who we are?`
  - "Inconsistent leads" / `#How do we get more people to see it?`
  - "Unpredictable sales" / `#...but we’re not sure how to reach them.`
  - "Long sales cycles" / `#How do we get them to talk to us sooner?`
  - "Prospecting taking too long" / `#How do we build something that lasts?`

Severity: **revise**.

Reason tied to `BRAND.md`: The section's description aligns well with clarity, proof, and systems. The title is serviceable but generic. Several feature descriptions appear commented/hashtagged and may render blank or incorrectly depending on the content renderer. The pain points fit the customer problem in `BRAND.md`, but they should be sharpened toward hidden expertise, weak proof, repeated sales questions, poor-fit leads, and overdependence on referrals.

Recommended replacement direction:

- Change section title to a more specific B2B problem frame: "When buyers cannot see why your expertise matters, sales gets harder."
- Keep the description idea, tightened: "If this sounds familiar, you probably do not need louder marketing. You need a clearer message, stronger proof, and a system that helps the right buyers move forward."
- CTA label: "Talk Through Your Marketing"
- CTA headline: "Show us where buyers get stuck, and we will help identify the next best step."
- Feature replacements:
  - "Unclear website message" / "Buyers visit your site but still do not understand what makes you different."
  - "Weak proof" / "Strong projects and customer wins are not documented clearly enough to support sales."
  - "Poor-fit leads" / "Marketing activity brings attention, but not enough of the right conversations."
  - "Long sales conversations" / "Your team keeps answering the same questions manually."
  - "Scattered marketing" / "Content, website pages, video, and campaigns are not working as one system."

Proof/evidence gaps: No proof needed if framed as audience problems. Remove the hash/comment formatting from visible copy when implementation happens.

### 4. `cta_after_sections`

Current keys/text:

- `title`: "Sound Like Your Business?"
- `description`: "Let's talk about what's holding your marketing back and build a plan to fix it."
- CTA labels: "Book a Free Strategy Call" and "See How We Work"
- Secondary CTA currently links to `/projects`

Severity: **revise**.

Reason tied to `BRAND.md`: The intent is good. "Free Strategy Call" may be true, but `BRAND.md` prefers "Book a Strategy Call" unless the free nature is an intentional availability/pricing claim. "See How We Work" should not link to `/projects` unless that page actually explains process; otherwise it creates a mismatch.

Recommended replacement copy:

- `title`: "Sound like your business?"
- `description`: "Let’s look at where your message, proof, and lead path are getting stuck — and what should be clarified first."
- Primary CTA: "Book a Strategy Call"
- Secondary CTA: "Review Our Approach" linking to an approach/process page, or "View Services" linking to `/services`.

Proof/evidence gaps: Confirm whether the strategy call is actually free before using "Free."

### 5. `clients`

Current keys/text:

- `title`: "Featured Clients"
- `description`: "Trusted by leaders across manufacturing, logistics, and professional services."
- Client logos/names: Amazon, Chick-fil-A, Nascar, BidChip, pj polke, Rita's

Severity: **revise / verify before keeping**.

Reason tied to `BRAND.md`: Client logos are a high-trust proof asset, but `BRAND.md` explicitly says not to invent client logos or proof. If these are approved, real client relationships and legal/brand usage permissions exist, this section can be powerful. If not fully approved, it is the highest-risk proof area on the page. "Trusted by leaders across manufacturing, logistics, and professional services" is broad and may overstate categories represented by the visible logos.

Recommended direction:

- If approved: keep logos but change description to a precise, defensible line such as "Selected organizations and brands TruMedia has supported through creative, video, communications, or marketing work." Use only names/logos with permission.
- If not approved: remove logos from the live homepage until verified, or replace with non-logo proof such as project-type examples.

Proof/evidence gaps:

- Confirm each logo is an approved client/brand reference.
- Confirm whether the work was direct, subcontracted, internal, partner-led, or through another organization.
- Confirm permission to use each logo publicly.

### 6. `features` / expected outcomes

Current keys/text:

- `title`: "Here Are Some Results You Can Expect."
- Items:
  - "Clear Messaging" / "We turn complex offerings into simple, believable stories buyers instantly understand and trust."
  - "Sped Up Sales Cycles" / "We remove friction between interest and action so serious buyers can move forward without delays."
  - "Keep Customers Longer" / "Consistent delivery, clear expectations, and fast execution that keeps momentum high after launch."
  - "Get More Leads" / "Pages, videos, and structure designed to be found, clicked, and acted on by the right people."
  - "Reach More Buyers" / "Systems that extend your reach beyond your website and keep qualified conversations coming in."
  - "Dynamic Brand Activations" / "Clear visibility into what’s live, what’s working, and where attention is turning into action."

Severity: **revise**.

Reason tied to `BRAND.md`: This section overpromises in places by calling these "results you can expect." The guide allows desired outcomes and process-based credibility, but not unsupported guarantees or performance claims. "Buyers instantly understand and trust," "Sped Up Sales Cycles," "Keep Customers Longer," and "qualified conversations coming in" imply outcomes that need evidence. "Dynamic Brand Activations" does not fit the industrial/B2B positioning and reads like generic agency/event language.

Recommended replacement direction:

Retitle as "What the system is built to improve" or "What stronger B2B marketing should support." Reframe items as capabilities/supporting outcomes, not guaranteed results:

- "Clearer Messaging" / "Make your offer, audience, value, and next step easier for buyers to understand."
- "Stronger Proof" / "Turn projects, customer stories, and technical expertise into assets your sales team can use."
- "Better-Fit Leads" / "Build pages, videos, and campaigns around the buyers you actually want to reach."
- "Sales-Ready Content" / "Answer common buyer questions before and during the sales conversation."
- "Consistent Visibility" / "Use content, SEO, outbound, or paid campaigns with a clearer message behind them."
- "Practical Reporting" / "Track what is live, what is being used, and where attention is turning into action."

Proof/evidence gaps: If keeping claims about faster cycles, retention, or lead volume, gather real case studies, metrics, or approved testimonials first.

### 7. `cta_after_features`

Current keys/text:

- `title`: "Ready to get started?"
- `description`: "See how we can help your business grow with proven marketing strategies."
- CTA labels: "Schedule a Discovery Call" and "Explore Our Services"

Severity: **revise**.

Reason tied to `BRAND.md`: "Proven marketing strategies" implies an evidence standard the page does not currently establish. "Explore Our Services" is acceptable but less preferred than a more specific action when possible.

Recommended replacement copy:

- `title`: "Ready to clarify your message and proof?"
- `description`: "Start with a conversation about your audience, offer, current marketing gaps, and the assets your sales team needs most."
- Primary CTA: "Schedule a Strategy Call"
- Secondary CTA: "View Services"

Proof/evidence gaps: Use "proven" only if supported by documented cases, client results, or a defined method with evidence.

### 8. `process`

Current keys/text:

- `title`: "We've Got You Covered... Here's How."
- `description`: "Our 4-step outcomes to creating marketing systems that convert prospects into clients"
- Steps: Step 1 Discover, Step 2 Define, Step 3 Develop, Step 4 Deploy
- Notable copy:
  - Road MAP promises a blueprint and includes example "growing revenue from $3M to $4M in the next year."
  - Discover says research takes two weeks and includes a half-day strategy session.
  - Define says TruMedia interviews best customers and creates messaging, content strategy, channels, and campaigns.
  - Develop mentions writers and videographer producing blog posts, descriptions, website copy, case studies, explainer videos, and landing pages.
  - Deploy says campaigns generate sales, recommends at least six months for solid ROI, and mentions cancel-anytime/30-day notice.

Severity: **revise**.

Reason tied to `BRAND.md`: The current Discover / Define / Develop / Deploy sequence exists in the homepage source, but it is not confirmed in the canonical positioning or service-menu sources as a standard TruMedia method. Some detailed operational claims may be true for a specific offer, but the page should not imply every client follows this same package or that every engagement includes interviews, two-week research, a half-day session, six-month campaign recommendations, or 30-day cancellation terms unless that is current and universal. The revenue example is especially risky because it introduces a specific outcome target that could feel like a promise. "Convert prospects into clients" and "solid ROI" need proof or softer framing.

Recommended replacement direction:

Do not replace the current sequence with a new named framework until Lar confirms the intended process language. In the meantime, revise the section around supported capabilities and engagement variability:

- `title`: "A practical approach to clearer messaging, stronger proof, and better-fit leads."
- `description`: "TruMedia combines messaging strategy, video, website/content systems, lead-generation support, and reporting based on the engagement. Confirm the homepage process language with Lar before presenting any step sequence as a standard offer."
- If the current Discover / Define / Develop / Deploy labels are retained, label them as current page copy pending confirmation rather than an approved TruMedia standard.
- If Lar does not want to standardize that sequence, use non-numbered capability blocks such as messaging strategy, proof assets, website/content systems, lead-generation support, and reporting.

Specific removals/revisions:

- Remove or contextualize the "$3M to $4M" example unless it is clearly labeled as a hypothetical and not presented as typical.
- Remove "solid ROI" unless supported by case data.
- Move cancellation terms out of homepage copy unless this is an intentional offer page.
- Replace "generate sales" with "support qualified sales conversations" or "support pipeline development."

Proof/evidence gaps:

- Confirm whether Road MAP is still the current named offer.
- Confirm whether half-day session, two-week research, six-month recommendation, and cancellation terms are universal enough for homepage copy.

### 9. `cta_after_process`

Current keys/text:

- `title`: "Ready to Put This Process to Work for You?"
- `description`: "Our 4-step system turns your expertise into a marketing engine that generates leads and shortens sales cycles. Let's start building yours."
- CTA labels: "Start With a Strategy Call" and "Explore Our Services"

Severity: **revise**.

Reason tied to `BRAND.md`: Strongly aligned conceptually, but "generates leads and shortens sales cycles" is stated as an outcome claim. The brand guide prefers clearer messaging, stronger proof, better-fit leads, and sales support without hype.

Recommended replacement copy:

- `title`: "Ready to put clarity and proof to work?"
- `description`: "Let’s identify the message, proof assets, and conversion paths your buyers need before they take the next step."
- Primary CTA: "Start With a Strategy Call"
- Secondary CTA: "View Services"

Proof/evidence gaps: Need case evidence if keeping "shortens sales cycles" as a direct claim.

### 10. `testimonials`

Current keys/text:

- `headline`: "Hear From Our Clients"
- `title`: "Recent Work & Outcomes"
- Testimonials from: "Senior Communications Strategist," "Associate Director," and "Creative Director" with anonymized organization descriptions.

Severity: **keep / revise**.

Reason tied to `BRAND.md`: Real testimonials are valid proof if approved. The quotes support creativity, collaboration, video/audio production, communications work, project management, and care. However, the section title "Recent Work & Outcomes" implies case outcomes, while the quotes mostly prove working style and creative quality. The second testimonial is from a non-profit/church context, which is valid history but less aligned with the new industrial/B2B primary audience. The first and third also sound communications/non-profit oriented rather than industrial/technical.

Recommended replacement direction:

- If quotes are approved: keep them, but retitle the section to match what the proof actually shows.
- Suggested `headline`: "Client Feedback"
- Suggested `title`: "Proof of organized, thoughtful creative work"
- Add a short bridging description if available: "A few examples of how clients describe TruMedia’s collaboration, creative direction, and production support."
- Consider moving less-B2B-aligned testimonials lower, or pairing them with industrial/B2B case studies when available.

Proof/evidence gaps:

- Confirm each quote is real and approved for website use.
- Confirm whether anonymized titles/descriptions are acceptable.
- Add industrial/B2B testimonials or case studies when available.

### 11. `cta_after_testimonials`

Current keys/text:

- `title`: "Let's create something great together"
- `description`: "Join the growing list of businesses we've helped achieve their marketing goals."
- CTA labels: "Get Started Today" and "View Case Studies"

Severity: **revise**.

Reason tied to `BRAND.md`: This is generic agency language. "Growing list" and "helped achieve their marketing goals" are broad proof claims without specifics. "View Case Studies" should only be used if true case studies are available at `/projects`; otherwise it risks inaccurate proof availability.

Recommended replacement copy:

- `title`: "Ready to make your expertise easier to trust?"
- `description`: "Let’s talk through the message, proof, and sales-ready assets your buyers need next."
- Primary CTA: "Book a Strategy Call"
- Secondary CTA: "View Services" or "Review Our Approach" unless case studies exist and are clearly presented.

Proof/evidence gaps: Confirm `/projects` contains real case studies before using "View Case Studies."

### 12. Final `cta`

Current keys/text:

- `title`: "Ready to show proof and get it in front of the right buyers?"
- `description`: "Want to find out how done-for-you systems generate more pipeline, shorten sales cycles, and reduce burnout while your team focuses on closing deals? Book a strategy call today."
- CTA labels: "Book a Call" and "View Our Services"
- Secondary CTA links to `/services/video-growth-engine`

Severity: **revise**.

Reason tied to `BRAND.md`: The title is strong and aligned with proof plus right buyers. The description, however, stacks unsupported outcome claims: "generate more pipeline," "shorten sales cycles," and "reduce burnout." "Done-for-you systems" may also imply a retainer/package model not fully explained. The secondary CTA link to `/services/video-growth-engine` may reinforce video-only or offer-specific positioning unless that page is the intended main service path.

Recommended replacement copy:

- `title`: "Ready to show stronger proof to better-fit buyers?"
- `description`: "Book a strategy call to review where your message, proof, website, video, and lead paths can work together more clearly."
- Primary CTA: "Book a Strategy Call"
- Secondary CTA: "View Services" linking to `/services` unless the Video Growth Engine page is the intended primary offer and is aligned with the new brand guide.

Proof/evidence gaps: Need documented metrics before claiming pipeline increase, shortened sales cycles, or reduced burnout.

## Cross-page issues

### A. Homepage hierarchy does not answer the core questions quickly enough

Severity: **revise**.

The page contains many right ingredients, but the order dilutes the message. The hero should lead with industrial/B2B focus, video-led systems, clearer messaging, stronger proof, and better-fit leads. Currently the clearest brand-standard language appears later or indirectly.

Recommended hierarchy:

1. Hero: what TruMedia does, for whom, and the outcome.
2. Problem: hidden expertise, weak proof, scattered marketing, poor-fit leads.
3. System/pillars: clarity, credibility/proof, conversion, consistency.
4. Approach/process: use capability-based language unless Lar confirms a specific named or numbered process.
5. Proof: verified logos/testimonials/case studies only.
6. Services/CTA: practical ways to engage and a specific next step.

### B. Video-led but not video-only framing is present but underused

Severity: **revise**.

Video appears in alt text, SEO, and the process, but the page does not clearly explain video as part of a broader trust-building marketing system. Strengthen language around video as proof capture, case studies, sales enablement, and website content rather than just production.

Recommended direction: Use lines such as "credible video content, case studies, and website assets that help buyers see the people, process, and proof behind the work."

### C. CTAs are inconsistent

Severity: **revise**.

Current CTA labels include "Book a Growth Strategy Call," "Don't Worry. We Can Help," "Book a Free Strategy Call," "See How We Work," "Schedule a Discovery Call," "Explore Our Services," "Start With a Strategy Call," "Get Started Today," "View Case Studies," and "Book a Call." This creates inconsistent expectations.

Recommended CTA system:

- Primary repeated CTA: "Book a Strategy Call"
- Secondary education CTA: "View Services" or "Review Our Approach"
- Proof CTA: "See Case Studies" only if true case studies exist.

### D. Unsupported or high-risk claims

Severity: **revise / remove until proven**.

Current copy includes or implies:

- "Turns B2B Expertise Into Revenue"
- "Here Are Some Results You Can Expect"
- "Sped Up Sales Cycles"
- "Keep Customers Longer"
- "buyers instantly understand and trust"
- "proven marketing strategies"
- "convert prospects into clients"
- revenue example "$3M to $4M"
- "solid ROI"
- "generates leads and shortens sales cycles"
- "generate more pipeline, shorten sales cycles, and reduce burnout"
- logo proof from major brands

These may be usable only with supporting evidence, approved case studies, or careful reframing as intended support rather than guaranteed outcomes.

### E. Tone is sometimes too casual or agency-generic for industrial/B2B buyers

Severity: **revise**.

Examples: "We Help Brands Sell More Stuff," "Don't Worry. We Can Help," "Ready to get started?," "Let's create something great together," "Get Started Today," and "Dynamic Brand Activations." The brand should sound clear, practical, confident, B2B-aware, proof-driven, and helpful — not trendy, vague, or overly casual.

## Prioritized next actions

1. Rewrite hero using the approved `BRAND.md` homepage hierarchy: industrial/B2B audience, video-led systems, clearer messaging, stronger proof, better-fit leads, and a specific CTA.
2. Replace unsupported outcome claims with process-based credibility unless real proof is available.
3. Verify all client logos, testimonials, and case-study availability before keeping proof CTAs and proof sections.
4. Rename/reframe the `features` section from expected results to practical improvements the system is built to support.
5. Confirm whether the current Discover / Define / Develop / Deploy homepage sequence should be retained, revised, or treated as a standard offer. Until confirmed, remove universal package details unless they are current and true, and avoid introducing a new named framework.
6. Standardize CTA language across the page: "Book a Strategy Call" as primary; "View Services" or "Review Our Approach" as secondary; "See Case Studies" only when proof assets exist.
7. Tighten audience language from broad "brands" or "businesses" to "industrial, technical, and B2B companies" where appropriate.
8. Add or develop true industrial/B2B proof assets: approved logos, short case studies, customer quotes, project examples, or before/after messaging snapshots.

## Final recommendation

Do not treat the current homepage copy as ready under the new brand guide. It has a useful foundation, but it should be revised before being used as the source of truth for the refreshed TruMedia site. The biggest risks are not style issues; they are positioning drift, unsupported outcome claims, and proof availability. The fastest improvement is to adopt the `BRAND.md` hero, clarify the audience, reframe claims as process-based value, and make all proof and CTA language accurate to what exists on the site today.
