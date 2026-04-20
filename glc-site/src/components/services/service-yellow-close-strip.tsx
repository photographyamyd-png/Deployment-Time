import { IconArrow } from "@/components/ui/icon-arrow";
import { SmartLink } from "@/components/ui/smart-link";
import type { ServiceDetailContent } from "@/content/types";

type Props = {
  service: ServiceDetailContent;
  phoneDisplay: string;
  phoneHref: string;
};

export function ServiceYellowCloseStrip({ service, phoneDisplay, phoneHref }: Props) {
  const heading = service.ctaOverride?.heading ?? "Ready to schedule a site visit?";
  const support =
    service.ctaOverride?.supportingCopy ??
    "Share drawings and timelines. We will respond with scope, availability, and next steps.";
  const buttonLabel = service.ctaOverride?.buttonLabel ?? "Request a site visit";

  return (
    <section id="request-site-visit" className="service-yellow-close" aria-labelledby="service-yellow-close-heading">
      <div className="service-yellow-close__inner">
        <div>
          <p className="eyebrow eyebrow--dark">Next step</p>
          <h2 id="service-yellow-close-heading" className="service-yellow-close__heading">
            {heading}
          </h2>
          <p className="service-yellow-close__sub">{support}</p>
        </div>
        <div className="service-yellow-close__actions">
          <SmartLink href="/contact/" className="btn-primary">
            {buttonLabel}
            <IconArrow />
          </SmartLink>
          <a href={phoneHref} className="service-yellow-close__phone">
            {phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
