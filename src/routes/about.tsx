import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHeader, SectionHead } from "@/components/PageHeader";
import processCraneset from "@/assets/process-craneset.jpg";
import { values, whyUs } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Royal Legend Metal Industries LLC, Sharjah" },
      {
        name: "description",
        content:
          "A Sharjah-based manufacturer of prefabricated, modular and portable buildings — our story, vision, mission and the values behind every unit we build.",
      },
      {
        property: "og:title",
        content: "About Royal Legend Metal Industries LLC",
      },
      {
        property: "og:description",
        content:
          "Manufacturer, not reseller. Design, engineering, manufacturing, transport and installation under one roof in Al Bataeh, Sharjah.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A manufacturer, not a reseller."
        intro="Royal Legend Metal Industries LLC is a Sharjah-based manufacturer and supplier of prefabricated, modular and portable building solutions, headquartered in Al Bataeh, Sharjah."
      />

      <section className="bg-surface">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-24">
          <div className="space-y-6 lg:col-span-7">
            <h2 className="font-display text-3xl leading-[0.95] text-ink uppercase sm:text-4xl">
              Our story
            </h2>
            <p className="font-body text-[15px] leading-relaxed text-pretty text-steel">
              We were founded to meet a straightforward market need: practical,
              durable and cost-effective site infrastructure for temporary,
              semi-permanent and permanent applications across the United Arab
              Emirates. Too many projects were being served by traders passing
              on someone else's product, with nobody accountable when a unit
              arrived late or wrong.
            </p>
            <p className="font-body text-[15px] leading-relaxed text-pretty text-steel">
              Our capabilities cover the complete project lifecycle — from
              initial concept, design and engineering, through manufacturing,
              transportation, installation and after-sales coordination. That
              makes us not simply a supplier of portable buildings, but a
              coordinated partner in delivering modular and turnkey site
              infrastructure.
            </p>
            <p className="font-body text-[15px] leading-relaxed text-pretty text-steel">
              Everything is produced in our own facility, by our own team, to
              drawings we have prepared and you have approved. When a question
              comes up on site, the people who built the unit are the people who
              answer it.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "Design & engineering",
                "Manufacturing",
                "Transportation",
                "Installation",
                "After-sales",
              ].map((chip) => (
                <span
                  key={chip}
                  className="border border-line px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-steel-soft"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4 lg:col-span-5">
            <div className="border border-line bg-white p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">
                Vision
              </div>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink">
                To become a trusted UAE leader in prefabricated and modular
                building solutions — recognized for engineering excellence,
                quality manufacturing and dependable delivery.
              </p>
            </div>
            <div className="border border-line bg-white p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">
                Mission
              </div>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink">
                To design, manufacture and deliver modular solutions of
                consistent quality, backed by sound engineering, careful safety
                practice and reliable timelines.
              </p>
            </div>
            <div className="border border-line bg-brand p-6 text-white">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
                Design & Build
              </div>
              <p className="mt-3 font-body text-sm leading-relaxed">
                Concept, engineering, manufacturing, transportation,
                installation, testing and handover — under one roof.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg">
        <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
          <SectionHead title="What we stand for." note="Six working values" />
          <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.name} className="bg-bg p-6">
                <h3 className="font-cond text-lg uppercase tracking-wide text-brand">
                  {v.name}
                </h3>
                <p className="mt-3 font-body text-sm text-steel">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-steel text-white">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-10 lg:py-24">
          <img
            src={processCraneset}
            alt="Tower crane lowering a dark green modular cabin onto a concrete pad at a UAE site"
            width={1440}
            height={900}
            loading="lazy"
            className="aspect-[16/10] w-full object-cover"
          />
          <div>
            <h2 className="font-display text-4xl leading-[0.95] text-white uppercase sm:text-5xl">
              Built to hold the load.
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {whyUs.map((item, i) => (
                <div key={i} className="border-t border-white/20 pt-4">
                  <div className="font-mono text-[10px] text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="mt-2 font-body text-sm text-white/70">{item}</p>
                </div>
              ))}
            </div>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-3 bg-gold px-6 py-3 font-cond text-sm uppercase tracking-wider text-brand-deep transition-colors hover:bg-white"
            >
              Talk to our team <span className="font-mono text-[10px]">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
