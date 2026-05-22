import { client } from "./client";
import { CmsImage } from "./types/cmsImage";
import { CmsRichText } from "./types/cmsRichText";

export interface MittwochmaedelsEventPreview {
  _id: string;
  headline: string;
  description: string | null;
  date: string;
  slug: string;
}

export interface MittwochmaedelsEvent extends MittwochmaedelsEventPreview {
  richText: CmsRichText | null;
  images: CmsImage[];
}

export async function getMittwochmaedelsEvents(): Promise<
  MittwochmaedelsEventPreview[]
> {
  return client.fetch(
    `*[_type == "mittwochmaedels_events"] | order(date desc) {
      _id,
      headline,
      "description": pt::text(richText),
      date,
      "slug": slug.current
    }`,
  );
}

export async function getMittwochmaedelsEventBySlug(
  slug: string,
): Promise<MittwochmaedelsEvent | null> {
  return client.fetch(
    `*[_type == "mittwochmaedels_events" && slug.current == $slug][0] {
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
