import { Link } from "@tanstack/react-router";

import logo from "@/assets/royal-legend-logo.png.asset.json";
import { ADDRESS, EMAIL, PHONE, PHONE_TEL, products } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-brand-deep text-white">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 shrink-0 place-items-center bg-white p-1">
              <img
                src={logo.url}
                alt="Royal Legend Metal Industries LLC logo"
                width={48}
                height={48}
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </span>
            <span className="min-w-0 leading-none">
              <span className="block font-display text-lg tracking-tight text-white">
                ROYAL LEGEND
              </span>
              <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-white/50">
                Metal Industries LLC · Sharjah · UAE
              </span>
            </span>
          </div>
          <p className="mt-6 max-w-[46ch] font-body text-sm text-white/60">
            Engineered for performance. Built for purpose. Design, manufacturing,
            logistics and installation of prefabricated and modular buildings —
            under one roof in Al Bataeh, Sharjah.
          </p>
        </div>

        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
            Pages
          </div>
          <ul className="mt-4 space-y-2 font-cond text-sm uppercase tracking-wide text-white/80">
            <li>
              <Link to="/" className="hover:text-gold">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gold">
                About
              </Link>
            </li>
            <li>
              <Link to="/sectors" className="hover:text-gold">
                Sectors
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-gold">
                Products
              </Link>
            </li>
            <li>
              <Link to="/process" className="hover:text-gold">
                Process
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
            Contact
          </div>
          <ul className="mt-4 space-y-2 font-body text-sm text-white/80">
            <li>
              <a href={`tel:${PHONE_TEL}`} className="hover:text-gold">
                {PHONE}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="break-all hover:text-gold">
                {EMAIL}
              </a>
            </li>
            <li>{ADDRESS}</li>
          </ul>
          <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
            Product lines
          </div>
          <p className="mt-3 font-body text-xs text-white/60">
            {products
              .slice(0, 6)
              .map((p) => p.name.split(" & ")[0])
              .join(" · ")}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-2 px-4 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 sm:px-6 lg:px-10">
          <span>© 2026 Royal Legend Metal Industries LLC</span>
          <span>Engineered for Performance. Built for Purpose.</span>
        </div>
      </div>
    </footer>
  );
}
