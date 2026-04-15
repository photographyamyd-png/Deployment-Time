import Image from "next/image";
import type { AboutProps, CtaBandProps, HomeParallaxBandProps } from "@/content/types";
import { MiniPageHero } from "@/components/pages/mini-page-hero";
import { chunkSentences } from "@/lib/chunk-sentences";
import { IconArrow } from "@/components/ui/icon-arrow";
import { SmartLink } from "@/components/ui/smart-link";
import { ParallaxWhiteFrameBand } from "@/components/sections/parallax-white-frame-band";
import { CtaBandSection } from "@/components/sections/cta-band-section";
import { getHomeSectionProps } from "@/lib/home-sections";
import { ROUTES } from "@/lib/routes";

type Props = { about: AboutProps };

export function AboutPageView({ about }: Props) {
  const parallax = getHomeSectionProps<HomeParallaxBandProps>("parallaxBand");
  const cta = getHomeSectionProps<CtaBandProps>("ctaBand");
  const heroLede = chunkSentences(about.body, 2)[0] ?? "";

  return (
    <main id="main-content">
      <MiniPageHero
        variant="dark"
        breadcrumb={
          <>
            <SmartLink href={ROUTES.home}>Home</SmartLink>
            {" · "}
            About
          </>
        }
        title={
          <>
            {about.headingBefore}
            <em className="mini-page-hero__em">{about.headingAccent}</em>
            {about.headingAfter}
          </>
        }
        lede={heroLede}
      />

      <section className="about-pg-split" aria-labelledby="about-pg-split-heading">
        <div className="about-pg-split__inner">
          <div className="about-pg-split__copy">
            <h2 id="about-pg-split-heading" className="about-pg-split__eyebrow">
              <span className="about-pg-split__dash" aria-hidden />
              <span>{about.eyebrow}</span>
            </h2>
            {chunkSentences(about.body, 2).map((chunk) => (
              <p key={chunk.slice(0, 28)} className="about-pg-split__p">
                {chunk}
              </p>
            ))}
            <a href={about.cta.href} className="btn-primary about-pg-split__cta">
              {about.cta.label}
              <IconArrow />
            </a>
          </div>
          <div className="about-pg-split__creds" aria-label="Credentials">
            {about.credentials.map((c) => (
              <div key={c.title} className="about-pg-split__cred">
                <div className="about-pg-split__cred-title">{c.title}</div>
                {chunkSentences(c.sub, 2).map((line) => (
                  <p key={line} className="about-pg-split__cred-sub">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-pg-media" aria-labelledby="about-pg-media-heading">
        <div className="about-pg-media__inner">
          <div className="about-pg-media__figure">
            <Image
              src="/images/drainage-hardscaping/overview-outdoor-living.png"
              alt="Commercial outdoor living and civil work by Ground Level Contracting"
              fill
              className="about-pg-media__img"
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <span className="about-pg-media__badge">{about.badgeText}</span>
          </div>
          <div className="about-pg-media__copy">
            <p className="about-pg-media__eyebrow">
              <span className="about-pg-media__dash" aria-hidden />
              <span>{about.badgeText}</span>
            </p>
            <h2 id="about-pg-media-heading" className="about-pg-media__title">
              <span className="about-pg-media__stat">{about.mediaStat.value}</span>
              <span className="about-pg-media__stat-label">{about.mediaStat.label}</span>
            </h2>
            <a href={about.cta.href} className="btn-ghost about-pg-media__cta">
              {about.cta.label}
              <IconArrow />
            </a>
          </div>
        </div>
      </section>

      {about.whoWeServe ? (
        <section className="about-pg-audience" aria-labelledby="about-pg-audience-heading">
          <div className="about-pg-audience__inner">
            <div className="about-pg-audience__intro">
              <h2 id="about-pg-audience-heading" className="about-pg-audience__eyebrow">
                <span className="about-pg-audience__dash" aria-hidden />
                <span>{about.whoWeServe.title}</span>
              </h2>
              {chunkSentences(about.whoWeServe.intro, 2).map((chunk) => (
                <p key={chunk.slice(0, 24)} className="about-pg-audience__p">
                  {chunk}
                </p>
              ))}
            </div>
            <ul className="about-pg-audience__chips" aria-label="Audience segments">
              {about.whoWeServe.chips.map((chip) => (
                <li key={chip} className="about-pg-audience__chip">
                  {chip}
                </li>
              ))}
            </ul>
            <a href={about.cta.href} className="btn-primary about-pg-audience__cta">
              {about.cta.label}
              <IconArrow />
            </a>
          </div>
        </section>
      ) : null}

      <ParallaxWhiteFrameBand
        id="about-parallax"
        eyebrow={parallax.eyebrow}
        title={parallax.title}
        subtitle={parallax.subtitle}
        imageSrc={parallax.imageSrc}
        imageAlt={parallax.imageAlt}
        cta={parallax.cta}
      />

      <CtaBandSection {...cta} />
    </main>
  );
}
