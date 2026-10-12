<script setup lang="ts">
import type { Project } from "~/types/project";

const project: Project = {
  title:
    "How Advanced Snow Management Won and Scaled Large Industrial Contracts with Clear Positioning and Proposals",
  description:
    "Industrial marketing, proposal strategy, and sales enablement for a commercial snow and ice management company.",
  year: 2024,
  client: "Advanced Snow Management",
  // Reuse the existing project listing photo until a dedicated hero image is available.
  heroImage: "/images/projects/thumbnails/snow-removal.jpg",
  heroImageAlt: "Snow-covered commercial properties at dusk",
  services: [
    "Industrial Marketing Strategy",
    "Proposal & RFP Support",
    "Sales Messaging & Positioning",
    "Video & Visual Sales Assets",
    "Deal Structuring & Sales Enablement",
  ],
  challenge:
    "Advanced Snow Management was pursuing large industrial and enterprise snow removal contracts with long sales cycles, complex scopes, and multiple decision-makers. Winning required more than competitive pricing—it required clarity, credibility, and confidence at every stage of the buying process.",
  outcomes:
    "We focused on positioning Advanced Snow Management as a reliable, enterprise-ready partner by clarifying service scope, operational capacity, and risk mitigation. Proposals and sales materials were designed to reduce uncertainty and help buying committees justify decisions internally.",
  solution:
    "We developed structured proposals, messaging frameworks, and supporting visual assets that clearly communicated capabilities, process, and scale. These assets helped align stakeholders, reduce back-and-forth during negotiations, and support high-value contract decisions.",
  results: [
    "Successful acquisition of large industrial and multi-site contracts",
    "Improved clarity and confidence for buying committees during evaluations",
    "More professional and consistent proposal presentation",
    "Reduced friction during late-stage sales and contract discussions",
    "Stronger positioning as an enterprise-capable snow management partner",
  ],
};
</script>

<template>
  <ProjectsSpotlightLayout2 :project="project" />
</template>
