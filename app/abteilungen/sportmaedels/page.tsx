import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import SectionLabel from "@/components/atoms/SectionLabel";
import Section from "@/components/atoms/Section";
import { Headline } from "@/components/atoms/Headline";
import AbteilungLinkSection from "@/components/molecules/AbteilungLinkSection";
import EventList from "@/components/molecules/EventList";
import { getSportmaedelsEvents } from "@/lib/cms/getSportmaedelsEvents";

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

const team = [
  { role: "Abteilungsleiterin", name: "Tanja" },
  { role: "Sportleiterin & Choreografie", name: "Brigitte D." },
  { role: "Kostüme", name: "Moni" },
];

function formatMonthYear(isoDate: string): string {
  const date = new Date(isoDate);

  return new Intl.DateTimeFormat("de-DE", {
    month: "short",
    year: "numeric",
  }).format(date);
}

export default async function SportmaedelsPage() {
  const recentEvents = await getSportmaedelsEvents();

  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <Section className="bg-blue">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel light>Abteilung</SectionLabel>
              <Headline level="h1" light>
                Sportmädels
              </Headline>

              <p className="text-red-tint text-body max-w-120">
                Sport, Gemeinschaft und Spaß – die Sportmädels sind immer in
                Bewegung. Vom Faschingstanz über MTB-Touren bis zur
                Weihnachtsfeier ist jede Saison ein Erlebnis.
              </p>
            </div>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden hidden lg:block">
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
          <Headline level="h2">Unsere Aktivitäten</Headline>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {activities.map(({ icon, label, desc }) => (
              <div
                key={label}
                className="bg-surface rounded-xl p-6 border border-black/6"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-[1.8rem]" aria-hidden="true">
                    {icon}
                  </div>
                  <div className="font-semibold text-foreground text-body-sm">
                    {label}
                  </div>
                </div>
                <p className="text-muted text-body-xs">{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Recent events */}
        <Section className="bg-surface border-t border-b border-black/6">
          <SectionLabel>Rückblick</SectionLabel>
          <Headline level="h2">Aktuelle Berichte</Headline>

          <EventList
            items={recentEvents.map(
              ({ _id, date, headline, description, slug }) => ({
                id: _id,
                href: `/abteilungen/sportmaedels/${slug}`,
                dateLabel: formatMonthYear(date),
                headline,
                description,
              }),
            )}
          />
        </Section>

        {/* Übungszeiten & Team */}
        <Section className="bg-background border-t border-b border-black/6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Übungszeiten */}
            <div>
              <SectionLabel>Übungszeiten</SectionLabel>
              <Headline level="h2">Trainingszeiten</Headline>
              <div className="bg-surface rounded-xl p-6 border border-black/6">
                <div className="font-serif font-bold text-red-dark text-[1.05rem] mb-4">
                  Ganzjährig
                </div>
                <ul className="flex flex-col gap-2.5">
                  <li className="flex items-baseline gap-3 text-body-xs">
                    <span className="font-semibold text-foreground whitespace-nowrap">
                      Donnerstags, 19:30 Uhr
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Team */}
            <div>
              <SectionLabel>Kontakt</SectionLabel>
              <Headline level="h2">Leitung & Organisation</Headline>
              <div className="flex flex-col gap-3">
                {team.map(({ role, name }) => (
                  <div
                    key={name}
                    className="bg-surface rounded-xl p-4 border border-black/6 flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-red-dark/10 flex items-center justify-center text-[1.3rem] shrink-0">
                      🤸
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-body-sm">
                        {name}
                      </div>
                      <div className="text-label text-muted uppercase tracking-[0.08em] font-semibold mt-0.5">
                        {role}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Back */}
        <AbteilungLinkSection />
      </main>
      <Footer />
    </>
  );
}
