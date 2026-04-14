/** Structured copy blocks for drainage hub capability tabs (SEO: exact H2/H3 strings). */

export type HubLink = { href: string; label: string };

export type HubRichSegment = string | { link: HubLink };

export type HubCapabilityBlock =
  | { kind: "h2"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "p"; text: string }
  | { kind: "p_rich"; segments: HubRichSegment[] }
  | { kind: "p_lead"; lead: string; rest: string }
  | { kind: "hr" }
  | { kind: "ul"; items: string[] }
  | { kind: "ol_step"; items: { title: string; rest: string }[] }
  | { kind: "ul_lead"; items: { lead: string; rest: string }[] }
  | { kind: "figures"; alts: string[] }
  | { kind: "closing_link"; before: string; href: string; label: string };

export type HubCapabilityTab = {
  id: string;
  tabLabel: string;
  panelId: string;
  tabId: string;
  /** Micro-layout: split-panel eyebrow (display only). */
  eyebrow: string;
  credentialTitle: string;
  credentialSub: string;
  /** Placeholder asset until client photography; contextual Unsplash. */
  imageSrc: string;
  imageAlt: string;
  blocks: HubCapabilityBlock[];
};
