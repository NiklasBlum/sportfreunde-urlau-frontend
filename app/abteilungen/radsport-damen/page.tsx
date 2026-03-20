import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import SectionLabel from "@/components/atoms/SectionLabel";
import Section from "@/components/atoms/Section";
import { Headline } from "@/components/atoms/Headline";
import {
  getRadsportDamenTours,
  type RadsportDamenTour,
} from "@/lib/cms/getRadsportDamenTours";
import AbteilungLinkSection from "@/components/molecules/AbteilungLinkSection";
import {
  getRadsportDamenEvents,
  RadsportDamenEvent,
} from "@/lib/cms/getRadsportDamenEvents";

export const metadata: Metadata = {
  title: "MTB-Ladies – Sportfreunde Urlau e.V.",
  description:
    "MTB-Touren, Trainingszeiten und Infos zur Radsport-Damenabteilung (MTB-Ladies) der Sportfreunde Urlau e.V.",
};

const uebungszeiten = [
  {
    season: "April – September",
    slots: [{ time: "Montags", label: "MTB-Touren – Abfahrt 18:00 Uhr" }],
  },
];

const regeln = [
  {
    title: "Helmpflicht",
    text: "Ohne Helm ist die Teilnahme an der Tour untersagt.",
  },
  {
    title: "Weisung",
    text: "Der jeweilige Guide gibt Weisungen und darf nicht überholt werden. Die Freigabe der Strecke (z. B. bergauf oder Trailabfahrten) erteilt der Guide.",
  },
  {
    title: "Verkehrssicherheit",
    text: "Jeder Teilnehmer ist für ein verkehrssicheres Rad verantwortlich. Hierzu gehören u. a. (voll aufgeladene) Lichter, voll funktionsfähige Bremsen und ordentliche Bereifung. Zudem darf nur max. zu zweit nebeneinander gefahren werden.",
  },
  {
    title: "Organisation",
    text: "Jeder sollte sich einschätzen können und bei der passenden Gruppe mitradeln. Grundsätzlich müssen sich die Teilnehmer beim Verlassen der Gruppe (während der Tour / bei Nichteinkehr in der Gaststätte) beim Guide abmelden.",
  },
  {
    title: "Verantwortung",
    text: "Jeder Teilnehmer ist für seinen Hintermann verantwortlich! Sollte die Geschwindigkeit zu hoch sein oder es eine Panne geben, dann an den Vordermann melden (bis die Info den Guide erreicht hat).",
  },
];

const tabus = [
  "Rechts überholen ist untersagt!",
  "Im Versatz rechts hinten zu fahren ist untersagt!",
  "Downhill nebeneinander zu fahren ist untersagt! Es muss bei jeder Abfahrt hintereinander mit ausreichend Abstand gefahren werden.",
  "Überholen des Guides ohne Streckenfreigabe ist untersagt. Der Guide gibt das Tempo vor.",
];

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  return `${d}.${m}.${y}`;
}

function groupBySeason(
  tours: RadsportDamenTour[],
): Map<number, RadsportDamenTour[]> {
  return tours.reduce((map, tour) => {
    const list = map.get(tour.season) ?? [];
    list.push(tour);
    map.set(tour.season, list);
    return map;
  }, new Map<number, RadsportDamenTour[]>());
}

