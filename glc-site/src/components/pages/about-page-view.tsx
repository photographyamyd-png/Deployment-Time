import Image from "next/image";
import type {
  AboutProps,
  CtaBandProps,
  ProcessProps,
} from "@/content/types";
import { chunkSentences } from "@/lib/chunk-sentences";
import { IconArrow } from "@/components/ui/icon-arrow";
import { SmartLink } from "@/components/ui/smart-link";
import { CtaBandSection } from "@/components/sections/cta-band-section";
import { ProcessSection } from "@/components/sections/process-section";
import { getHomeSectionProps } from "@/lib/home-sections";
import { ROUTES } from "@/lib/routes";

type Props = {
  about: AboutProps;
  process: ProcessProps;
};

export function AboutPageView({ about, process }: Props) {
  const cta = getHomeSectionProps<CtaBandProps>("ctaBand");
  const shortLede = chunkSentences(about.body, 1)[0] ?? "";
  const detailChunks = chunkSentences(about.body, 2).slice(1);
  const pillars = about.credentials.slice(0, 3);
  const fleet = about.equipmentFleet;

  return (
    <main id="main-content">
      <section
        className="about-pg-hero-split"
        aria-labelledby="about-hero-heading"
      >
        <div className="about-pg-hero-split__copy">
          <p className="about-pg-hero-split__crumb">
            <SmartLink href={ROUTES.home}>Home</SmartLink>
            {" · "}
            About
          </p>
          <h1 id="about-hero-heading" className="about-pg-hero-split__title">
            {about.headingBefore}
            <em className="about-pg-hero-split__em">{about.headingAccent}</em>
            {about.headingAfter}
          </h1>
          {shortLede ? (
            <p className="about-pg-hero-split__lede">{shortLede}</p>
          ) : null}
          <ul className="about-pg-hero-split__meta" aria-label="At a glance">
            <li>
              <span className="about-pg-hero-split__meta-k">{about.mediaStat.value}</span>
              <span className="about-pg-hero-split__meta-v">{about.mediaStat.label}</span>
            </li>
            <li>
              <span className="about-pg-hero-split__meta-k">{about.badgeText}</span>
              <span className="about-pg-hero-split__meta-v">Ontario commercial sites</span>
            </li>
          </ul>
          <a href={about.cta.href} className="btn-primary about-pg-hero-split__cta">
            {about.cta.label}
            <IconArrow />
          </a>
          {detailChunks.length > 0 ? (
            <details className="about-pg-hero-split__details">
              <summary className="about-pg-hero-split__summary">
                Full company profile
              </summary>
              <div className="about-pg-hero-split__details-body">
                {detailChunks.map((chunk) => (
                  <p key={chunk.slice(0, 32)} className="about-pg-hero-split__details-p">
                    {chunk}
                  </p>
                ))}
              </div>
            </details>
          ) : null}
        </div>
        <div className="about-pg-hero-split__visual" aria-hidden="true">
          <Image
            src="/images/excavation-and-foundations-orillia-barrie.png"
            alt=""
            fill
            className="about-pg-hero-split__visual-img"
            sizes="(max-width: 900px) 100vw, 42vw"
            priority
          />
          <div className="about-pg-hero-split__visual-scrim" />
        </div>
      </section>

      <section
        className="about-pg-pillars"
        aria-labelledby="about-pillars-heading"
      >
        <div className="about-pg-pillars__inner">
          <header className="about-pg-pillars__head">
            <p className="about-pg-pillars__eyebrow">
              <span className="about-pg-pillars__dash" aria-hidden />
              <span>{about.eyebrow}</span>
            </p>
            <h2 id="about-pillars-heading" className="about-pg-pillars__title">
              How we work with your site team
            </h2>
          </header>
          <ul className="about-pg-pillars__grid" role="list">
            {pillars.map((p) => (
              <li key={p.title} className="about-pg-pillars__card">
                <div className="about-pg-pillars__card-bar" aria-hidden />
                <h3 className="about-pg-pillars__card-title">{p.title}</h3>
                {chunkSentences(p.sub, 2).map((line) => (
                  <p key={line} className="about-pg-pillars__card-p">
                    {line}
                  </p>
                ))}
              </li>
            ))}
          </ul>
          <div className="about-pg-pillars__actions">
            <SmartLink href={ROUTES.services} className="btn-ghost-dark about-pg-pillars__link">
              View all service lines
              <IconArrow />
            </SmartLink>
          </div>
        </div>
      </section>

      <ProcessSection {...process} surface="dark" />

      <section className="about-pg-fleet" aria-labelledby="about-fleet-heading">
        <div className="about-pg-fleet__inner">
          <div className="about-pg-fleet__figure">
            <Image
              src={fleet.imageSrc}
              alt={fleet.imageAlt}
              fill
              className="about-pg-fleet__img"
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <span className="about-pg-fleet__badge">{about.badgeText}</span>
          </div>
          <div className="about-pg-fleet__copy">
            <p className="about-pg-fleet__eyebrow">
              <span className="about-pg-fleet__dash" aria-hidden />
              <span>{fleet.eyebrow}</span>
            </p>
            <h2 id="about-fleet-heading" className="about-pg-fleet__title">
              {fleet.title}
            </h2>
            {chunkSentences(fleet.body, 2).map((chunk) => (
              <p key={chunk.slice(0, 28)} className="about-pg-fleet__p">
                {chunk}
              </p>
            ))}
            <div className="about-pg-fleet__cta-row">
              <a href={about.cta.href} className="btn-primary">
                {about.cta.label}
                <IconArrow />
              </a>
              <SmartLink href={ROUTES.services} className="btn-ghost-dark">
                Browse services hub
                <IconArrow />
              </SmartLink>
            </div>
          </div>
        </div>
      </section>

      <CtaBandSection {...cta} />
    </main>
  );
}
