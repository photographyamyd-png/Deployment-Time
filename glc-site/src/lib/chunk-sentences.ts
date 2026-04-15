/**
 * Groups sentences so no prose block exceeds `maxPerChunk` sentences (design readability rule).
 */
export function chunkSentences(text: string, maxPerChunk = 2): string[] {
  const trimmed = text.trim();
  if (!trimmed) return [];

  const parts = trimmed.split(/(?<=[.!?])\s+/).filter(Boolean);
  const out: string[] = [];

  for (let i = 0; i < parts.length; i += maxPerChunk) {
    out.push(parts.slice(i, i + maxPerChunk).join(" "));
  }

  return out;
}
