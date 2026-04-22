import { IconArrow } from "@/components/ui/icon-arrow";
import { SmartLink } from "@/components/ui/smart-link";
import type { ServiceDetailContent } from "@/content/types";
import "./service-inline-quote.css";

type Props = {
  service: ServiceDetailContent;
  /** Muted strip on grey stack (service page closing zone) */
  variant?: "default" | "on-grey";
};

function fallbackQuote(service: ServiceDetailContent): string {
  return `Need ${service.schemaOfferName.toLowerCase()} scoped quickly? Dispatch can review plans and return a written quote.`;
}

export function ServiceInlineQuote({ service, variant = "default" }: Props) {
  const quote = service.inlineQuote?.quote ?? fallbackQuote(service);
  const byline = service.inlineQuote?.byline ?? "Ground Level dispatch";
  const ctaLabel = service.inlineQuote?.ctaLabel ?? "Request a quote";
  const ctaHref = service.inlineQuote?.ctaHref ?? "#service-contact-strip";

  return (
    <section
      className={`service-inline-quote${variant === "on-grey" ? " service-inline-quote--on-grey" : ""}`}
      aria-label="Request a quote"
    >
      <div className="service-inline-quote__inner">
        <blockquote className="service-inline-quote__quote">
          <p>{quote}</p>
          <cite>{byline}</cite>
        </blockquote>
        <SmartLink href={ctaHref} className="btn-primary">
          {ctaLabel}
          <IconArrow />
        </SmartLink>
      </div>
    </section>
  );
}
