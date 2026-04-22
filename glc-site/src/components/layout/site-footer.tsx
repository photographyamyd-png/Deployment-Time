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
};

export function SiteFooter({ site, navigation, minimal }: Props) {
  if (minimal) {
    return (
      <footer id="footer" aria-label="Site footer" style={{ marginTop: 48 }}>
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
    <footer id="footer" className="footer--site-light" aria-label="Site footer">
      <div className="footer__watermark" aria-hidden="true">
        <Image
          src={LOGO}
          alt=""
          width={720}
          height={720}
          className="footer__watermark-img"
          priority={false}
        />
      </div>
      <div className="footer__main">
        <div className="footer__brand">
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
