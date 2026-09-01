"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { clsx } from "clsx";
import { palettes, sections, totalMinutes, type Question } from "./questions";
import { saveAnswers, type Answers } from "./actions";

const input =
  "w-full rounded-lg border border-border-primary bg-white px-3 py-2 text-base text-text-primary placeholder:text-text-tertiary focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200";
const chip = (on: boolean) =>
  clsx(
    "rounded-full border px-3 py-1.5 text-sm transition",
    on ? "border-indigo-600 bg-indigo-600 text-white" : "border-border-primary bg-white text-text-primary hover:border-slate-400",
  );

const isAnswered = (v: Answers[string] | undefined) => (Array.isArray(v) ? v.length > 0 : v !== undefined && v !== "");

function seed(saved: Answers): Answers {
  const out = { ...saved };
  for (const s of sections)
    for (const q of s.questions)
      if (q.preselected && !(q.id in out)) out[q.id] = q.type === "single" ? q.preselected[0] : [...q.preselected];
  return out;
}

export function Questionnaire({ slug, initial, name }: { slug: string; initial: Answers; name: string }) {
  const [answers, setAnswers] = useState<Answers>(() => seed(initial));
  const [i, setI] = useState(0);
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const dirty = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (!dirty.current) return;
    setStatus("saving");
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      saveAnswers(slug, answers).then(() => setStatus("saved")).catch(() => setStatus("error"));
    }, 800);
    return () => clearTimeout(timer.current);
  }, [answers, slug]);

  const set = (id: string, v: Answers[string]) => {
    dirty.current = true;
    setAnswers((a) => ({ ...a, [id]: v }));
  };

  const counts = useMemo(
    () => sections.map((s) => s.questions.filter((q) => isAnswered(answers[q.id])).length),
    [answers],
  );
  const total = sections.reduce((n, s) => n + s.questions.length, 0);
  const done = counts.reduce((a, b) => a + b, 0);
  const section = sections[i];

  return (
    <div className="mx-auto max-w-5xl px-2 py-10 md:px-6">
      <header className="mb-8">
        <p className="text-sm text-text-tertiary">Private page for {name}</p>
        <h1 className="mt-1 text-3xl font-medium tracking-tight text-text-primary md:text-4xl">Let&apos;s design your assistant</h1>
        <p className="mt-3 max-w-2xl text-text-secondary">
          Around {totalMinutes} minutes in total, in small sections. Everything saves as you go, so stop and come back on any
          device. Where we already know the answer from our conversations it&apos;s ticked; untick or add freely. Nothing here
          is binding. Omar turns this into the build brief, then we close the gaps on a short call.
        </p>
        <div className="mt-4 flex items-center gap-3 text-sm">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-border-primary/60">
            <div className="h-full bg-indigo-600 transition-all" style={{ width: `${(done / total) * 100}%` }} />
          </div>
          <span className="tabular-nums text-text-secondary">{done}/{total}</span>
          <span className={clsx("w-14 text-right", status === "error" ? "text-rose-600" : "text-text-tertiary")}>
            {status === "saving" ? "Saving…" : status === "saved" ? "Saved ✓" : status === "error" ? "Not saved" : ""}
          </span>
        </div>
      </header>

      <div className="md:grid md:grid-cols-[220px_1fr] md:gap-10">
        <nav className="mb-6 md:mb-0">
          <select className={clsx(input, "md:hidden")} value={i} onChange={(e) => setI(Number(e.target.value))}>
            {sections.map((s, k) => (
              <option key={s.id} value={k}>{k + 1}. {s.title} ({counts[k]}/{s.questions.length})</option>
            ))}
          </select>
          <ol className="hidden space-y-1 md:block">
            {sections.map((s, k) => (
              <li key={s.id}>
                <button
                  onClick={() => setI(k)}
                  className={clsx("w-full rounded-md px-2 py-1.5 text-left text-sm", k === i ? "bg-indigo-50 text-indigo-700" : "text-text-secondary hover:bg-white")}
                >
                  <span className="block">{s.title}</span>
                  <span className="text-xs text-text-tertiary">{counts[k]}/{s.questions.length} · {s.minutes} min</span>
                </button>
              </li>
            ))}
          </ol>
        </nav>

        <section>
          <h2 className="text-xl font-medium text-text-primary">{section.title}</h2>
          {section.intro && <p className="mt-1 text-text-secondary">{section.intro}</p>}
          <div className="mt-6 space-y-8">
            {section.questions.map((q) => (
              <Field key={q.id} q={q} value={answers[q.id]} onChange={(v) => set(q.id, v)} />
            ))}
          </div>
          <div className="mt-10 flex justify-between border-t border-border-primary/60 pt-6">
            <button disabled={i === 0} onClick={() => setI(i - 1)} className="text-sm text-text-secondary disabled:opacity-30">← Back</button>
            {i < sections.length - 1 ? (
              <button onClick={() => { setI(i + 1); window.scrollTo({ top: 0 }); }} className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white">
                Next: {sections[i + 1].title} →
              </button>
            ) : (
              <a href={`/onboarding/${slug}/brief`} className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white">See your brief →</a>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

function Field({ q, value, onChange }: { q: Question; value: Answers[string] | undefined; onChange: (v: Answers[string]) => void }) {
  return (
    <div>
      <label className="block text-base font-medium text-text-primary">{q.label}</label>
      {q.help && <p className="mt-0.5 text-sm text-text-tertiary">{q.help}</p>}
      <div className="mt-2">
        {q.type === "text" && <input className={input} value={(value as string) ?? ""} placeholder={q.placeholder} onChange={(e) => onChange(e.target.value)} />}
        {q.type === "long" && <textarea className={clsx(input, "min-h-[96px]")} value={(value as string) ?? ""} placeholder={q.placeholder} onChange={(e) => onChange(e.target.value)} />}
        {q.type === "single" && <Chips options={q.options!} selected={value ? [value as string] : []} onChange={(s) => onChange(s[s.length - 1] ?? "")} single />}
        {(q.type === "multi" || q.type === "rank") && <Chips options={q.options!} selected={(value as string[]) ?? []} onChange={onChange} numbered={q.type === "rank"} />}
        {q.type === "scale" && <Scale value={value as number | undefined} ends={q.ends!} onChange={onChange} />}
        {q.type === "palette" && <Palettes selected={(value as string[]) ?? []} onChange={onChange} />}
      </div>
    </div>
  );
}

function Chips({ options, selected, onChange, single, numbered }: { options: string[]; selected: string[]; onChange: (v: string[]) => void; single?: boolean; numbered?: boolean }) {
  const [custom, setCustom] = useState("");
  const all = [...options, ...selected.filter((s) => !options.includes(s))];
  const toggle = (o: string) => {
    if (single) return onChange(selected[0] === o ? [] : [o]);
    onChange(selected.includes(o) ? selected.filter((s) => s !== o) : [...selected, o]);
  };
  const add = () => {
    const v = custom.trim();
    if (!v) return;
    onChange(single ? [v] : selected.includes(v) ? selected : [...selected, v]);
    setCustom("");
  };
  return (
    <div className="flex flex-wrap items-center gap-2">
      {all.map((o) => {
        const k = selected.indexOf(o);
        return (
          <button key={o} type="button" onClick={() => toggle(o)} className={chip(k >= 0)}>
            {numbered && k >= 0 && <span className="mr-1.5 opacity-70">{k + 1}</span>}
            {o}
          </button>
        );
      })}
      <input
        className="min-w-[140px] flex-1 rounded-full border border-dashed border-border-primary bg-transparent px-3 py-1.5 text-sm placeholder:text-text-tertiary focus:border-indigo-500 focus:outline-none"
        placeholder="Add your own ↵"
        value={custom}
        onChange={(e) => setCustom(e.target.value)}
        onBlur={add}
        onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); add(); } }}
      />
    </div>
  );
}

