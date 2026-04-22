import { SmartLink } from "@/components/ui/smart-link";
import { commercialSnowServices } from "@/content/commercial-snow-page-data";
import type { SnowLocationPageDef } from "@/lib/commercial-snow-routes";
import { snowHubUrl } from "@/lib/commercial-snow-routes";
import { ROUTES } from "@/lib/routes";

const SNOW_HUB = ROUTES.service("snow-removal");
const TEL_DISPLAY = "705-619-4902";
const TEL_HREF = "tel:+17056194902";

function LocSnowGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2v4M12 14v4M2 12h4M14 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

const MINI_GRID_SERVICES = commercialSnowServices.slice(0, 6);

type Props = { def: SnowLocationPageDef };

export function CommercialSnowLocationPageContent({ def }: Props) {
  const hub = snowHubUrl();
  const contact = ROUTES.contact;
  const quoteLabel = `Get a Local Quote for ${def.placeName} →`;

  return (
    <div className="glc-loc-snow-page">
      <section className="glc-loc-snow-hero" aria-labelledby="glc-loc-snow-hero-title">
        <div className="glc-loc-snow-hero__inner">
          <p className="glc-loc-snow-hero__crumb">
            <SmartLink href={ROUTES.home}>Home</SmartLink>
            {" · "}
            <SmartLink href={ROUTES.services}>Services</SmartLink>
            {" · "}
            <SmartLink href={hub}>Commercial snow removal</SmartLink>
            {" · "}
            <span>{def.placeName}</span>
          </p>
          <h1 id="glc-loc-snow-hero-title" className="glc-loc-snow-hero__title">
            Commercial Snow Removal in {def.placeName}
          </h1>
          <p className="glc-loc-snow-hero__geo">{def.heroGeoSentence}</p>
          <div className="glc-loc-snow-hero__cta">
            <SmartLink href={contact} className="glc-snow-btn glc-snow-btn--primary">
              {quoteLabel}
            </SmartLink>
          </div>
        </div>
      </section>

      <section className="glc-loc-snow-overview" aria-labelledby="glc-loc-snow-overview-title">
        <div className="glc-loc-snow-overview__inner">
          <div className="glc-loc-snow-overview__main">
            <h2 id="glc-loc-snow-overview-title" className="glc-loc-snow-overview__h">
              Local commercial snow programs
            </h2>
            <p className="glc-loc-snow-overview__prose">{def.uniqueIntro}</p>
            <p className="glc-loc-snow-overview__prose">{def.servicesOfferedLocally}</p>
            <p className="glc-loc-snow-overview__prose">{def.contractsAndDocumentation}</p>
          </div>
          <aside className="glc-loc-snow-overview__aside" aria-label="Snow service programs">
            <h3 className="glc-loc-snow-overview__aside-h">What we run on commercial sites</h3>
            <p className="glc-loc-snow-overview__aside-lede">
              Every line below opens our full commercial snow hub—scoped for business operations, not residential
              driveways.
            </p>
            <ul className="glc-loc-snow-programs">
              {commercialSnowServices.map((svc) => (
                <li key={svc.id} className="glc-loc-snow-programs__item">
                  <LocSnowGlyph className="glc-loc-snow-programs__icon" />
                  <SmartLink href={SNOW_HUB} className="glc-loc-snow-programs__link">
                    {svc.heading}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="glc-loc-snow-mini" aria-labelledby="glc-loc-snow-mini-title">
        <div className="glc-loc-snow-mini__inner">
          <h2 id="glc-loc-snow-mini-title" className="glc-loc-snow-mini__h">
            Commercial snow capabilities
          </h2>
          <p className="glc-loc-snow-mini__lede">
            Same programs we feature on the main hub—scaled for {def.placeName} properties. Each card links to the
            commercial snow overview for full scope and line-by-line detail.
          </p>
          <div className="glc-loc-snow-mini__grid">
            {MINI_GRID_SERVICES.map((svc) => (
              <SmartLink key={svc.id} href={SNOW_HUB} className="glc-loc-snow-card glc-loc-snow-card--link">
                <div className="glc-loc-snow-card__fig" role="img" aria-label={svc.imageAlt} />
                <div className="glc-loc-snow-card__body">
                  <h3 className="glc-loc-snow-card__title">{svc.heading}</h3>
                  <p className="glc-loc-snow-card__line">{svc.linkedIncludes[0]}</p>
                  <span className="glc-loc-snow-card__cta">View commercial snow hub →</span>
                </div>
              </SmartLink>
            ))}
          </div>
        </div>
      </section>

      <section className="glc-loc-snow-strip" aria-labelledby="glc-loc-snow-strip-title">
        <div className="glc-loc-snow-strip__inner">
          <h2 id="glc-loc-snow-strip-title" className="glc-loc-snow-strip__title">
            Managing a Commercial Property in {def.placeName}? Let&apos;s Talk.
          </h2>
          <div className="glc-loc-snow-strip__row">
            <SmartLink href={contact} className="glc-snow-btn glc-snow-btn--primary glc-loc-snow-strip__btn">
              Request a Snow Contract Quote
            </SmartLink>
            <a href={TEL_HREF} className="glc-loc-snow-strip__phone">
              {TEL_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
