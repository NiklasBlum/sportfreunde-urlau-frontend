import SectionLabel from "@/components/atoms/SectionLabel";
import NewsCard from "@/components/molecules/NewsCard";
import Section from "../atoms/Section";
import { Headline } from "../atoms/Headline";

const newsItems = [
  {
    icon: "⛷️",
    meta: "Langlauf · Januar 2026",
    title: "Erfolgreiche Langlauf-Saison 2025/26",
    text: "Unsere Langlauf-Abteilung blickt auf eine tolle Saison zurück mit zahlreichen Ausfahrten im Allgäu.",
  },
  {
    icon: "🏓",
    meta: "Tischtennis · Februar 2026",
    title: "Neue Trainingszeiten ab März",
    text: "Die Tischtennisabteilung gibt neue Trainingszeiten bekannt. Interessierte sind herzlich eingeladen.",
  },
  {
    icon: "👨‍👩‍👧",
    meta: "Kinderturnen · März 2026",
    title: "Anmeldung Kinderturnen Frühjahr",
    text: "Ab sofort können Kinder ab 3 Jahren für das Kinderturnen im Frühjahr angemeldet werden.",
  },
];

export default function NewsSection() {
  return (
    <Section id="news" className="bg-surface">
      <SectionLabel>Neuigkeiten</SectionLabel>
      <Headline level="h2">Aktuelles aus dem Verein</Headline>

      <p className="text-muted text-body max-w-135 mb-11">
        Neuigkeiten, Berichte und Ankündigungen der Sportfreunde Urlau.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.4rem]">
        {newsItems.map((n) => (
          <NewsCard key={n.title} {...n} />
        ))}
      </div>
    </Section>
  );
}
