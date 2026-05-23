export interface Project {
  title: string;
  description: string;
  year?: number;
  client?: string;
  services?: string[];
  heroImage?: string;
  beforeImage?: string;
  afterImage?: string;
  websiteUrl?: string;
  challenge?: string;
  outcomes?: string;
  solution?: string;
  results?: string[];
  images?: ProjectImage[];
  video?: ProjectVideo;
  testimonial?: ProjectTestimonial;
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectVideo {
  src: string;
  poster?: string;
  title?: string;
}

export interface ProjectTestimonial {
  quote: string;
  author: {
    name: string;
    title: string;
    company: string;
    avatar?: string;
  };
}

export interface ProcessStep {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon?: string;
  image?: {
    src: string;
    alt?: string;
  };
  content?: string;
  link?: {
    url: string;
    text: string;
  };
}

export interface AdditionalProject {
  title: string;
  to: string;
  thumbnail: string;
  tags?: string[];
  client_type?: string;
  year?: number;
}
