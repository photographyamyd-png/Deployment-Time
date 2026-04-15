import Image from "next/image";
import { SmartLink } from "@/components/ui/smart-link";
import type { SiteConfig } from "@/content/types";
import { ROUTES } from "@/lib/routes";
import { SandboxDsMoreSections } from "./sandbox-ds-more-sections";
import { SandboxDsQuoteBand } from "./sandbox-ds-quote-band";

const AB3_IMG =
  "/images/services/drainage-hardscaping/work-overview-dry-creek-steps.jpg";

const COVERAGE_TILES = [
  "Barrie",
  "Midland",
  "Orillia",
  "Innisfil",
  "Springwater",
  "Wasaga Beach",
  "Collingwood",
  "Essa",
  "Bradford",
  "Oro-Medonte",
  "Angus",
  "Simcoe County + surrounding",
];

type Props = { site: SiteConfig; showVariantMatrix?: boolean };

export function SandboxDesignSystemV2Sections({ site, showVariantMatrix = false }: Props) {
  const telHref = site.telephone.replace(/\s/g, "");

  return (
    <>
      {/* Unified design system v2 probes — AB3 editorial split (light) */}
      <section
        className="sandbox-ds-ab3"
        aria-labelledby="sandbox-ds-ab3-heading"
      >
        <div className="sandbox-ds-ab3__wm" aria-hidden>
          GLC
        </div>
        <div className="sandbox-ds-ab3__layout">
          <div className="sandbox-ds-ab3__copy">
            <div className="sandbox-ds-ab3__top-row">
              <p className="eyebrow">About split</p>
              <span className="sandbox-ds-ab3__since">Est. 2010</span>
            </div>
            <h2 id="sandbox-ds-ab3-heading" className="sandbox-ds-ab3__heading">
              Built from the ground <em>up.</em>
            </h2>
            <div className="sandbox-ds-ab3__rule" aria-hidden />
            <p className="sandbox-ds-ab3__body">
              Static HTML reference parity: hairline grid on white, yellow accent rail, industrial-weight
              body copy, and a weighted media column — same hierarchy as the prototype, scoped to{" "}
              <code className="sandbox-ds-ab3__code">.sandbox-ds-*</code> so production pages stay
              untouched.
            </p>
            <SmartLink href={ROUTES.contact} className="btn-primary">
              Request a quote
            </SmartLink>
          </div>
          <div className="sandbox-ds-ab3__media">
            <Image
              src={AB3_IMG}
              alt="River rock drainage channel with stone steps and landscaped grade"
              fill
              className="sandbox-ds-ab3__media-img"
              sizes="(max-width: 900px) 100vw, 45vw"
            />
            <div className="sandbox-ds-ab3__chip">
              <div className="sandbox-ds-ab3__chip-lbl">Head office</div>
              <div className="sandbox-ds-ab3__chip-val">
                {site.address.addressLocality}, {site.address.addressRegion}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="glc-motif-divider-a3--to-dark" aria-hidden />

      {/* ST3 dark stats rail */}
      <section className="sandbox-ds-st3" aria-label="Design system stats strip">
        <div className="sandbox-ds-st3__top-rail" aria-hidden />
        <div className="sandbox-ds-st3__inner">
          <div className="sandbox-ds-st3__side-label">
            <span>Performance</span>
          </div>
          <div className="sandbox-ds-st3__grid">
            <div className="sandbox-ds-st3__cell">
              <div className="sandbox-ds-st3__num">
                15<span>+</span>
              </div>
              <div className="sandbox-ds-st3__lbl">Years in business</div>
            </div>
            <div className="sandbox-ds-st3__cell">
              <div className="sandbox-ds-st3__num">
                200<span>+</span>
              </div>
              <div className="sandbox-ds-st3__lbl">Projects completed</div>
            </div>
            <div className="sandbox-ds-st3__cell">
              <div className="sandbox-ds-st3__num">
                100<span>%</span>
              </div>
              <div className="sandbox-ds-st3__lbl">Own crews &amp; equipment</div>
            </div>
            <div className="sandbox-ds-st3__cell">
              <div className="sandbox-ds-st3__num">
                5<span>–10 days</span>
              </div>
              <div className="sandbox-ds-st3__lbl">Mobilization window</div>
            </div>
          </div>
        </div>
      </section>

      <div className="glc-motif-divider-a3--to-light" aria-hidden />

      {/* Why3 manifesto rows (light) */}
      <section
        className="sandbox-ds-why3"
        aria-labelledby="sandbox-ds-why3-heading"
      >
        <div className="sandbox-ds-why3__wm" aria-hidden>
          WHY
        </div>
        <div className="sandbox-ds-why3__inner">
          <div>
            <p className="eyebrow">Why GLC</p>
            <h2 id="sandbox-ds-why3-heading" className="sandbox-ds-why3__heading">
              No fluff.
              <br />
              Just <em>ground work.</em>
            </h2>
            <p className="sandbox-ds-why3__intro">
              Hover rows borrow the charcoal tint wipe from the HTML reference — implemented as pure
              CSS in <span className="sandbox-ds-why3__mono">glc-base.css</span>, not inline styles.
            </p>
            <SmartLink href={ROUTES.about} className="btn-primary">
              Company profile
            </SmartLink>
          </div>
          <div className="sandbox-ds-why3__rows">
            {[
              {
                n: "01",
                t: "No subcontracting",
                b: "Sandbox copy stands in for the manifesto: every row is a discrete layout pattern, not a duplicate of homepage why3.",
              },
              {
                n: "02",
                t: "Owner-accessible",
                b: "Phone and email on the next band use live values from site.json — same source as the rest of the Next app.",
              },
              {
                n: "03",
                t: "Line-item quotes",
                b: "Keeps procurement teams aligned before mobilization; this block is for visual QA only.",
              },
              {
                n: "04",
                t: "Commercial-first",
                b: "Equipment lists and crew structure mirror how we brief real pads — the sandbox just wears placeholder sentences.",
              },
            ].map((row) => (
              <div key={row.n} className="sandbox-ds-why3__row">
                <div className="sandbox-ds-why3__row-num">{row.n}</div>
                <div className="sandbox-ds-why3__row-line" aria-hidden />
                <div className="sandbox-ds-why3__row-content">
                  <div className="sandbox-ds-why3__row-title">{row.t}</div>
                  <p className="sandbox-ds-why3__row-body">{row.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glc-motif-divider-a3--to-dark" aria-hidden />

      <SandboxDsQuoteBand />

      <div className="glc-motif-divider-a3--to-light" aria-hidden />

      {/* Contact strip (light — separates quote DSE from coverage DSE) */}
      <section
        className="sandbox-ds-contact"
        aria-labelledby="sandbox-ds-contact-heading"
      >
        <div className="sandbox-ds-contact__inner">
          <div className="sandbox-ds-contact__copy">
            <p className="eyebrow">Ready to start</p>
            <h2 id="sandbox-ds-contact-heading" className="sandbox-ds-contact__heading">
              Let&apos;s build <span>something</span> lasting.
            </h2>
            <p className="sandbox-ds-contact__sub">
              Contact strip lifted from the static prototype: dual CTAs, display phone, ghost mail
              button — wired to SmartLink / tel where it matters.
            </p>
          </div>
          <div className="sandbox-ds-contact__actions">
            <div>
              <div className="sandbox-ds-contact__phone-lbl">Call directly</div>
              <a href={`tel:${telHref}`} className="sandbox-ds-contact__phone">
                {site.telephoneDisplay}
              </a>
            </div>
            <SmartLink
              href={`mailto:${site.email}`}
              className="btn-ghost btn-ghost--dark sandbox-ds-contact__ghost"
            >
              Email {site.email}
            </SmartLink>
          </div>
        </div>
      </section>

      <div className="glc-motif-divider-a3--to-dark" aria-hidden />

      {/* Coverage territory band (charcoal-mid DSE) */}
      <section
        className="sandbox-ds-cov"
        aria-labelledby="sandbox-ds-cov-heading"
      >
        <div className="sandbox-ds-cov__rail" aria-hidden />
        <div className="sandbox-ds-cov__ghost" aria-hidden>
          SIMCOE
        </div>
        <div className="sandbox-ds-cov__inner">
          <div>
            <div className="eyebrow eyebrow--on-dark">
              <span>Where we work</span>
            </div>
            <h2 id="sandbox-ds-cov-heading" className="sandbox-ds-cov__heading">
              Simcoe County &amp; beyond.
            </h2>
            <p className="sandbox-ds-cov__sub">
              Mid-tone charcoal band (charcoal-mid) plus blueprint grid — breaks up deep DSE pairs
              when this stack sits next to other dark shells in the playground.
            </p>
            <SmartLink href={ROUTES.contact} className="btn-ghost">
              Check coverage
            </SmartLink>
          </div>
          <div className="sandbox-ds-cov__grid">
            {COVERAGE_TILES.map((name) => (
              <div key={name} className="sandbox-ds-cov__item">
                <span className="sandbox-ds-cov__dot" aria-hidden />
                <span className="sandbox-ds-cov__name">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glc-motif-divider-a3--to-light" aria-hidden />

      {/* Extended static HTML parity: CERT1, tickers, SECT1, proc3, fleet, project, gallery, TST3, CARE1 */}
      <SandboxDsMoreSections site={site} showVariantMatrix={showVariantMatrix} />

      <div className="glc-motif-divider-a3--to-light" aria-hidden />
    </>
  );
}
