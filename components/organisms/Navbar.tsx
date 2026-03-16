"use client";

import { useState } from "react";
import Link from "next/link";
import NavLogo from "@/components/molecules/NavLogo";
import NavItem from "@/components/molecules/NavItem";
import { abteilungen } from "@/lib/abteilungen";

const navItems = [
  { label: "Startseite", href: "/", active: false },
  {
    label: "Verein",
    href: "/verein",
    dropdown: [
      { label: "Vorstand", href: "/verein#vorstand" },
      { label: "Ausschuss", href: "/verein#ausschuss" },
      { label: "Downloads", href: "/downloads" },
    ],
  },
  {
    label: "Abteilungen",
    href: "/#abteilungen",
    dropdown: abteilungen.map((a) => ({
      label: a.name,
      href: `/abteilungen/${a.slug}`,
    })),
  },
  {
    label: "Veranstaltungen",
    href: "/veranstaltungen",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const close = () => {
    setMenuOpen(false);
    setOpenSection(null);
  };

  const toggleSection = (label: string) =>
    setOpenSection((prev) => (prev === label ? null : label));

  return (
    <>
      <nav
        aria-label="Hauptnavigation"
        className="sticky top-0 left-0 right-0 z-100 bg-red backdrop-blur-md px-6 lg:px-8 flex items-center justify-between h-16 lg:h-18 shadow-[0_2px_20px_rgba(0,0,0,0.35)]"
      >
        <NavLogo />

        {/* Desktop nav */}
        <ul className="hidden lg:flex list-none">
          {navItems.map((item) => (
            <NavItem
              key={item.label}
              label={item.dropdown ? `${item.label} ▾` : item.label}
              href={item.href}
              // active={item.active}
              dropdown={item.dropdown}
            />
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="lg:hidden cursor-pointer flex flex-col justify-center items-center w-10 h-10 gap-1.25 rounded-md hover-animation focus-visible:outline-[3px] focus-visible:outline-gold-highlight focus-visible:outline-offset-[3px]"
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span
            className={`block w-6 h-[2px] bg-white rounded-full transition-all duration-200 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block w-6 h-[2px] bg-white rounded-full transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-[2px] bg-white rounded-full transition-all duration-200 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-99 flex flex-col"
          style={{ top: "var(--navbar-height-mobile)" }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={close}
            aria-hidden="true"
          />

          {/* Panel */}
          <div
            className="relative bg-red-dark w-full overflow-y-auto shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
            style={{ maxHeight: "calc(100dvh - var(--navbar-height-mobile))" }}
          >
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-white/[0.08]">
                {item.dropdown ? (
                  <>
                    <button
                      className="w-full cursor-pointer flex items-center justify-between px-6 py-4 text-white text-[0.88rem] font-semibold uppercase tracking-[0.07em] hover:bg-black/20 transition-colors duration-150"
                      onClick={() => toggleSection(item.label)}
                      aria-expanded={openSection === item.label}
                    >
                      {item.label}
                      <span
                        className={`text-gold-highlight transition-transform duration-200 ${openSection === item.label ? "rotate-180" : ""}`}
                      >
                        ▾
                      </span>
                    </button>
                    {openSection === item.label && (
                      <div className="bg-black/20">
                        {item.dropdown.map((sub, i) => (
                          <Link
                            key={`${sub.href}-${i}`}
                            href={sub.href}
                            onClick={close}
                            className="block px-8 py-3 text-red-subtle text-[0.85rem] border-b border-white/[0.05] last:border-b-0 hover:text-gold-highlight hover:bg-black/10 transition-colors duration-150 no-underline"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={close}
                    className={`block px-6 py-4 text-[0.88rem] font-semibold uppercase tracking-[0.07em] transition-colors duration-150 no-underline hover:bg-black/20 ${item.active ? "text-gold-highlight" : "text-white"}`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
