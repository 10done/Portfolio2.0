/**
 * Canonical site URL for metadata (OG, Twitter, JSON-LD).
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://10doneportfolio.vercel.app).
 * On Vercel, VERCEL_URL is used as fallback when unset.
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/$/, "");
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) return `https://${vercel.replace(/^https?:\/\//, "")}`;
  return "http://localhost:3000";
}
