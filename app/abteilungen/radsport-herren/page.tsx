import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import SectionLabel from "@/components/atoms/SectionLabel";
import Section from "@/components/atoms/Section";
import { Headline } from "@/components/atoms/Headline";
import {
  getRadsportHerrenEvents,
  type RadsportHerrenEvents,
} from "@/lib/cms/getRadsportHerrenEvents";
import AbteilungLinkSection from "@/components/molecules/AbteilungLinkSection";

export const metadata: Metadata = {
  title: "Radsport Herren (VFB) – Sportfreunde Urlau e.V.",
  description:
    "MTB-Touren, Trainingszeiten und Infos zur Radsport-Herrenabteilung (VFB) der Sportfreunde Urlau e.V.",
};

const uebungszeiten = [
  {
    season: "April – September",
    slots: [
      { time: "Montags", label: "MTB-Touren – Abfahrtszeiten individuell" },
    ],
  },
  {
    season: "Oktober – März",
    slots: [
      {
        time: "Montags, 20:00 – 22:00 Uhr",
        label: "Volleyball (Winterbetrieb)",
      },
    ],
  },
];

const gruppen = [
  {
    name: "MTB – Pro",
    description:
      "Fahrtechnisch und konditionell anspruchsvoll. Zum Teil mit Trail-, Trage- und Schiebepassagen.",
  },
  {
    name: "MTB – Sport",
    description:
      "Fahrtechnisch und konditionell sportlich. Zum Teil mit Trail-, Trage- und Schiebepassagen.",
  },
  {
    name: "MTB – Klassik",
    description:
      "Fahrtechnisch und konditionell gut fahrbar. Trailpassagen sind möglich. Trage- und Schiebepassagen werden möglichst vermieden. Auch für erfahrene E-Biker geeignet.",
  },
  {
    name: "MTB – Komfort / Komfort-E",
    description:
      "Fahrtechnisch und konditionell einfach. Keine Trail-, Trage- und Schiebepassagen. Für E-Biker bestens geeignet.",
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
  tours: RadsportHerrenEvents[],
): Map<number, RadsportHerrenEvents[]> {
  return tours.reduce((map, tour) => {
    const list = map.get(tour.season) ?? [];
    list.push(tour);
    map.set(tour.season, list);
    return map;
  }, new Map<number, RadsportHerrenEvents[]>());
}

export default async function RadsportHerrenPage() {
  const tours = await getRadsportHerrenEvents();
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
                Radsport Herren
              </Headline>

              <p className="text-red-tint text-[1rem] leading-[1.75]">
                MTB-Touren für jeden Fahrstil – von Pro bis Komfort, immer
                montags von April bis September.
              </p>
            </div>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden hidden lg:block">
              <Image
                src="/abteilungen/vfb_herren.webp"
                alt="Radsport Herren VFB"
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
            <Headline level="h2">MTB-Tourenplan {season}</Headline>
            <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 mb-8 text-[0.88rem] text-amber-900 leading-[1.65]">
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
              <table className="w-full text-[0.88rem]">
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
                        <td className="px-4 py-3 font-semibold whitespace-nowrap">
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
                            <span className="inline-block bg-green-100 text-green-800 text-[0.75rem] font-semibold px-2 py-0.5 rounded-full">
                              Tour
                            </span>
                          )}
                          {status === "cancelled" && (
                            <span className="inline-block bg-red-100 text-red-700 text-[0.75rem] font-semibold px-2 py-0.5 rounded-full">
                              Abgesagt
                            </span>
                          )}
                          {status === "pause" && (
                            <span className="inline-block bg-gray-100 text-gray-600 text-[0.75rem] font-semibold px-2 py-0.5 rounded-full">
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
                          className="flex items-baseline gap-3 text-[0.9rem]"
                        >
                          <span className="font-semibold whitespace-nowrap">
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
              <Headline level="h2">Abteilungsleiter</Headline>
              <div className="bg-surface rounded-xl p-6 border border-black/[0.06]">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-red-dark/10 flex items-center justify-center text-[1.5rem]">
                    🚵
                  </div>
                  <div>
                    <div className="font-semibold text-[1rem]">Roland Krug</div>
                    <div className="text-[0.8rem] text-muted uppercase tracking-[0.1em] font-semibold mt-0.5">
                      Abteilungsleiter Radsport
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Gruppen */}
        <Section className="bg-surface border-t border-b border-black/[0.06]">
          <SectionLabel>Gruppen</SectionLabel>
          <Headline level="h2">MTB-Gruppen</Headline>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gruppen.map(({ name, description }) => (
              <div
                key={name}
                className="bg-white rounded-xl p-6 border border-black/[0.06]"
              >
                <div className="font-serif font-bold text-red-dark text-[1rem] mb-2">
                  {name}
                </div>
                <p className="text-[0.88rem] text-muted leading-[1.65]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Regeln */}
        <Section>
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
                  <div className="font-semibold text-foreground text-[0.95rem] mb-1">
                    {title}
                  </div>
                  <p className="text-[0.88rem] text-muted leading-[1.65]">
                    {text}
                  </p>
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
                      className="flex items-start gap-3 text-[0.88rem] text-muted leading-[1.65]"
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

        {/* Back */}
        <AbteilungLinkSection />
      </main>
      <Footer />
    </>
  );
}
