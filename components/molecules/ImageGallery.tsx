"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { urlFor } from "@/lib/cms/client";
import ImageGalleryModal from "./ImageGalleryModal";
import { CmsImage } from "@/lib/cms/types/cmsImage";

interface ImageGalleryProps {
  images: CmsImage[];
  fallbackAlt: string;
  /** Number of columns at the `lg` breakpoint. Defaults to 3. */
  columns?: 3 | 4;
  className?: string;
}

export default function ImageGallery({
  images,
  fallbackAlt,
  columns = 3,
  className,
}: ImageGalleryProps) {
  const [selectedImageKey, setSelectedImageKey] = useState<string | null>(null);
  const displayedImages = images.filter(
    (img) => !!img?.asset && !!img.asset._ref,
  );

  const selectedImage = displayedImages.find(
    (img) => img._key === selectedImageKey,
  );
  const selectedImageIndex = displayedImages.findIndex(
    (img) => img._key === selectedImageKey,
  );

  const goToPrevious = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageKey(displayedImages[selectedImageIndex - 1]._key);
    }
  };

  const goToNext = () => {
    if (selectedImageIndex < displayedImages.length - 1) {
      setSelectedImageKey(displayedImages[selectedImageIndex + 1]._key);
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

  if (displayedImages.length === 0) return null;

  const isSingleImage = displayedImages.length === 1;

  const colClass =
    columns === 4
      ? "columns-2 sm:columns-3 lg:columns-4"
      : "columns-1 sm:columns-2 lg:columns-3";

  const sizes = isSingleImage
    ? "(max-width: 640px) 72vw, (max-width: 1024px) 56vw, 420px"
    : columns === 4
      ? "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px";

  const containerClass = isSingleImage
    ? `flex justify-center ${className ?? ""}`
    : `${colClass} gap-4 ${className ?? ""}`;

  return (
    <>
      <div className={containerClass}>
        {displayedImages.map((image) => (
          <div
            role="button"
            key={image._key}
            onClick={() => setSelectedImageKey(image._key)}
            className={`break-inside-avoid mb-4 rounded-xl overflow-hidden border border-black/8 bg-black/5 cursor-pointer transition-transform hover:scale-105 focus-visible:ring-3 focus-visible:ring-[--color-accent] p-0 ${isSingleImage ? "w-full max-w-lg" : ""}`}
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
          totalImages={displayedImages.length}
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
