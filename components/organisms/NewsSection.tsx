import SectionLabel from "@/components/atoms/SectionLabel";
import NewsCard from "@/components/molecules/NewsCard";
import Section from "../atoms/Section";

const newsItems = [
  {
    icon: "⛷️",
    meta: "Langlauf · Januar 2025",
    title: "Erfolgreiche Langlauf-Saison 2024/25",
    text: "Unsere Langlauf-Abteilung blickt auf eine tolle Saison zurück mit zahlreichen Ausfahrten im Allgäu.",
  },
  {
    icon: "🏓",
    meta: "Tischtennis · Februar 2025",
    title: "Neue Trainingszeiten ab März",
    text: "Die Tischtennisabteilung gibt neue Trainingszeiten bekannt. Interessierte sind herzlich eingeladen.",
  },
  {
    icon: "👨‍👩‍👧",
    meta: "Kinderturnen · März 2025",
    title: "Anmeldung Kinderturnen Frühjahr",
    text: "Ab sofort können Kinder ab 3 Jahren für das Kinderturnen im Frühjahr angemeldet werden.",
  },
];

export default function NewsSection() {
  return (
    <Section id="news" className="bg-[#f2eeeb]">
      <SectionLabel>Neuigkeiten</SectionLabel>
      <h2 className="font-serif text-[clamp(1.9rem,3.2vw,2.7rem)] font-bold text-[#1a1a1a] leading-[1.15] mb-[0.9rem]">
        Aktuelles aus dem Verein
      </h2>
      <p className="text-[#4a5260] text-[0.98rem] leading-[1.75] max-w-[540px] mb-[2.8rem]">
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
