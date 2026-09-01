import { Questionnaire } from "../Questionnaire";
import { loadAnswers } from "../actions";

export const dynamic = "force-dynamic";
export const metadata = { title: "Onboarding", robots: { index: false, follow: false } };

const names: Record<string, string> = { saud: "Saud" };

export default async function OnboardingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const initial = await loadAnswers(slug);
  return <Questionnaire slug={slug} initial={initial} name={names[slug] ?? slug} />;
}
