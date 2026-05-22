import Link from "next/link";
import SectionLabel from "@/components/atoms/SectionLabel";
import EventCard from "@/components/molecules/EventCard";
import Section from "@/components/atoms/Section";
import { Headline } from "@/components/atoms/Headline";
import { getNewsReports } from "@/lib/cms/getNewsReports";

interface NewsSectionProps {
  limit?: number;
  isOverviewPage?: boolean;
}

export default async function NewsSection({
  limit = 6,
  isOverviewPage = false,
}: NewsSectionProps) {
  const news = await getNewsReports();
  const latestNews = limit > 0 ? news.slice(0, limit) : news;
  const sectionClassName = isOverviewPage
    ? "flex-1"
    : "bg-surface border-t border-b border-black/6";

  if (latestNews.length === 0) return null;

  return (
    <Section id="news-berichte" className={sectionClassName}>
      {!isOverviewPage && (
        <>
          <div className="flex items-end justify-between gap-4 mb-3">
            <div>
              <SectionLabel>Aktuelles</SectionLabel>
              <Headline level="h2">News & Berichte</Headline>
            </div>

            <Link
              href="/news-berichte"
              className="text-red-accent font-semibold hover:underline underline-offset-2 transition-colors duration-150"
            >
              Alle News & Berichte
            </Link>
          </div>

          <p className="text-muted text-body mb-8">
            Neuigkeiten und Berichte der Sportfreunde Urlau e.V.
          </p>
        </>
      )}

      <div className="flex flex-col gap-px bg-black/6 rounded-xl overflow-hidden border border-black/8">
        {latestNews.map((item) => {
          const date = item.date ? new Date(item.date) : null;
          const day = date ? String(date.getDate()).padStart(2, "0") : "--";
          const month = date
            ? date.toLocaleString("de-DE", { month: "short" })
            : "---";

          return (
            <EventCard
              key={item._id}
              day={day}
              month={month}
              title={item.title}
              info={item.info ?? ""}
              tag={item.tag}
              href={item.slug ? `/news-berichte/${item.slug}` : undefined}
            />
          );
        })}
      </div>
    </Section>
  );
}
