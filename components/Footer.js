"use client";

import {
  Globe,
  IndianRupee,
  Star,
  Camera,
  User,
  Phone,
  Mail,
  MapPin,
  Download,
  MessageCircle,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const COLORS = {
  gold: "#C9A462",
  ink: "#EFE8DA",
  inkSoft: "rgba(239,232,218,0.75)",
  overlay:
    "linear-gradient(180deg, rgba(20,17,13,0.55) 0%, rgba(20,17,13,0.72) 35%, rgba(15,12,9,0.94) 100%)",
  divider: "rgba(239,232,218,0.22)",
  dark: "#1D1712",
};

const BADGES = [
  { icon: Globe, label: "Pune & Mumbai Based" },
  { icon: IndianRupee, label: "Lowest Price Promise" },
  { icon: Star, label: "Referral Rewards" },
  { icon: Camera, label: "Pro-Quality Clicks" },
];

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Packages", href: "#packages" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact Us", href: "#contact" },
];

const IMPORTANT_LINKS = [
  { label: "Model Shoot", href: "#model-shoot" },
  { label: "Prewedding", href: "#prewedding" },
  { label: "Wedding", href: "#wedding" },
  { label: "Maternity", href: "#maternity" },
  { label: "Baby Shoot", href: "#baby-shoot" },
];

const SOCIALS = [
  {
    label: "Book now",
    href: "#contact",
    icon: Download,
  },
  {
    label: "YouTube",
    href: "#",
    icon: FaYoutube,
  },
  {
    label: "Facebook",
    href: "#",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919876543210",
    icon: FaWhatsapp,
  },
];

const FONT_SERIF = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
};

const FONT_SANS = {
  fontFamily: "var(--font-jost), Arial, sans-serif",
};

function FooterHeading({ children }) {
  return (
    <h3
      className="mb-5 text-[20px] font-semibold"
      style={{
        ...FONT_SERIF,
        color: COLORS.gold,
      }}
    >
      {children}
    </h3>
  );
}

function FooterLink({ href, children }) 


{
  return (
    <a
      href={href}
      className="group flex items-center gap-2.5 text-[14.5px] transition-opacity duration-200 hover:opacity-60"
      style={{ color: COLORS.inkSoft }}
    >
      <Camera
        size={13}
        strokeWidth={1.5}
        className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
        style={{ color: COLORS.gold }}
      />

      <span>{children}</span>
    </a>
  );
}

export default function Footer() {
  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{
        ...FONT_SANS,
        color: COLORS.ink,
      }}
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1974&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: COLORS.overlay }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ================= TRUST STRIP ================= */}
        <div
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 border-b py-8 sm:justify-between lg:gap-x-10"
          style={{ borderColor: COLORS.divider }}
        >
          {BADGES.map(({ icon: Icon, label }, index) => (
            <div
              key={label}
              className="flex items-center gap-3"
            >
              {index > 0 && (
                <span
                  aria-hidden="true"
                  className="mr-2 hidden h-5 w-px sm:block"
                  style={{
                    backgroundColor: COLORS.divider,
                  }}
                />
              )}

              <Icon
                size={18}
                strokeWidth={1.4}
                style={{ color: COLORS.gold }}
              />

              <span
                className="text-[15px] sm:text-[16px]"
                style={{
                  ...FONT_SERIF,
                  fontWeight: 600,
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* ================= MAIN FOOTER ================= */}
        <div className="grid grid-cols-1 gap-12 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">

          {/* Quick Links */}
          <div>
            <FooterHeading>Quick Links</FooterHeading>

            <ul className="space-y-3.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>
                    {link.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <FooterHeading>Important Links</FooterHeading>

            <ul className="space-y-3.5">
              {IMPORTANT_LINKS.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>
                    {link.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <FooterHeading>Contact Details</FooterHeading>

            <ul className="space-y-4">

              <li
                className="flex items-center gap-2.5 text-[14.5px]"
                style={{ color: COLORS.inkSoft }}
              >
                <User
                  size={15}
                  strokeWidth={1.5}
                  style={{ color: COLORS.gold }}
                />

                <span> Miss. Sonal</span>
              </li>

              <li>
                <a
                  href="tel:+919158442978"
                  className="flex items-center gap-2.5 text-[14.5px] transition-opacity hover:opacity-60"
                  style={{ color: COLORS.inkSoft }}
                >
                  <Phone
                    size={15}
                    strokeWidth={1.5}
                    style={{ color: COLORS.gold }}
                  />

                  <span>+91 9158442978</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:hello@linenandlight.com"
                  className="flex items-center gap-2.5 break-all text-[14.5px] transition-opacity hover:opacity-60"
                  style={{ color: COLORS.inkSoft }}
                >
                  <Mail
                    size={15}
                    strokeWidth={1.5}
                    style={{ color: COLORS.gold }}
                  />

                  <span> info@sonalclicks.com</span>
                </a>
              </li>

              <li
                className="flex items-start gap-2.5 text-[14.5px] leading-relaxed"
                style={{ color: COLORS.inkSoft }}
              >
                <MapPin
                  size={15}
                  strokeWidth={1.5}
                  className="mt-1 shrink-0"
                  style={{ color: COLORS.gold }}
                />

                <span>
                  GANDHARV EXCELLENCE, MIDC, Moshi, Pimpri-Chinchwad, Maharashtra 412105
                </span>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <FooterHeading>Location</FooterHeading>

            <div
              className="group relative aspect-4/3 w-full overflow-hidden"
              style={{
                border: `1px solid ${COLORS.divider}`,
              }}
            >
              <iframe
                title="Linen & Light Photography studio location"
                src="https://www.google.com/maps?q=Baner+Road+Pune&output=embed"
                className="h-full w-full border-0 grayscale-15 transition-all duration-500 group-hover:grayscale-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* ================= SOCIALS ================= */}
        <div className="flex justify-center pb-8 lg:hidden">
          <div className="flex items-center gap-3">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-200 hover:scale-105"
                style={{
                  backgroundColor: COLORS.gold,
                  color: COLORS.dark,
                }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* ================= DESKTOP SOCIAL RAIL ================= */}
        <div className="absolute bottom-24 right-3 z-20 hidden flex-col gap-3 lg:flex">
          {SOCIALS.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 hover:scale-105 hover:-translate-x-0.5"
              style={{
                backgroundColor: COLORS.gold,
                color: COLORS.dark,
              }}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* ================= COPYRIGHT ================= */}
        <div
          className="flex flex-col items-center justify-center gap-2 border-t py-6 text-center text-[13px] sm:flex-row"
          style={{
            borderColor: COLORS.divider,
            color: COLORS.inkSoft,
          }}
        >
          <span>
            © {new Date().getFullYear()} Linen &amp; Light Photography.
            © 2025 Sonal Clicks. All Rights Reserved | Designed & Promoted By Hindustan Digital Services pvt.ltd
          </span>
        </div>
      </div>
    </footer>
  );
}
