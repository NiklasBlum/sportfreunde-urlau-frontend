import Link from "next/link";
import SfuLogo from "@/components/atoms/SfuLogo";

const vereinLinks = [
  { label: "Über uns", href: "#" },
  { label: "Vorstand", href: "#vorstand" },
  { label: "Ausschuss", href: "#" },
  { label: "Satzung", href: "#" },
  { label: "Chronik", href: "#" },
  { label: "Downloads", href: "#" },
];

const abteilungsLinks = [
  { label: "Tischtennis", href: "#" },
  { label: "Sportmädels", href: "#" },
  { label: "Radsport", href: "#" },
  { label: "Kinderturnen", href: "#" },
  { label: "Langlauf", href: "#" },
  { label: "Alle anzeigen", href: "#abteilungen" },
];

const veranstaltungsLinks = [
  { label: "Faschingsnachmittag", href: "#" },
  { label: "9 Meter Turnier", href: "#" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-white text-[0.78rem] font-semibold tracking-[0.1em] uppercase mb-[1.1rem]">
        {title}
      </h4>
      {links.map((l) => (
        <Link
          key={l.label}
          href={l.href}
          className="block text-[#c8b8ba] no-underline text-[0.83rem] mb-[0.55rem] transition-colors duration-150 hover:text-[#f0c060] focus-visible:outline-[3px] focus-visible:outline-[#f0c060] focus-visible:outline-offset-[3px] focus-visible:rounded"
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer id="kontakt" className="bg-[#100304] text-white/55 pt-12 pb-8 px-8">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <SfuLogo className="w-12 h-12" />
            <div className="font-serif text-white text-[0.95rem] leading-[1.3]">
              Sportfreunde Urlau e.V.
            </div>
          </div>
          <p className="text-[#c8b8ba] text-[0.84rem] leading-[1.75] mb-[1.2rem]">
            Breitensport für die ganze Familie im Allgäu. Gegründet mit dem
            Ziel, Sport und Gemeinschaft in Urlau zu fördern.
          </p>
          <p className="text-[0.78rem] text-[#c8b8ba]">
            📍 Urlau · Baden-Württemberg · Allgäu
          </p>
        </div>

        <FooterColumn title="Verein" links={vereinLinks} />
        <FooterColumn title="Abteilungen" links={abteilungsLinks} />
        <FooterColumn title="Veranstaltungen" links={veranstaltungsLinks} />
      </div>

      <div className="pt-[1.8rem] border-t border-white/[0.12] flex flex-col sm:flex-row justify-between items-center gap-4 text-[0.76rem] text-[#c8b8ba]">
        <span>© 2026 Sportfreunde Urlau e.V. · Alle Rechte vorbehalten</span>
        <div className="flex gap-6">
          {["Impressum", "Datenschutz", "Kontakt"].map((label) => (
            <Link
              key={label}
              href="#"
              className="text-[#c8b8ba] no-underline hover:text-[#f0c060] transition-colors duration-150 focus-visible:outline-[3px] focus-visible:outline-[#f0c060] focus-visible:outline-offset-[3px] focus-visible:rounded"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
