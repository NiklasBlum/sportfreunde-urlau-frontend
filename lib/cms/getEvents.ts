import { client } from "./client";
import { CmsImage } from "./types/cmsImage";
import { CmsRichText } from "./types/cmsRichText";

export interface EventPreview {
  _id: string;
  title: string;
  info: string | null;
  date: string;
  slug: string | null;
  tag: string | null;
}

export interface Event extends EventPreview {
  richText: CmsRichText | null;
}

export interface EventWithImages extends Event {
  images?: CmsImage[];
}

export async function getEvents(): Promise<EventPreview[]> {
  return client.fetch(
    `*[_type == "events"] | order(date desc) {
      _id,
      title,
      info,
      date,
      "slug": slug.current,
      tag
    }`,
  );
}

export async function getEventBySlug(
  slug: string,
): Promise<EventWithImages | null> {
  if (!slug) return null;

  return client.fetch(
    `*[_type == "events" && slug.current == $slug][0] {
      _id,
      title,
      info,
      date,
      tag,
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
