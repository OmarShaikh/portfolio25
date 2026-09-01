import { sections } from "./questions";
import type { Answers } from "./actions";

const fmt = (v: string | string[] | number | undefined) =>
  Array.isArray(v) ? v.join(", ") : v === undefined || v === "" ? "" : String(v);

export function toMarkdown(slug: string, answers: Answers) {
  const out = [`# Onboarding brief — ${slug}`, "", `_Generated ${new Date().toISOString().slice(0, 10)}_`, ""];
  for (const s of sections) {
    const rows = s.questions
      .map((q) => [q, fmt(answers[q.id])] as const)
      .filter(([, v]) => v);
    if (!rows.length) continue;
    out.push(`## ${s.title}`, "");
    for (const [q, v] of rows) {
      const ans = q.type === "scale" ? `${v}/5 (${q.ends?.[0]} → ${q.ends?.[1]})` : v;
      out.push(`**${q.label}**`, ...(ans.includes("\n") ? ["", ans, ""] : [ans, ""]));
    }
  }
  return out.join("\n");
}
