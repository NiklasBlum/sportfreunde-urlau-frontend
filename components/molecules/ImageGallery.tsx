import Image from "next/image";
import { urlFor } from "@/lib/cms/client";

export interface GalleryImage {
  _key: string;
  asset: { _ref: string; _type: "reference" };
  alt: string | null;
  dimensions: { width: number; height: number } | null;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  fallbackAlt: string;
  /** Number of columns at the `lg` breakpoint. Defaults to 3. */
  columns?: 3 | 4;
}

export default function ImageGallery({
  images,
  fallbackAlt,
  columns = 3,
}: ImageGalleryProps) {
  if (images.length === 0) return null;

  const colClass =
    columns === 4
      ? "columns-2 sm:columns-3 lg:columns-4"
      : "columns-1 sm:columns-2 lg:columns-3";

  const sizes =
    columns === 4
      ? "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px";

  return (
    <div className={`${colClass} gap-4`}>
      {images.map((image) => (
        <div
          key={image._key}
          className="break-inside-avoid mb-4 rounded-xl overflow-hidden border border-black/8 bg-black/5"
        >
          <Image
            src={urlFor(image.asset).width(1200).auto("format").url()}
            alt={image.alt ?? fallbackAlt}
            width={image.dimensions?.width ?? 1200}
            height={image.dimensions?.height ?? 800}
            className="w-full h-auto"
            sizes={sizes}
          />
        </div>
      ))}
    </div>
  );
}
