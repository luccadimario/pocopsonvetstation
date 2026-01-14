import groq from 'groq';

// Site Settings
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    title,
    description,
    contact,
    hours,
    socialMedia,
    emergencyMessage,
    showEmergencyBanner
  }
`;

// Services
export const servicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    slug,
    shortDescription,
    icon,
    category,
    featured,
    "imageUrl": featuredImage.asset->url
  }
`;

export const featuredServicesQuery = groq`
  *[_type == "service" && featured == true] | order(order asc) [0...6] {
    _id,
    title,
    slug,
    shortDescription,
    icon,
    "imageUrl": featuredImage.asset->url
  }
`;

export const serviceBySlugQuery = groq`
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    shortDescription,
    content,
    price,
    duration,
    category,
    featuredImage,
    "relatedServices": relatedServices[]-> {
      _id,
      title,
      slug,
      shortDescription,
      icon
    }
  }
`;

// Testimonials
export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(publishedAt desc) {
    _id,
    clientName,
    petName,
    petType,
    rating,
    testimonial,
    image,
    featured,
    publishedAt
  }
`;

export const featuredTestimonialsQuery = groq`
  *[_type == "testimonial" && featured == true] | order(publishedAt desc) [0...6] {
    _id,
    clientName,
    petName,
    rating,
    testimonial,
    image
  }
`;

// FAQs
export const faqsQuery = groq`
  *[_type == "faq"] | order(order asc) {
    _id,
    question,
    answer,
    category,
    featured
  }
`;

export const faqsByCategoryQuery = groq`
  *[_type == "faq" && category == $category] | order(order asc) {
    _id,
    question,
    answer
  }
`;

// Pages
export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    seo,
    hero,
    content,
    publishedAt
  }
`;
