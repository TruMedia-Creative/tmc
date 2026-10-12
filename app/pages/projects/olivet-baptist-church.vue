<script setup lang="ts">
import type { Project } from "~/types/project";

const project: Project = {
  title: "Olivet Baptist Church - Professional Worship Production System",
  description:
    "Complete livestream, digital board, and in-ear monitor installation transforming worship services for a growing congregation in Paducah, Kentucky",
  year: 2024,
  client: "Olivet Baptist Church",
  services: [
    "Live Stream Setup",
    "Digital Board Installation",
    "In-Ear Monitor System",
    "Audio System Integration",
    "Volunteer Training",
  ],
  heroImage: "/images/projects/olivet-baptist-church/olivet-baptist-church-hero.svg",
  heroImageAlt: "Illustration of a church worship media setup",
  websiteUrl: "https://www.olivetbaptistpaducah.com",
  challenge:
    "Olivet Baptist Church needed a comprehensive upgrade to their worship production capabilities. With a growing online audience and the desire to enhance both in-person and digital worship experiences, they faced several technical challenges. Their existing audio system couldn't support modern streaming requirements, volunteers struggled with inconsistent sound quality, and the lack of proper monitoring made it difficult for worship team members to hear themselves and stay in sync.",
  outcomes:
    "Our team conducted a thorough assessment of Olivet Baptist Church's sanctuary, understanding their worship flow, volunteer capabilities, and ministry goals. We designed a complete solution that balanced professional-quality results with ease of use for volunteer teams. The outcomes included multi-platform livestreaming capabilities, a digital mixing console for precise audio control, and a personal monitoring system for the worship team.",
  solution:
    "We implemented a complete worship production system featuring professional multi-camera livestreaming with automated recording, a 32-channel digital mixing console with tablet control and scene recall, and a comprehensive wireless in-ear monitor system with personal mix control for the worship team. The system was backed by comprehensive volunteer training, custom documentation, and ongoing technical support.",
  results: [
    "Online viewership increased by 250% in first three months",
    "Worship team reports significantly improved performance quality and confidence",
    "Volunteer technical team operating systems independently within 4 weeks",
    "Professional-quality audio for both in-person congregation and streaming audience",
    "Reduced setup time for Sunday services by 60%",
    "Expanded ministry reach to homebound members and remote viewers",
  ],
  testimonial: {
    quote:
      "TruMedia Creative didn't just install equipment—they transformed our entire outcomes to worship production. Our online ministry has exploded, our worship team is performing at their best, and our volunteers are empowered with tools they can actually use. The investment has already paid dividends in reaching more people with the Gospel.",
    author: {
      name: "Pastor James Richardson",
      title: "Senior Pastor",
      company: "Olivet Baptist Church",
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
