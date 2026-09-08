import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHeader } from "@/components/PageHeader";
import { sectors } from "@/data/site";

export const Route = createFileRoute("/sectors")({
  head: () => ({
    meta: [
      { title: "Sectors We Serve — Royal Legend Metal Industries LLC" },
      {
        name: "description",
        content:
          "Modular and prefabricated buildings for construction, government, hospitality and farms, oil and gas, real estate development and commercial clients across the UAE.",
      },
      { property: "og:title", content: "Sectors We Serve — Royal Legend" },
      {
        property: "og:description",
        content:
          "Six sectors, one manufacturer: site compounds, public facilities, resort cottages, industrial units, sales pavilions and commercial workshops.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SectorsPage,
});

function SectorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sectors"
        title="Where our steel lands."
        intro="Different industries ask very different things of a building. These are the six sectors we work in most, and what we typically deliver in each."
      />

      <section className="bg-surface">
        <div className="mx-auto max-w-[1440px] space-y-6 px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
          {sectors.map((s) => (
            <article
              key={s.id}
              className="grid gap-8 border border-line bg-white p-6 transition-colors hover:border-brand sm:p-8 lg:grid-cols-12"
            >
              <div className="lg:col-span-5">
                <h2 className="font-display text-3xl leading-[0.95] text-ink uppercase sm:text-4xl">
                  {s.name}
                </h2>
                <p className="mt-4 font-body text-sm text-steel-soft">
                  {s.desc}
                </p>
              </div>
              <div className="lg:col-span-7">
                <p className="font-body text-[15px] leading-relaxed text-pretty text-steel">
                  {s.detail}
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-3 font-body text-sm text-ink"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-brand" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-brand-deep text-white">
        <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-10">
          <h2 className="font-display text-4xl leading-[0.95] uppercase sm:text-5xl">
            Working in a sector we haven't listed?
          </h2>
          <div>
            <p className="font-body text-white/70">
              Most of what we build is made to order. Send us your requirement
              and we will tell you honestly whether modular is the right answer
              for it.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 bg-gold px-6 py-3 font-cond text-sm uppercase tracking-wider text-brand-deep transition-colors hover:bg-white"
            >
              Send an enquiry <span className="font-mono text-[10px]">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
