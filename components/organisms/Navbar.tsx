import NavLogo from "@/components/molecules/NavLogo";
import NavItem from "@/components/molecules/NavItem";
import { abteilungen } from "@/lib/abteilungen";

const navItems = [
  { label: "Startseite", href: "#", active: true },
  {
    label: "Verein ▾",
    href: "#verein",
    dropdown: [
      { label: "Termine", href: "#termine" },
      { label: "Vorstand", href: "#vorstand" },
      { label: "Ausschuss", href: "#" },
      { label: "Jahreshauptversammlung", href: "#" },
      { label: "Satzung", href: "#" },
      { label: "Chronik", href: "#" },
      { label: "Downloads", href: "#" },
    ],
  },
  {
    label: "Veranstaltungen ▾",
    href: "#",
    dropdown: [
      { label: "Faschingsnachmittag", href: "#" },
      { label: "9 Meter Turnier", href: "#" },
    ],
  },
  {
    label: "Abteilungen ▾",
    href: "/#abteilungen",
    dropdown: abteilungen.map((a) => ({
      label: `${a.name}`,
      href: `/abteilungen/${a.slug}`,
    })),
  },
  { label: "Impressum", href: "/impressum" },
];

export default function Navbar() {
  return (
    <nav
      aria-label="Hauptnavigation"
      className="sticky top-0 left-0 right-0 z-[100] bg-[rgba(143,13,23,0.97)] backdrop-blur-[12px] px-8 flex items-center justify-between h-[72px] shadow-[0_2px_20px_rgba(0,0,0,0.35)]"
    >
      <NavLogo />
      <ul className="hidden lg:flex list-none">
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            label={item.label}
            href={item.href}
            active={item.active}
            dropdown={item.dropdown}
          />
        ))}
      </ul>
    </nav>
  );
}
