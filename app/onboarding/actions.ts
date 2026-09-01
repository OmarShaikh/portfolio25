"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createSupabaseAdminClient } from "../lib/supabase/server";
import { cookieName, passcodeFor, tokenFor } from "./gate";

export type Answers = Record<string, string | string[] | number>;

export async function unlock(formData: FormData) {
  const slug = String(formData.get("slug") ?? "");
  const passcode = String(formData.get("passcode") ?? "").trim();
  const expected = passcodeFor(slug);
  if (!expected || passcode !== expected) redirect(`/onboarding/${slug}/unlock?wrong=1`);

  (await cookies()).set(cookieName(slug), await tokenFor(slug, expected), {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    path: `/onboarding/${slug}`,
    httpOnly: true,
    sameSite: "lax",
  });
  redirect(`/onboarding/${slug}`);
}

export async function loadAnswers(slug: string): Promise<Answers> {
  const supabase = await createSupabaseAdminClient();
  const { data } = await supabase.from("onboarding_responses").select("answers").eq("slug", slug).maybeSingle();
  return (data?.answers as Answers) ?? {};
}

export async function saveAnswers(slug: string, answers: Answers) {
  const supabase = await createSupabaseAdminClient();
  const { error } = await supabase
    .from("onboarding_responses")
    .upsert({ slug, answers, updated_at: new Date().toISOString() });
  if (error) throw new Error(error.message);
}
