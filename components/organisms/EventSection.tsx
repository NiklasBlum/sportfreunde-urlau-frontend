import Link from "next/link";
import SectionLabel from "@/components/atoms/SectionLabel";
import EventCard from "@/components/molecules/EventCard";
import Section from "../atoms/Section";
import { Headline } from "../atoms/Headline";
import { EventPreview, getEvents } from "@/lib/cms/getEvents";

interface EventSectionProps {
  limit?: number;
  isOverviewPage?: boolean;
}

function groupByYear(events: EventPreview[]) {
  return events.reduce((map, e) => {
    const year = e?.date ? Number(String(e.date).slice(0, 4)) : 0;
    const list = map.get(year) ?? [];
    list.push(e);
    map.set(year, list);
    return map;
  }, new Map<number, EventPreview[]>());
}

export default async function EventSection({
  limit = 0,
  isOverviewPage = false,
}: EventSectionProps) {
  const events = await getEvents();
  const latestEvents = limit > 0 ? events.slice(0, limit) : events;

  const byYear = groupByYear(latestEvents);
  const years = Array.from(byYear.keys()).sort((a, b) => b - a);

  if (latestEvents.length === 0) return null;

  return (
    <Section id="termine" className={isOverviewPage ? "flex-1" : undefined}>
      {!isOverviewPage && (
        <>
          <div className="flex items-end justify-between gap-4 mb-3">
            <div>
              <SectionLabel>Organisation</SectionLabel>

              <Headline level="h2">Termine &amp; Veranstaltungen</Headline>
            </div>

            <Link
              href="/veranstaltungen"
              className="text-red-accent font-semibold hover:underline underline-offset-2 transition-colors duration-150"
            >
              Alle Termine
            </Link>
          </div>

          <p className="text-muted text-body mb-11">
            Was ist bei den Sportfreunden Urlau geplant? Hier findet ihr alle
            wichtigen Termine.
          </p>
        </>
      )}

      {years.map((year, i) => {
        const yearEvents = (byYear.get(year) ?? []).sort(
          (a: EventPreview, b: EventPreview) =>
            String(b.date ?? "").localeCompare(String(a.date ?? "")),
        );

        return (
          <div key={year} className={i < years.length - 1 ? "mb-10" : ""}>
            <SectionLabel>
              {year === 0 ? "Ohne Datum" : `Jahr ${year}`}
            </SectionLabel>

            <div className="flex flex-col gap-px bg-black/6 rounded-xl overflow-hidden border border-black/8">
              {yearEvents.map((e: EventPreview) => {
                const date = e.date ? new Date(e.date) : null;
                const day = date
                  ? String(date.getDate()).padStart(2, "0")
                  : "--";
                const month = date
                  ? date.toLocaleString("de-DE", { month: "short" })
                  : "---";
                const href = e.slug ? `/veranstaltungen/${e.slug}` : undefined;
                const tag = e.tag ?? "Veranstaltung";

                return (
                  <EventCard
                    key={e._id}
                    day={day}
                    month={month}
                    title={e.title}
                    info={e.info ?? ""}
                    tag={tag}
                    href={href}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </Section>
  );
}
