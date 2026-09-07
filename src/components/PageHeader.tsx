import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-line bg-bg">
      <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand">
          {eyebrow}
        </div>
        <h1 className="mt-4 max-w-[18ch] animate-hero-rise font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.92] tracking-tight text-ink uppercase">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-[62ch] font-body text-base text-pretty text-steel sm:text-lg">
            {intro}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
      <div className="h-1 origin-left animate-rail-grow bg-brand" />
    </section>
  );
}

export function SectionHead({
  title,
  note,
  tone = "light",
}: {
  title: string;
  note?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className="mb-10 grid gap-3 sm:flex sm:items-end sm:justify-between">
      <h2
        className={`max-w-[20ch] font-display text-4xl leading-[0.95] uppercase sm:text-5xl ${
          tone === "dark" ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {note && (
        <div
          className={`font-mono text-[10px] uppercase tracking-[0.2em] ${
            tone === "dark" ? "text-white/50" : "text-steel-soft"
          }`}
        >
          {note}
        </div>
      )}
    </div>
  );
}
