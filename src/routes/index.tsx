import { createFileRoute, Link } from "@tanstack/react-router";

import { SectionHead } from "@/components/PageHeader";
import heroFactory from "@/assets/hero-factory.jpg";
import { PHONE, PHONE_TEL, processSteps, products, sectors, whyUs } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Royal Legend Metal Industries LLC — Prefabricated & Modular Buildings, Sharjah",
      },
      {
        name: "description",
        content:
          "Sharjah-based manufacturer of prefabricated and modular building solutions: portacabins, fencing, car parking shades, tents, containers and turnkey site infrastructure across the UAE.",
      },
      {
        property: "og:title",
        content:
          "Royal Legend Metal Industries LLC — Engineered for Performance. Built for Purpose.",
      },
      {
        property: "og:description",
        content:
          "Prefabricated & modular building solutions from Al Bataeh, Sharjah — design, manufacturing, transport and installation under one roof.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="overflow-hidden bg-surface">
        <div className="mx-auto grid max-w-[1440px] items-start gap-14 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-24">
          <div className="flex flex-col gap-8 lg:col-span-7">
            <div className="flex animate-hero-rise items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand">
                Prefabricated & Modular Building Solutions
              </span>
              <span className="h-px flex-1 bg-line" />
              <span className="hidden font-mono text-[10px] whitespace-nowrap uppercase tracking-[0.25em] text-steel-soft sm:block">
                Al Bataeh · Sharjah
              </span>
            </div>
            <h1
              className="animate-hero-rise font-display text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.9] tracking-tight text-ink uppercase"
              style={{ animationDelay: "80ms" }}
            >
              Engineered
              <br />
              for <span className="text-brand">Performance.</span>
            </h1>
            <p
              className="max-w-[52ch] animate-hero-rise font-body text-base text-pretty text-steel sm:text-lg"
              style={{ animationDelay: "160ms" }}
            >
              Built for purpose. We design, manufacture and install
              prefabricated, modular and portable buildings — from portacabins
              and fencing to turnkey site infrastructure — for contractors,
              developers and industrial operators across the UAE.
            </p>
            <div
              className="flex animate-hero-rise flex-wrap gap-3"
              style={{ animationDelay: "240ms" }}
            >
              <Link
                to="/products"
                className="inline-flex items-center gap-3 bg-brand px-5 py-3 font-cond text-sm uppercase tracking-wider text-white transition-colors hover:bg-brand-deep"
              >
                View portfolio <span className="font-mono text-[10px]">→</span>
              </Link>
              <Link
                to="/process"
                className="inline-flex items-center gap-3 border border-ink/20 px-5 py-3 font-cond text-sm uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-white"
              >
                Delivery process
              </Link>
            </div>
            <div
              className="grid animate-hero-rise grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4"
              style={{ animationDelay: "320ms" }}
            >
              {[
                ["Product lines", "10+"],
                ["Sectors served", "6"],
                ["Lifecycle", "End-to-end"],
                ["Based in", "Sharjah"],
              ].map(([label, value]) => (
                <div key={label} className="bg-surface p-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel-soft">
                    {label}
                  </div>
                  <div className="mt-1 font-display text-2xl text-ink sm:text-3xl">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative pb-16 lg:col-span-5 lg:pb-20">
            <div
              className="skew-panel frost animate-panel-sweep border border-white/40 p-3"
              style={{ animationDelay: "200ms" }}
            >
              <img
                src={heroFactory}
                alt="Steel modular building factory floor with workers welding a portal frame"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div
              className="skew-panel animate-panel-sweep absolute bottom-0 left-0 w-56 bg-brand p-4 text-white"
              style={{ animationDelay: "400ms" }}
            >
              <div className="skew-text">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
                  Membership
                </div>
                <div className="mt-1 font-cond text-sm uppercase tracking-wider">
                  UAE Chamber of Commerce
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-1 origin-left animate-rail-grow bg-brand" />
      </section>

      {/* INTRO */}
      <section className="bg-bg">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-24">
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl leading-[0.95] text-ink uppercase sm:text-5xl">
              A manufacturer, not a reseller.
            </h2>
          </div>
          <div className="space-y-6 lg:col-span-7">
            <p className="font-body text-[15px] leading-relaxed text-pretty text-steel">
              Royal Legend Metal Industries LLC manufactures and supplies
              prefabricated, modular and portable buildings from our own
              facility in Al Bataeh, Sharjah. We cover the full project
              lifecycle — concept, design and engineering, manufacturing,
              transportation, installation and after-sales support.
            </p>
            <p className="font-body text-[15px] leading-relaxed text-pretty text-steel">
              That means one accountable team from first drawing to final
              handover, and honest advice about what your site actually needs.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 font-cond text-sm uppercase tracking-wider text-brand hover:underline"
            >
              More about us <span className="font-mono text-[10px]">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="bg-surface">
        <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
          <SectionHead title="What we build." note="Ten product lines" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((p) => (
              <Link
                key={p.id}
                to="/products"
                className="group border border-line bg-white transition-colors hover:border-brand"
              >
                <img
                  src={p.img}
                  alt={p.alt}
                  width={1024}
                  height={683}
                  loading="lazy"
                  className="aspect-[3/2] w-full object-cover"
                />
                <div className="p-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel-soft">
                    {p.spec}
                  </div>
                  <h3 className="mt-2 font-cond text-xl uppercase tracking-wide text-ink transition-colors group-hover:text-brand">
                    {p.name}
                  </h3>
                  <p className="mt-3 font-body text-sm text-steel-soft">
                    {p.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <Link
            to="/products"
            className="mt-10 inline-flex items-center gap-3 bg-brand px-6 py-3 font-cond text-sm uppercase tracking-wider text-white transition-colors hover:bg-brand-deep"
          >
            See all product lines{" "}
            <span className="font-mono text-[10px]">→</span>
          </Link>
        </div>
      </section>

      {/* SECTORS PREVIEW */}
      <section className="bg-brand-deep text-white">
        <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
          <SectionHead
            title="Where our steel lands."
            note="Six active sectors"
            tone="dark"
          />
          <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((s) => (
              <Link
                key={s.id}
                to="/sectors"
                className="group bg-brand-deep p-6 transition-colors hover:bg-brand"
              >
                <div className="font-cond text-lg uppercase tracking-wide transition-colors group-hover:text-gold">
                  {s.name}
                </div>
                <p className="mt-3 font-body text-xs text-white/60">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS PREVIEW */}
      <section className="bg-steel text-white">
        <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
          <SectionHead
            title="Six stages. One partner."
            note="Concept → Handover"
            tone="dark"
          />
          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((s, i) => (
              <div key={s.id} className="bg-steel p-6">
                <div className="font-mono text-[10px] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-2 font-cond text-base uppercase tracking-wide">
                  {s.name}
                </div>
                <p className="mt-2 font-body text-xs text-white/60">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <h3 className="font-display text-3xl leading-[0.95] uppercase sm:text-4xl">
              Built to hold the load.
            </h3>
            <div className="grid gap-5">
              {whyUs.map((item) => (
                <div
                  key={item}
                  className="border-t border-white/20 pt-4 font-body text-sm text-white/70"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg">
        <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-10 lg:py-20">
          <h2 className="font-display text-4xl leading-[0.95] text-ink uppercase sm:text-5xl">
            Let's talk steel.
          </h2>
          <div>
            <p className="font-body text-steel">
              Send drawings, a site address, or just a rough idea. We will come
              back with a practical, cost-conscious proposal.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-brand px-6 py-3 font-cond text-sm uppercase tracking-wider text-white transition-colors hover:bg-brand-deep"
              >
                Request a quote <span className="font-mono text-[10px]">→</span>
              </Link>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-3 border border-ink/20 px-6 py-3 font-cond text-sm uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-white"
              >
                {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
