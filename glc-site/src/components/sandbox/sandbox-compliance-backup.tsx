import complianceSnapshot from "@/content/sandbox/compliance-snapshot.json";
import { orderHomeSections } from "@/lib/home-section-order";
import { GLC_DEV_PREVIEW_ORIGIN, glcDevPreviewUrl } from "@/lib/glc-dev-preview";
import home from "@/content/pages/home.json";
import type { HomePageContent } from "@/content/types";

/**
 * Internal-only: frozen JSON + live-resolved section types for compliance / rollback reference.
 * Anchor: `#sandbox-compliance-reference`
 */
export function SandboxComplianceBackup() {
  const homeContent = home as HomePageContent;
  const resolved = orderHomeSections(homeContent.sections).map((s) => s.type);
  const payload = {
    frozenSnapshotFile: "src/content/sandbox/compliance-snapshot.json",
    liveResolvedSectionTypes: resolved,
    frozen: complianceSnapshot,
  };

  return (
    <section
      id="sandbox-compliance-reference"
      className="sandbox-compliance-ref"
      aria-labelledby="sandbox-compliance-heading"
    >
      <h2 id="sandbox-compliance-heading" className="sandbox-compliance-ref__h">
        Compliance backup &amp; dev URLs
      </h2>
      <p className="sandbox-compliance-ref__p">
        <strong>Preview (use in browser):</strong>{" "}
        <a className="sandbox-compliance-ref__a" href={GLC_DEV_PREVIEW_ORIGIN}>
          {GLC_DEV_PREVIEW_ORIGIN}
        </a>{" "}
        · home{" "}
        <a className="sandbox-compliance-ref__a" href={glcDevPreviewUrl("/")}>
          {glcDevPreviewUrl("/")}
        </a>{" "}
        · this page{" "}
        <a className="sandbox-compliance-ref__a" href={glcDevPreviewUrl("/sandbox/")}>
          {glcDevPreviewUrl("/sandbox/")}
        </a>
      </p>
      <p className="sandbox-compliance-ref__p">
        If dev “cannot handle the request” after edits: run{" "}
        <code className="sandbox-compliance-ref__code">npm run dev:fresh --prefix glc-site</code> then retry the
        127.0.0.1 URL above (clean <code className="sandbox-compliance-ref__code">.next</code>). If Webpack HMR still
        corrupts, try <code className="sandbox-compliance-ref__code">npm run dev:turbo --prefix glc-site</code>.
      </p>
      <details className="sandbox-compliance-ref__details">
        <summary className="sandbox-compliance-ref__sum">JSON payload (live + frozen snapshot)</summary>
        <pre className="sandbox-compliance-ref__pre">{JSON.stringify(payload, null, 2)}</pre>
      </details>
    </section>
  );
}
