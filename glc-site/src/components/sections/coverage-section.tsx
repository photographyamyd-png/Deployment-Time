import { IconArrow } from "@/components/ui/icon-arrow";
import { chunkSentences } from "@/lib/chunk-sentences";
import type { CoverageProps } from "@/content/types";

type CoverageSectionProps = CoverageProps & {
  /** Default dark charcoal; `light` = grey band for contact / light stacks */
  tone?: "dark" | "light";
};

/**
 * Coverage — 70/30 split: narrative stack + territory rail (no accordion hide).
 */
export function CoverageSection({ tone = "dark", ...props }: CoverageSectionProps) {
  const introChunks = chunkSentences(
    props.intro ??
      "Headquartered in Barrie with county-wide dispatch — no travel surcharges within Simcoe County.",
    2,
  );
  const bodyChunks = chunkSentences(props.body, 2);

  const shell = tone === "light" ? "cov4 cov4--light" : "cov4";

  return (
    <section id="coverage" className={shell} aria-labelledby="coverage-heading">
      <span className="cov4__wm" aria-hidden>
        ON
      </span>
      <div className="cov4__grid">
        <div className="cov4__main">
          <p className="cov4__eyebrow">
            <span className="cov4__eyebrow-dash" aria-hidden />
            <span>{props.eyebrow}</span>
          </p>
          <h2 id="coverage-heading" className="cov4__title">
            {props.headingBefore}
            <em>{props.headingEmphasis}</em>
            {props.headingAfter}
          </h2>

          <div className="cov4__narrative">
            {introChunks.map((chunk) => (
              <p key={`intro-${chunk.slice(0, 20)}`} className="cov4__p">
                {chunk}
              </p>
            ))}
            {bodyChunks.map((chunk) => (
              <p key={`body-${chunk.slice(0, 20)}`} className="cov4__p">
                {chunk}
              </p>
            ))}
          </div>

          {props.localityLine ? (
            <p className="cov4__locality">{props.localityLine}</p>
          ) : null}
          {props.closingLine ? (
            <p className="cov4__close">{props.closingLine}</p>
          ) : null}

          <div className="cov4__cta">
            <a href="tel:+17056194902" className="btn-primary">
              Call dispatch for territory confirmation
              <IconArrow />
            </a>
          </div>
        </div>

        <aside className="cov4__rail" aria-label="Primary markets">
          <div className="cov4__rail-cap">Markets we run weekly</div>
          <ul className="cov4__areas">
            {props.areas.map((a) => (
              <li key={a.name} className="cov4__area">
                <span className="cov4__area-dot" aria-hidden />
                <div>
                  <div className="cov4__area-name">{a.name}</div>
                  <p className="cov4__area-sub">{a.sub}</p>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
