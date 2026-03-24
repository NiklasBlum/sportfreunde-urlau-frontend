import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import SectionLabel from "@/components/atoms/SectionLabel";
import Section from "@/components/atoms/Section";
import { Headline } from "@/components/atoms/Headline";
import {
  getSportmaedelsEvents,
  getSportmaedelsEventBySlug,
} from "@/lib/cms/getSportmaedelsEvents";
import { urlFor } from "@/lib/cms/client";

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
      <Navbar />
      <main id="main-content">
        {/* Header */}
        <Section className="bg-blue">
          <SectionLabel light>Rückblick</SectionLabel>
          <Headline level="h1" light>
            {event.headline}
          </Headline>
          <p className="text-white text-body-xs mt-2">
            {formatDate(event.date)}
          </p>
        </Section>

        {/* Body */}
        <Section>
          {event.description && (
            <p className="text-muted text-body mb-5 whitespace-pre-wrap">
              {event.description}
            </p>
          )}
          {event.images.length > 0 && (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
              {event.images.map((image) => (
                <div
                  key={image._key}
                  className="break-inside-avoid mb-4 rounded-xl overflow-hidden border border-black/8 bg-black/5"
                >
                  <Image
                    src={urlFor(image.asset).width(1200).auto("format").url()}
                    alt={image.alt ?? event.headline}
                    width={image.dimensions?.width ?? 1200}
                    height={image.dimensions?.height ?? 800}
                    className="w-full h-auto"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  />
                </div>
              ))}
            </div>
          )}
        </Section>
      </main>
      <Footer />
    </>
  );
}
