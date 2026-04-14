import type { MarqueeProps } from "@/content/types";

export function MarqueeBand({ items, bandTone = "default" }: MarqueeProps) {
  const track = [...items, ...items];
  const bandClass =
    bandTone === "light" ? "marquee-band marquee-band--light" : "marquee-band";
  return (
    <div className={bandClass} aria-hidden="true">
      <div className="marquee-track">
        {track.map((item, i) => (
          <span key={`${item}-${i}`} className="marquee-item">
            {item}
            <span className="marquee-sep" />
          </span>
        ))}
      </div>
    </div>
  );
}
