import type { CoverageProps, SiteConfig } from "@/content/types";
import { ContactForm } from "@/components/pages/contact-form";
import { CoverageSection } from "@/components/sections/coverage-section";
import { SmartLink } from "@/components/ui/smart-link";
import { getHomeSectionProps } from "@/lib/home-sections";
import { ROUTES } from "@/lib/routes";

const HOURS = "Monday–Friday, 7:00 a.m. – 5:00 p.m.";

const coverageProps = getHomeSectionProps<CoverageProps>("coverage");

type Props = { site: SiteConfig };

export function ContactPageView({ site }: Props) {
  const localities = site.areaServed.join(" · ");

  return (
    <main id="main-content">
      <header className="contact-pg__mast" aria-labelledby="contact-heading">
        <p className="contact-pg__crumb">
          <SmartLink href={ROUTES.home}>Home</SmartLink>
          {" · "}
          Contact
        </p>
        <h1 id="contact-heading" className="contact-pg__title">
          Get in <em className="contact-pg__title-em">touch</em>
        </h1>
        <p className="contact-pg__lede">We respond to all project inquiries within one business day.</p>
      </header>

      <section className="contact-pg" aria-labelledby="contact-form-heading">
        <h2 id="contact-form-heading" className="glc-sr-only">
          Project inquiry form and dispatch details
        </h2>
        <div className="contact-pg__split">
          <ContactForm site={site} />
          <aside className="contact-pg__aside" aria-label="Contact information">
            <a href={`tel:${site.telephone}`} className="contact-pg__phone">
              {site.telephoneDisplay}
            </a>
            <p className="contact-pg__meta">
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p className="contact-pg__tags">
              <strong>Service area:</strong> {localities}
            </p>
            <p className="contact-pg__meta">
              <strong>Hours:</strong> {HOURS}
            </p>
            <p className="contact-pg__meta">
              {site.address.streetAddress}, {site.address.addressLocality}, {site.address.addressRegion}{" "}
              {site.address.postalCode}
            </p>
          </aside>
        </div>
      </section>

      <CoverageSection {...coverageProps} tone="light" />
    </main>
  );
}
