<script setup lang="ts">
import type { Project } from "~/types/project";

const project: Project = {
  title: "Livestream and Worship Production Systems for a Growing Church",
  description:
    "Complete livestream and worship production system installation for Shore Christian Fellowship, transforming their worship services with professional audio, video, and streaming capabilities.",
  year: 2024,
  client: "Shore Christian Fellowship",
  services: ["Live Streaming", "AV Design", "AV Installation"],
  heroImage: "/images/projects/shore-christian/shore-christian-hero.svg",
  heroImageAlt: "Illustration of a church worship media setup",
  websiteUrl: "",
  challenge:
    "Shore Christian Fellowship was experiencing rapid growth and needed to upgrade their worship production capabilities to serve both their expanding in-person congregation and growing online audience. Their existing equipment was limiting their ability to reach more people effectively.",
  outcomes:
    "We designed an integrated worship production system that balanced professional quality with volunteer-friendly operation. The outcomes prioritized reliable streaming, clear audio for both the sanctuary and online viewers, and intuitive controls for volunteer technical teams.",
  solution:
    "We installed a comprehensive system including professional camera and streaming setup, digital audio mixing console with wireless capabilities, LED stage lighting with programmable scenes, integrated lyrics and media display system, and provided extensive volunteer training and ongoing support.",
  results: [
    "Online viewership increased by 180% in first six months",
    "Crystal-clear audio for both in-person and streaming audience",
    "Volunteer teams running all systems independently",
    "Enhanced worship atmosphere with professional lighting",
    "Reliable technology supporting ministry growth",
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
