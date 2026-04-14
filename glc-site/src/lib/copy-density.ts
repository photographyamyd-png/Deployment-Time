/**
 * Split prose for the two-sentence visible lede + expandable remainder pattern.
 * Conservative sentence boundaries at . ! ? followed by space or end.
 */

export function splitFirstTwoSentences(text: string): { lead: string; remainder: string | null } {
  const trimmed = text.trim();
  if (!trimmed) {
    return { lead: "", remainder: null };
  }

  const sentences: string[] = [];
  let buf = "";
  for (let i = 0; i < trimmed.length; i++) {
    const ch = trimmed[i];
    buf += ch;
    if (ch === "." || ch === "!" || ch === "?") {
      const next = trimmed[i + 1];
      if (next === undefined || /\s/.test(next)) {
        sentences.push(buf.trim());
        buf = "";
        while (i + 1 < trimmed.length && /\s/.test(trimmed[i + 1])) {
          i++;
        }
      }
    }
  }
  if (buf.trim()) {
    sentences.push(buf.trim());
  }

  if (sentences.length <= 2) {
    return { lead: trimmed, remainder: null };
  }

  const lead = sentences.slice(0, 2).join(" ");
  const remainder = sentences.slice(2).join(" ");
  return { lead, remainder: remainder || null };
}

/** Prefer em dash / en dash split for display H2 (full string stays in document). */
export function splitHeadingForDisplay(h2: string): { line1: string; accent: string } {
  const em = " — ";
  if (h2.includes(em)) {
    const [a, b] = h2.split(em, 2);
    return { line1: a.trim(), accent: b.trim() };
  }
  const en = " – ";
  if (h2.includes(en)) {
    const [a, b] = h2.split(en, 2);
    return { line1: a.trim(), accent: b.trim() };
  }
  const inSimcoe = " in Simcoe County";
  const idx = h2.lastIndexOf(inSimcoe);
  if (idx > 12) {
    return { line1: h2.slice(0, idx).trim(), accent: h2.slice(idx).trim() };
  }
  const comma = h2.indexOf(",");
  if (comma > 14) {
    return { line1: h2.slice(0, comma).trim(), accent: h2.slice(comma + 1).trim() };
  }
  return { line1: h2, accent: "" };
}
