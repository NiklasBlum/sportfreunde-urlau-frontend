import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import SectionLabel from "@/components/atoms/SectionLabel";
import Section from "@/components/atoms/Section";
import { Headline } from "@/components/atoms/Headline";
import {
  getRadsportDamenTours,
  RadsportDamenTour,
} from "@/lib/cms/getRadsportDamenTours";
import AbteilungLinkSection from "@/components/molecules/AbteilungLinkSection";
import { getRadsportDamenEvents } from "@/lib/cms/getRadsportDamenEvents";
import { RADSPORT_RULES, RADSPORT_TABUS } from "@/data/radsport_rules";
import formatDate from "@/lib/formatIsoDate";
import ScheduleTable, { Column } from "@/components/molecules/ScheduleTable";
import CardWeatherForecast from "@/components/molecules/CardWeatherForecast";
import EventList from "@/components/molecules/EventList";

export const metadata: Metadata = {
  title: "Radsport Damen – Sportfreunde Urlau e.V.",
  description:
    "MTB-Touren, Trainingszeiten und Infos zur Radsport-Damenabteilung der Sportfreunde Urlau e.V.",
};

const uebungszeiten = [
  {
    season: "April – September",
    slots: [{ time: "Montags", label: "MTB-Touren – Abfahrt 18:00 Uhr" }],
  },
];

function groupBySeason(
  tours: RadsportDamenTour[],
): Map<number, RadsportDamenTour[]> {
  return tours.reduce((map, tour) => {
    const year = Number(tour.date.slice(0, 4));
    const list = map.get(year) ?? [];
    list.push(tour);
    map.set(year, list);
    return map;
  }, new Map<number, RadsportDamenTour[]>());
}

const columns: Column<RadsportDamenTour>[] = [
  {
    header: "Datum",
    render: (t) => formatDate(t.date),
  },
  {
    header: "Abfahrt",
    render: (t) => t.departureTime ?? "—",
  },
  {
    header: "Route",
    render: (t) =>
      t.status === "cancelled" ? (
        <span className="italic font-bold text-red">Abgesagt</span>
      ) : t.status === "pause" ? (
        <span className="italic font-bold text-red">Pause / kein Training</span>
      ) : (
        t.route
      ),
  },
];

export default async function RadsportDamenPage() {
  const [tours, events] = await Promise.all([
    getRadsportDamenTours(),
    getRadsportDamenEvents(),
  ]);

  const today = new Date().toISOString().slice(0, 10);
  const bySeason = groupBySeason(tours);
  const seasons = Array.from(bySeason.keys()).sort((a, b) => b - a);

  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <Section className="bg-blue">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionLabel light>Abteilung</SectionLabel>
              <Headline level="h1" light>
                Radsport Damen
              </Headline>
              <p className="text-red-tint text-body">
                MTB-Touren für Damen – immer montags von April bis September.
              </p>
            </div>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden hidden lg:block">
              <Image
                src="/abteilungen/vfb_damen.webp"
                alt="MTB-Ladies"
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 50vw, 600px"
                priority
              />
            </div>
          </div>
        </Section>

        {/* Tourenplan */}
        <Section className="bg-surface border-t border-b border-black/6">
          <SectionLabel>Touren</SectionLabel>
          <Headline level="h2">
            {seasons.length === 1 ? "MTB-Tourenplan" : "MTB-Tourenpläne"}
          </Headline>

          <CardWeatherForecast classNames="my-8" />

          {/* Tourenplan */}
          {seasons.map((season, i) => (
            <div key={season} className={i < seasons.length - 1 ? "mb-10" : ""}>
              <SectionLabel>Saison {season}</SectionLabel>

              <div className="overflow-hidden rounded-xl border border-black/6 ">
                <ScheduleTable
                  items={bySeason.get(season)!}
                  columns={columns}
                  getId={(t) => t._id}
                  rowClassName={(t) =>
                    t.date === today ? "bg-amber-50" : undefined
                  }
                />
              </div>
            </div>
          ))}
        </Section>

        {/* Übungszeiten & Kontakt */}
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Übungszeiten */}
            <div>
              <SectionLabel>Übungszeiten</SectionLabel>
              <Headline level="h2">Trainingszeiten</Headline>
              <div className="flex flex-col gap-6">
                {uebungszeiten.map(({ season, slots }) => (
                  <div
                    key={season}
                    className="bg-surface rounded-xl p-6 border border-black/6"
                  >
                    <div className="font-serif font-bold text-red-dark text-[1.05rem] mb-4">
                      {season}
                    </div>
                    <ul className="flex flex-col gap-2.5">
                      {slots.map(({ time, label }) => (
                        <li
                          key={time}
                          className="flex items-baseline gap-3 text-body-xs"
                        >
                          <span className="font-semibold text-foreground whitespace-nowrap">
                            {time}
                          </span>
                          <span className="text-muted">{label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Kontakt */}
            <div>
              <SectionLabel>Kontakt</SectionLabel>
              <Headline level="h2">Abteilungsleitung</Headline>
              <div className="bg-surface rounded-xl p-6 border border-black/6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-red-dark/10 flex items-center justify-center text-[1.5rem]">
                    🚴‍♀️
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-[1rem]">
                      -
                    </div>
                    <div className="text-label text-muted uppercase tracking-widest font-semibold mt-0.5">
                      Radsport Damen
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Regeln */}
        <Section className="bg-surface border-t border-b border-black/6">
          <SectionLabel>Sicherheit</SectionLabel>
          <Headline level="h2">Regeln & Tabus</Headline>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Regeln */}
            <div className="flex flex-col gap-4">
              {RADSPORT_RULES.map(({ title, text }) => (
                <div
                  key={title}
                  className="bg-white rounded-xl p-6 border border-black/6"
                >
                  <div className="font-semibold text-foreground text-body-sm mb-1">
                    {title}
                  </div>
                  <p className="text-body-xs text-muted">{text}</p>
                </div>
              ))}
            </div>

            {/* Tabus */}
            <div>
              <div className="bg-red-dark/5 border border-red-dark/20 rounded-xl p-6">
                <div className="font-serif font-bold text-red-dark text-[1.05rem] mb-4">
                  Tabus
                </div>
                <ul className="flex flex-col gap-3">
                  {RADSPORT_TABUS.map((tabu) => (
                    <li
                      key={tabu}
                      className="flex items-start gap-3 text-body-xs text-muted"
                    >
                      <span
                        className="mt-[0.25em] text-red-dark font-bold shrink-0"
                        aria-hidden="true"
                      >
                        ✕
                      </span>
                      {tabu}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Events */}
        {events.length > 0 && (
          <Section>
            <SectionLabel>Berichte & Rückblicke</SectionLabel>
            <Headline level="h2">Events & Highlights</Headline>

            <EventList
              items={events.map((event) => ({
                id: event._id,
                href: `/abteilungen/radsport-damen/${event.slug}`,
                dateLabel: new Date(event.date).toLocaleDateString("de-DE", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                }),
                headline: event.headline,
                description: event.description ?? undefined,
              }))}
            />
          </Section>
        )}

        {/* Back */}
        <AbteilungLinkSection />
      </main>
      <Footer />
    </>
  );
}