export default async function MtbLadiesPage() {
  const [tours, events] = await Promise.all([
    getRadsportDamenTours(),
    getRadsportDamenEvents(),
  ]);
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
        {seasons.map((season) => (
          <Section
            key={season}
            className="bg-surface border-t border-b border-black/[0.06]"
          >
            <SectionLabel>Saison {season}</SectionLabel>
            <Headline level="h2"> MTB-Tourenplan {season}</Headline>

            <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 mb-8 text-body-xs text-amber-900">
              <p>
                Falls die aktuelle Tour aufgrund des Wetters verschoben oder
                abgesagt werden muss, steht es hier am Montagabend bis
                spätestens 17:00 Uhr. Wenn hier nichts steht, findet die Tour
                statt!
              </p>
              <p className="mt-2">
                Für die aktuelle Wettervorhersage{" "}
                <a
                  href="http://wetterstationen.meteomedia.de/station=109440&wahl=vorhersage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline hover:text-amber-700"
                >
                  hier klicken
                </a>
                .
              </p>
            </div>
            <div className="overflow-hidden rounded-xl border border-black/[0.06]">
              <table className="w-full text-body-xs">
                <thead>
                  <tr className="bg-red-dark text-white">
                    <th className="text-left px-4 py-3 font-semibold w-[7.5rem]">
                      Datum
                    </th>
                    <th className="text-left px-4 py-3 font-semibold w-[7rem]">
                      Abfahrt
                    </th>
                    <th className="text-left px-4 py-3 font-semibold">Route</th>
                    <th className="text-right px-4 py-3 font-semibold w-[6rem]">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {bySeason
                    .get(season)!
                    .map(({ _id, date, route, departureTime, status }, i) => (
                      <tr
                        key={_id}
                        className={`border-t border-black/[0.06] ${i % 2 === 0 ? "bg-white" : "bg-surface"}`}
                      >
                        <td className="px-4 py-3 font-semibold text-foreground whitespace-nowrap">
                          {formatDate(date)}
                        </td>
                        <td className="px-4 py-3 text-muted whitespace-nowrap">
                          {departureTime ?? "—"}
                        </td>
                        <td className="px-4 py-3 text-muted">
                          {status === "cancelled" ? (
                            <span className="italic text-muted/60">
                              Abgesagt
                            </span>
                          ) : (
                            route
                          )}
                        </td>
                        <td className="px-4 py-3 text-right">
                          {status === "tour" && (
                            <span className="inline-block bg-green-100 text-green-800 text-label font-semibold px-2 py-0.5 rounded-full">
                              Tour
                            </span>
                          )}
                          {status === "cancelled" && (
                            <span className="inline-block bg-red-100 text-red-700 text-label font-semibold px-2 py-0.5 rounded-full">
                              Abgesagt
                            </span>
                          )}
                          {status === "pause" && (
                            <span className="inline-block bg-gray-100 text-gray-600 text-label font-semibold px-2 py-0.5 rounded-full">
                              Pause
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </Section>
        ))}

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
                    className="bg-surface rounded-xl p-6 border border-black/[0.06]"
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
              <div className="bg-surface rounded-xl p-6 border border-black/[0.06]">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-red-dark/10 flex items-center justify-center text-[1.5rem]">
                    🚴‍♀️
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-[1rem]">
                      MTB-Ladies
                    </div>
                    <div className="text-label text-muted uppercase tracking-[0.1em] font-semibold mt-0.5">
                      Radsport Damen
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Regeln */}
        <Section className="bg-surface border-t border-b border-black/[0.06]">
          <SectionLabel>Sicherheit</SectionLabel>
          <Headline level="h2">Regeln & Tabus</Headline>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Regeln */}
            <div className="flex flex-col gap-4">
              {regeln.map(({ title, text }) => (
                <div
                  key={title}
                  className="bg-white rounded-xl p-6 border border-black/[0.06]"
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
                  {tabus.map((tabu) => (
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
            <div className="flex flex-col gap-12">
              {events.map((event: RadsportDamenEvent) => (
                <div key={event._id}>
                  <h3 className="font-serif font-bold text-foreground text-[1.2rem] mb-3">
                    {event.headline}
                  </h3>
                  {event.beschreibung && (
                    <div className="text-body-xs text-muted leading-[1.75] mb-6 flex flex-col gap-3">
                      {event.beschreibung
                        .replace(/\r\n/g, "\n")
                        .split(/\n{2,}/)
                        .filter((p) => p.trim())
                        .map((p, i) => (
                          <p key={i} className="whitespace-pre-line">
                            {p.trim()}
                          </p>
                        ))}
                    </div>
                  )}
                  {event.images.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                      {event.images.map((img) => (
                        <div
                          key={img._key}
                          className="relative aspect-square rounded-xl overflow-hidden bg-surface"
                        >
                          <Image
                            src={img.url}
                            alt={img.alt ?? event.headline}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Back */}
        <AbteilungLinkSection />
      </main>
      <Footer />
    </>
  );
}
