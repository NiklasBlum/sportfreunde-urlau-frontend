import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SectionLabel from "@/components/atoms/SectionLabel";
import Section from "@/components/atoms/Section";
import { Headline } from "@/components/atoms/Headline";
import {
  getRadsportDamenEventBySlug,
  getRadsportDamenEvents,
} from "@/lib/cms/getRadsportDamenEvents";
import ImageGallery from "@/components/molecules/ImageGallery";

export async function generateStaticParams() {
  const events = await getRadsportDamenEvents();
  return events.filter((e) => e.slug).map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = await getRadsportDamenEventBySlug(slug);

  if (!event) return {};

  return {
    title: `${event.headline} – Radsport Damen – Sportfreunde Urlau e.V.`,
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

export default async function RadsportDamenEventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = await getRadsportDamenEventBySlug(slug);

  if (!event) notFound();

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
        {event.description && (
          <p className="text-muted text-body mb-5 whitespace-pre-wrap">
            {event.description}
          </p>
        )}

        <ImageGallery
          columns={4}
          images={event.images}
          fallbackAlt={event.headline}
        />
      </Section>
    </>
  );
}
