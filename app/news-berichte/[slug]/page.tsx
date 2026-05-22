import type { Metadata } from "next";
import SectionLabel from "@/components/atoms/SectionLabel";
import Section from "@/components/atoms/Section";
import { Headline } from "@/components/atoms/Headline";
import RichText from "@/components/atoms/RichText";
import { notFound } from "next/navigation";
import { getNewsReportBySlug } from "@/lib/cms/getNewsReports";
import ImageGallery from "@/components/molecules/ImageGallery";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const report = await getNewsReportBySlug(slug);

  if (!report) return {};

  return {
    title: `${report.title} – Sportfreunde Urlau e.V.`,
    description: report.info ?? undefined,
  };
}

export default async function NewsReportPage({ params }: Props) {
  const { slug } = await params;
  const report = await getNewsReportBySlug(slug);

  if (!report) return notFound();

  const formattedDate = report.date
    ? new Date(report.date).toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "";

  const hasRichDescription =
    Array.isArray(report.richText) && report.richText.length > 0;

  return (
    <>
      <Section className="bg-blue">
        {report.tag && <SectionLabel light>{report.tag}</SectionLabel>}

        <Headline level="h1" light>
          {report.title} {formattedDate ? `- ${formattedDate}` : null}
        </Headline>

        {report.info ? (
          <p className="text-red-tint text-body">{report.info}</p>
        ) : null}
      </Section>

      <Section>
        {hasRichDescription && (
          <article className="prose prose-sm mb-5">
            <RichText value={report.richText} />
          </article>
        )}

        {report.images && report.images.length > 0 && (
          <ImageGallery images={report.images} fallbackAlt={report.title} />
        )}
      </Section>
    </>
  );
}
