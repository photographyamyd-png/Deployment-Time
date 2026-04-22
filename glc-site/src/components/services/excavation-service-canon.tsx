import hub from "@/content/pages/excavation-hub-seo.json";
import { SmartLink } from "@/components/ui/smart-link";
import { ROUTES } from "@/lib/routes";

const BRIDGE_ID = "exc-svc-precision-finishing-bridge";

const canon = hub.canonSection as {
  eyebrow: string;
  heading: string;
  intro: string;
};
const services = hub.services as Array<{
  id: string;
  title: string;
  paragraphs: string[];
}>;

export function ExcavationServiceCanon() {
  return (
    <section
      id="excavation-capabilities"
      className="exc-canon gl-reveal"
      aria-labelledby="exc-canon-heading"
    >
      <div className="exc-canon__inner">
        <header className="exc-canon__header">
          <p className="gl-eyebrow gl-eyebrow--dark">{canon.eyebrow}</p>
          <h2 id="exc-canon-heading" className="gl-h2 exc-canon__heading">
            {canon.heading}
          </h2>
          <p className="gl-prose exc-canon__intro">{canon.intro}</p>
        </header>

        <div className="exc-canon__list exc-canon__list--grid" role="list">
          {services.map((svc, index) => (
            <details
              key={svc.id}
              id={svc.id}
              name="glc-exc-canon"
              className="exc-canon__disclosure exc-canon__disclosure--compact gl-reveal"
            >
              <summary className="exc-canon__summary">
                <span className="exc-canon__summary-index" aria-hidden>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="exc-canon__summary-main">
                  <span className="exc-canon__summary-eyebrow">Scope</span>
                  <h3 className="exc-canon__title">{svc.title}</h3>
                </span>
                <span className="exc-canon__chevron" aria-hidden />
              </summary>
              <div className="exc-canon__panel">
                <div className="exc-canon__rail" aria-hidden />
                <div className="exc-canon__body">
                  {svc.paragraphs.map((p, pi) => (
                    <p key={`${svc.id}-${pi}`} className="gl-prose exc-canon__para">
                      {p}
                    </p>
                  ))}
                  {svc.id === BRIDGE_ID ? (
                    <p className="exc-canon__cta-wrap">
                      <SmartLink
                        href={ROUTES.service("site-preparation-grading")}
                        className="gl-btn gl-btn--primary"
                      >
                        View grading compliance
                      </SmartLink>
                    </p>
                  ) : null}
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
