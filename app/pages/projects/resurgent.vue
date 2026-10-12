<script setup lang="ts">
import type { Project } from "~/types/project";

const project: Project = {
  title: "Portable Worship and Livestream Systems for a Church Plant",
  description:
    "Portable, professional-grade worship production system for Resurgent Church, a growing church plant requiring flexible, setup-and-strike AV capabilities for their weekly services.",
  year: 2024,
  client: "Resurgent Church",
  services: ["Live Streaming", "AV Design", "AV Installation"],
  heroImage: "/images/projects/resurgent/resurgent-hero.svg",
  heroImageAlt: "Illustration of portable church worship media equipment",
  websiteUrl: "",
  challenge:
    "As a church plant meeting in a rented facility, Resurgent Church needed a complete worship production system that could be set up and torn down weekly. The system had to deliver professional quality while being portable, durable, and simple enough for volunteer teams to operate.",
  outcomes:
    "We designed a fully portable worship production solution optimized for quick setup and teardown. Every component was selected for portability, durability, and ease of use, while maintaining the audio and video quality needed for engaging worship experiences and professional livestreaming.",
  solution:
    "We provided a portable production system featuring compact digital mixer with wireless tablet control, lightweight PTZ cameras with quick-mount stands, portable livestreaming computer with automated presets, wireless microphone systems with rechargeable batteries, and custom rolling cases for organized storage and transport.",
  results: [
    "Weekly setup time reduced to under 30 minutes",
    "Professional streaming quality from portable equipment",
    "Zero equipment failures during setup/teardown cycles",
    "Volunteer teams operating independently within 2 weeks",
    "System scales as church transitions to permanent facility",
  ],
  testimonial: {
    quote:
      "The portable system TruMedia Creative designed for us has been a game-changer. We can set up professional-quality worship production in less than 30 minutes, and our volunteers love how intuitive everything is. It's given us the flexibility we need as a church plant while maintaining the quality our congregation deserves.",
    author: {
      name: "Pastor Michael Chen",
      title: "Lead Pastor",
      company: "Resurgent Church",
    },
  },
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
