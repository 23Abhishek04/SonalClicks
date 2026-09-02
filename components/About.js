"use client";
/**
 * About.js — Linen & Light Photography
 * -------------------------------------------------
 * Editorial "our story" section: portrait image on one side,
 * copy + stats + CTA on the other. Same ivory / ink / gold
 * theme, serif headings (Cormorant Garamond) and sans body
 * (Jost) as the rest of the site.
 * Responsive: stacks to a single column on mobile/tablet,
 * side-by-side from lg upward.
 */

const COLORS = {
  bg: "#FBF7F1",
  ink: "#2B241D",
  inkSoft: "#6B6156",
  gold: "#C9A462",
  border: "#E7DECD",
};

const STATS = [
  { value: "400+", label: "Weddings shot" },
  { value: "9", label: "Years behind the lens" },
  { value: "35", label: "Cities travelled to" },
];

export default function About() {
  return (
    <section
      style={{
        backgroundColor: COLORS.bg,
        fontFamily: "'Jost', 'Helvetica Neue', Arial, sans-serif",
      }}
      className="w-full py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-1">
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "4 / 5" }}
            >
              <img
                src="/images/sonal.webp"
                alt="Behind the scenes at a Linen & Light wedding shoot"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            {/* Accent frame offset behind the image */}
            <div
              className="hidden sm:block absolute -z-10"
              style={{
                border: `1px solid ${COLORS.gold}`,
                top: "24px",
                left: "-24px",
                right: "24px",
                bottom: "-24px",
              }}
              aria-hidden="true"
            />
            {/* Experience badge */}
            <div
              className="absolute -bottom-6 -right-4 sm:-right-8 flex flex-col items-center justify-center text-center px-6 py-5"
              style={{
                backgroundColor: COLORS.ink,
                color: COLORS.bg,
                minWidth: "132px",
              }}
            >
              <span
                style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
                className="text-[30px] leading-none"
              >
                9+
              </span>
              <span
                className="text-[11px] mt-2 tracking-wide"
                style={{ color: COLORS.gold }}
              >
                YEARS OF
              </span>
              <span
                className="text-[11px] tracking-wide"
                style={{ color: COLORS.gold }}
              >
                STORYTELLING
              </span>
            </div>
          </div>

          {/* Copy */}
          <div className="order-2">
            <p
              style={{ color: COLORS.gold, letterSpacing: "0.32em" }}
              className="text-[11px] sm:text-[12px] mb-4"
            >
              ABOUT
SONAL CLICKS
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', 'Georgia', serif",
                color: COLORS.ink,
                letterSpacing: "0.02em",
              }}
              className="text-[32px] sm:text-[40px] lg:text-[48px] font-medium leading-tight mb-6"
            >
              Capturing your golden memories.
            </h2>
            <p
              style={{ color: COLORS.inkSoft }}
              className="text-[15.5px] sm:text-[16px] leading-relaxed mb-5 max-w-xl"
            >
              Sonal Clicks is not just about capturing images — it's about
              preserving emotions, stories, and unforgettable moments. Founded
              by passionate photographer Sonal, our work reflects a perfect
              blend of creativity, clarity, and storytelling through the lens.
            </p>
            <p
              style={{ color: COLORS.inkSoft }}
              className="text-[15.5px] sm:text-[16px] leading-relaxed mb-8 max-w-xl"
            >
              We aim to make every client feel comfortable, confident, and
              beautifully seen. At Sonal Clicks, we don’t just take pictures —
              we create memories that last a lifetime.
            </p>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-4 sm:gap-6 py-6 mb-8 border-y"
              style={{ borderColor: COLORS.border }}
            >
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', 'Georgia', serif",
                      color: COLORS.ink,
                    }}
                    className="text-[26px] sm:text-[32px] leading-none"
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{ color: COLORS.inkSoft }}
                    className="text-[12px] sm:text-[13px] mt-2 leading-snug"
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block text-[13px] tracking-wide px-8 py-3.5 transition-colors"
              style={{
                backgroundColor: COLORS.ink,
                color: COLORS.bg,
                letterSpacing: "0.06em",
              }}
            >
              MEET THE TEAM
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
