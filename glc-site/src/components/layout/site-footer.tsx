import Image from "next/image";
import { SmartLink } from "@/components/ui/smart-link";
import type {
  FooterLinkItem,
  NavigationConfig,
  SiteConfig,
} from "@/content/types";

const LOGO = "/images/glc-logo.png";

function isDivider(item: FooterLinkItem): item is { type: "divider" } {
  return "type" in item && item.type === "divider";
}

type Props = {
  site: SiteConfig;
  navigation: NavigationConfig;
  /** Minimal bar-only footer (legacy services HTML). */
  minimal?: boolean;
  /** Override `<footer id>` (e.g. sandbox duplicate). Default: `footer`. */
  footerElementId?: string;
  /** Override accessible name when embedding a duplicate footer. */
  footerAriaLabel?: string;
};

export function SiteFooter({
  site,
  navigation,
  minimal,
  footerElementId,
  footerAriaLabel,
}: Props) {
  if (minimal) {
    return (
      <footer
        id={footerElementId ?? "footer"}
        aria-label={footerAriaLabel ?? "Site footer"}
        style={{ marginTop: 48 }}
      >
        <div className="footer__bar">
          <div className="footer__bar-inner">
            <p className="footer__copy">
              © {site.copyrightYear} {site.name}
            </p>
          </div>
        </div>
      </footer>
    );
  }

  const { footer } = navigation;
  const privacy = footer.legal.find((l) =>
    l.label.toLowerCase().includes("privacy"),
  );
  const servingYear = site.servingSinceYear ?? site.copyrightYear;

  return (
    <footer
      id={footerElementId ?? "footer"}
      className="footer--site-light"
      aria-label={footerAriaLabel ?? "Site footer"}
    >
      <div className="footer__main">
        <div className="footer__brand">
          <div className="footer__brand-head">
            <div className="footer__logo-wrap">
              <Image
                src={LOGO}
                alt={site.name}
                width={240}
                height={240}
                className="footer__logo-img"
                sizes="(max-width: 768px) 160px, 240px"
                priority={false}
              />
            </div>
            <div className="footer__brand-copy">
              <div className="footer__wordmark-stack">
                <div className="footer__wordmark-name">{site.name}</div>
                <div className="footer__wordmark-sub">{site.slogan}</div>
              </div>
              {footer.descriptionLines.map((line, i) => (
                <p key={i} className="footer__desc-line">
                  {line}
                </p>
              ))}
              <a href={`tel:${site.telephone}`} className="footer__phone-link">
                {site.telephoneDisplay}
              </a>
            </div>
          </div>
        </div>

        {footer.columns.map((col) => (
          <div key={col.title} className="footer__col">
            <div className="footer__col-title">{col.title}</div>
            <ul className="footer__links">
              {col.links.map((item, idx) =>
                isDivider(item) ? (
                  <li
                    key={`divider-${col.title}-${idx}`}
                    className="footer__link-divider"
                    aria-hidden="true"
                  />
                ) : (
                  <li key={`${item.href}-${item.label}`}>
                    <SmartLink
                      href={item.href}
                      className={
                        item.variant === "seo"
                          ? "footer__link footer__link--seo"
                          : "footer__link"
                      }
                    >
                      {item.label}
                    </SmartLink>
                  </li>
                ),
              )}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer__bar">
        <div className="footer__bar-inner">
          <p className="footer__copy footer__copy--bar">
            <span>© {site.copyrightYear} {site.name}</span>
            {privacy ? (
              <>
                <span className="footer__copy-sep" aria-hidden="true">
                  ·
                </span>
                <SmartLink href={privacy.href} className="footer__copy-link">
                  {privacy.label}
                </SmartLink>
              </>
            ) : null}
            <span className="footer__copy-sep" aria-hidden="true">
              ·
            </span>
            <span>
              Serving Simcoe County Since {servingYear}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
