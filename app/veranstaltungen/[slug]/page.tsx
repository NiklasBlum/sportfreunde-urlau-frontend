import SectionLabel from "@/components/atoms/SectionLabel";
import Section from "@/components/atoms/Section";
import { Headline } from "@/components/atoms/Headline";
import { notFound } from "next/navigation";
import { getEventBySlug } from "@/lib/cms/getEvents";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);
  if (!event) return notFound();

  const formattedDate = event.date
    ? new Date(event.date).toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <>
      <main id="main-content" className="flex flex-1 flex-col">
        {/* Hero */}
        <Section className="bg-blue">
          <SectionLabel light>{event.tag ?? "Veranstaltung"}</SectionLabel>
          <Headline level="h1" light>
            {event.title}
          </Headline>
          {event.info ? (
            <p className="text-red-tint text-body">{event.info}</p>
          ) : (
            <p className="text-red-tint text-body">{formattedDate}</p>
          )}
        </Section>

        {/* Content */}
        <Section className="bg-surface border-t border-black/6">
          <article className="prose prose-sm">
            {formattedDate ? (
              <p className="text-body font-semibold text-red-accent mb-8">
                {formattedDate}
              </p>
            ) : null}

            {event.description ? (
              <div className="text-body whitespace-pre-line">
                {event.description}
              </div>
            ) : (
              <p className="text-body">
                Keine ausführliche Beschreibung vorhanden.
              </p>
            )}
          </article>
        </Section>
      </main>
    </>
  );
}
