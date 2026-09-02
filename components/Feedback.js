"use client"
import { useState, useEffect, useRef } from "react";

/**
 * Feedback.js — Linen & Light Photography
 * -------------------------------------------------
 * "Client's Feedback" section: full-bleed background photo,
 * bold serif heading, and a floating white quote card that
 * cycles through testimonials. Dots sit outside the card on
 * the right on desktop (as in the reference) and drop into a
 * row below the card on mobile/tablet, where there's no room
 * to float them off the edge.
 */

const COLORS = {
  ink: "#2B241D",
  inkSoft: "#5A5049",
  gold: "#C9A462",
  goldDeep: "#B5844A",
};

const TESTIMONIALS = [
  {
    name: "Mayur Chaudhari",
    quote:
      "I had an amazing experience with Sonal Clicks! Their professionalism, creativity, and attention to detail truly made a difference. The photos turned out stunning, capturing every special moment beautifully.",
  },
  {
    name: "Dnyaneshwar Tatte",
    quote:
      "From our first meeting to the final gallery, Sonal was warm, professional, and incredibly creative. Each photo tells a story, and we’re so grateful to have such beautiful memories to cherish forever.",
  },
  {
    name: "Rohit & Simran Kapoor",
    quote:
      "Hiring Linen & Light was the best decision we made for our wedding. Calm, unobtrusive, and endlessly creative — our families still talk about how naturally the photos turned out.",
  },
];

export default function Feedback() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const goTo = (i) => setIndex((i + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timerRef.current);
  }, []);

  const handleDotClick = (i) => {
    clearInterval(timerRef.current);
    goTo(i);
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
  };

  const current = TESTIMONIALS[index];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ fontFamily: "'Jost', 'Helvetica Neue', Arial, sans-serif" }}
    >
      {/* Background image + overlay */}
<div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/model2.png')",
  }}
  aria-hidden="true"
/>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,12,9,0.55) 0%, rgba(15,12,9,0.35) 40%, rgba(15,12,9,0.65) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 sm:py-20 lg:py-24">
        {/* Heading */}
        <h2
          className="text-center text-[32px] sm:text-[44px] lg:text-[52px] mb-10 sm:mb-14"
          style={{
            fontFamily: "'Cormorant Garamond', 'Georgia', serif",
            fontWeight: 700,
            fontStyle: "italic",
            color: "#FFFFFF",
            letterSpacing: "0.01em",
          }}
        >
          Client&rsquo;s Feedback
        </h2>

        {/* Card + dots wrapper */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-xl lg:max-w-2xl lg:mr-6">
            <div
              className="w-full"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              {/* Name row */}
              <div
                className="px-6 sm:px-10 py-6 border-b-2"
                style={{ borderColor: COLORS.gold }}
              >
                <span
                  className="text-[18px] sm:text-[19px] font-semibold"
                  style={{ color: COLORS.ink }}
                >
                  {current.name}
                </span>
              </div>

              {/* Quote body */}
              <div className="relative px-6 sm:px-10 py-8 sm:py-10">
                <span
                  aria-hidden="true"
                  className="absolute left-5 sm:left-8 top-4 text-[42px] sm:text-[52px] leading-none select-none"
                  style={{ fontFamily: "Georgia, serif", color: COLORS.ink }}
                >
                  &ldquo;
                </span>
                <p
                  className="text-center text-[15px] sm:text-[16.5px] leading-relaxed px-4 sm:px-10"
                  style={{ color: COLORS.inkSoft }}
                >
                  {current.quote}
                </p>
                <span
                  aria-hidden="true"
                  className="absolute right-5 sm:right-8 bottom-2 text-[30px] sm:text-[36px] leading-none select-none"
                  style={{ fontFamily: "Georgia, serif", fontWeight: 700, color: COLORS.ink }}
                >
                  &rdquo;
                </span>
              </div>
            </div>

            {/* Dots — vertical, floating outside the card on desktop */}
            <div
              className="hidden lg:flex flex-col gap-2.5 absolute top-1/2 -translate-y-1/2"
              style={{ right: "-28px" }}
            >
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => handleDotClick(i)}
                  aria-label={`Show feedback from ${t.name}`}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === index ? "10px" : "8px",
                    height: i === index ? "10px" : "8px",
                    backgroundColor: i === index ? COLORS.goldDeep : "rgba(201,164,98,0.55)",
                    border: "none",
                  }}
                />
              ))}
            </div>

            {/* Dots — horizontal row below the card on mobile/tablet */}
            <div className="flex lg:hidden items-center justify-center gap-2.5 mt-6">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => handleDotClick(i)}
                  aria-label={`Show feedback from ${t.name}`}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === index ? "22px" : "8px",
                    height: "8px",
                    backgroundColor: i === index ? COLORS.goldDeep : "rgba(255,255,255,0.55)",
                    border: "none",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}