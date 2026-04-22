import { HomeServicesAccgridMotionFig } from "@/components/sections/home-services-accgrid-motion-fig";
import { SmartLink } from "@/components/ui/smart-link";
import type { AccordionContentItem } from "@/content/types";

export type HomeServicesAccordionGridProps = {
  eyebrow: string;
  headingLine1: string;
  headingLine2: string;
  headingLine3: string;
  intro: string;
  items: AccordionContentItem[];
  panelCopy: string[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  /** Defaults to `glc-svc-accgrid-heading`. */
  headingId?: string;
  className?: string;
};

export function HomeServicesAccordionGrid({
  eyebrow,
  headingLine1,
  headingLine2,
  headingLine3,
  intro,
  items,
  panelCopy,
  primaryCta,
  secondaryCta,
  headingId = "glc-svc-accgrid-heading",
  className = "",
}: HomeServicesAccordionGridProps) {
  const rootClass = ["glc-svc-accgrid", className].filter(Boolean).join(" ");
  return (
    <section className={rootClass} aria-labelledby={headingId}>
      <div className="blueprint-grid" aria-hidden />
      <span className="ghost-wm ghost-wm--dark glc-svc-accgrid__wm" aria-hidden>
        SERVICES
      </span>
      {/* eslint-disable-next-line @next/next/no-img-element -- static SVG motif from /public */}
      <img
        className="glc-svc-accgrid__motif"
        src="/images/motifs/stylized/GLC-motif-01-corner-L.svg"
        alt=""
        width={200}
        height={200}
        aria-hidden
      />
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={headingId} className="glc-svc-accgrid__h">
          <span className="glc-svc-accgrid__h1">{headingLine1}</span>
          <span className="glc-svc-accgrid__h2">{headingLine2}</span>
          <span className="glc-svc-accgrid__h3">{headingLine3}</span>
        </h2>
        <p className="glc-svc-accgrid__intro">{intro}</p>

        <div className="glc-svc-accgrid__grid">
          {items.map((item, i) => {
            const copy = panelCopy[i] ?? "";
            const num = String(i + 1).padStart(2, "0");
            return (
              <details key={item.id} className="glc-svc-accgrid__card">
                <summary className="glc-svc-accgrid__sum">
                  <div className="glc-svc-accgrid__sum-media">
                    <HomeServicesAccgridMotionFig
                      fill
                      imageUrl={item.imageUrl}
                      title={item.title}
                      sizes="(max-width: 599px) 100vw, (max-width: 999px) 50vw, 33vw"
                    />
                  </div>
                  <div className="glc-svc-accgrid__sum-bar">
                    <span className="glc-svc-accgrid__num">{num}</span>
                    <span className="glc-svc-accgrid__card-title">{item.title}</span>
                    <span className="glc-svc-accgrid__chev" aria-hidden />
                  </div>
                </summary>
                <div className="glc-svc-accgrid__panel">
                  <p className="glc-svc-accgrid__panel-copy">{copy}</p>
                  {item.href ? (
                    <div className="glc-svc-accgrid__panel-cta">
                      <SmartLink href={item.href} className="btn-primary glc-svc-accgrid__cta-service">
                        Get a quote — {item.title} →
                      </SmartLink>
                    </div>
                  ) : null}
                </div>
              </details>
            );
          })}
        </div>

        <div className="glc-svc-accgrid__cta-row">
          <SmartLink href={primaryCta.href} className="btn-primary">
            {primaryCta.label}
          </SmartLink>
          <SmartLink href={secondaryCta.href} className="btn-ghost">
            {secondaryCta.label}
          </SmartLink>
        </div>
      </div>
    </section>
  );
}
