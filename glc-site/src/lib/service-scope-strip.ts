import type { ServiceScopeStripLink } from "@/content/types";

/** Map legacy / hub anchors to the unified service template ids. */
const HREF_MAP: Record<string, string> = {
  "#field-capabilities": "#capabilities",
  "#scope": "#capabilities",
  "#process": "#project-types",
  "#request-site-visit": "#service-contact-strip",
  "#fnd-hub-request-quote": "#service-contact-strip",
  "#foundations-hub-services": "#capabilities",
  "#foundations-hub-faq": "#faq",
  "#site-prep-capabilities": "#capabilities",
  "#related-services": "#service-quote-related",
};

export function normalizeServiceScopeStrip(links: ServiceScopeStripLink[]): ServiceScopeStripLink[] {
  return links.map((l) => ({
    ...l,
    href: HREF_MAP[l.href] ?? l.href,
  }));
}
