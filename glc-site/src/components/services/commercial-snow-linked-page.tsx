import { SmartLink } from "@/components/ui/smart-link";
import { ROUTES } from "@/lib/routes";
import type { SnowSubServicePageDef } from "@/lib/commercial-snow-routes";
import { hubUrlWithFragment, snowHubUrl } from "@/lib/commercial-snow-routes";
import { getCommercialSnowServiceBySlug } from "@/content/commercial-snow-page-data";

type Props = {
  variant: "sub-service";
  def: SnowSubServicePageDef;
};

const SNOW_SUB_SERVICE_AREA_ROW =
  "Serving: Barrie · Innisfil · Orillia · Wasaga Beach · Collingwood · Midland · Alliston · Simcoe County";

function SnowCapabilityGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2v4M12 14v4M2 12h4M14 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

function CommercialSnowSubServiceExpand({ def }: { def: SnowSubServicePageDef }) {
  const svc = getCommercialSnowServiceBySlug(def.slug);
  if (!svc) return null;

  return (
    <div className="glc-snow-linked-expand">
      <p className="glc-snow-linked-expand__detail">{svc.linkedExpand}</p>

      <h2 className="glc-snow-linked-expand__subhead">What this service includes</h2>
      <ul className="glc-snow-linked-expand__grid">
        {svc.linkedIncludes.map((line) => (
          <li key={line} className="glc-snow-linked-expand__cell">
            <SnowCapabilityGlyph className="glc-snow-linked-expand__icon" />
            <p className="glc-snow-linked-expand__cap">{line}</p>
          </li>
        ))}
      </ul>

      <p className="glc-snow-linked-expand__area">{SNOW_SUB_SERVICE_AREA_ROW}</p>

      <p className="glc-snow-linked-expand__back">
        <SmartLink href={snowHubUrl()}>
          Part of GLC&apos;s full commercial snow removal program →
        </SmartLink>
      </p>

      <p className="glc-snow-linked-expand__closing">
        Contracts bundle seasonal, per-event, and hybrid pricing with SLA language, ice-revisit rules, and documentation
        packages suited to portfolios and single-site owners. Equipment lists, trigger depths, and escalation tiers for
        this line live on the main commercial snow hub—request a quote when you are ready to align dispatch with your
        operating hours and insurer expectations.
      </p>
    </div>
  );
}

export function CommercialSnowLinkedPage(props: Props) {
  const hub = snowHubUrl();
  const contact = ROUTES.contact;
  const { def } = props;
  const back = hubUrlWithFragment(def.hubFragment);
  return (
    <div className="glc-snow-linked">
      <p className="glc-snow-linked__crumb">
        <SmartLink href={ROUTES.home}>Home</SmartLink>
        {" · "}
        <SmartLink href={ROUTES.services}>Services</SmartLink>
        {" · "}
        <SmartLink href={hub}>Commercial snow removal</SmartLink>
      </p>
      <h1 className="glc-snow-linked__h1">{def.heading}</h1>
      <p className="glc-snow-linked__lede">
        This commercial snow line is part of Ground Level Contracting&apos;s Simcoe County winter program—built for
        businesses, property portfolios, and industrial sites (not residential driveways).
      </p>
      <p className="glc-snow-linked__p">
        Read the full scope, SLA options, and equipment fit on the main hub—section opens to this service line.
      </p>

      <CommercialSnowSubServiceExpand def={def} />

      <div className="glc-snow-linked__cta-row">
        <SmartLink href={back} className="glc-snow-btn glc-snow-btn--primary">
          View on commercial snow hub
        </SmartLink>
        <SmartLink href={contact} className="glc-snow-btn glc-snow-btn--line glc-snow-btn--on-light">
          Request a quote
        </SmartLink>
      </div>
    </div>
  );
}
