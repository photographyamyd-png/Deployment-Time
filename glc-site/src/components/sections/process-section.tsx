import { IconArrow } from "@/components/ui/icon-arrow";
import { chunkSentences } from "@/lib/chunk-sentences";
import type { ProcessProps } from "@/content/types";

/**
 * Process — light editorial shell, sticky jump rail, step cards with chunked copy (max 2 sentences per block).
 */
export function ProcessSection(props: ProcessProps) {
  return (
    <section id="process" className="proc4" aria-labelledby="process-heading">
      <div className="proc4__rail" aria-hidden />

      <div className="proc4__inner">
        <header className="proc4__head">
          <p className="proc4__eyebrow">
            <span className="proc4__eyebrow-dash" aria-hidden />
            <span>{props.eyebrow}</span>
          </p>
          <h2 id="process-heading" className="proc4__title">
            {props.heading}
            <em>{props.headingAccent}</em>
          </h2>
        </header>

        <nav className="proc4__jump" aria-label="Jump to process step">
          <ul className="proc4__jump-list">
            {props.steps.map((step) => (
              <li key={step.num}>
                <a className="proc4__jump-link" href={`#process-step-${step.num}`}>
                  <span className="proc4__jump-num">{step.num}</span>
                  <span className="proc4__jump-txt">{step.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="proc4__cards">
          {props.steps.map((step) => (
            <article
              key={step.num}
              id={`process-step-${step.num}`}
              className="proc4__card"
            >
              <div className="proc4__card-top">
                <span className="proc4__card-num" aria-hidden>
                  {step.num}
                </span>
                <h3 className="proc4__card-title">{step.title}</h3>
              </div>
              <div className="proc4__card-body">
                {chunkSentences(step.desc, 2).map((chunk) => (
                  <p key={`${step.num}-${chunk.slice(0, 24)}`} className="proc4__card-p">
                    {chunk}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="proc4__floor">
          <a href="tel:+17056194902" className="btn-primary proc4__floor-cta">
            Request a Quote
            <IconArrow />
          </a>
        </div>
      </div>
    </section>
  );
}
