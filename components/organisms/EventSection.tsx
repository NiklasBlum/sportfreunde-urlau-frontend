import SectionLabel from "@/components/atoms/SectionLabel";
import TerminCard from "@/components/molecules/EventCard";
import Section from "../atoms/Section";
import { Headline } from "../atoms/Headline";
import { getEvents } from "@/lib/cms/getEvents";

export default async function EventSection() {
  const events = await getEvents();

  return (
    <Section id="termine">
      <SectionLabel>Organisation</SectionLabel>

      <Headline level="h2"> Termine &amp; Veranstaltungen</Headline>

      <p className="text-muted text-body mb-11">
        Was ist bei den Sportfreunden Urlau geplant? Hier findet ihr alle
        wichtigen Termine.
      </p>
      <div className="flex flex-col gap-px bg-black/6 rounded-xl overflow-hidden border border-black/8">
        {events.map((e) => {
          const date = e.date ? new Date(e.date) : null;
          const day = date ? String(date.getDate()).padStart(2, "0") : "--";
          const month = date
            ? date.toLocaleString("de-DE", { month: "short" })
            : "---";
          const href = e.slug ? `/veranstaltungen/${e.slug}` : undefined;
          const tag = e.tag ?? "Veranstaltung";

          return (
            <TerminCard
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
    </Section>
  );
}
