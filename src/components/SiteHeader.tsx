import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

import logo from "@/assets/royal-legend-logo.png.asset.json";
import { PHONE, PHONE_TEL } from "@/data/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/sectors", label: "Sectors" },
  { to: "/products", label: "Products" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-surface/95 backdrop-blur-sm">
      <div className="mx-auto grid h-16 max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-6 lg:h-20 lg:px-10">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src={logo.url}
            alt="Royal Legend Metal Industries LLC logo"
            width={96}
            height={64}
            className="h-9 w-auto shrink-0 object-contain mix-blend-multiply lg:h-11"
          />
          <span className="min-w-0 leading-none">
            <span className="block truncate font-display text-base tracking-tight text-ink lg:text-lg">
              ROYAL LEGEND
            </span>
            <span className="block truncate font-mono text-[9px] uppercase tracking-[0.2em] text-steel-soft">
              Metal Industries LLC · Sharjah
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-6 font-cond text-[13px] uppercase tracking-wider text-steel lg:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-brand" }}
                className="transition-colors hover:text-brand"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden items-center gap-2 bg-brand px-4 py-2 font-cond text-[13px] whitespace-nowrap uppercase tracking-wider text-white transition-colors hover:bg-brand-deep sm:inline-flex"
          >
            <Phone className="h-3.5 w-3.5" />
            {PHONE}
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center border border-line text-ink transition-colors hover:border-brand hover:text-brand lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-surface lg:hidden">
          <div className="mx-auto flex max-w-[1440px] flex-col px-4 py-3 sm:px-6">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-brand" }}
                className="border-b border-line py-3 font-cond text-base uppercase tracking-wider text-steel last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-4 inline-flex items-center justify-center gap-2 bg-brand px-4 py-3 font-cond text-sm uppercase tracking-wider text-white"
            >
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
