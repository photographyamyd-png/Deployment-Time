import type { HomePageContent, NavigationConfig, ServicesBandCta, SiteConfig } from "@/content/types";
import homeArchive from "@/content/sandbox/homepage-archive-pre-streamline.json";
import { SectionRenderer } from "@/components/sections/section-renderer";
import { SmartLink } from "@/components/ui/smart-link";
import { orderHomeSectionsPreStreamline } from "@/lib/home-section-order-archive";
import { ROUTES } from "@/lib/routes";

const archived = homeArchive as HomePageContent;

function archiveServicesBandCta(content: HomePageContent, nav: NavigationConfig): ServicesBandCta | undefined {
  const hero = content.sections.find((s) => s.type === "hero");
  if (!hero || hero.type !== "hero") return undefined;
  return {
    quoteCta: hero.props.primaryCta,
    servicesViewAll: { label: nav.megaMenu.viewAllLabel, href: nav.megaMenu.viewAllHref },
  };
}

type Props = {
  navData: NavigationConfig;
  site: SiteConfig;
};

/**
 * Full former homepage stack (JSON snapshot + pre-streamline section order).
 * Not indexed — reference only. Live home: `src/app/page.tsx`.
 */
export function SandboxHomepageArchive({ navData, site: _site }: Props) {
  const sections = orderHomeSectionsPreStreamline(archived.sections);
  const servicesBandCta = archiveServicesBandCta(archived, navData);
  void _site;

  return (
    <section
      className="sandbox-home-arch gl-react-embed-section"
      aria-label="Archived homepage full section stack"
    >
      <header className="sandbox-about-arch__band">
        <p className="sandbox-about-arch__eyebrow">Sandbox archive</p>
        <h2 className="sandbox-about-arch__title">Former homepage — full section order</h2>
        <p className="sandbox-about-arch__note">
          Snapshot: <code>src/content/sandbox/homepage-archive-pre-streamline.json</code> with order{" "}
          <code>home-section-order-archive.ts</code> (marquee, full about, coverage, ctaBand, etc.). Production
          home: <SmartLink href={ROUTES.home}>{ROUTES.home}</SmartLink>.
        </p>
      </header>
      <div className="sandbox-home-arch__embed">
        <SectionRenderer
          sections={sections}
          megaCards={navData.megaMenu.cards}
          servicesBandCta={servicesBandCta}
          servicesReferenceSplit
        />
      </div>
    </section>
  );
}
