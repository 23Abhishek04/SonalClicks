"use client";

import { useState } from "react";
import {
  Camera,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const COLORS = {
  ink: "#2B241D",
  inkSoft: "#5A5049",
  gold: "#C9A462",
  goldDeep: "#B5844A",
  cardBg: "#F7ECDE",
  white: "#FFFFFF",
};

const INSTAGRAM_URL = "https://instagram.com";
const FACEBOOK_URL = "#";
const INSTAGRAM_HANDLE = "@linenandlight_photo";

const FEED_PAIRS = [
  [
    {
      src: "/images/t1.webp",
      alt: "Elegant wedding couple",
    },
    {
      src: "/images/t2.webp",
      alt: "Wedding couple portrait",
    },
  ],
  [
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
      alt: "Bride and groom wedding portrait",
    },
    {
      src: "https://images.unsplash.com/photo-1524638431109-93d95c968f03?q=80&w=1200&auto=format&fit=crop",
      alt: "Romantic wedding moment",
    },
  ],
  [
    {
      src: "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?q=80&w=1200&auto=format&fit=crop",
      alt: "Wedding celebration",
    },
    {
      src: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=1200&auto=format&fit=crop",
      alt: "Wedding detail",
    },
  ],
];

function SocialButton({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        flex h-10 w-10 items-center justify-center
        rounded-full
        transition-all duration-300
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
      {children}
    </a>
  );
}

