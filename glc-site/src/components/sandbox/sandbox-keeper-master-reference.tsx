import { readFile } from "fs/promises";
import path from "path";
import Image from "next/image";
import { SmartLink } from "@/components/ui/smart-link";

const REF = "/sandbox-reference";

const TOC = [
  { id: "sandbox-ref-intro", label: "Overview" },
  { id: "sandbox-ref-keepers-catchall", label: "KEEPERS · catchall" },
  { id: "sandbox-ref-keepers-approved", label: "KEEPERS · approved" },
  { id: "sandbox-ref-master-ab3", label: "Master · AB3 HTML" },
  { id: "sandbox-ref-master-st3", label: "Master · ST3 HTML" },
  { id: "sandbox-ref-spec-ab3", label: "Spec · AB3" },
  { id: "sandbox-ref-spec-st3", label: "Spec · ST3" },
  { id: "sandbox-ref-motif-01", label: "Motif 01" },
  { id: "sandbox-ref-motif-03", label: "Motif 03" },
] as const;

function formatJson(raw: string): string {
  try {
    return JSON.stringify(JSON.parse(raw), null, 2);
  } catch {
    return raw;
  }
}

export async function SandboxKeeperMasterReference() {
  const pub = path.join(process.cwd(), "public", "sandbox-reference");
  const [catchallRaw, approvedRaw, specAb3, specSt3] = await Promise.all([
    readFile(path.join(pub, "keepers", "catchall.json"), "utf8"),
    readFile(path.join(pub, "keepers", "approved-sections.json"), "utf8"),
    readFile(path.join(pub, "master-sections", "DESIGN-SPEC-about-ab3.md"), "utf8"),
    readFile(path.join(pub, "master-sections", "DESIGN-SPEC-stats-st3.md"), "utf8"),
  ]);

  const catchallPretty = formatJson(catchallRaw);
  const approvedPretty = formatJson(approvedRaw);

  return (
    <section
      className="sandbox-ref-rack"
      aria-label="D drive KEEPERS and MY MASTER DESIGN SECTIONS — working reference"
    >
      <div id="sandbox-ref-intro" className="sandbox-ref-rack__intro">
        <p className="sandbox-ref-rack__eyebrow">Working reference · D drive mirrors</p>
        <h2 className="sandbox-ref-rack__h">
          KEEPERS + MY MASTER DESIGN SECTIONS
        </h2>
        <p className="sandbox-ref-rack__lede">
          Static copies under{" "}
          <code className="sandbox-ref-rack__code">public/sandbox-reference/</code> — synced from{" "}
          <code className="sandbox-ref-rack__code">D:\htnl attempts\KEEPERS</code> and{" "}
          <code className="sandbox-ref-rack__code">D:\htnl attempts\MY MASTER DESIGN SECTIONS</code>.
          Re-copy those folders into <code className="sandbox-ref-rack__code">public/sandbox-reference</code> when your
          backups change. HTML masters render in isolated iframes (self-contained styles).
        </p>
        <nav className="sandbox-ref-rack__toc" aria-label="Jump to reference panels">
          {TOC.map((item) => (
            <a key={item.id} className="sandbox-ref-rack__toc-a" href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="sandbox-ref-rack__panels">
        <article id="sandbox-ref-keepers-catchall" className="sandbox-ref-panel">
          <header className="sandbox-ref-panel__hd">
            <h3 className="sandbox-ref-panel__title">KEEPERS — catchall.json</h3>
            <p className="sandbox-ref-panel__src">
              Source: <code>D:\htnl attempts\KEEPERS\catchall.json</code> ·{" "}
              <a
                className="sandbox-ref-panel__open"
                href={`${REF}/keepers/catchall.json`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open raw
              </a>
            </p>
          </header>
          <pre className="sandbox-ref-panel__pre" tabIndex={0}>
            {catchallPretty}
          </pre>
        </article>

        <article id="sandbox-ref-keepers-approved" className="sandbox-ref-panel">
          <header className="sandbox-ref-panel__hd">
            <h3 className="sandbox-ref-panel__title">KEEPERS — Approved Sections.json</h3>
            <p className="sandbox-ref-panel__src">
              Source: <code>D:\htnl attempts\KEEPERS\approved\Approved Sections.json</code> ·{" "}
              <a
                className="sandbox-ref-panel__open"
                href={`${REF}/keepers/approved-sections.json`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open raw
              </a>
            </p>
          </header>
          <pre className="sandbox-ref-panel__pre" tabIndex={0}>
            {approvedPretty}
          </pre>
        </article>

        <article id="sandbox-ref-master-ab3" className="sandbox-ref-panel">
          <header className="sandbox-ref-panel__hd">
            <h3 className="sandbox-ref-panel__title">MY MASTER — about-ab3-section-master.html</h3>
            <p className="sandbox-ref-panel__src">
              Source:{" "}
              <code>D:\htnl attempts\MY MASTER DESIGN SECTIONS\about-ab3-section-master.html</code>
            </p>
          </header>
          <iframe
            className="sandbox-ref-panel__iframe"
            title="AB3 section master HTML reference"
            src={`${REF}/master-sections/about-ab3-section-master.html`}
            loading="lazy"
          />
        </article>

        <article id="sandbox-ref-master-st3" className="sandbox-ref-panel">
          <header className="sandbox-ref-panel__hd">
            <h3 className="sandbox-ref-panel__title">MY MASTER — stats-st3-section-master.html</h3>
            <p className="sandbox-ref-panel__src">
              Source:{" "}
              <code>D:\htnl attempts\MY MASTER DESIGN SECTIONS\stats-st3-section-master.html</code>
            </p>
          </header>
          <iframe
            className="sandbox-ref-panel__iframe"
            title="ST3 section master HTML reference"
            src={`${REF}/master-sections/stats-st3-section-master.html`}
            loading="lazy"
          />
        </article>

        <article id="sandbox-ref-spec-ab3" className="sandbox-ref-panel">
          <header className="sandbox-ref-panel__hd">
            <h3 className="sandbox-ref-panel__title">MY MASTER — DESIGN-SPEC-about-ab3.md</h3>
            <p className="sandbox-ref-panel__src">
              Source: <code>D:\htnl attempts\MY MASTER DESIGN SECTIONS\DESIGN-SPEC-about-ab3.md</code> ·{" "}
              <a
                className="sandbox-ref-panel__open"
                href={`${REF}/master-sections/DESIGN-SPEC-about-ab3.md`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open raw
              </a>
            </p>
          </header>
          <pre className="sandbox-ref-panel__pre sandbox-ref-panel__pre--md" tabIndex={0}>
            {specAb3}
          </pre>
        </article>

        <article id="sandbox-ref-spec-st3" className="sandbox-ref-panel">
          <header className="sandbox-ref-panel__hd">
            <h3 className="sandbox-ref-panel__title">MY MASTER — DESIGN-SPEC-stats-st3.md</h3>
            <p className="sandbox-ref-panel__src">
              Source: <code>D:\htnl attempts\MY MASTER DESIGN SECTIONS\DESIGN-SPEC-stats-st3.md</code> ·{" "}
              <a
                className="sandbox-ref-panel__open"
                href={`${REF}/master-sections/DESIGN-SPEC-stats-st3.md`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open raw
              </a>
            </p>
          </header>
          <pre className="sandbox-ref-panel__pre sandbox-ref-panel__pre--md" tabIndex={0}>
            {specSt3}
          </pre>
        </article>

        <article id="sandbox-ref-motif-01" className="sandbox-ref-panel sandbox-ref-panel--motif">
          <header className="sandbox-ref-panel__hd">
            <h3 className="sandbox-ref-panel__title">MY MASTER — GLC-motif-01-corner-traced.svg</h3>
            <p className="sandbox-ref-panel__src">
              Source:{" "}
              <code>D:\htnl attempts\MY MASTER DESIGN SECTIONS\motifs\GLC-motif-01-corner-traced.svg</code> ·{" "}
              <a
                className="sandbox-ref-panel__open"
                href={`${REF}/master-sections/motifs/GLC-motif-01-corner-traced.svg`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open SVG
              </a>
            </p>
          </header>
          <div className="sandbox-ref-panel__motif-wrap">
            <Image
              className="sandbox-ref-panel__motif-img"
              src={`${REF}/master-sections/motifs/GLC-motif-01-corner-traced.svg`}
              alt=""
              width={320}
              height={320}
              unoptimized
            />
          </div>
        </article>

        <article id="sandbox-ref-motif-03" className="sandbox-ref-panel sandbox-ref-panel--motif">
          <header className="sandbox-ref-panel__hd">
            <h3 className="sandbox-ref-panel__title">MY MASTER — GLC-motif-03-divider-traced.svg</h3>
            <p className="sandbox-ref-panel__src">
              Source:{" "}
              <code>D:\htnl attempts\MY MASTER DESIGN SECTIONS\motifs\GLC-motif-03-divider-traced.svg</code> ·{" "}
              <a
                className="sandbox-ref-panel__open"
                href={`${REF}/master-sections/motifs/GLC-motif-03-divider-traced.svg`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open SVG
              </a>
            </p>
          </header>
          <div className="sandbox-ref-panel__motif-wrap sandbox-ref-panel__motif-wrap--wide">
            <Image
              className="sandbox-ref-panel__motif-img sandbox-ref-panel__motif-img--wide"
              src={`${REF}/master-sections/motifs/GLC-motif-03-divider-traced.svg`}
              alt=""
              width={960}
              height={120}
              unoptimized
            />
          </div>
        </article>
      </div>

      <p className="sandbox-ref-rack__foot">
        Tip: compare these panels side-by-side with production sections on this page (
        <SmartLink href="#sandbox-approved-dna-catalog" className="sandbox-ref-rack__foot-a">
          Approved section DNA
        </SmartLink>
        ). Anchor: <code className="sandbox-ref-rack__code">#sandbox-ref-intro</code>.
      </p>
    </section>
  );
}
