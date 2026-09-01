import { unlock } from "../../actions";

export const metadata = { title: "Private page", robots: { index: false, follow: false } };

export default async function UnlockPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ wrong?: string }>;
}) {
  const { slug } = await params;
  const { wrong } = await searchParams;
  return (
    <div className="mx-auto max-w-sm px-4 py-24">
      <h1 className="text-2xl font-medium tracking-tight text-text-primary">Private page</h1>
      <p className="mt-2 text-text-secondary">Enter the passcode Omar sent you. You&apos;ll stay signed in on this device.</p>
      <form action={unlock} className="mt-6 space-y-3">
        <input type="hidden" name="slug" value={slug} />
        <input
          name="passcode"
          type="password"
          autoFocus
          autoComplete="off"
          className="w-full rounded-lg border border-border-primary bg-white px-3 py-2 text-base focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          placeholder="Passcode"
        />
        {wrong && <p className="text-sm text-rose-600">That passcode didn&apos;t match. Try again.</p>}
        <button className="w-full rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white">Continue</button>
      </form>
    </div>
  );
}
