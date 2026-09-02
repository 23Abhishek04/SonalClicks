"use client"

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

/**
 * Services.js — Linen & Light Photography
 * -------------------------------------------------
 * "Discover our magical collections" showcase.
 * md and up: inverted-pyramid grid — 3 cards on top row,
 *            2 centered cards on the row below.
 * below md:  swipeable single-card carousel with dots + arrows.
 */

const COLORS = {
  bg: "#FFFFFF",
  ink: "#2B241D",
  gold: "#C9A462",
};

const SERVICES = [
  {
    label: "Wedding",
    image:
      "/images/wedding.jpg",
  },
  {
    label: "Pre-Wedding",
    image:
      "/images/prewedding.jpg",
  },
  {
    label: "Maternity",
    image:
      "/images/maternity.jpg",
  },
  {
    label: "Baby Shoot",
    image:
      "/images/baby.jpg",
  },
  {
    label: "Model Shoot",
    image:
      "/images/model.png",
  },
];

function ServiceCard({ service }) {
  return (
    <a
      href={`#${service.label.toLowerCase().replace(/\s+/g, "-")}`}
      className="group relative block overflow-hidden w-full h-full"
    >
     <Image
  src={service.image}
  alt={service.label}
  fill
  sizes="(max-width: 767px) 100vw, 33vw"
  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
/>
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(20,17,13,0) 45%, rgba(20,17,13,0.55) 100%)",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-8 flex flex-col items-center px-4">
        <span
          style={{
            fontFamily: "'Cormorant Garamond', 'Georgia', serif",
            color: "#FFFFFF",
            letterSpacing: "0.06em",
          }}
          className="text-[24px] sm:text-[26px] font-medium tracking-wide text-center"
        >
          {service.label}
        </span>
        <span
          className="mt-2 h-px w-14 transition-all duration-500 group-hover:w-24"
          style={{ backgroundColor: "#FFFFFF" }}
          aria-hidden="true"
        />
      </div>
    </a>
  );
}

export default function Services() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);

  const goTo = (i) => setIndex((i + SERVICES.length) % SERVICES.length);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const onTouchMove = (e) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    if (touchDeltaX.current > 50) prev();
    else if (touchDeltaX.current < -50) next();
    touchDeltaX.current = 0;
  };

  return (
    <section
      style={{ backgroundColor: COLORS.bg, fontFamily: "'Jost', 'Helvetica Neue', Arial, sans-serif" }}
      className="w-full py-16 sm:py-20"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <p
            style={{ color: COLORS.gold, letterSpacing: "0.32em" }}
            className="text-[11px] sm:text-[12px] mb-3"
          >
            OUR SERVICES
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', 'Georgia', serif",
              color: COLORS.ink,
              letterSpacing: "0.03em",
            }}
            className="text-[32px] sm:text-[44px] lg:text-[52px] font-medium"
          >
            Discover Our Magical Collections
          </h2>
        </div>

        {/* Inverted pyramid grid — tablet and up */}
        <div className="hidden md:grid grid-cols-6 gap-6">
          {SERVICES.slice(0, 3).map((service) => (
            <div key={service.label} className="col-span-2" style={{ aspectRatio: "3 / 4" }}>
              <ServiceCard service={service} />
            </div>
          ))}
          <div
            className="col-start-2 col-span-2"
            style={{ aspectRatio: "3 / 4" }}
          >
            <ServiceCard service={SERVICES[3]} />
          </div>
          <div
            className="col-start-4 col-span-2"
            style={{ aspectRatio: "3 / 4" }}
          >
            <ServiceCard service={SERVICES[4]} />
          </div>
        </div>

        {/* Carousel — mobile only */}
        <div className="md:hidden">
          <div
            className="relative overflow-hidden"
            style={{ aspectRatio: "3 / 4" }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex h-full transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {SERVICES.map((service) => (
                <div key={service.label} className="w-full h-full shrink-0">
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>

            {/* Arrows */}
            <button
              onClick={prev}
              aria-label="Previous service"
              className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full"
              style={{ backgroundColor: "rgba(255,255,255,0.85)", color: COLORS.ink, border: "none" }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Next service"
              className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full"
              style={{ backgroundColor: "rgba(255,255,255,0.85)", color: COLORS.ink, border: "none" }}
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {SERVICES.map((service, i) => (
              <button
                key={service.label}
                onClick={() => goTo(i)}
                aria-label={`Go to ${service.label}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === index ? "22px" : "7px",
                  height: "7px",
                  backgroundColor: i === index ? COLORS.gold : "#E3DACA",
                  border: "none",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}