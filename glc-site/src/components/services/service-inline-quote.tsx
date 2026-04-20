import { IconArrow } from "@/components/ui/icon-arrow";
import { SmartLink } from "@/components/ui/smart-link";
import type { ServiceDetailContent } from "@/content/types";

type Props = {
  service: ServiceDetailContent;
};

function fallbackQuote(service: ServiceDetailContent): string {
  return `Need ${service.schemaOfferName.toLowerCase()} scoped quickly? Dispatch can review plans and return a written quote.`;
}

export function ServiceInlineQuote({ service }: Props) {
  const quote = service.inlineQuote?.quote ?? fallbackQuote(service);
  const byline = service.inlineQuote?.byline ?? "Ground Level dispatch";
  const ctaLabel = service.inlineQuote?.ctaLabel ?? "Request a quote";
  const ctaHref = service.inlineQuote?.ctaHref ?? "#request-site-visit";

  return (
    <section className="service-inline-quote" aria-label="Request a quote">
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
