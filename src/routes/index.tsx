import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import heroFactory from "@/assets/hero-factory.jpg";
import productPortacabins from "@/assets/product-portacabins.jpg";
import productFencing from "@/assets/product-fencing.jpg";
import productParking from "@/assets/product-parking.jpg";
import productTents from "@/assets/product-tents.jpg";
import productContainers from "@/assets/product-containers.jpg";
import productSolar from "@/assets/product-solar.jpg";
import productPremium from "@/assets/product-premium.jpg";
import productSpecialty from "@/assets/product-specialty.jpg";
import productWarehouse from "@/assets/product-warehouse.jpg";
import productCamps from "@/assets/product-camps.jpg";
import processCraneset from "@/assets/process-craneset.jpg";

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
  component: Index,
});

const PHONE = "+971 56 881 4433";
const PHONE_TEL = "+971568814433";
const EMAIL = "royallgdmetal@gmail.com";

const sectors = [
  {
    id: "S-01",
    name: "Construction & Infrastructure",
    desc: "Site offices, worker accommodation, security facilities, storage and project support infrastructure.",
  },
  {
    id: "S-02",
    name: "Government & Public Sector",
    desc: "Temporary and permanent modular facilities, offices, clinics and public utilities.",
  },
  {
    id: "S-03",
    name: "Hospitality, Farms & Resorts",
    desc: "Farmhouses, resort cottages, majlis, staff accommodation and custom modular structures.",
  },
  {
    id: "S-04",
    name: "Oil & Gas and Industrial",
    desc: "Modular offices, accommodation, security facilities, utility buildings and containers.",
  },
  {
    id: "S-05",
    name: "Real Estate & Development",
    desc: "Sales offices, site facilities, accommodation, security booths and support buildings.",
  },
  {
    id: "S-06",
    name: "Commercial & Industrial",
    desc: "Offices, workshops, storage facilities, utility buildings, shelters and custom solutions.",
  },
];

const products = [
  {
    id: "RL-01",
    name: "Portacabins & Site Offices",
    spec: "Rapid deployment",
    desc: "Site offices, labour and staff accommodation, security cabins, ablution units, kitchens and welfare facilities.",
    img: productPortacabins,
    alt: "Two-storey modular portacabin site office with dark green trim on a UAE construction site",
  },
  {
    id: "RL-02",
    name: "Fencing & Site Security",
    spec: "Temporary & permanent",
    desc: "Chain link, welded mesh, panel hoarding and perimeter fencing with pedestrian and vehicle gates.",
    img: productFencing,
    alt: "Galvanized chain link perimeter fencing around a desert construction site",
  },
  {
    id: "RL-03",
    name: "Car Parking & Shade Structures",
    spec: "Custom spans",
    desc: "Car parking shades, vehicle shelters, walkway shades and custom structural shade systems.",
    img: productParking,
    alt: "Row of dark green steel car parking shade structures at a UAE commercial plaza",
  },
  {
    id: "RL-04",
    name: "Tents & Temporary Structures",
    spec: "Site · storage · event",
    desc: "Storage tents, site tents, PVC tents, event tents and customized temporary tent structures.",
    img: productTents,
    alt: "White PVC event and storage tent in a desert compound at dusk",
  },
  {
    id: "RL-05",
    name: "Containers & Containerized Units",
    spec: "20ft / 40ft",
    desc: "Office, storage, kitchen and bespoke containerized units — modified, insulated and finished.",
    img: productContainers,
    alt: "Dark green converted shipping container office unit in a container yard",
  },
  {
    id: "RL-06",
    name: "Solar, Lighting & Infrastructure",
    spec: "Off-grid ready",
    desc: "Solar street lighting, site poles, security and surveillance posts and yard infrastructure.",
    img: productSolar,
    alt: "Solar-powered street lights on steel poles glowing at a site at dusk",
  },
  {
    id: "RL-07",
    name: "Premium Facilities",
    spec: "Full fit-out",
    desc: "Permanent public utility buildings, reception buildings, majlis and premium-finish modular spaces.",
    img: productPremium,
    alt: "Premium modular facility with glass facade and dark green steel cladding",
  },
  {
    id: "RL-08",
    name: "Specialty Products",
    spec: "Bespoke",
    desc: "Flag poles, diesel tanks, structural and steel frames, interlock tiles and custom metal fabrication.",
    img: productSpecialty,
    alt: "Custom steel staircase and frames being fabricated on a workshop floor",
  },
  {
    id: "RL-09",
    name: "Specialized Modular Facilities",
    spec: "Project-specific",
    desc: "Control rooms, depot facilities, reception buildings and other bespoke engineered modular solutions.",
    img: productWarehouse,
    alt: "Modular steel warehouse with roll-up doors and dark green trim in the desert",
  },
  {
    id: "RL-10",
    name: "Permanent Installations",
    spec: "G+1 & turnkey",
    desc: "Permanent buildings with prefabrication — G+1 buildings, mosques and multi-storey modular camps.",
    img: productCamps,
    alt: "Two-storey modular accommodation camp with external stairs on a UAE site",
  },
];

