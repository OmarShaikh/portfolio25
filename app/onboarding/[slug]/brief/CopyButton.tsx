"use client";

import { useState } from "react";

export function CopyButton({ text }: { text: string }) {
  const [ok, setOk] = useState(false);
  return (
    <button
      onClick={() => navigator.clipboard.writeText(text).then(() => { setOk(true); setTimeout(() => setOk(false), 1500); })}
      className="rounded-full border border-border-primary bg-white px-4 py-2 text-sm font-medium text-text-primary hover:border-slate-400"
    >
      {ok ? "Copied ✓" : "Copy markdown"}
    </button>
  );
}
