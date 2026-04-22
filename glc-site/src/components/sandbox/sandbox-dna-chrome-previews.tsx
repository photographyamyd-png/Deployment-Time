import Image from "next/image";
import { MegaMenuServices } from "@/components/layout/mega-menu-services";
import { SiteFooter } from "@/components/layout/site-footer";
import { IconArrow } from "@/components/ui/icon-arrow";
import { SmartLink } from "@/components/ui/smart-link";
import type { NavigationConfig, SiteConfig } from "@/content/types";
import { ROUTES } from "@/lib/routes";

const LOGO = "/images/glc-logo.png";

/** Services mega panel — same markup as <code>#mega-services-panel</code>, forced open for sandbox DNA. */
export function SandboxMegaPanelPreview({ navigation }: { navigation: NavigationConfig }) {
  const mega = navigation.megaMenu;
  return (
    <div className="sandbox-dna-chrome-preview sandbox-dna-chrome-preview--mega">
      <p className="sandbox-dna-chrome-preview__note">
        Same grid as live header mega: <code>MegaMenuServices</code> inside <code>.gl-mega-panel.is-open</code> — held
        open here so you can see the full panel without hovering.
      </p>
      <div
        className="gl-mega-panel is-open sandbox-dna-mega-panel--static"
        role="region"
        aria-label="Services mega panel — sandbox static preview"
      >
        <MegaMenuServices
          mega={mega}
          megaIntro={mega.intro}
          megaViewHref={mega.viewAllHref}
          megaViewLabel={mega.viewAllLabel}
        />
      </div>
    </div>
  );
}

/** Primary desktop nav row — logo, links, mega triggers (disabled), CTA. */
export function SandboxPrimaryNavPreview({ navigation }: { navigation: NavigationConfig }) {
  const primary = navigation.primary;
  const about = primary[0];
  const rest = primary.slice(1);
  const util = navigation.utility;

  return (
    <div className="sandbox-dna-chrome-preview sandbox-dna-chrome-preview--nav">
      <p className="sandbox-dna-chrome-preview__note">
        Mirrors <code>.gl-header__nav-row</code> chrome (triggers are inert here; use the real header for flyouts).
      </p>
      <div className="sandbox-dna-nav-shell">
        <nav className="gl-header__nav-row" aria-label="Primary navigation — sandbox preview">
          <div className="gl-header__nav-inner">
            <SmartLink href={ROUTES.home} className="gl-header__logo" aria-label="Ground Level Contracting Home">
              <div className="gl-logo-mark">
                <Image src={LOGO} alt="" width={40} height={40} />
              </div>
              <div className="gl-header__wordmark">
                <span className="gl-wordmark-name">Ground Level</span>
                <span className="gl-wordmark-sub">Contracting Inc.</span>
              </div>
            </SmartLink>

            <div className="gl-header__nav-links">
              <SmartLink href={about.href}>{about.label}</SmartLink>

              <div className="gl-nav-mega-wrap">
                <button
                  type="button"
                  className="gl-nav-mega-trigger sandbox-dna-mega-trigger--inert"
                  tabIndex={-1}
                  aria-hidden="true"
                  disabled
                >
                  Services
                </button>
              </div>

              <div className="gl-nav-mega-wrap">
                <button
                  type="button"
                  className="gl-nav-mega-trigger sandbox-dna-mega-trigger--inert"
                  tabIndex={-1}
                  aria-hidden="true"
                  disabled
                >
                  Company
                </button>
              </div>

              {rest.map((l) => (
                <SmartLink key={l.href} href={l.href}>
                  {l.label}
                </SmartLink>
              ))}
            </div>

            <div className="gl-header__cta-wrap">
              <a href={util.phoneHref} className="btn-primary" aria-label="Call for a quote">
                Get a Quote
                <IconArrow />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

/** Full site footer duplicate for visual DNA (global layout already renders one at page bottom). */
export function SandboxFooterPreview({ site, navigation }: { site: SiteConfig; navigation: NavigationConfig }) {
  return (
    <div className="sandbox-dna-chrome-preview sandbox-dna-chrome-preview--footer">
      <p className="sandbox-dna-chrome-preview__note">
        Duplicate of <code>SiteFooter</code> for catalog comparison. The site’s main footer still appears below all
        pages from <code>layout.tsx</code>.
      </p>
      <SiteFooter
        site={site}
        navigation={navigation}
        footerElementId="sandbox-dna-footer-catalog"
        footerAriaLabel="Site footer — sandbox catalog preview (duplicate)"
      />
    </div>
  );
}
