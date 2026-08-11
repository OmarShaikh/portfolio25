"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <h2 className="text-2xl font-medium tracking-tight text-text-primary">
        Well, that wasn&apos;t supposed to happen.
      </h2>
      <p className="max-w-md text-text-secondary">
        Something glitched on this page. It&apos;s been noted — try again and
        it should behave.
      </p>
      <button
        onClick={() => reset()}
        className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-500"
      >
        Try again
      </button>
    </div>
  );
}
