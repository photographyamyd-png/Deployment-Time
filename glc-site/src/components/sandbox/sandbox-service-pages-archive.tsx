import { SmartLink } from "@/components/ui/smart-link";
import { DrainageServicePageLegacy } from "@/components/sandbox/archives/drainage-service-page-legacy";
import { ExcavationServicePageLegacy } from "@/components/sandbox/archives/excavation-service-page-legacy";
import { SitePrepServicePageLegacy } from "@/components/sandbox/archives/site-prep-service-page-legacy";
import { SnowServicePageLegacy } from "@/components/sandbox/archives/snow-service-page-legacy";
import { ROUTES } from "@/lib/routes";

/**
 * Retired full service-page stacks preserved before the unified `ServicePageView` template.
 */
export function SandboxServicePagesArchive() {
  return (
    <section className="sandbox-svc-arch gl-react-embed-section" aria-label="Archived service page layouts">
      <header className="sandbox-about-arch__band">
        <p className="sandbox-about-arch__eyebrow">Sandbox archive</p>
        <h2 className="sandbox-about-arch__title">Former service hub layouts</h2>
        <p className="sandbox-about-arch__note">
          Production service routes now share <code>ServicePageView</code>. Below: excavation & site prep
          home-style stacks, the drainage hub, and the commercial snow hub — kept for comparison. Live pages:{" "}
          <SmartLink href={ROUTES.service("excavation-site-preparation")}>excavation</SmartLink>,{" "}
          <SmartLink href={ROUTES.service("site-preparation-grading")}>grading</SmartLink>,{" "}
          <SmartLink href={ROUTES.service("drainage-hardscaping")}>drainage</SmartLink>,{" "}
          <SmartLink href={ROUTES.service("snow-removal")}>snow</SmartLink>.
        </p>
      </header>

      <details className="sandbox-svc-arch__details">
        <summary className="sandbox-svc-arch__sum">Excavation & site preparation (legacy)</summary>
        <ExcavationServicePageLegacy />
        <SitePrepServicePageLegacy />
      </details>

      <details className="sandbox-svc-arch__details">
        <summary className="sandbox-svc-arch__sum">Drainage & hardscaping hub (legacy)</summary>
        <DrainageServicePageLegacy />
      </details>

      <details className="sandbox-svc-arch__details">
        <summary className="sandbox-svc-arch__sum">Commercial snow hub (legacy)</summary>
        <SnowServicePageLegacy />
      </details>
    </section>
  );
}
