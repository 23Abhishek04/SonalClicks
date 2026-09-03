"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const COLORS = {
  bg: "#FFFFFF",
  ink: "#2B241D",
  gold: "#C9A462",
};

const SERVICES = [
  {
    label: "Wedding",
    image: "/images/wedding.webp",
  },
  {
    label: "Pre-Wedding",
    image: "/images/prewedding.webp",
  },
  {
    label: "Maternity",
    image: "/images/maternity.webp",
  },
  {
    label: "Baby Shoot",
    image: "/images/baby.webp",
  },
  {
    label: "Model Shoot",
    image: "/images/model.webp",
  },
];

function ServiceCard({ service, priority = false }) {
  return (
    <a
      href={`#${service.label.toLowerCase().replace(/\s+/g, "-")}`}
      className="group relative block h-full w-full overflow-hidden"
    >
      <Image
        src={service.image}
        alt={service.label}
        fill
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        quality={75}
        sizes="
          (max-width: 767px) 100vw,
          (max-width: 1279px) 33vw,
          400px
        "
        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Bottom Gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,17,13,0) 45%, rgba(20,17,13,0.55) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Label */}
      <div className="absolute inset-x-0 bottom-8 flex flex-col items-center px-4">
        <span
          className="text-center text-[24px] font-medium tracking-wide sm:text-[26px]"
          style={{
            fontFamily:
              "'Cormorant Garamond', 'Georgia', serif",
            color: "#FFFFFF",
            letterSpacing: "0.06em",
          }}
        >
          {service.label}
        </span>

        <span
          className="mt-2 h-px w-14 transition-all duration-500 group-hover:w-24"
          style={{
            backgroundColor: "#FFFFFF",
          }}
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

  const goTo = (newIndex) => {
    setIndex(
      (newIndex + SERVICES.length) % SERVICES.length
    );
  };

  const next = () => {
    goTo(index + 1);
  };

  const prev = () => {
    goTo(index - 1);
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const onTouchMove = (e) => {
    touchDeltaX.current =
      e.touches[0].clientX - touchStartX.current;
  };

  const onTouchEnd = () => {
    if (touchDeltaX.current > 50) {
      prev();
    } else if (touchDeltaX.current < -50) {
      next();
    }

    touchDeltaX.current = 0;
  };

  return (
    <section
      className="w-full py-16 sm:py-20"
      style={{
        backgroundColor: COLORS.bg,
        fontFamily:
          "'Jost', 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="mb-12 text-center sm:mb-16">
          <p
            className="mb-3 text-[11px] sm:text-[12px]"
            style={{
              color: COLORS.gold,
              letterSpacing: "0.32em",
            }}
          >
            OUR SERVICES
          </p>

          <h2
            className="text-[32px] font-medium sm:text-[44px] lg:text-[52px]"
            style={{
              fontFamily:
                "'Cormorant Garamond', 'Georgia', serif",
              color: COLORS.ink,
              letterSpacing: "0.03em",
            }}
          >
            Discover Our Magical Collections
          </h2>
        </div>

        {/* Desktop / Tablet */}
        <div className="hidden grid-cols-6 gap-6 md:grid">
          {SERVICES.slice(0, 3).map((service, i) => (
            <div
              key={service.label}
              className="col-span-2 aspect-3/4"
            >
              <ServiceCard
                service={service}
                priority={i === 0}
              />
            </div>
          ))}

          <div className="col-span-2 col-start-2 aspect-3/4">
            <ServiceCard service={SERVICES[3]} />
          </div>

          <div className="col-span-2 col-start-4 aspect-3/4">
            <ServiceCard service={SERVICES[4]} />
          </div>
        </div>

        {/* Mobile Carousel */}
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
              style={{
                transform: `translateX(-${index * 100}%)`,
              }}
            >
              {SERVICES.map((service, i) => (
                <div
                  key={service.label}
                  className="h-full w-full shrink-0"
                >
                  <ServiceCard
                    service={service}
                    priority={index === i}
                  />
                </div>
              ))}
            </div>

            {/* Previous */}
            <button
              type="button"
              onClick={prev}
              aria-label="Previous service"
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full transition-transform duration-200 hover:scale-105"
              style={{
                backgroundColor:
                  "rgba(255,255,255,0.85)",
                color: COLORS.ink,
                border: "none",
              }}
            >
              <ChevronLeft size={18} />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={next}
              aria-label="Next service"
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full transition-transform duration-200 hover:scale-105"
              style={{
                backgroundColor:
                  "rgba(255,255,255,0.85)",
                color: COLORS.ink,
                border: "none",
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Dots */}
          <div className="mt-5 flex items-center justify-center gap-2">
            {SERVICES.map((service, i) => (
              <button
                key={service.label}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to ${service.label}`}
                aria-current={
                  i === index ? "true" : undefined
                }
                className="rounded-full transition-all duration-300"
                style={{
                  width:
                    i === index ? "22px" : "7px",
                  height: "7px",
                  backgroundColor:
                    i === index
                      ? COLORS.gold
                      : "#E3DACA",
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