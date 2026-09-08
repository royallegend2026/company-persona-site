import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHeader, SectionHead } from "@/components/PageHeader";
import processCraneset from "@/assets/process-craneset.jpg";
import { faqs, processSteps } from "@/data/site";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Delivery Process — Royal Legend Metal Industries LLC" },
      {
        name: "description",
        content:
          "From consultation and engineering drawings through manufacturing, delivery, installation and handover — how a Royal Legend modular project runs, stage by stage.",
      },
      { property: "og:title", content: "Project Delivery Process — Royal Legend" },
      {
        property: "og:description",
        content:
          "Six stages, one partner: consultation, design, quotation, manufacturing, installation and after-sales support.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="Process"
        title="Six stages. One partner."
        intro="You deal with one team from the first site visit to the final walk-through. Here is exactly what happens, and what we need from you at each stage."
      />

      <section className="bg-surface">
        <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
          <div className="space-y-px border border-line bg-line">
            {processSteps.map((s, i) => (
              <article
                key={s.id}
                className="grid gap-6 bg-white p-6 sm:p-8 lg:grid-cols-12"
              >
                <div className="flex items-start gap-4 lg:col-span-4">
                  <span className="font-display text-4xl leading-none text-brand/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-cond text-xl uppercase tracking-wide text-ink">
                    {s.name}
                  </h2>
                </div>
                <p className="font-body text-sm text-steel-soft lg:col-span-3">
                  {s.desc}
                </p>
                <p className="font-body text-[15px] leading-relaxed text-pretty text-steel lg:col-span-5">
                  {s.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-steel text-white">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-10 lg:py-24">
          <div>
            <h2 className="font-display text-4xl leading-[0.95] uppercase sm:text-5xl">
              Installation day.
            </h2>
            <p className="mt-6 font-body text-white/70">
              On the day of installation we arrive with the units, the crane and
              the crew. Bases are checked, modules are set and levelled, joints
              are sealed, and electrical and plumbing connections are made and
              tested before we leave the site.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Transport permits and escort arranged in advance",
                "Craneage sized to the heaviest module",
                "Levelling, sealing and weatherproofing on site",
                "Power and water connected and tested",
                "Site left clean and snag list closed out",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-body text-sm text-white/80"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <img
            src={processCraneset}
            alt="Tower crane lowering a dark green modular cabin onto a concrete pad at a UAE site"
            width={1440}
            height={900}
            loading="lazy"
            className="aspect-[16/10] w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-bg">
        <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
          <SectionHead title="Common questions." note="Before you enquire" />
          <div className="grid gap-px border border-line bg-line md:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q} className="bg-bg p-6">
                <h3 className="font-cond text-lg uppercase tracking-wide text-brand">
                  {f.q}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-steel">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 bg-brand px-6 py-3 font-cond text-sm uppercase tracking-wider text-white transition-colors hover:bg-brand-deep"
          >
            Start your project <span className="font-mono text-[10px]">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
