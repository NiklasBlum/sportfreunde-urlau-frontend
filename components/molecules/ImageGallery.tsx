"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { urlFor } from "@/lib/cms/client";
import ImageGalleryModal from "./ImageGalleryModal";

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
  const [selectedImageKey, setSelectedImageKey] = useState<string | null>(null);
  const selectedImage = images.find((img) => img._key === selectedImageKey);
  const selectedImageIndex = images.findIndex(
    (img) => img._key === selectedImageKey,
  );

  const goToPrevious = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageKey(images[selectedImageIndex - 1]._key);
    }
  };

  const goToNext = () => {
    if (selectedImageIndex < images.length - 1) {
      setSelectedImageKey(images[selectedImageIndex + 1]._key);
    }
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedImageKey) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [selectedImageKey]);

  const handleCloseModal = () => {
    setSelectedImageKey(null);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

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
    <>
      <div className={`${colClass} gap-4`}>
        {images.map((image) => (
          <div
            role="button"
            key={image._key}
            onClick={() => setSelectedImageKey(image._key)}
            className="break-inside-avoid mb-4 rounded-xl overflow-hidden border border-black/8 bg-black/5 cursor-pointer transition-transform hover:scale-105 focus-visible:ring-3 focus-visible:ring-[--color-accent] p-0"
            aria-label={`Open full-size image: ${image.alt ?? fallbackAlt}`}
          >
            <Image
              src={urlFor(image.asset).width(1200).auto("format").url()}
              alt={image.alt ?? fallbackAlt}
              width={image.dimensions?.width ?? 1200}
              height={image.dimensions?.height ?? 800}
              className="w-full h-auto pointer-events-none"
              sizes={sizes}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <ImageGalleryModal
          image={selectedImage}
          imageIndex={selectedImageIndex}
          totalImages={images.length}
          fallbackAlt={fallbackAlt}
          onClose={handleCloseModal}
          onPrevious={goToPrevious}
          onNext={goToNext}
          onBackdropClick={handleBackdropClick}
        />
      )}
    </>
  );
}
