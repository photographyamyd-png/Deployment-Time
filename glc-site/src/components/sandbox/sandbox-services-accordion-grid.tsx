import { SandboxAccgridMotionFig } from "@/components/sandbox/sandbox-accgrid-motion-fig";
import { SmartLink } from "@/components/ui/smart-link";
import type { AccordionContentItem } from "@/content/types";

export type SandboxServicesAccordionGridProps = {
  eyebrow: string;
  headingLine1: string;
  headingLine2: string;
  headingLine3: string;
  intro: string;
  items: AccordionContentItem[];
  /** One short paragraph per item, same order as `items`. */
  panelCopy: string[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export function SandboxServicesAccordionGrid({
  eyebrow,
  headingLine1,
  headingLine2,
  headingLine3,
  intro,
  items,
  panelCopy,
  primaryCta,
  secondaryCta,
}: SandboxServicesAccordionGridProps) {
  return (
    <section
      className="sandbox-svc-accgrid gl-react-embed-section"
      aria-labelledby="sandbox-svc-accgrid-heading"
    >
      <div className="blueprint-grid" aria-hidden />
      <span className="ghost-wm ghost-wm--dark sandbox-svc-accgrid__wm" aria-hidden>
        SERVICES
      </span>
      {/* eslint-disable-next-line @next/next/no-img-element -- static SVG motif from /public */}
      <img
        className="sandbox-svc-accgrid__motif"
        src="/images/motifs/stylized/GLC-motif-01-corner-L.svg"
        alt=""
        width={200}
        height={200}
        aria-hidden
      />
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id="sandbox-svc-accgrid-heading" className="sandbox-svc-accgrid__h">
          <span className="sandbox-svc-accgrid__h1">{headingLine1}</span>
          <span className="sandbox-svc-accgrid__h2">{headingLine2}</span>
          <span className="sandbox-svc-accgrid__h3">{headingLine3}</span>
        </h2>
        <p className="sandbox-svc-accgrid__intro">{intro}</p>

        <div className="sandbox-svc-accgrid__grid">
          {items.map((item, i) => {
            const copy = panelCopy[i] ?? "";
            const num = String(i + 1).padStart(2, "0");
            return (
              <details key={item.id} className="sandbox-svc-accgrid__card">
                <summary className="sandbox-svc-accgrid__sum">
                  <div className="sandbox-svc-accgrid__sum-media">
                    <SandboxAccgridMotionFig
                      fill
                      imageUrl={item.imageUrl}
                      title={item.title}
                      sizes="(max-width: 599px) 100vw, (max-width: 999px) 50vw, 33vw"
                    />
                  </div>
                  <div className="sandbox-svc-accgrid__sum-bar">
                    <span className="sandbox-svc-accgrid__num">{num}</span>
                    <span className="sandbox-svc-accgrid__card-title">{item.title}</span>
                    <span className="sandbox-svc-accgrid__chev" aria-hidden />
                  </div>
                </summary>
                <div className="sandbox-svc-accgrid__panel">
                  <p className="sandbox-svc-accgrid__panel-copy">{copy}</p>
                  {item.href ? (
                    <div className="sandbox-svc-accgrid__panel-cta">
                      <SmartLink href={item.href} className="btn-primary sandbox-svc-accgrid__cta-service">
                        Get a quote — {item.title} →
                      </SmartLink>
                    </div>
                  ) : null}
                </div>
              </details>
            );
          })}
        </div>

        <div className="sandbox-svc-accgrid__cta-row">
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