function Scale({ value, ends, onChange }: { value: number | undefined; ends: [string, string]; onChange: (v: number) => void }) {
  return (
    <div className="flex items-center gap-3 text-sm text-text-tertiary">
      <span className="w-24 text-right">{ends[0]}</span>
      {[1, 2, 3, 4, 5].map((n) => (
        <button key={n} type="button" onClick={() => onChange(n)} className={clsx("h-9 w-9 rounded-full border text-sm", value === n ? "border-indigo-600 bg-indigo-600 text-white" : "border-border-primary bg-white text-text-primary")}>{n}</button>
      ))}
      <span className="w-24">{ends[1]}</span>
    </div>
  );
}

function Palettes({ selected, onChange }: { selected: string[]; onChange: (v: string[]) => void }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {palettes.map((p) => {
        const on = selected.includes(p.name);
        return (
          <button
            key={p.name}
            type="button"
            onClick={() => onChange(on ? selected.filter((s) => s !== p.name) : [...selected, p.name])}
            className={clsx("rounded-xl border-2 p-3 text-left transition", on ? "border-indigo-600" : "border-border-primary hover:border-slate-400")}
          >
            <div className="flex h-10 overflow-hidden rounded-lg">
              {p.colors.map((c) => <div key={c} className="flex-1" style={{ background: c }} />)}
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="font-medium text-text-primary">{p.name}</span>
              {on && <span className="text-xs text-indigo-600">Selected</span>}
            </div>
            <p className="text-sm text-text-secondary">{p.desc}</p>
          </button>
        );
      })}
    </div>
  );
}
