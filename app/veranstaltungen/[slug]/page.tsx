import SectionLabel from "@/components/atoms/SectionLabel";
import Section from "@/components/atoms/Section";
import { Headline } from "@/components/atoms/Headline";
import RichText from "@/components/atoms/RichText";
import { notFound } from "next/navigation";
import { getEventBySlug } from "@/lib/cms/getEvents";
import ImageGallery from "@/components/molecules/ImageGallery";

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

  const hasRichDescription =
    Array.isArray(event.richText) && event.richText.length > 0;

  return (
    <>
      {/* Hero */}
      <Section className="bg-blue">
        <SectionLabel light>{event.tag ?? "Veranstaltung"}</SectionLabel>

        <Headline level="h1" light>
          {event.title} {formattedDate ? `- ${formattedDate}` : null}
        </Headline>

        {event.info ? (
          <p className="text-red-tint text-body">{event.info}</p>
        ) : null}
      </Section>

      <Section>
        <article className="prose prose-sm">
          {hasRichDescription ? (
            <RichText value={event.richText} />
          ) : (
            <p className="text-body">
              Keine ausführliche Beschreibung vorhanden.
            </p>
          )}
        </article>

        {/* Content */}
        {event.images && event.images.length > 0 ? (
          <ImageGallery
            className="mt-5"
            images={event.images}
            fallbackAlt={event.title}
          />
        ) : null}
      </Section>
    </>
  );
}
