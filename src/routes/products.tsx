import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHeader } from "@/components/PageHeader";
import { products } from "@/data/site";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Portacabins, Fencing, Shades & Containers | Royal Legend" },
      {
        name: "description",
        content:
          "Ten product lines from one Sharjah factory: portacabins, fencing, car parking shades, tents, containers, solar lighting, premium facilities and permanent modular buildings.",
      },
      { property: "og:title", content: "Product Portfolio — Royal Legend" },
      {
        property: "og:description",
        content:
          "Prefabricated and modular products manufactured, delivered and installed across the UAE.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="Ten product lines. One floor."
        intro="Everything below is designed, fabricated and finished in our own Al Bataeh facility, then delivered and installed by our own crews."
      />

      <section className="bg-surface">
        <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <article
                key={p.id}
                className="group flex flex-col border border-line bg-white transition-colors hover:border-brand"
              >
                <img
                  src={p.img}
                  alt={p.alt}
                  width={1024}
                  height={683}
                  loading="lazy"
                  className="aspect-[3/2] w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel-soft">
                    {p.spec}
                  </div>
                  <h2 className="mt-2 font-cond text-xl uppercase tracking-wide text-ink transition-colors group-hover:text-brand">
                    {p.name}
                  </h2>
                  <p className="mt-3 font-body text-sm text-steel-soft">
                    {p.desc}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-line pt-5">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 font-body text-[13px] text-steel"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 bg-brand" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}

            <Link
              to="/contact"
              className="grid min-h-[300px] place-items-center border-2 border-dashed border-brand/40 bg-brand/5 p-8 transition-colors hover:bg-brand/10"
            >
              <div className="text-center">
                <h2 className="font-cond text-xl uppercase tracking-wide text-ink">
                  Need something else?
                </h2>
                <p className="mx-auto mt-3 max-w-[32ch] font-body text-sm text-steel-soft">
                  Send us drawings or a written brief. We detail it, price it
                  and build it.
                </p>
                <span className="mt-6 inline-flex items-center gap-3 bg-brand px-5 py-3 font-cond text-sm uppercase tracking-wider text-white">
                  Request a quote{" "}
                  <span className="font-mono text-[10px]">→</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