const processSteps = [
  {
    id: "P-01",
    name: "Requirement & Consultation",
    desc: "Understanding project scope, site conditions and functional requirements.",
  },
  {
    id: "P-02",
    name: "Design & Engineering",
    desc: "Layouts, structural design and shop drawings tailored to the site.",
  },
  {
    id: "P-03",
    name: "Quotation & Approval",
    desc: "Transparent pricing and client sign-off before production begins.",
  },
  {
    id: "P-04",
    name: "Manufacturing",
    desc: "Fabrication under controlled conditions at our Sharjah facility.",
  },
  {
    id: "P-05",
    name: "Delivery & Installation",
    desc: "Coordinated logistics, crane-set installation and MEP tie-in.",
  },
  {
    id: "P-06",
    name: "Handover & After-Sales",
    desc: "Formal handover with ongoing support as required.",
  },
];

const whyUs = [
  "End-to-end capability — concept, design, manufacturing, transport, installation and after-sales.",
  "Practical, cost-conscious engineering that balances quality, functionality and budget.",
  "Speed of installation with engineering integrity and premium finishing options.",
  "Chamber of Commerce member — structured, transparent and accountable delivery.",
];

function Index() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    line: "Portacabins & site offices",
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
    <div className="min-h-screen bg-surface">
      {/* NAV */}
      <nav className="sticky top-0 z-50 w-full border-b border-line bg-surface/90 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 lg:px-10">
          <a href="#top" className="flex items-center gap-3">
            <div className="grid h-8 w-8 place-items-center bg-brand">
              <span className="font-display text-sm text-white">R</span>
            </div>
            <div className="leading-none">
              <div className="font-display text-lg tracking-tight text-ink">
                ROYAL LEGEND
              </div>
              <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-steel-soft">
                Metal Industries LLC · Sharjah
              </div>
            </div>
          </a>
          <div className="hidden items-center gap-8 font-cond text-[13px] uppercase tracking-wider text-steel md:flex">
            <a href="#about" className="transition-colors hover:text-brand">
              About
            </a>
            <a href="#sectors" className="transition-colors hover:text-brand">
              Sectors
            </a>
            <a href="#products" className="transition-colors hover:text-brand">
              Products
            </a>
            <a href="#process" className="transition-colors hover:text-brand">
              Process
            </a>
            <a href="#contact" className="transition-colors hover:text-brand">
              Contact
            </a>
          </div>
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden items-center gap-2 bg-brand px-4 py-2 font-cond text-[13px] uppercase tracking-wider text-white transition-colors hover:bg-brand-deep md:inline-flex"
          >
            {PHONE}
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden bg-surface">
        <div className="mx-auto grid max-w-[1440px] items-start gap-10 px-6 py-16 lg:grid-cols-12 lg:px-10 lg:py-24">
          <div className="flex flex-col gap-8 lg:col-span-7">
            <div className="flex animate-hero-rise items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand">
                / 01 — Prefabricated & Modular Building Solutions
              </span>
              <span className="h-px flex-1 bg-line" />
              <span className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-steel-soft sm:block">
                Al Bataeh · Sharjah
              </span>
            </div>
            <h1
              className="animate-hero-rise font-display text-[clamp(3rem,8vw,7.5rem)] leading-[.85] tracking-tight text-ink uppercase"
              style={{ animationDelay: "80ms" }}
            >
              Engineered
              <br />
              for <span className="text-brand">Performance.</span>
            </h1>
            <p
              className="max-w-[52ch] animate-hero-rise font-body text-lg text-pretty text-steel"
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
              <a
                href="#products"
                className="inline-flex items-center gap-3 bg-brand px-5 py-3 font-cond text-sm uppercase tracking-wider text-white transition-colors hover:bg-brand-deep"
              >
                View Portfolio <span className="font-mono text-[10px]">→</span>
              </a>
              <a
                href="#process"
                className="inline-flex items-center gap-3 border border-ink/20 px-5 py-3 font-cond text-sm uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-white"
              >
                Delivery Process
              </a>
            </div>
            <div
              className="grid animate-hero-rise grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4"
              style={{ animationDelay: "320ms" }}
            >
              {[
                ["Product Lines", "10+"],
                ["Sectors Served", "6"],
                ["Lifecycle", "End-to-End"],
                ["Based In", "Sharjah"],
              ].map(([label, value]) => (
                <div key={label} className="bg-surface p-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel-soft">
                    {label}
                  </div>
                  <div className="mt-1 font-display text-3xl text-ink">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative lg:col-span-5">
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
              className="skew-panel animate-panel-sweep absolute -bottom-6 -left-6 w-56 bg-brand p-4 text-white"
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
        <div
          className="h-1 origin-left animate-rail-grow bg-brand"
          style={{ animationDelay: "600ms" }}
        />
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-surface">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-20 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand">
              / 02 — About
            </div>
            <h2 className="mt-3 font-display text-5xl leading-[.9] text-ink uppercase">
              A manufacturer, not a reseller.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:col-span-8">
            <div className="space-y-5">
              <p className="font-body text-[15px] leading-relaxed text-pretty text-steel">
                Royal Legend Metal Industries LLC is a Sharjah-based
                manufacturer and supplier of prefabricated, modular and
                portable building solutions, headquartered in Al Bataeh,
                Sharjah. We were founded to meet a straightforward market
                need: practical, durable and cost-effective site
                infrastructure for temporary, semi-permanent and permanent
                applications across the UAE.
              </p>
              <p className="font-body text-[15px] leading-relaxed text-pretty text-steel">
                Our capabilities cover the complete project lifecycle — from
                initial concept, design and engineering, through
                manufacturing, transportation, installation and after-sales
                coordination. That makes us not simply a supplier of portable
                buildings, but a coordinated partner in delivering modular and
                turnkey site infrastructure.
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
                    className="border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-steel-soft"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="border border-line bg-surface p-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">
                  Vision
                </div>
                <p className="mt-2 font-body text-sm text-ink">
                  To become a trusted UAE leader in prefabricated and modular
                  building solutions — recognized for engineering excellence,
                  quality manufacturing and dependable delivery.
                </p>
              </div>
              <div className="border border-line bg-surface p-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">
                  Mission
                </div>
                <p className="mt-2 font-body text-sm text-ink">
                  To design, manufacture and deliver modular solutions of
                  consistent quality, backed by sound engineering, careful
                  safety practice and reliable timelines.
                </p>
              </div>
              <div className="border border-line bg-surface p-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">
                  Values
                </div>
                <p className="mt-2 font-body text-sm text-ink">
                  Quality · Integrity · Safety · Reliability · Innovation ·
                  Customer Focus.
                </p>
              </div>
              <div className="border border-line bg-brand p-5 text-white">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
                  Design & Build
                </div>
                <p className="mt-2 font-body text-sm">
                  Concept, engineering, manufacturing, transportation,
                  installation, testing and handover — under one roof.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section id="sectors" className="bg-brand-deep text-white">
        <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">
                / 03 — Sectors Served
              </div>
              <h2 className="mt-3 font-display text-5xl leading-[.9] text-white uppercase">
                Where our steel lands.
              </h2>
            </div>
            <div className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 md:block">
              6 active sectors
            </div>
          </div>
          <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
            {sectors.map((s) => (
              <div
                key={s.id}
                className="group bg-brand-deep p-5 transition-colors hover:bg-brand"
              >
                <div className="font-mono text-[10px] text-white/50">
                  {s.id}
                </div>
                <div className="mt-2 font-cond text-lg uppercase tracking-wide transition-colors group-hover:text-gold">
                  {s.name}
                </div>
                <p className="mt-2 font-body text-xs text-white/60">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="bg-surface">
        <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand">
                / 04 — Product Portfolio
              </div>
              <h2 className="mt-3 font-display text-5xl leading-[.9] text-ink uppercase">
                Ten product lines. One floor.
              </h2>
            </div>
            <div className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-steel-soft md:block">
              RL-01 → RL-10
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <div
                key={p.id}
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
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">
                      {p.id}
                    </span>
                    <span className="font-mono text-[10px] text-steel-soft">
                      {p.spec}
                    </span>
                  </div>
                  <h3 className="mt-2 font-cond text-xl uppercase tracking-wide text-ink transition-colors group-hover:text-brand">
                    {p.name}
                  </h3>
                  <p className="mt-2 font-body text-sm text-steel-soft">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
            <a
              href="#contact"
              className="group grid min-h-[280px] place-items-center border-2 border-dashed border-brand/40 bg-brand/5 p-8 transition-colors hover:bg-brand/10"
            >
              <div className="text-center">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand">
                  / Custom
                </div>
                <h3 className="mt-3 font-cond text-xl uppercase tracking-wide text-ink">
                  Need something else?
                </h3>
                <p className="mx-auto mt-2 max-w-[30ch] font-body text-sm text-steel-soft">
                  Send us drawings or a brief. We detail, quote and build it.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="bg-steel text-white">
        <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">
                / 05 — Project Delivery Process
              </div>
              <h2 className="mt-3 font-display text-5xl leading-[.9] text-white uppercase">
                Six stages. One partner.
              </h2>
            </div>
            <div className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 md:block">
              Concept → Handover
            </div>
          </div>
          <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-3 lg:grid-cols-6">
            {processSteps.map((s) => (
              <div key={s.id} className="bg-steel p-5">
                <div className="font-mono text-[10px] text-gold">{s.id}</div>
                <div className="mt-2 font-cond text-base uppercase tracking-wide">
                  {s.name}
                </div>
                <p className="mt-2 font-body text-xs text-white/60">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
            <img
              src={processCraneset}
              alt="Tower crane lowering a dark green modular cabin onto a concrete pad at a UAE site"
              width={1440}
              height={900}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover"
            />
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">
                / 06 — Why Royal Legend
              </div>
              <h3 className="mt-3 font-display text-4xl leading-[.95] text-white uppercase">
                Built to hold the load.
              </h3>
              <div className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {whyUs.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1 font-mono text-[10px] text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="font-body text-sm text-white/70">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-surface">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-20 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand">
              / 07 — Contact
            </div>
            <h2 className="mt-3 font-display text-5xl leading-[.9] text-ink uppercase">
              Let's talk steel.
            </h2>
            <p className="mt-5 max-w-[42ch] font-body text-[15px] text-pretty text-steel">
              Send drawings, a site address, or just a rough idea. Our team
              will get back to you with a practical, cost-conscious proposal.
            </p>
            <div className="mt-8 space-y-3">
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center justify-between border border-line bg-white px-4 py-3 transition-colors hover:border-brand"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel-soft">
                  Phone / WhatsApp
                </span>
                <span className="font-cond uppercase tracking-wide text-ink">
                  {PHONE}
                </span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center justify-between gap-4 border border-line bg-white px-4 py-3 transition-colors hover:border-brand"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel-soft">
                  Email
                </span>
                <span className="font-cond tracking-wide break-all text-ink">
                  {EMAIL}
                </span>
              </a>
              <div className="flex items-center justify-between border border-line bg-white px-4 py-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel-soft">
                  Facility
                </span>
                <span className="font-cond tracking-wide text-ink">
                  Al Bataeh, Sharjah, UAE
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <form
              onSubmit={submit}
              className="border border-line bg-white p-6 lg:p-8"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand">
                Enquiry Form
              </div>
              <div className="mt-5 grid gap-5 md:grid-cols-2">
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
                    rows={4}
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

      {/* FOOTER */}
      <footer className="bg-brand-deep text-white">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-6 py-12 lg:grid-cols-4 lg:px-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="grid h-8 w-8 place-items-center bg-gold">
                <span className="font-display text-sm text-brand-deep">R</span>
              </div>
              <div className="leading-none">
                <div className="font-display text-lg tracking-tight text-white">
                  ROYAL LEGEND
                </div>
                <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/50">
                  Metal Industries LLC · Sharjah · UAE
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-[42ch] font-body text-sm text-white/60">
              Engineered for performance. Built for purpose. Design,
              manufacturing, logistics and installation under one roof.
            </p>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
              Products
            </div>
            <ul className="mt-4 space-y-2 font-cond text-sm uppercase tracking-wide">
              <li>Portacabins</li>
              <li>Fencing</li>
              <li>Parking shades</li>
              <li>Containers</li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
              Contact
            </div>
            <ul className="mt-4 space-y-2 font-body text-sm text-white/80">
              <li>
                <a href={`tel:${PHONE_TEL}`} className="hover:text-white">
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="break-all hover:text-white"
                >
                  {EMAIL}
                </a>
              </li>
              <li>Al Bataeh, Sharjah, UAE</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-2 px-6 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 lg:px-10">
            <span>© 2026 Royal Legend Metal Industries LLC</span>
            <span>Engineered for Performance. Built for Purpose.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
