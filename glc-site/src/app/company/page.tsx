import type { Metadata } from "next";
import { MiniPageHero } from "@/components/pages/mini-page-hero";
import { ContactStripSection } from "@/components/sections/contact-strip-section";
import { CtaBandSection } from "@/components/sections/cta-band-section";
import { IconArrow } from "@/components/ui/icon-arrow";
import { SmartLink } from "@/components/ui/smart-link";
import navigation from "@/content/navigation.json";
import { getHomeSectionProps } from "@/lib/home-sections";
import { chunkSentences } from "@/lib/chunk-sentences";
import { ROUTES } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";
import site from "@/content/site.json";
import type { NavigationConfig, SiteConfig } from "@/content/types";
import type { CtaBandProps, HomeContactStripProps } from "@/content/types";

const navData = navigation as NavigationConfig;
const mega = navData.companyMega;
const siteData = site as SiteConfig;
const ctaProps = getHomeSectionProps<CtaBandProps>("ctaBand");
const contactProps = getHomeSectionProps<HomeContactStripProps>("contactStrip");

const heroLede = chunkSentences(mega.intro, 2)[0] ?? "";

export const metadata: Metadata = {
  ...pageMetadata({
    title: `Company | ${siteData.name}`,
    description: mega.intro,
    path: ROUTES.company,
  }),
  openGraph: {
    ...pageMetadata({
      title: `Company | ${siteData.name}`,
      description: mega.intro,
      path: ROUTES.company,
    }).openGraph,
    siteName: siteData.name,
  },
};

export default function CompanyPage() {
  return (
    <main id="main-content">
      <MiniPageHero
        variant="dark"
        breadcrumb={
          <>
            <SmartLink href={ROUTES.home}>Home</SmartLink>
            {" · "}
            {mega.kicker}
          </>
        }
        title={<>{mega.kicker}</>}
        lede={heroLede}
        cta={ctaProps.formCta}
      />

      <section className="company-pg-trio" aria-label="Company navigation">
        <div className="company-pg-trio__inner">
          {mega.columns.map((col) => (
            <div key={col.title} className="company-pg-trio__col">
              <h2 className="company-pg-trio__h">{col.title}</h2>
              <ul className="company-pg-trio__list">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <SmartLink href={link.href} className="company-pg-trio__link">
                      {link.label}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="company-pg-trio__cta">
          <SmartLink href={ctaProps.formCta.href} className="btn-primary">
            {ctaProps.formCta.label}
            <IconArrow />
          </SmartLink>
        </div>
      </section>

      <section className="company-pg-dispatch" aria-labelledby="company-dispatch-heading">
        <div className="company-pg-dispatch__inner">
          <p className="company-pg-dispatch__eyebrow">
            <span className="company-pg-dispatch__dash" aria-hidden />
            <span>{mega.dispatchBand.kicker}</span>
          </p>
          <h2 id="company-dispatch-heading" className="company-pg-dispatch__title">
            {mega.dispatchBand.title}
          </h2>
          {chunkSentences(mega.dispatchBand.sub, 2).map((chunk) => (
            <p key={chunk.slice(0, 24)} className="company-pg-dispatch__p">
              {chunk}
            </p>
          ))}
          <div className="company-pg-dispatch__cta">
            <a href={mega.dispatchBand.phoneHref} className="btn-primary">
              {mega.dispatchBand.phoneDisplay}
              <IconArrow />
            </a>
            <SmartLink href={ctaProps.formCta.href} className="btn-ghost">
              {ctaProps.formCta.label}
              <IconArrow />
            </SmartLink>
          </div>
        </div>
      </section>

      <ContactStripSection {...contactProps} sectionId="company-contact-strip" />

      <CtaBandSection {...ctaProps} />
    </main>
  );
}
