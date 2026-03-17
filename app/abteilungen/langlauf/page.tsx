import type { Metadata } from "next";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import SectionLabel from "@/components/atoms/SectionLabel";
import Section from "@/components/atoms/Section";
import { Headline } from "@/components/atoms/Headline";
import AbteilungLinkSection from "@/components/molecules/AbteilungLinkSection";

export const metadata: Metadata = {
  title: "Langlauf – Sportfreunde Urlau e.V.",
  description:
    "Fit durch den Winter – Langlauf und Loipenpflege im Urlauer Raum. Montags ab 19:00 Uhr in der Dorfhalle.",
};

const loipen = [
  {
    name: "Fetzach-Loipe",
    km: "6,5 km",
  },
  {
    name: "Missen-Loipe (Skate-Anschluss Fallenbrücke – Friesenhofener)",
    km: "8 km",
  },
  {
    name: "Märchenwald-Loipe Herlazhofen",
    km: "6,5 km",
  },
  {
    name: "Skating-Runde Herlazhofen",
    km: "",
  },
];

const betreuer = ["Manne", "Josef", "Norbert", "Gerhard"];

export default function LanglaufPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <Section className="bg-blue">
          <SectionLabel light>Abteilung</SectionLabel>
          <Headline level="h1" light>
            Langlauf
          </Headline>
          <p className="text-red-tint text-body">
            Fit durch den Winter – ab November montags um 19:00 Uhr in der
            Dorfhalle. Unsere ehrenamtlichen Loipenbetreuer halten die Urlauer
            Loipen so gut wie möglich in Schuss.
          </p>
        </Section>

        {/* Hinweise */}
        <Section>
          <SectionLabel>Loipeninfo</SectionLabel>
          <Headline level="h2">Hinweise zur Nutzung</Headline>
          <div className="flex flex-col gap-4 max-w-2xl">
            <div className="bg-surface rounded-xl p-6 border border-black/6">
              <p className="text-body-xs text-muted">
                Unser Loipensystem ist auf <strong>Links</strong> ausgelegt –
                wer die linken Spuren benutzt, ist automatisch in der korrekten
                Laufrichtung unterwegs.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-[0.88rem] text-amber-900 leading-[1.65]">
              <p>
                Bei Schneefall aktuelle Informationen zum Spurzustand auf dieser
                Seite nachlesen. Die Loipenbetreuer aktualisieren den Zustand
                regelmäßig.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="http://wetterstationen.meteomedia.de/messnetz/forecast/109450.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-surface border border-black/6 rounded-lg px-4 py-2 text-[0.88rem] font-semibold text-foreground hover:text-red-accent transition-colors"
            >
              Wetter Urlau →
            </a>
            <a
              href="http://www.allgaeu-cam.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-surface border border-black/6 rounded-lg px-4 py-2 text-[0.88rem] font-semibold text-foreground hover:text-red-accent transition-colors"
            >
              Allgäu-Cam →
            </a>
            <a
              href="http://www.loipen-allgaeu.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-surface border border-black/6 rounded-lg px-4 py-2 text-[0.88rem] font-semibold text-foreground hover:text-red-accent transition-colors"
            >
              Loipen Allgäu →
            </a>
            <a
              href="http://www.leutkirch.de/Loipenbericht"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-surface border border-black/6 rounded-lg px-4 py-2 text-[0.88rem] font-semibold text-foreground hover:text-red-accent transition-colors"
            >
              Loipenbericht Leutkirch →
            </a>
          </div>
        </Section>

        {/* Loipen */}
        <Section className="bg-surface border-t border-b border-black/6">
          <SectionLabel>Loipennetz</SectionLabel>
          <Headline level="h2">Unsere Loipen</Headline>
          <div className="overflow-hidden rounded-xl border border-black/6">
            <table className="w-full text-[0.88rem]">
              <thead>
                <tr className="bg-red-dark text-white">
                  <th className="text-left px-4 py-3 font-semibold">Loipe</th>
                  <th className="text-right px-4 py-3 font-semibold w-24">
                    Länge
                  </th>
                </tr>
              </thead>
              <tbody>
                {loipen.map(({ name, km }, i) => (
                  <tr
                    key={name}
                    className={`border-t border-black/6 ${i % 2 === 0 ? "bg-white" : "bg-surface"}`}
                  >
                    <td className="px-4 py-3 text-muted">{name}</td>
                    <td className="px-4 py-3 text-right font-semibold text-foreground whitespace-nowrap">
                      {km || "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Übungszeiten & Loipenbetreuer */}
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Übungszeiten */}
            <div>
              <SectionLabel>Übungszeiten</SectionLabel>
              <Headline level="h2">Trainingszeiten</Headline>
              <div className="bg-surface rounded-xl p-6 border border-black/6">
                <div className="font-serif font-bold text-red-dark text-[1.05rem] mb-4">
                  November – März
                </div>
                <ul className="flex flex-col gap-2.5">
                  <li className="flex items-baseline gap-3 text-[0.9rem]">
                    <span className="font-semibold text-foreground whitespace-nowrap">
                      Montags, 19:00 Uhr
                    </span>
                    <span className="text-muted">Dorfhalle Urlau</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Loipenbetreuer */}
            <div>
              <SectionLabel>Kontakt</SectionLabel>
              <Headline level="h2">Loipenbetreuer</Headline>
              <div className="bg-surface rounded-xl p-6 border border-black/6">
                <p className="text-body-xs text-muted mb-4">
                  Unsere begeisterten Langläufer pflegen die Loipen
                  ehrenamtlich. Sollte die Spur nicht olympischen Anforderungen
                  entsprechen – bitte Nachsicht!
                </p>
                <div className="flex flex-wrap gap-2">
                  {betreuer.map((name) => (
                    <span
                      key={name}
                      className="bg-white border border-black/6 rounded-lg px-3 py-1.5 text-[0.88rem] font-semibold text-foreground"
                    >
                      {name}
                    </span>
                  ))}
                </div>
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
