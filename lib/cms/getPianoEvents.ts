import { client } from "./client";
import { CmsImage } from "./types/cmsImage";
import { CmsRichText } from "./types/cmsRichText";

export interface PianoEventPreview {
  _id: string;
  headline: string;
  description: string | null;
  date: string;
  slug: string;
}

export interface PianoEvent extends PianoEventPreview {
  richText: CmsRichText | null;
  images: CmsImage[];
}

export async function getPianoEvents(): Promise<PianoEventPreview[]> {
  return client.fetch(
    `*[_type == "piano_events"] | order(date desc) {
      _id,
      headline,
      "description": pt::text(richText),
      date,
      "slug": slug.current
    }`,
  );
}

export async function getPianoEventBySlug(
  slug: string,
): Promise<PianoEvent | null> {
  return client.fetch(
    `*[_type == "piano_events" && slug.current == $slug][0] {
      _id,
      headline,
      "description": pt::text(richText),
      richText,
      date,
      "slug": slug.current,
      "images": coalesce(images[], []) {
        _key,
        "asset": {"_ref": asset._ref},
        "dimensions": asset->metadata.dimensions,
        alt
      }
    }`,
    { slug },
  );
}
