<script setup lang="ts">
interface Project {
  title: string;
  description: string;
  year?: number;
  client?: string;
  services?: string[];
  heroImage?: string;
  heroImageAlt?: string;
  websiteUrl?: string;
  challenge?: string;
  outcomes?: string;
  solution?: string;
  results?: string[];
  caseStudySections?: Array<{
    heading: string;
    content: string;
  }>;
}

const project: Project = {
  title:
    "B2B Electronics Marketplace Case Study: Seller Re-Activation and Outbound Growth",
  description:
    "Activation, re-engagement, and outbound systems for a B2B electronics and semiconductor bidding platform.",
  year: 2024,
  client: "BidChip",
  services: [
    "Activation & Re-Engagement Strategy",
    "Outbound Campaign Design",
    "ICP & Seller Segmentation",
    "Sales Messaging & Email Systems",
    "Performance Tracking & Optimization",
  ],
  // Reuse the existing BidChip marketplace image until an approved project photo is available.
  heroImage: "/images/projects/thumbnails/bidchip.png",
  heroImageAlt: "Screenshot of the BidChip electronics marketplace homepage",
  websiteUrl: "",
  challenge:
    "BidChip had an active platform and a growing database of buyers and sellers, but many sellers were dormant or underutilizing the marketplace. Without consistent activation and education, marketplace liquidity and deal velocity were limited.",
  outcomes:
    "We focused on re-engaging sellers by aligning outreach with real seller incentives, clarifying how BidChip creates value, and guiding users toward specific actions that increase participation rather than relying on generic platform announcements.",
  solution:
    "We implemented a structured activation and outbound system that segmented sellers by behavior and readiness, delivered targeted messaging sequences, and encouraged meaningful marketplace activity. Campaigns were designed to educate, re-activate, and move sellers toward consistent usage.",
  results: [
    "Increased engagement from previously dormant sellers",
    "Clearer understanding of platform value among participants",
    "Improved marketplace activity and deal momentum",
    "Repeatable activation framework for ongoing growth",
    "Better visibility into seller behavior and campaign performance",
  ],
  caseStudySections: [],
};

definePageMeta({
  layout: "projects",
});

useSeoMeta({
  title: `${project.title} - TruMedia Creative Portfolio`,
  description: project.description,
  ogTitle: `${project.title} - TruMedia Creative Portfolio`,
  ogDescription: project.description,
});
</script>

<template>
  <ProjectsSpotlightLayout2 :project="project" />
</template>
