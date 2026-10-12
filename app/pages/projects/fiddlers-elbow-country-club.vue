<script setup lang="ts">
import type { Project } from "~/types/project";

const project: Project = {
  title: "Country Club AV System Case Study: Complete Lighting System Redesign",
  description:
    "Complete audio-visual lighting system overhaul for Fiddler's Elbow Country Club, modernizing their facilities with state-of-the-art lighting solutions.",
  year: 2024,
  client: "Fiddler's Elbow Country Club",
  services: [
    "AV System Design",
    "Lighting Installation",
    "System Integration",
    "Technical Consultation",
  ],
  heroImage: "/images/projects/fiddlers-elbow/fiddlers-elbow-hero.svg",
  heroImageAlt: "Illustration of a conceptual ballroom lighting layout",
  websiteUrl: "",
  challenge:
    "Fiddler's Elbow Country Club needed a complete overhaul of their outdated lighting system. The existing infrastructure was inefficient, difficult to control, and didn't meet the modern standards required for their events and daily operations.",
  outcomes:
    "We conducted a comprehensive assessment of the facility's needs, designed a modern lighting system that would provide flexibility for various events while maintaining energy efficiency, and created a solution that integrated seamlessly with their existing infrastructure.",
  solution:
    "We implemented a complete lighting system redesign featuring LED technology, intelligent control systems, and scalable infrastructure. The new system provides superior illumination quality, energy savings, and intuitive controls for staff to manage different lighting scenarios for events and daily operations.",
  results: [
    "Modernized lighting infrastructure throughout the facility",
    "Significant energy cost savings through LED technology",
    "Enhanced ambiance and flexibility for various events",
    "Improved operational efficiency with intuitive controls",
    "Future-ready system with room for expansion",
  ],
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
