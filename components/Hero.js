
"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const COLORS = {
  gold: "#C9A462",
  goldDeep: "#B5844A",
  white: "#FFFFFF",
};

const SOCIALS = [
  {
    icon: Download,
    label: "Book now",
    href: "#contact",
  },
  {
    icon: FaYoutube,
    label: "YouTube",
    href: "#",
  },
  {
    icon: FaFacebookF,
    label: "Facebook",
    href: "#",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://instagram.com",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    href: "#",
  },
];

const HERO_BANNERS = [
  {
    image: "/images/banner1.png",
    alt: "Wedding banner 1",
  },
  {
    image: "/images/banner2.png",
    alt: "Wedding banner 2",
  },
  {
    image: "/images/banner3.png",
    alt: "Wedding banner 3",
  },
  {
    image: "/images/banner4.png",
    alt: "Wedding banner 4",
  },
  {
    image: "/images/banner5.png",
    alt: "Wedding banner 5",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === HERO_BANNERS.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen min-h-150 w-full overflow-hidden"
      style={{
        fontFamily:
          "var(--font-jost), 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      {/* Background Slider */}
      <div className="absolute inset-0">
        {HERO_BANNERS.map((banner, index) => (
          <img
            key={banner.image}
            src={banner.image}
            alt={banner.alt}
            className={`
              absolute inset-0
              h-full w-full
              object-cover object-center
              transition-opacity duration-1500 ease-in-out
              ${
                currentSlide === index
                  ? "z-10 opacity-100"
                  : "z-0 opacity-0"
              }
            `}
            fetchPriority={index === 0 ? "high" : "auto"}
          />
        ))}
      </div>

      {/* Premium Background Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-11"
        style={{
          background: `
            linear-gradient(
              180deg,
              rgba(20, 16, 12, 0.30) 0%,
              rgba(20, 16, 12, 0.12) 35%,
              rgba(20, 16, 12, 0.28) 60%,
              rgba(20, 16, 12, 0.82) 100%
            ),
            linear-gradient(
              90deg,
              rgba(15, 12, 9, 0.28) 0%,
              rgba(15, 12, 9, 0.05) 50%,
              rgba(15, 12, 9, 0.22) 100%
            )
          `,
        }}
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="mx-auto max-w-7xl px-5 pb-7 sm:px-8 sm:pb-10 lg:px-10 lg:pb-14">
          <div className="w-full sm:max-w-xl lg:max-w-2xl">
            <div
              className="
                border border-white/10
                px-6 py-7
                backdrop-blur-[3px]
                sm:px-8 sm:py-8
                lg:px-10 lg:py-9
              "
              style={{
                backgroundColor: "rgba(20,17,13,0.62)",
                boxShadow: "0 12px 45px rgba(0,0,0,0.12)",
              }}
            >
              {/* Eyebrow */}
              <p
                className="
                  mb-2.5
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.28em]
                  sm:text-[11px]
                "
                style={{
                  color: COLORS.gold,
                }}
              >
                Framing Moments, Crafting Memories
              </p>

              {/* Heading */}
              <h1
                className="
                  mb-3
                  text-[34px]
                  font-semibold
                  leading-[1.05]
                  sm:text-[40px]
                  lg:text-[48px]
                "
                style={{
                  fontFamily:
                    "var(--font-cormorant), Georgia, serif",
                  color: COLORS.white,
                  letterSpacing: "0.01em",
                }}
              >
                Every photo tells a heartfelt story
              </h1>

              {/* Description */}
              <p
                className="
                  mb-6
                  max-w-lg
                  text-[13.5px]
                  leading-[1.75]
                  sm:mb-7
                  sm:text-[15px]
                "
                style={{
                  color: "rgba(255,255,255,0.82)",
                }}
              >
                — your story, captured with passion and purpose.
              </p>

              {/* CTA */}
              <a
                href="#about"
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-7 py-3
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:opacity-90
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#C9A462]
                  focus:ring-offset-2
                "
                style={{
                  backgroundColor: COLORS.goldDeep,
                  color: COLORS.white,
                }}
              >
                Know More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Indicators */}
      <div
        className="
          absolute
          bottom-5 left-1/2
          z-30
          flex
          -translate-x-1/2
          items-center
          gap-2
          sm:bottom-7
        "
      >
        {HERO_BANNERS.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`
              h-1.5 rounded-full
              transition-all duration-500
              ${
                currentSlide === index
                  ? "w-8 bg-[#C9A462]"
                  : "w-1.5 bg-white/60 hover:bg-white"
              }
            `}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        aria-label="Scroll to discover more"
        className="
          absolute
          bottom-5 right-1/2
          z-20
          hidden
          translate-x-1/2
          flex-col
          items-center
          gap-2
          text-white/70
          transition-colors
          hover:text-white
          lg:flex
        "
      >
        <span className="text-[9px] uppercase tracking-[0.25em]">
          Scroll
        </span>

        <span className="h-8 w-px bg-white/50" />
      </a>
    </section>
  );
}

