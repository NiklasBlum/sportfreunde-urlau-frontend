import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import SectionLabel from "@/components/atoms/SectionLabel";
import Section from "@/components/atoms/Section";
import { Headline } from "@/components/atoms/Headline";

export const metadata: Metadata = {
  title: "Sportmädels – Sportfreunde Urlau e.V.",
  description:
    "Turnen, Ausflüge, Fasching und mehr – die Sportmädels der Sportfreunde Urlau e.V.",
};

const activities = [
  {
    icon: "💃",
    label: "Faschingstanz",
    desc: "Jedes Jahr erarbeitet die Gruppe eine eigene Choreografie für den Faschingsnachmittag.",
  },
  {
    icon: "🚵‍♀️",
    label: "Mountainbike",
    desc: "Gemeinsame MTB-Touren durch das Allgäu – von entspannt bis schweißtreibend.",
  },
  {
    icon: "🥾",
    label: "Wandern & Walking",
    desc: "Winterwanderungen, Waldwege und Seenrunden halten die Gruppe fit und verbunden.",
  },
  {
    icon: "✈️",
    label: "Jahresausflug",
    desc: "Jährliche Ausflüge führten die Sportmädels schon nach Füssen, ins Donautal und mehr.",
  },
  {
    icon: "🎄",
    label: "Weihnachtsfeier",
    desc: "Ob Waldweg, Weihnachtsmarkt oder Krippe – die Jahresabschlussfeier ist jedes Mal ein Highlight.",
  },
  {
    icon: "🤸",
    label: "Gymastik & Tanz",
    desc: "Regelmäßiges Turnen und Tanzen unter der Leitung von Brigitte D.",
  },
];

const recentEvents = [
  {
    date: "Feb 2026",
    title: 'Hexentanz "Abracadabra"',
    desc: "Neun geheimnisvolle Hexen betraten die vollbesetzte Bühne und verwandelten den Faschingsabend in ein Spektakel aus Zauber und Freude.",
  },
  {
    date: "Feb 2026",
    title: "Weiberfasnet Leutkirch",
    desc: 'Die Urlauer-Clowns zogen unter dem Motto "Helden der Kindheit" durch Leutkirch – trotz schlechter Wetterbedingungen mit bester Stimmung.',
  },
  {
    date: "Dez 2025",
    title: "Hafenweihnacht Lindau",
    desc: "Mit Zug und guter Laune nach Lindau: Weihnachtsmarkt, Lichterglanz am See und ein festlicher Abend beim Italiener.",
  },
  {
    date: "Okt 2025",
    title: "Jahresausflug Füssen",
    desc: "Altstadtführung, Kalvarienberg und der Lechfall – 14 Sportmädels erlebten einen abwechslungsreichen Ausflugstag im Allgäu.",
  },
  {
    date: "Feb 2025",
    title: 'Faschingstanz "Im Himmel ist der Teufel los"',
    desc: "Engel, Teufel und ein mitreißender Tanz – choreografiert von Brigitte D., mit Kostümen von Moni.",
  },
];

const team = [
  { role: "Abteilungsleiterin", name: "Tanja" },
  { role: "Sportleiterin & Choreografie", name: "Brigitte D." },
  { role: "Kostüme", name: "Moni" },
];

export default function SportmaedelsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <Section className="bg-blue">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel light>Abteilung</SectionLabel>
              <Headline level="h1">Sportmädels</Headline>

              <p className="text-[#f0dde0] text-[1rem] leading-[1.75] max-w-[480px]">
                Sport, Gemeinschaft und Spaß – die Sportmädels sind immer in
                Bewegung. Vom Faschingstanz über MTB-Touren bis zur
                Weihnachtsfeier ist jede Saison ein Erlebnis.
              </p>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden hidden lg:block">
              <Image
                src="/abteilungen/sportmaedels.webp"
                alt="Die Sportmädels"
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 50vw, 600px"
                priority
              />
            </div>
          </div>
        </Section>

        {/* Activities */}
        <Section>
          <SectionLabel>Was wir machen</SectionLabel>
          <h2 className="font-serif text-[clamp(1.6rem,2.6vw,2.2rem)] font-bold text-[#1a1a1a] leading-[1.15] mb-8">
            Unsere Aktivitäten
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {activities.map(({ icon, label, desc }) => (
              <div
                key={label}
                className="bg-[#f2eeeb] rounded-xl p-6 border border-black/[0.06]"
              >
                <div className="text-[1.8rem] mb-3" aria-hidden="true">
                  {icon}
                </div>
                <div className="font-semibold text-[#1a1a1a] text-[0.95rem] mb-1.5">
                  {label}
                </div>
                <p className="text-[#4a5260] text-[0.87rem] leading-[1.7]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Recent events */}
        <Section className="bg-[#f2eeeb] border-t border-b border-black/[0.06]">
          <SectionLabel>Rückblick</SectionLabel>
          <h2 className="font-serif text-[clamp(1.6rem,2.6vw,2.2rem)] font-bold text-[#1a1a1a] leading-[1.15] mb-8">
            Aktuelle Berichte
          </h2>
          <div className="flex flex-col gap-px bg-black/[0.06] rounded-xl overflow-hidden border border-black/[0.08]">
            {recentEvents.map(({ date, title, desc }) => (
              <div
                key={title}
                className="bg-white px-6 py-5 flex gap-6 items-start"
              >
                <div className="shrink-0 w-[4.5rem] text-center pt-0.5">
                  <span className="inline-block text-[0.72rem] font-semibold tracking-[0.1em] uppercase text-[#b00e1b] bg-[#b00e1b]/[0.08] rounded-md px-2 py-1 leading-none">
                    {date}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-[0.95rem] text-[#1a1a1a] mb-1">
                    {title}
                  </div>
                  <p className="text-[#4a5260] text-[0.87rem] leading-[1.7]">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Team */}
        <Section>
          <SectionLabel>Das Team</SectionLabel>
          <h2 className="font-serif text-[clamp(1.6rem,2.6vw,2.2rem)] font-bold text-[#1a1a1a] leading-[1.15] mb-8">
            Leitung & Organisation
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-[640px]">
            {team.map(({ role, name }) => (
              <div
                key={name}
                className="bg-[#f2eeeb] rounded-xl p-5 border border-black/[0.06] text-center"
              >
                <div className="w-12 h-12 rounded-full bg-[#7a0b14]/10 flex items-center justify-center text-[1.3rem] mx-auto mb-3">
                  🤸
                </div>
                <div className="font-semibold text-[#1a1a1a] text-[0.95rem]">
                  {name}
                </div>
                <div className="text-[0.75rem] text-[#4a5260] mt-1 leading-[1.4]">
                  {role}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Back */}
        <div className="border-t border-black/[0.06] py-10">
          <div className="container px-8">
            <Link
              href="/#abteilungen"
              className="inline-flex items-center gap-2 text-[#b00e1b] font-semibold text-[0.9rem] hover:underline"
            >
              ← Alle Abteilungen
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
