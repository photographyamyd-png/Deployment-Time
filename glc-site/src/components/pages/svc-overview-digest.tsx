import { IconArrow } from "@/components/ui/icon-arrow";
import { SmartLink } from "@/components/ui/smart-link";
import { chunkSentences } from "@/lib/chunk-sentences";
import { ROUTES } from "@/lib/routes";
import type { StatsProps } from "@/content/types";

type Props = {
  kicker: string;
  digestTitle: string;
  megaIntro: string;
  hubLede: string;
  stats: StatsProps;
};

/**
 * Services hub — light 70/30 digest + stat chips (distinct from STC band).
 */
export function SvcOverviewDigest({ kicker, digestTitle, megaIntro, hubLede, stats }: Props) {
  return (
    <section className="svc-hub-digest" aria-labelledby="svc-hub-digest-heading">
      <div className="svc-hub-digest__inner">
        <div className="svc-hub-digest__copy">
          <p className="svc-hub-digest__eyebrow">
            <span className="svc-hub-digest__dash" aria-hidden />
            <span>{kicker}</span>
          </p>
          <h2 id="svc-hub-digest-heading" className="svc-hub-digest__title">
            {digestTitle}
          </h2>
          {chunkSentences(megaIntro, 2).map((chunk) => (
            <p key={chunk.slice(0, 24)} className="svc-hub-digest__p">
              {chunk}
            </p>
          ))}
          {chunkSentences(hubLede, 2).map((chunk) => (
            <p key={`hub-${chunk.slice(0, 24)}`} className="svc-hub-digest__p">
              {chunk}
            </p>
          ))}
          <SmartLink href={ROUTES.contact} className="btn-primary svc-hub-digest__cta">
            Get a Free Estimate
            <IconArrow />
          </SmartLink>
        </div>
        <aside className="svc-hub-digest__aside" aria-label="Performance snapshot">
          <div className="svc-hub-digest__aside-cap">Field proof</div>
          <ul className="svc-hub-digest__stats">
            {stats.cells.map((cell) => (
              <li key={cell.label} className="svc-hub-digest__stat">
                <span className="svc-hub-digest__stat-num">
                  {cell.target}
                  {cell.afterNumber}
                </span>
                <span className="svc-hub-digest__stat-label">{cell.label}</span>
                {chunkSentences(cell.sub, 2).map((c) => (
                  <p key={c} className="svc-hub-digest__stat-sub">
                    {c}
                  </p>
                ))}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
