import Link from "next/link";
import SfuLogo from "@/components/atoms/SfuLogo";

const legalLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Footer() {
  return (
    <footer
      id="kontakt"
      aria-label="Seitenende"
      className="bg-black text-white/55 px-8 pt-10 pb-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Brand row */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 pb-6">
          <div className="flex items-center gap-3">
            <SfuLogo className="w-11 h-11" />

            <div className="leading-tight">
              <p className="text-sm font-semibold text-white/90 font-serif">
                Sportfreunde Urlau e.V.
              </p>
              <p className="text-xs text-red-blush mt-0.5">Seit 1921 · Urlau</p>
            </div>
          </div>

          <nav aria-label="Rechtliche Links">
            <ul className="flex gap-6 list-none p-0 m-0">
              {legalLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-[0.76rem] text-red-blush no-underline hover:text-gold-highlight transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Copyright bar */}
        <div className="pt-5 border-t border-white/12 text-[0.76rem] text-red-blush text-center sm:text-left">
          © {new Date().getFullYear()} Sportfreunde Urlau e.V. · Alle Rechte
          vorbehalten
        </div>
      </div>
    </footer>
  );
}
