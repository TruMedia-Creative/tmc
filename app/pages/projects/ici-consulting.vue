<script setup lang="ts">
import type { Project } from "~/types/project";

const project: Project = {
  title:
    "Financial Consulting Lead Generation Case Study: Outbound Sales System",
  description:
    "Outbound strategy, messaging, and sales enablement for a financial consulting firm serving banks and credit unions.",
  year: 2024,
  client: "ICI Consulting",
  // Reuse the existing project listing photo until a dedicated hero image is available.
  heroImage: "/images/projects/thumbnails/ici-consulting.jpg",
  heroImageAlt: "Glass office buildings viewed from below",
  services: [
    "Outbound Strategy & Campaign Design",
    "ICP Definition & Account Targeting",
    "Sales Messaging & Positioning",
    "Cold Email & Outreach Systems",
    "Sales Enablement & Performance Tracking",
  ],
  challenge:
    "ICI Consulting offers high-value advisory services to banks and credit unions, but growth depended heavily on referrals and inconsistent outbound efforts. Long sales cycles and multiple stakeholders made it difficult to generate predictable, qualified conversations at scale.",
  outcomes:
    "We focused on clarity before volume—defining ideal accounts, decision-maker roles, and core value narratives. Outreach was designed to open informed conversations, not push immediate sales, and to support long, consultative buying processes.",
  solution:
    "We built a targeted outbound system that combined precise account selection, role-specific messaging, and structured follow-up. Campaigns were designed to position ICI as a trusted advisor, initiate meaningful conversations, and support deal progression over time.",
  results: [
    "More consistent, qualified conversations with target institutions",
    "Improved response quality from senior decision-makers",
    "Clearer positioning as a strategic advisor rather than a vendor",
    "Repeatable outbound process instead of referral-only growth",
    "Better visibility into outreach performance and pipeline health",
  ],
};
</script>

<template>
  <ProjectsSpotlightLayout2 :project="project" />
</template>
