<script setup lang="ts">
import type { Project } from "~/types/project";

const project: Project = {
  title:
    "Tree Staple Product Video Case Study: Visual Proof for Contractors & Municipal Buyers",
  description:
    "On-site product explainer and sales cutdowns that show exactly how Tree Staple works in the field.",
  year: 2024,
  client: "Tree Staple",
  services: [
    "Product Explainer & Script Development",
    "On-Location Video Production",
    "Motion Graphics & Callout Overlays",
    "Voiceover & Sound Design",
    "Social Cutdowns for Dealers & Sales",
  ],
  heroImage: "/images/video/tree-staple/tree-staple-hero.png",
  video: {
    src: "https://player.vimeo.com/video/844682993?badge=0&autopause=0&player_id=0&app_id=58479",
    poster: "/images/video/tree-staple/tree-staple-hero.png",
    title: "Tree Staple Product Installation Explainer",
  },
  challenge:
    "Tree Staple needed a way to demonstrate installation and durability to landscapers, contractors, and municipal buyers without being on-site for every bid.",
  outcomes:
    "We storyboarded an installation walkthrough, filmed on location, and layered motion graphics to highlight anchoring strength, speed, and safety.",
  solution:
    "The final deliverables included a flagship explainer video plus short social and email cutdowns dealers can reuse to educate prospects and win specs.",
  results: [
    "Clear, repeatable install story sales teams can send before every bid",
    "Product benefits visualized with on-screen callouts instead of text-heavy PDFs",
    "Dealer network equipped with ready-to-send clips for outreach and events",
    "Consistent brand polish across long-form explainer and short social edits",
  ],
};

useSchemaOrg([
  defineVideo({
    "@id": "https://www.trumediacreative.com/projects/tree-staple#tree-staple-video",
    name: project.video?.title,
    description: project.description,
    thumbnailUrl:
      "https://www.trumediacreative.com/images/video/tree-staple/tree-staple-hero.png",
    embedUrl: project.video?.src,
    isFamilyFriendly: true,
  }),
]);
</script>

<template>
  <ProjectsSpotlightLayout2 :project="project" />
</template>
