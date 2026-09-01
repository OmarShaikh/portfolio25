// Shared by middleware (edge) and server actions (node): Web Crypto only.
export const cookieName = (slug: string) => `onb_${slug}`;

export function passcodeFor(slug: string): string | undefined {
  // ONBOARDING_PASSCODES="saud:secret,other:secret2"
  return (process.env.ONBOARDING_PASSCODES ?? "")
    .split(",")
    .map((p) => p.trim().split(":"))
    .find(([s]) => s === slug)?.[1];
}

export async function tokenFor(slug: string, passcode: string) {
  const buf = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(`${slug}:${passcode}`),
  );
  return Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, "0")).join("");
}

// ponytail: shared passcode + sha256 cookie, no accounts, no rate limit. Upgrade to Supabase magic link if a client ever needs real auth.
export async function isUnlocked(slug: string, cookie: string | undefined) {
  const pass = passcodeFor(slug);
  return !!pass && !!cookie && cookie === (await tokenFor(slug, pass));
}
