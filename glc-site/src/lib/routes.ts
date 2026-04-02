/** Paths use trailing slash (next.config trailingSlash). */

export const ROUTES = {
  home: "/",
  about: "/about/",
  contact: "/contact/",
  services: "/services/",
  service: (slug: string) => `/services/${slug}/`,
  /** Commercial snow location landing pages (strategy doc URLs). */
  snowLocation: (slug: string) => `/locations/${slug}/`,
  privacy: "/privacy/",
  terms: "/terms/",
} as const;

export const SERVICE_SLUGS = [
  "excavation-site-preparation",
  "foundations-civil-infrastructure",
  "septic-utility-systems",
  "drainage-hardscaping",
  "hauling-site-clearing-logistics",
  "snow-removal",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];
