import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SectionLabel from "@/components/atoms/SectionLabel";
import Section from "@/components/atoms/Section";
import { Headline } from "@/components/atoms/Headline";
import {
  getSportmaedelsEvents,
  getSportmaedelsEventBySlug,
} from "@/lib/cms/getSportmaedelsEvents";
import ImageGallery from "@/components/molecules/ImageGallery";

export async function generateStaticParams() {
  const events = await getSportmaedelsEvents();
  return events.filter((e) => e.slug).map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = await getSportmaedelsEventBySlug(slug);
  if (!event) return {};
  return {
    title: `${event.headline} – Sportmädels – Sportfreunde Urlau e.V.`,
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

export default async function SportmaedelsEventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = await getSportmaedelsEventBySlug(slug);
  if (!event) notFound();

  return (
    <>
      {/* Header */}
      <Section className="bg-blue ">
        <SectionLabel light>Rückblick</SectionLabel>
        <Headline level="h1" light>
          {event.headline}
        </Headline>
        <p className="text-white text-body mt-2">{formatDate(event.date)}</p>
      </Section>

      {/* Body */}
      <Section childClassName="flex flex-col gap-5">
        {event.description && (
          <p className="text-muted text-body mb-5 whitespace-pre-wrap">
            {event.description}
          </p>
        )}

        <ImageGallery
          images={event.images}
          fallbackAlt={event.headline}
          columns={4}
        />
      </Section>
    </>
  );
}
