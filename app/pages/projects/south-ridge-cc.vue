<script setup lang="ts">
import type { Project } from "~/types/project";

const project: Project = {
  title: "Live Production and Media Systems for a Modern Church Campus",
  description:
    "Comprehensive live production and media system installation for South Ridge Community Church, enabling high-quality worship experiences both in-person and online.",
  year: 2024,
  client: "South Ridge Community Church",
  services: ["Live Streaming", "AV Design", "AV Installation"],
  heroImage: "/images/projects/south-ridge-cc/south-ridge-cc-hero.svg",
  heroImageAlt: "Illustration of a church worship media setup",
  websiteUrl: "",
  challenge:
    "South Ridge Community Church needed a professional-grade live production system to support their growing congregation and expanding online ministry. Their existing setup was inadequate for multi-campus streaming and lacked the reliability needed for weekly worship services.",
  outcomes:
    "We designed a comprehensive production system that would serve both their main campus worship center and enable high-quality streaming to remote locations. The solution focused on ease of use for volunteer teams while maintaining broadcast-quality output.",
  solution:
    "We implemented a complete live production system featuring multi-camera setup with professional PTZ cameras, digital mixing console with scene recall, broadcast-quality livestreaming infrastructure, and integrated media playback systems. The system was designed for volunteer operation with extensive training and documentation.",
  results: [
    "Professional-quality livestreaming to multiple campuses",
    "Increased online engagement with remote worshippers",
    "Volunteer teams operating systems confidently after training",
    "Reliable production for weekly services and special events",
    "Scalable infrastructure for future campus expansion",
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
