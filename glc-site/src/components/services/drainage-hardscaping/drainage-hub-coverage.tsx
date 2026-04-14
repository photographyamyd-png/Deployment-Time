"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import {
  DrainageDenseText,
} from "@/components/services/drainage-hardscaping/drainage-typography";
import {
  DRAINAGE_HUB_COVERAGE_EXTENDED,
  DRAINAGE_HUB_COVERAGE_EYEBROW,
  DRAINAGE_HUB_COVERAGE_H2,
  DRAINAGE_HUB_COVERAGE_INTRO,
  DRAINAGE_HUB_COVERAGE_LAKESIDE,
  DRAINAGE_HUB_COVERAGE_MAP_ALT,
  DRAINAGE_HUB_COVERAGE_PRIMARY,
} from "@/content/drainage-hardscaping-page";

const MAP_PLACEHOLDER =
  "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80&auto=format";

/** Step 8 — light coverage band + FX spans + density accordion for extended territory. */
export function DrainageHubCoverage() {
  const [expanded, setExpanded] = useState(false);

  const h2Parts = (() => {
    const t = DRAINAGE_HUB_COVERAGE_H2;
    const i = t.lastIndexOf("Central Ontario");
    if (i < 0) {
      return { before: t, accent: "" as string };
    }
    return { before: t.slice(0, i).trim(), accent: t.slice(i) };
  })();

  return (
    <section
      id="coverage"
      className="glc-drain-hub__coverage glc-drain-hub__coverage--lightfx ls"
      aria-labelledby="drainage-hub-coverage-h2"
    >
      <span className="coverage__fx-radial glc-drain-hub__coverage-fx-radial" aria-hidden />
      <span className="coverage__fx-topbar glc-drain-hub__coverage-fx-topbar" aria-hidden />
      <div className="coverage__inner coverage__inner--sandbox container">
        <div className="coverage__label-col glc-drain-hub__coverage-label">
          <div className="coverage__intro coverage__intro--sandbox">
            <span className="glc-motif-heading-rule coverage__band-rule" aria-hidden />
            <Reveal delayClass="reveal--delay-1">
              <div className="eyebrow eyebrow--dark glc-drain-hub__coverage-eyebrow">{DRAINAGE_HUB_COVERAGE_EYEBROW}</div>
            </Reveal>
            <Reveal delayClass="reveal--delay-1">
              <h2 id="drainage-hub-coverage-h2" className="coverage__heading glc-drain-hub__coverage-heading">
                {h2Parts.before}{" "}
                {h2Parts.accent ? <em className="glc-drain-hub__heading-accent">{h2Parts.accent}</em> : null}
              </h2>
            </Reveal>
            <Reveal delayClass="reveal--delay-2">
              <DrainageDenseText
                text={DRAINAGE_HUB_COVERAGE_INTRO}
                ledeClassName="coverage__lede glc-drain-hub__coverage-lede"
                innerClassName="coverage__lede glc-drain-hub__coverage-lede-inner"
              />
            </Reveal>
            <Reveal delayClass="reveal--delay-2">
              <p className="coverage__acc-h glc-drain-hub__coverage-subh">
                <strong>Primary service areas</strong>
              </p>
              <ul className="glc-drain-hub__coverage-ul">
                {DRAINAGE_HUB_COVERAGE_PRIMARY.map((row) => (
                  <li key={row.line}>{row.line}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        <div className="coverage__acc-col glc-drain-hub__coverage-acc-wrap">
          <Reveal delayClass="reveal--delay-3" className="glc-drain-hub__coverage-figure-wrap">
            <div className="svlayer__figure glc-drain-hub__coverage-svlayer-fig">
              <span className="svlayer__figure-bite" aria-hidden />
              <div className="svlayer__figure-frame glc-drain-hub__coverage-frame">
                <div className="about__media-shell glc-drain-hub__media-shell--fill glc-drain-hub__coverage-map-shell">
                  <Image
                    src={MAP_PLACEHOLDER}
                    alt={DRAINAGE_HUB_COVERAGE_MAP_ALT}
                    fill
                    className="glc-drain-hub__media-fill svlayer__img"
                    sizes="(max-width: 900px) 100vw, 44vw"
                  />
                </div>
              </div>
              <p className="svlayer__caption glc-drain-hub__coverage-cap">{DRAINAGE_HUB_COVERAGE_MAP_ALT}</p>
            </div>
          </Reveal>

          <div className="glc-density-acc" id="drainage-coverage-density">
            <button
              type="button"
              id="drainage-coverage-sum"
              className="glc-density-acc__trigger"
              aria-expanded={expanded}
              aria-controls="drainage-coverage-panel"
              onClick={() => setExpanded((v) => !v)}
            >
              <span className="glc-density-acc__chev" aria-hidden />
              <span className="glc-density-acc__h">Extended service areas &amp; lakeside</span>
            </button>
            <div
              id="drainage-coverage-panel"
              role="region"
              aria-labelledby="drainage-coverage-sum"
              className="glc-density-acc__panel-outer"
              style={{
                overflow: "hidden",
                maxHeight: expanded ? "1600px" : 0,
                transition: "max-height 320ms var(--ease-expo)",
              }}
            >
              <div className="glc-density-acc__panel-inner">
                <p className="coverage__acc-h">Extended service areas</p>
                <ul className="glc-drain-hub__coverage-ul glc-drain-hub__coverage-ul--acc">
                  {DRAINAGE_HUB_COVERAGE_EXTENDED.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <p className="coverage__acc-h">Lakeside &amp; cottage property service</p>
                <DrainageDenseText
                  text={DRAINAGE_HUB_COVERAGE_LAKESIDE}
                  ledeClassName="coverage__panel-body"
                  innerClassName="coverage__panel-body glc-drain-hub__coverage-lakeside-inner"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
