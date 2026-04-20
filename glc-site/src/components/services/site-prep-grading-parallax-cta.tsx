import hub from "@/content/pages/site-prep-grading-seo.json";
import { SmartLink } from "@/components/ui/smart-link";

type Props = {
  phoneDisplay: string;
  phoneHref: string;
};

const copy = hub.parallaxCta as {
  heading: string;
  responsePromise: string;
  nextStepLabel: string;
  nextStepHref: string;
};

export function SitePrepGradingParallaxCta({ phoneDisplay, phoneHref }: Props) {
  return (
    <section
      className="exc-parallax-cta gl-reveal"
      aria-labelledby="site-prep-parallax-cta-heading"
    >
      <div className="exc-parallax-cta__bg" aria-hidden />
      <div className="exc-parallax-cta__scrim" aria-hidden />
      <div className="exc-parallax-cta__inner">
        <div className="exc-parallax-cta__stripe" aria-hidden />
        <h2 id="site-prep-parallax-cta-heading" className="exc-parallax-cta__heading">
          {copy.heading}
        </h2>
        <a href={phoneHref} className="exc-parallax-cta__phone">
          {phoneDisplay}
        </a>
        <p className="exc-parallax-cta__promise">{copy.responsePromise}</p>
        <p style={{ marginTop: "1.25rem" }}>
          <SmartLink href={copy.nextStepHref} className="gl-btn gl-btn--ghost">
            {copy.nextStepLabel}
          </SmartLink>
        </p>
      </div>
    </section>
  );
}
