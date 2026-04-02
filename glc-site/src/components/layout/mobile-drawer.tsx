"use client";

import { useState } from "react";
import { SmartLink } from "@/components/ui/smart-link";
import { ROUTES } from "@/lib/routes";
import type { NavLink } from "@/content/types";

type Props = {
  open: boolean;
  onClose: () => void;
  /** Quick links from `navigation.json` → `mobile.links` (single source of truth). */
  mobileLinks: NavLink[];
  serviceLinks: Array<{ label: string; href: string }>;
  companyLinks: NavLink[];
  utilityPhoneDisplay: string;
  utilityPhoneHref: string;
};

function DrawerSection({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="gl-drawer-section">
      <button
        type="button"
        className={`gl-drawer-section__trigger${expanded ? " is-open" : ""}`}
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        {label}
        <svg
          className="gl-drawer-section__chevron"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          aria-hidden
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {expanded && <div className="gl-drawer-section__links">{children}</div>}
    </div>
  );
}

export function MobileDrawer({
  open,
  onClose,
  mobileLinks,
  serviceLinks,
  companyLinks,
  utilityPhoneDisplay,
  utilityPhoneHref,
}: Props) {
  return (
    <>
      <nav
        className={`gl-mobile-drawer${open ? " open" : ""}`}
        aria-label="Mobile navigation"
        id="mobile-drawer"
      >
        <button
          type="button"
          className="gl-mobile-drawer__close"
          aria-label="Close menu"
          onClick={onClose}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <SmartLink href={ROUTES.home} onClick={onClose} className="gl-drawer-top-link">
          Home
        </SmartLink>
        {mobileLinks.map((l) => (
          <SmartLink
            key={`${l.href}-${l.label}`}
            href={l.href}
            onClick={onClose}
            className="gl-drawer-top-link"
          >
            {l.label}
          </SmartLink>
        ))}

        <DrawerSection label="Services">
          <SmartLink href={ROUTES.services} onClick={onClose}>
            All Services
          </SmartLink>
          {serviceLinks.map((l) => (
            <SmartLink key={l.href} href={l.href} onClick={onClose}>
              {l.label}
            </SmartLink>
          ))}
        </DrawerSection>

        <DrawerSection label="Company">
          {companyLinks.map((l) => (
            <SmartLink key={`co-${l.href}-${l.label}`} href={l.href} onClick={onClose}>
              {l.label}
            </SmartLink>
          ))}
        </DrawerSection>

        <div className="gl-drawer-cta">
          <a href={utilityPhoneHref} className="gl-drawer-phone" onClick={onClose}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.9 12.85 19.79 19.79 0 0 1 1.21 4.25 2 2 0 0 1 3.18 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            {utilityPhoneDisplay}
          </a>
          <SmartLink href={ROUTES.contact} className="btn-primary" onClick={onClose}>
            Get a Quote
          </SmartLink>
        </div>
      </nav>
      <div
        className={`gl-mobile-overlay${open ? " open" : ""}`}
        id="mobile-overlay"
        onClick={onClose}
        role="presentation"
      />
    </>
  );
}
