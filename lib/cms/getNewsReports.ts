import { client } from "./client";
import { CmsImage } from "./types/cmsImage";
import { CmsRichText } from "./types/cmsRichText";

export type NewsReportTag = "News" | "Bericht";

export interface NewsReportPreview {
  _id: string;
  title: string;
  info: string | null;
  date: string;
  slug: string | null;
  tag: NewsReportTag | null;
}

export interface NewsReport extends NewsReportPreview {
  richText: CmsRichText | null;
}

export interface NewsReportWithImages extends NewsReport {
  images?: CmsImage[];
}

export async function getNewsReports(): Promise<NewsReportPreview[]> {
  return client.fetch(
    `*[_type == "news_reports"] | order(date desc) {
      _id,
      title,
      info,
      date,
      "slug": slug.current,
      "tag": select(tag == "News" => "News", tag == "Bericht" => "Bericht", null)
    }`,
  );
}

export async function getNewsReportBySlug(
  slug: string,
): Promise<NewsReportWithImages | null> {
  if (!slug) return null;

  return client.fetch(
    `*[_type == "news_reports" && slug.current == $slug][0] {
      _id,
      title,
      info,
      date,
      "tag": select(tag == "News" => "News", tag == "Bericht" => "Bericht", null),
      richText,
      "slug": slug.current,
      images[]{
        _key,
        alt,
        "asset": {"_ref": asset._ref},
        "dimensions": asset->metadata.dimensions
      }
    }`,
    { slug },
  );
}
