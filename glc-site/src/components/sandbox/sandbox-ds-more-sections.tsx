import type { SiteConfig } from "@/content/types";
import { SmartLink } from "@/components/ui/smart-link";
import { ROUTES } from "@/lib/routes";
import { SandboxDsMoreSectionsCore } from "./sandbox-ds-more-sections-core";
import { SandboxDsMoreSectionsMatrix } from "./sandbox-ds-more-sections-matrix";

type Props = { site: SiteConfig; showVariantMatrix?: boolean };

export function SandboxDsMoreSections({ site, showVariantMatrix = false }: Props) {
  if (showVariantMatrix) {
    return (
      <>
        <div className="sandbox-ds-var-matrix-intro ls ls-c">
          <p className="eyebrow">Variant matrix mode</p>
          <p className="sandbox-ds-var-matrix-intro__p">
            This route is rendering the full stress-test (each pattern × three shells). For the lighter single-pass stack,
            open{" "}
            <SmartLink href={ROUTES.sandbox} className="sandbox-ds-var-matrix-intro__link">
              {ROUTES.sandbox}
            </SmartLink>{" "}
            without query params.
          </p>
        </div>
        <div className="glc-motif-divider-a3--to-dark" aria-hidden />
        <SandboxDsMoreSectionsMatrix site={site} />
      </>
    );
  }

  return <SandboxDsMoreSectionsCore site={site} />;
}
