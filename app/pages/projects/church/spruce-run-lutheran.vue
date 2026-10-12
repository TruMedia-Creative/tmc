<script setup lang="ts">
import type { Project } from "~/types/project";

const project: Project = {
  title: "Simple Post-Covid Streaming Solution for Local Church",
  description:
    "Straightforward, budget-friendly livestreaming solution for Spruce Run Lutheran Church, helping them maintain connection with their congregation during and after the pandemic.",
  year: 2023,
  client: "Spruce Run Lutheran Church",
  services: ["Live Streaming", "AV Design", "AV Installation"],
  // Temporary public image from the church's official website; see the source note in this folder.
  heroImage:
    "https://lh7-us.googleusercontent.com/sitesv-images-rt/AMxu72ujohEdyAFNs9JpEivpcLhfEo6s9ZTK_vuMPvVo6TJM21f_Y_Df0RRmjXihTAhQgVTpxkr1TWW_N2oHswRkd4oX8S1IqDuC80QhrfKQU_xNJBYtc0TMmoydP7i1k0lFFhHpyAiajWnwcIzbOX73CEIIxFlHMu7MQQFrGMs_-9Qj3cz3VA0vc42Zl6ZVOc4=w1280",
  heroImageAlt: "Front of Spruce Run Lutheran Church, shown on its official website",
  websiteUrl: "",
  challenge:
    "During the COVID-19 pandemic, Spruce Run Lutheran Church needed to quickly implement livestreaming to serve their congregation remotely. They required a simple, affordable solution that could be operated by volunteers with minimal technical expertise.",
  outcomes:
    "We focused on creating the simplest possible streaming setup that would still deliver quality audio and video. The design prioritized one-button operation and minimal ongoing maintenance, while keeping costs low for the small congregation.",
  solution:
    "We implemented a streamlined streaming system featuring a single PTZ camera with preset positions, USB audio interface connected to existing sound system, dedicated streaming computer with automated presets, and provided basic training for volunteer operators. The system was designed for minimal complexity and maximum reliability.",
  results: [
    "Livestreaming operational within two weeks of installation",
    "Reached homebound members and remote families consistently",
    "Single volunteer able to operate entire system",
    "Near-zero technical support calls after initial training",
    "Congregation maintained connection during lockdowns",
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
