<script setup lang="ts">
interface Project {
  title: string;
  description: string;
  year?: number;
  client?: string;
  services?: string[];
  heroImage?: string;
  heroImageAlt?: string;
  beforeImage?: string;
  afterImage?: string;
  websiteUrl?: string;
  challenge?: string;
  outcomes?: string;
  solution?: string;
  results?: string[];
  galleryImages?: string[];
}

const project: Project = {
  title: "Local Hair Salon Marketing Case Study: Retention, SEO, and Paid Ads",
  description:
    "SEO, retention, and paid media strategy for a high-end local hair salon focused on repeat business and predictable growth.",
  year: 2024,
  client: "Cut. artisan. hair. design.",
  services: [
    "Local SEO Strategy",
    "Google Business Profile Optimization",
    "Client Retention & Re-Engagement Campaigns",
    "Paid Ads Strategy",
    "Marketing Systems & Reporting",
  ],
  // Reuse the existing salon project photo until a dedicated hero image is available.
  heroImage: "/images/projects/thumbnails/hair-salon.jpg",
  heroImageAlt: "Hair stylist working with a client in a salon",
  beforeImage: "",
  afterImage: "",
  websiteUrl: "",
  challenge:
    "Cut. artisan. hair. design. delivered a premium in-salon experience, but growth was inconsistent. Client churn, underutilized rebooking, and weak local visibility limited revenue despite strong demand and talented stylists.",
  outcomes:
    "We focused on increasing lifetime value before chasing more new clients by improving local search visibility, strengthening rebooking and retention systems, and aligning paid ads with real business goals instead of vanity metrics.",
  solution:
    "We implemented a client growth system that combined local SEO and Google Business optimization with targeted re-engagement campaigns and paid ads. The strategy emphasized repeat visits, predictable bookings, and clearer performance tracking for the owner and stylists.",
  results: [
    "Improved client retention and rebooking consistency",
    "Stronger local search presence and Google Maps visibility",
    "More predictable monthly revenue from repeat clients",
    "Clearer insight into marketing performance and client behavior",
    "Reduced reliance on constant new-client acquisition",
  ],
  galleryImages: [],
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
