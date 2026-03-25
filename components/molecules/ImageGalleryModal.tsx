"use client";

import { useEffect } from "react";
import Image from "next/image";
import { urlFor } from "@/lib/cms/client";
import { GalleryImage } from "./ImageGallery";

interface ImageGalleryModalProps {
  image: GalleryImage;
  imageIndex: number;
  totalImages: number;
  fallbackAlt: string;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onBackdropClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function ImageGalleryModal({
  image,
  imageIndex,
  totalImages,
  fallbackAlt,
  onClose,
  onPrevious,
  onNext,
  onBackdropClick,
}: ImageGalleryModalProps) {
  // Keyboard navigation
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
      if (e.key === "ArrowLeft") {
        onPrevious();
      }
      if (e.key === "ArrowRight") {
        onNext();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose, onPrevious, onNext]);

  // Touch swipe navigation
  useEffect(() => {
    let touchStartX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;

      // Swiped left (next image)
      if (diff > 50) {
        onNext();
      }
      // Swiped right (previous image)
      if (diff < -50) {
        onPrevious();
      }
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);
    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [onPrevious, onNext]);

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer modal"
    >
      <div className="relative max-w-2xl sm:max-w-xl lg:max-w-lg max-h-[80vh] sm:max-h-[75vh] lg:max-h-[70vh] w-full flex items-center justify-center overflow-y-clip">
        {imageIndex > 0 && (
          <button
            onClick={onPrevious}
            className="hidden sm:block absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 -translate-x-12 sm:-translate-x-16 bg-white hover:bg-gray-200 text-black p-2 rounded-full transition-colors focus-visible:ring-3 focus-visible:ring-[--color-accent]"
            aria-label="Previous image"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}
        <Image
          src={urlFor(image.asset).width(2000).auto("format").url()}
          alt={image.alt ?? fallbackAlt}
          width={image.dimensions?.width ?? 2000}
          height={image.dimensions?.height ?? 1333}
          className="w-full h-auto rounded-lg object-contain"
          sizes="(max-width: 1280px) 90vw, 80vw"
          priority
        />
        {imageIndex < totalImages - 1 && (
          <button
            onClick={onNext}
            className="hidden sm:block absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 translate-x-12 sm:translate-x-16 bg-white hover:bg-gray-200 text-black p-2 rounded-full transition-colors focus-visible:ring-3 focus-visible:ring-[--color-accent]"
            aria-label="Next image"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-4 right-4 bg-white hover:bg-gray-200 text-black p-2 rounded-full transition-colors focus-visible:ring-3 focus-visible:ring-[--color-accent]"
          aria-label="Close image viewer"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {totalImages > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
            <div className="bg-black/50 text-white px-3 py-1 rounded-full text-sm mb-2">
              {imageIndex + 1} / {totalImages}
            </div>
            <div className="md:hidden bg-black/50 text-white px-3 py-1 rounded text-xs">
              Wische um zu navigieren
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
