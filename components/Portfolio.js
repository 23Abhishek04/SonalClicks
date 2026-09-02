"use client"
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Portfolio.js — Linen & Light Photography
 * -------------------------------------------------
 * Masonry-style image grid (CSS columns, break-inside-avoid)
 * matching the reference: varied image heights, tight gutters,
 * no cropping to a fixed ratio. Click any image to open a
 * simple lightbox with keyboard + arrow navigation.
 * Responsive: 1 column on mobile, 2 on tablet, 3 on desktop.
 */

const COLORS = {
  bg: "#FBF7F1",
  ink: "#2B241D",
  inkSoft: "#6B6156",
  gold: "#C9A462",
};

const IMAGES = [
  "/portfolio/1.jpg",
  "/portfolio/2.jpg",
  "/portfolio/3.jpg",
  "/portfolio/4.jpg",
  "/portfolio/5.png",
  "/portfolio/6.jpg",
  "/portfolio/7.jpg",
  "/portfolio/8.png",
  "/portfolio/9.jpg",
  "/portfolio/10.jpg",
  "/portfolio/11.jpg",
  "/portfolio/12.jpg",
];

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") setActiveIndex((i) => (i + 1) % IMAGES.length);
      if (e.key === "ArrowLeft") setActiveIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  return (
    <section
      style={{ backgroundColor: COLORS.bg, fontFamily: "'Jost', 'Helvetica Neue', Arial, sans-serif" }}
      className="w-full py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <p style={{ color: COLORS.gold, letterSpacing: "0.32em" }} className="text-[11px] sm:text-[12px] mb-3">
            OUR WORK
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', 'Georgia', serif",
              color: COLORS.ink,
              letterSpacing: "0.02em",
            }}
            className="text-[32px] sm:text-[44px] lg:text-[52px] font-medium"
          >
            Portfolio
          </h2>
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5">
          {IMAGES.map((src, i) => (
            <button
              key={src + i}
              onClick={() => setActiveIndex(i)}
              className="group relative block w-full mb-4 sm:mb-5 overflow-hidden"
              style={{ breakInside: "avoid", border: "none", padding: 0, background: "none", cursor: "pointer" }}
              aria-label={`Open portfolio image ${i + 1}`}
            >
              <img
                src={src}
                alt={`Portfolio shot ${i + 1}`}
                loading="lazy"
                className="w-full h-auto block transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: "rgba(20,17,13,0.18)" }}
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
          style={{ backgroundColor: "rgba(15,12,9,0.94)" }}
          onClick={() => setActiveIndex(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex(null);
            }}
            aria-label="Close"
            className="absolute top-5 right-5 sm:top-8 sm:right-8 flex items-center justify-center w-10 h-10 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#FBF7F1", border: "none" }}
          >
            <X size={20} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((activeIndex - 1 + IMAGES.length) % IMAGES.length);
            }}
            aria-label="Previous image"
            className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#FBF7F1", border: "none" }}
          >
            <ChevronLeft size={20} />
          </button>

          <img
            src={IMAGES[activeIndex]}
            alt={`Portfolio shot ${activeIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] object-contain"
            style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((activeIndex + 1) % IMAGES.length);
            }}
            aria-label="Next image"
            className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#FBF7F1", border: "none" }}
          >
            <ChevronRight size={20} />
          </button>

          <span
            className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[13px]"
            style={{ color: "rgba(251,247,241,0.7)" }}
          >
            {activeIndex + 1} / {IMAGES.length}
          </span>
        </div>
      )}
    </section>
  );
}