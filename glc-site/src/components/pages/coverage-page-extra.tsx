import Image from "next/image";
import { IconArrow } from "@/components/ui/icon-arrow";
import { SmartLink } from "@/components/ui/smart-link";
import { chunkSentences } from "@/lib/chunk-sentences";
import { ROUTES } from "@/lib/routes";
import type { CoverageProps } from "@/content/types";

/**
 * Light 50/50 band — figure + chips (narrative lives in CoverageSection).
 */
export function CoveragePageFigureBand(props: Pick<CoverageProps, "areas" | "eyebrow" | "headingBefore" | "headingEmphasis" | "headingAfter" | "closingLine">) {
  return (
    <section className="cov-pg-split" aria-labelledby="cov-pg-split-heading">
      <div className="cov-pg-split__inner">
        <div className="cov-pg-split__copy">
          <p className="cov-pg-split__eyebrow">
            <span className="cov-pg-split__dash" aria-hidden />
            <span>{props.eyebrow}</span>
          </p>
          <h2 id="cov-pg-split-heading" className="cov-pg-split__title">
            {props.headingBefore}
            <em>{props.headingEmphasis}</em>
            {props.headingAfter}
          </h2>
          {props.closingLine
            ? chunkSentences(props.closingLine, 2).map((chunk) => (
                <p key={chunk.slice(0, 20)} className="cov-pg-split__p">
                  {chunk}
                </p>
              ))
            : null}
          <SmartLink href={ROUTES.contact} className="btn-ghost cov-pg-split__link">
            Get a Free Estimate
            <IconArrow />
          </SmartLink>
        </div>
        <figure className="cov-pg-split__fig">
          <div className="cov-pg-split__media">
            <Image
              src="/images/drainage-hardscaping/work-coverage-lakeside-flagstone.jpg"
              alt="Lakeside civil and hardscape work representing Simcoe County coverage"
              fill
              className="cov-pg-split__img"
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <ul className="cov-pg-split__chips" aria-label="Coverage markets">
            {props.areas.map((a) => (
              <li key={a.name} className="cov-pg-split__chip">
                {a.name}
              </li>
            ))}
          </ul>
        </figure>
      </div>
    </section>
  );
}
