"use client";

import { IconArrow } from "@/components/ui/icon-arrow";
import type { TestimonialsProps } from "@/content/types";

export function TestimonialsSection(props: TestimonialsProps) {
  return (
    <section id="testimonials" className="testimonials-section testimonials-section--tst3 tst3" aria-labelledby="testimonials-heading">
      <div className="tst3__header">
        <div className="tst3__eyebrow-row">
          <div className="eyebrow"><span>{props.eyebrow}</span></div>
        </div>
        <h2 id="testimonials-heading" className="tst3__heading">
          {props.headingBefore}<em>{props.headingAccent}</em>{props.headingAfter}
        </h2>
        <p className="tst3__lede">{props.sub}</p>
      </div>

      <div className="tst3__grid">
        {props.items.map((t, i) => (
          <div key={t.name} className={`tst3__card${i === 0 ? " tst3__card--featured" : ""}`}>
            <div className="tst3__open-mark" aria-hidden>&quot;</div>
            <div className="tst3__stars" aria-label="5 stars">
              {Array.from({ length: 5 }).map((_, idx) => (
                <svg key={`${t.name}-${idx}`} className="tst3__star" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M10 1l2.4 7.4H20l-6.2 4.5 2.4 7.4L10 16l-6.2 4.3 2.4-7.4L0 8.4h7.6z" />
                </svg>
              ))}
            </div>
            <p className="tst3__quote">{t.quote}</p>
            <div className="tst3__divider" />
            <div className="tst3__name">{t.name}</div>
            <div className="tst3__role">{t.role}</div>
          </div>
        ))}
      </div>
      <div className="tst3__cta">
        <a href="tel:+17056194902" className="btn-primary">
          Request a Quote
          <IconArrow />
        </a>
      </div>
    </section>
  );
}
