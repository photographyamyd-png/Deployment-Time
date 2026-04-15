import { IconArrow } from "@/components/ui/icon-arrow";
import { SmartLink } from "@/components/ui/smart-link";
import { chunkSentences } from "@/lib/chunk-sentences";
import type { TestimonialsProps } from "@/content/types";

/**
 * Projects page — asymmetric mosaic of full testimonials (distinct from homepage tab stage).
 */
export function ProjectsMosaic(props: TestimonialsProps) {
  return (
    <section className="proj-pg-mosaic" aria-labelledby="proj-pg-mosaic-heading">
      <div className="proj-pg-mosaic__inner">
        <header className="proj-pg-mosaic__head">
          <p className="proj-pg-mosaic__eyebrow">
            <span className="proj-pg-mosaic__dash" aria-hidden />
            <span>{props.eyebrow}</span>
          </p>
          <h2 id="proj-pg-mosaic-heading" className="proj-pg-mosaic__title">
            {props.headingBefore}
            <em>{props.headingAccent}</em>
            {props.headingAfter}
          </h2>
          {chunkSentences(props.sub, 2).map((chunk) => (
            <p key={chunk.slice(0, 28)} className="proj-pg-mosaic__sub">
              {chunk}
            </p>
          ))}
        </header>

        <div className="proj-pg-mosaic__grid">
          {props.items.map((t, i) => (
            <article
              key={t.name}
              className={`proj-pg-mosaic__card proj-pg-mosaic__card--${(i % 3) + 1}`}
            >
              <div className="proj-pg-mosaic__stars" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <svg
                    key={`${t.name}-star-${idx}`}
                    className="proj-pg-mosaic__star"
                    viewBox="0 0 20 20"
                    aria-hidden
                  >
                    <path d="M10 1l2.4 7.4H20l-6.2 4.5 2.4 7.4L10 16l-6.2 4.3 2.4-7.4L0 8.4h7.6z" />
                  </svg>
                ))}
              </div>
              <div className="proj-pg-mosaic__quote">
                {chunkSentences(t.quote, 2).map((chunk) => (
                  <p key={`${t.name}-${chunk.slice(0, 20)}`} className="proj-pg-mosaic__quote-p">
                    &ldquo;{chunk}&rdquo;
                  </p>
                ))}
              </div>
              <footer className="proj-pg-mosaic__foot">
                <div className="proj-pg-mosaic__name">{t.name}</div>
                <div className="proj-pg-mosaic__role">{t.role}</div>
              </footer>
              <div className="proj-pg-mosaic__cta">
                <a href="tel:+17056194902" className="btn-primary">
                  Request a Quote
                  <IconArrow />
                </a>
                {props.googleReviews ? (
                  <SmartLink href={props.googleReviews.href} className="btn-ghost proj-pg-mosaic__google">
                    {props.googleReviews.label}
                    <IconArrow />
                  </SmartLink>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
