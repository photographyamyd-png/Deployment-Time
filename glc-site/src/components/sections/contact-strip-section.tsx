import { IconArrow } from "@/components/ui/icon-arrow";
import type { HomeContactStripProps } from "@/content/types";

type ContactStripSectionProps = HomeContactStripProps & {
  sectionId?: string;
};

export function ContactStripSection({ sectionId = "contact-strip", ...props }: ContactStripSectionProps) {
  const headingId = `${sectionId}-heading`;
  const surface = props.surface ?? "default";
  const shell =
    surface === "brand" ? "home-contact-strip home-contact-strip--brand" : "home-contact-strip";
  return (
    <section id={sectionId} className={shell} aria-labelledby={headingId}>
      <div className="home-contact-strip__rail" aria-hidden />
      <div className="home-contact-strip__motif" aria-hidden />
      <div className="home-contact-strip__inner">
        <div className="home-contact-strip__copy">
          <p className="home-contact-strip__eyebrow">{props.eyebrow}</p>
          <h2 id={headingId} className="home-contact-strip__heading">
            {props.heading}
          </h2>
          <p className="home-contact-strip__sub">{props.sub}</p>
          {props.serviceAreaLine ? (
            <p className="home-contact-strip__service-area">{props.serviceAreaLine}</p>
          ) : null}
        </div>
        <div className="home-contact-strip__actions">
          <div className="home-contact-strip__block">
            <span className="home-contact-strip__label">{props.phone.label}</span>
            <a href={props.phone.href} className="home-contact-strip__phone">
              {props.phone.value}
            </a>
          </div>
          <div className="home-contact-strip__block">
            <span className="home-contact-strip__label">{props.email.label}</span>
            <a href={props.email.href} className="home-contact-strip__email">
              {props.email.value}
            </a>
          </div>
          <div className="home-contact-strip__block home-contact-strip__block--address">
            <span className="home-contact-strip__label">{props.address.label}</span>
            {props.address.lines.map((line) => (
              <span key={line} className="home-contact-strip__addr-line">
                {line}
              </span>
            ))}
          </div>
          <a className="btn-primary home-contact-strip__cta" href={props.cta.href}>
            {props.cta.label}
            <IconArrow />
          </a>
        </div>
      </div>
    </section>
  );
}
