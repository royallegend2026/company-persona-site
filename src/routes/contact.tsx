import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { PageHeader } from "@/components/PageHeader";
import { ADDRESS, EMAIL, PHONE, PHONE_TEL, WHATSAPP, products } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Royal Legend Metal Industries LLC, Al Bataeh Sharjah" },
      {
        name: "description",
        content:
          "Request a quotation for portacabins, fencing, shades, tents or containers. Call +971 56 881 4433, email royallgdmetal@gmail.com or send your drawings.",
      },
      { property: "og:title", content: "Contact Royal Legend Metal Industries" },
      {
        property: "og:description",
        content:
          "Talk to our Sharjah team about prefabricated and modular buildings anywhere in the UAE.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    line: products[0].name,
    brief: "",
  });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Website enquiry — ${form.line} — ${form.name || "New client"}`,
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nPhone: ${form.phone}\nProduct line: ${form.line}\n\nBrief:\n${form.brief}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const inputCls =
    "mt-2 w-full bg-surface border border-line px-3 py-3 font-body text-sm text-ink focus:outline-none focus:border-brand";
  const labelCls =
    "font-mono text-[10px] uppercase tracking-[0.2em] text-steel-soft";

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk steel."
        intro="Send drawings, a site address, or just a rough idea. Our team will come back to you with a practical, cost-conscious proposal."
      />

      <section className="bg-surface">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-24">
          <div className="space-y-3 lg:col-span-5">
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-start gap-4 border border-line bg-white p-5 transition-colors hover:border-brand"
            >
              <Phone className="mt-1 h-5 w-5 shrink-0 text-brand" />
              <span className="min-w-0">
                <span className={`block ${labelCls}`}>Phone</span>
                <span className="mt-1 block font-cond text-lg tracking-wide text-ink">
                  {PHONE}
                </span>
              </span>
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-4 border border-line bg-white p-5 transition-colors hover:border-brand"
            >
              <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-brand" />
              <span className="min-w-0">
                <span className={`block ${labelCls}`}>WhatsApp</span>
                <span className="mt-1 block font-cond text-lg tracking-wide text-ink">
                  Message us directly
                </span>
              </span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-start gap-4 border border-line bg-white p-5 transition-colors hover:border-brand"
            >
              <Mail className="mt-1 h-5 w-5 shrink-0 text-brand" />
              <span className="min-w-0">
                <span className={`block ${labelCls}`}>Email</span>
                <span className="mt-1 block font-cond text-lg tracking-wide break-all text-ink">
                  {EMAIL}
                </span>
              </span>
            </a>
            <div className="flex items-start gap-4 border border-line bg-white p-5">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand" />
              <span className="min-w-0">
                <span className={`block ${labelCls}`}>Facility</span>
                <span className="mt-1 block font-cond text-lg tracking-wide text-ink">
                  {ADDRESS}
                </span>
              </span>
            </div>
            <div className="border border-line bg-brand p-5 text-white">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
                Working hours
              </div>
              <p className="mt-2 font-body text-sm">
                Saturday to Thursday, 8:00 – 18:00. Friday by appointment.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={submit}
              className="border border-line bg-white p-6 lg:p-8"
            >
              <h2 className="font-display text-3xl text-ink uppercase">
                Enquiry form
              </h2>
              <p className="mt-2 font-body text-sm text-steel-soft">
                Fill this in and it will open your email app with the details
                ready to send.
              </p>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelCls}>
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputCls}
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label htmlFor="company" className={labelCls}>
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={form.company}
                    onChange={(e) =>
                      setForm({ ...form, company: e.target.value })
                    }
                    className={inputCls}
                    placeholder="Contractor / Developer"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelCls}>
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className={inputCls}
                    placeholder="+971 …"
                  />
                </div>
                <div>
                  <label htmlFor="line" className={labelCls}>
                    Product line
                  </label>
                  <select
                    id="line"
                    value={form.line}
                    onChange={(e) => setForm({ ...form, line: e.target.value })}
                    className={inputCls}
                  >
                    {products.map((p) => (
                      <option key={p.id}>{p.name}</option>
                    ))}
                    <option>Other / custom</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="brief" className={labelCls}>
                    Brief
                  </label>
                  <textarea
                    id="brief"
                    rows={5}
                    value={form.brief}
                    onChange={(e) =>
                      setForm({ ...form, brief: e.target.value })
                    }
                    className={inputCls}
                    placeholder="Site, quantities, timeline…"
                  />
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel-soft">
                  Opens your email app
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-brand px-6 py-3 font-cond text-sm uppercase tracking-wider text-white transition-colors hover:bg-brand-deep"
                >
                  Submit enquiry{" "}
                  <span className="font-mono text-[10px]">→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
