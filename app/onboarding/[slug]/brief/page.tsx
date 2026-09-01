import { loadAnswers } from "../../actions";
import { toMarkdown } from "../../brief";
import { CopyButton } from "./CopyButton";

export const dynamic = "force-dynamic";
export const metadata = { title: "Brief", robots: { index: false, follow: false } };

export default async function BriefPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const md = toMarkdown(slug, await loadAnswers(slug));
  return (
    <div className="mx-auto max-w-3xl px-2 py-10 md:px-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-medium tracking-tight text-text-primary">Your brief</h1>
          <p className="mt-1 text-sm text-text-secondary">Everything you&apos;ve answered, as Omar will read it. <a className="text-indigo-600" href={`/onboarding/${slug}`}>Back to the form</a></p>
        </div>
        <CopyButton text={md} />
      </div>
      <pre className="mt-6 whitespace-pre-wrap rounded-xl border border-border-primary bg-white p-5 font-mono text-sm leading-6 text-text-primary">{md}</pre>
    </div>
  );
}
