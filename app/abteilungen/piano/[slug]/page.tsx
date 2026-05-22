import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SectionLabel from "@/components/atoms/SectionLabel";
import Section from "@/components/atoms/Section";
import { Headline } from "@/components/atoms/Headline";
import RichText from "@/components/atoms/RichText";
import ImageGallery from "@/components/molecules/ImageGallery";
import { getPianoEventBySlug, getPianoEvents } from "@/lib/cms/getPianoEvents";

export async function generateStaticParams() {
  const events = await getPianoEvents();
  return events
    .filter((event) => event.slug)
    .map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = await getPianoEventBySlug(slug);

  if (!event) return {};

  return {
    title: `${event.headline} - Piano - Sportfreunde Urlau e.V.`,
    description: event.description ?? undefined,
  };
}

function formatDate(isoDate: string): string {
  return new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(isoDate));
}

export default async function PianoEventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = await getPianoEventBySlug(slug);

  if (!event) notFound();

  const hasRichText =
    Array.isArray(event.richText) && event.richText.length > 0;

  return (
    <>
      <Section className="bg-blue">
        <SectionLabel light>Rückblick</SectionLabel>
        <Headline level="h1" light>
          {event.headline}
        </Headline>
        <p className="text-white text-body mt-2">{formatDate(event.date)}</p>
      </Section>

      <Section>
        {hasRichText && <RichText value={event.richText} className="mb-5" />}

        {event.images?.length > 0 && (
          <ImageGallery
            images={event.images}
            fallbackAlt={event.headline}
            columns={4}
          />
        )}
      </Section>
    </>
  );
}
