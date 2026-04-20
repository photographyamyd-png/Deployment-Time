import type { SiteConfig } from "@/content/types";
import { ContactForm } from "@/components/pages/contact-form";
import { MiniPageHero } from "@/components/pages/mini-page-hero";
import { SmartLink } from "@/components/ui/smart-link";
import { ROUTES } from "@/lib/routes";

const HOURS = "Monday–Friday, 7:00 a.m. – 5:00 p.m.";

type Props = { site: SiteConfig };

export function ContactPageView({ site }: Props) {
  const localities = site.areaServed.join(" · ");

  return (
    <main id="main-content">
      <MiniPageHero
        variant="dark"
        breadcrumb={
          <>
            <SmartLink href={ROUTES.home}>Home</SmartLink>
            {" · "}
            Contact
          </>
        }
        title={
          <>
            Get in{" "}
            <em className="mini-page-hero__em">Touch</em>
          </>
        }
        lede="We respond to all project inquiries within one business day."
      />

      <div className="glc-motif-divider-a3--to-light" aria-hidden />

      <div className="contact-pg">
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

        <footer className="contact-pg__foot">
          <p className="contact-pg__localities">
            <strong>Service area:</strong> {localities}.
          </p>
        </footer>
      </div>
    </main>
  );
}
