"use client";

import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const COLORS = {
  bg: "#FBF7F1",
  ink: "#2B241D",
  inkSoft: "#6B6156",
  gold: "#C9A462",
};

const IMAGES = [
  "/portfolio/1.webp",
  "/portfolio/2.webp",
  "/portfolio/3.webp",
  "/portfolio/4.webp",
  "/portfolio/5.webp",
  "/portfolio/6.webp",
  "/portfolio/7.webp",
  "/portfolio/8.webp",
  "/portfolio/9.webp",
  "/portfolio/10.webp",
  "/portfolio/11.webp",
  "/portfolio/12.webp",
];

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(null);

  const isOpen = activeIndex !== null;

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveIndex(null);
      }

      if (e.key === "ArrowRight") {
        setActiveIndex(
          (current) => (current + 1) % IMAGES.length
        );
      }

      if (e.key === "ArrowLeft") {
        setActiveIndex(
          (current) =>
            (current - 1 + IMAGES.length) % IMAGES.length
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <section
      id="portfolio"
      className="w-full py-16 sm:py-20 lg:py-24"
      style={{
        backgroundColor: COLORS.bg,
        fontFamily:
          "'Jost', 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mb-10 text-center sm:mb-14">
          <p
            className="mb-3 text-[11px] sm:text-[12px]"
            style={{
              color: COLORS.gold,
              letterSpacing: "0.32em",
            }}
          >
            OUR WORK
          </p>

          <h2
            className="text-[32px] font-medium sm:text-[44px] lg:text-[52px]"
            style={{
              fontFamily:
                "'Cormorant Garamond', 'Georgia', serif",
              color: COLORS.ink,
              letterSpacing: "0.02em",
            }}
          >
            Portfolio
          </h2>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 gap-4 sm:columns-2 sm:gap-5 lg:columns-3">
          {IMAGES.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Open portfolio image ${index + 1}`}
              className="group relative mb-4 block w-full overflow-hidden sm:mb-5"
              style={{
                breakInside: "avoid",
                border: "none",
                padding: 0,
                background: "none",
                cursor: "pointer",
              }}
            >
              <Image
                src={src}
                alt={`Portfolio shot ${index + 1}`}
                width={1200}
                height={1600}
                sizes="
                  (max-width: 639px) 100vw,
                  (max-width: 1023px) 50vw,
                  33vw
                "
                quality={80}
                className="block h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  backgroundColor:
                    "rgba(20,17,13,0.18)",
                }}
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center px-4"
          style={{
            backgroundColor: "rgba(15,12,9,0.94)",
          }}
          onClick={() => setActiveIndex(null)}
        >
          {/* Close */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex(null);
            }}
            aria-label="Close portfolio"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full sm:right-8 sm:top-8"
            style={{
              backgroundColor:
                "rgba(255,255,255,0.1)",
              color: "#FBF7F1",
              border: "none",
            }}
          >
            <X size={20} />
          </button>

          {/* Previous */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();

              setActiveIndex(
                (activeIndex - 1 + IMAGES.length) %
                  IMAGES.length
              );
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full sm:left-8"
            style={{
              backgroundColor:
                "rgba(255,255,255,0.1)",
              color: "#FBF7F1",
              border: "none",
            }}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Lightbox Image */}
          <div
            className="relative h-[85vh] w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={IMAGES[activeIndex]}
              alt={`Portfolio shot ${activeIndex + 1}`}
              fill
              sizes="90vw"
              quality={85}
              priority
              className="object-contain"
            />
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();

              setActiveIndex(
                (activeIndex + 1) % IMAGES.length
              );
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full sm:right-8"
            style={{
              backgroundColor:
                "rgba(255,255,255,0.1)",
              color: "#FBF7F1",
              border: "none",
            }}
          >
            <ChevronRight size={20} />
          </button>

          {/* Counter */}
          <span
            className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[13px]"
            style={{
              color: "rgba(251,247,241,0.7)",
            }}
          >
            {activeIndex + 1} / {IMAGES.length}
          </span>
        </div>
      )}
    </section>
  );
}