function SliderButton({ direction, onClick }) {
  const previous = direction === "previous";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={
        previous
          ? "Show previous Instagram posts"
          : "Show next Instagram posts"
      }
      className="
        flex h-9 w-9 items-center justify-center
        rounded-full
        transition-all duration-300
        hover:-translate-y-0.5
        hover:bg-[#F7ECDE]
        focus:outline-none
        focus:ring-2
        focus:ring-[#C9A462]
        focus:ring-offset-2
      "
      style={{
        border: `1px solid ${COLORS.goldDeep}`,
        color: COLORS.goldDeep,
        backgroundColor: "transparent",
      }}
    >
      {previous ? (
        <ChevronUp size={16} strokeWidth={1.5} />
      ) : (
        <ChevronDown size={16} strokeWidth={1.5} />
      )}
    </button>
  );
}

export default function Testimonial() {
  const [pairIndex, setPairIndex] = useState(0);

  const nextPair = () => {
    setPairIndex((current) => {
      return (current + 1) % FEED_PAIRS.length;
    });
  };

  const previousPair = () => {
    setPairIndex((current) => {
      return (
        (current - 1 + FEED_PAIRS.length) %
        FEED_PAIRS.length
      );
    });
  };

  const currentPosts = FEED_PAIRS[pairIndex];

  return (
    <section
      aria-labelledby="instagram-feed-title"
      className="w-full bg-white py-16 sm:py-20 lg:py-24"
      style={{
        fontFamily:
          "var(--font-jost), 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* =====================================================
            MAIN GRID
        ===================================================== */}

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12">

          {/* =================================================
              LEFT — TESTIMONIAL
          ================================================= */}

          <div className="lg:col-span-1">

            {/* Testimonial Card */}
            <div
              className="p-6 sm:p-8"
              style={{
                backgroundColor: COLORS.cardBg,
              }}
            >
              {/* Profile */}
              <div className="mb-6 flex items-center gap-3">

                <div className="h-11 w-11 overflow-hidden rounded-full">
                  <img
                    src="/images/sonal.webp"
                    alt="Linen & Light Photography"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div>
                  <p
                    className="text-[19px] font-semibold leading-none"
                    style={{
                      color: COLORS.goldDeep,
                      fontFamily:
                        "var(--font-cormorant), Georgia, serif",
                    }}
                  >
                    
                    Sonal
                  </p>

                  <p
                    className="mt-1.5 text-[13px]"
                    style={{
                      color: COLORS.ink,
                    }}
                  >
                    @sonalclicks_111
                  </p>
                </div>
              </div>

              {/* Quote */}
              <blockquote
                className="
                  mb-7
                  text-[16px]
                  leading-relaxed
                  sm:text-[17px]
                "
                style={{
                  color: COLORS.inkSoft,
                }}
              >
                “Your story, beautifully told through our lens. DM to book your special day! 💌
              </blockquote>

              {/* Follow CTA */}
              <div className="flex justify-end">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    px-7
                    py-2.5
                    text-[14px]
                    font-medium
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
                  Follow
                </a>
              </div>
            </div>

            {/* =================================================
                SOCIAL LINKS
            ================================================= */}

            <div className="mt-8">

              <h3
                className="mb-4 text-[20px] font-semibold"
                style={{
                  color: COLORS.ink,
                  fontFamily:
                    "var(--font-cormorant), Georgia, serif",
                }}
              >
                Find Us On
              </h3>

              <div className="flex items-center gap-3">

                <SocialButton
                  href={FACEBOOK_URL}
                  label="Visit our Facebook page"
                >
                  <FaFacebookF size={15} />
                </SocialButton>

                <SocialButton
                  href={INSTAGRAM_URL}
                  label="Visit our Instagram page"
                >
                  <FaInstagram size={17} />
                </SocialButton>

              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT — INSTAGRAM FEED
          ================================================= */}

          <div className="lg:col-span-2">

            {/* Heading */}
            <div className="mb-6 flex items-start justify-between">

              <div>
                <p
                  className="
                    mb-1
                    text-[11px]
                    font-medium
                    uppercase
                    tracking-[0.25em]
                  "
                  style={{
                    color: COLORS.goldDeep,
                  }}
                >
                  Follow our journey
                </p>

                <h2
                  id="instagram-feed-title"
                  className="
                    text-[28px]
                    font-semibold
                    leading-tight
                    sm:text-[32px]
                  "
                  style={{
                    color: COLORS.ink,
                    fontFamily:
                      "var(--font-cormorant), Georgia, serif",
                  }}
                >
                  Instagram Feed
                </h2>
              </div>

              {/* Desktop Controls */}
              <div className="hidden flex-col gap-2 sm:flex">

                <SliderButton
                  direction="previous"
                  onClick={previousPair}
                />

                <SliderButton
                  direction="next"
                  onClick={nextPair}
                />

              </div>
            </div>

            {/* =================================================
                INSTAGRAM POSTS
            ================================================= */}

            <div
              className="grid grid-cols-2 gap-4 sm:gap-5"
              aria-live="polite"
            >
              {currentPosts.map((post, index) => (
                <a
                  key={`${post.src}-${index}`}
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    relative
                    block
                    overflow-hidden
                  "
                  style={{
                    aspectRatio: "3 / 4",
                  }}
                >
                  {/* Image */}
                  <img
                    src={post.src}
                    alt={post.alt}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <span
                    className="
                      absolute
                      inset-0
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                    style={{
                      backgroundColor:
                        "rgba(20,17,13,0.18)",
                    }}
                    aria-hidden="true"
                  />

                  {/* Camera Icon */}
                  <span
                    className="
                      absolute
                      left-3
                      top-3
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                    "
                    style={{
                      backgroundColor: COLORS.goldDeep,
                      color: COLORS.white,
                    }}
                  >
                    <Camera
                      size={14}
                      strokeWidth={1.5}
                    />
                  </span>

                  {/* Handle */}
                  <span
                    className="
                      absolute
                      bottom-3
                      left-3
                      text-[12px]
                      font-medium
                    "
                    style={{
                      color: COLORS.white,
                      textShadow:
                        "0 1px 4px rgba(0,0,0,0.55)",
                    }}
                  >
                    {INSTAGRAM_HANDLE}
                  </span>
                </a>
              ))}
            </div>

            {/* =================================================
                MOBILE CONTROLS
            ================================================= */}

            <div className="mt-6 flex items-center justify-center gap-4 sm:hidden">

              <SliderButton
                direction="previous"
                onClick={previousPair}
              />

              <span
                className="min-w-11.25 text-center text-[12px]"
                style={{
                  color: COLORS.inkSoft,
                }}
              >
                {pairIndex + 1} / {FEED_PAIRS.length}
              </span>

              <SliderButton
                direction="next"
                onClick={nextPair}
              />

            </div>
          </div>
        </div>
      </div>

      {/* =======================================================
          LOCATION BANNER
      ======================================================= */}

      <div
        className="
          mt-16
          w-full
          py-6
          sm:mt-20
          sm:py-7
          lg:mt-24
        "
        style={{
          backgroundColor: COLORS.goldDeep,
        }}
      >
        <h3
          className="
            px-5
            text-center
            text-[21px]
            font-medium
            sm:text-[26px]
            lg:text-[30px]
          "
          style={{
            color: COLORS.white,
            fontFamily:
              "var(--font-cormorant), Georgia, serif",
            letterSpacing: "0.02em",
          }}
        >
          Location We Serve
        </h3>
      </div>
    </section>
  );
}