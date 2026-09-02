"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

const NAV_LINKS = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Services",
    href: "#services",
    children: [
      {
        label: "Wedding",
        href: "#wedding",
      },
      {
        label: "Pre Wedding",
        href: "#pre-wedding",
      },
      {
        label: "Baby Shoot",
        href: "#baby-shoot",
      },
      {
        label: "Maternity Shoot",
        href: "#maternity-shoot",
      },
      {
        label: "Model Shoot",
        href: "#model-shoot",
      },
    ],
  },
  {
    label: "Portfolio",
    href: "#portfolio",
    children: [
      {
        label: "Photos",
        href: "#photos",
      },
      {
        label: "Videos",
        href: "#videos",
      },
    ],
  },
  {
    label: "Book Us",
    href: "#book-us",
  },
];

const COLORS = {
  bg: "#FBF7F1",
  border: "#E7DECD",
  ink: "#2B241D",
  inkSoft: "#6B6156",
  gold: "#C9A462",
  panel: "#FFFFFF",
};

export default function Navbar({ alwaysSolid = false }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isSolid = alwaysSolid || scrolled || mobileOpen;

  const textColor = isSolid ? COLORS.ink : "#FFFFFF";

  const softColor = isSolid
    ? COLORS.inkSoft
    : "rgba(255,255,255,0.85)";

  const logoSrc = isSolid
    ? "/images/logo2.png"
    : "/images/logo.png";

  const closeMenu = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header
      className="fixed left-0 top-0 z-50 w-full"
      style={{
        backgroundColor: isSolid ? COLORS.bg : "transparent",
        borderBottom: isSolid
          ? `1px solid ${COLORS.border}`
          : "1px solid transparent",
        fontFamily:
          "'Jost', 'Helvetica Neue', Arial, sans-serif",
        boxShadow:
          isSolid && scrolled
            ? "0 2px 14px rgba(43,36,29,0.06)"
            : "none",
        transition:
          "background-color 300ms ease, box-shadow 300ms ease, border-color 300ms ease",
      }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex h-20 items-center justify-between lg:h-24">

          {/* Logo */}
          <a
            href="#home"
            className="flex shrink-0 items-center"
            aria-label="Linen & Light Photography — Home"
          >
            <Image
              src={logoSrc}
              alt="Linen & Light Photography"
              width={180}
              height={70}
              priority
              className="h-auto w-36 object-contain transition-opacity duration-300 sm:w-40 lg:w-44"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() =>
                    setOpenDropdown(link.label)
                  }
                  onMouseLeave={() =>
                    setOpenDropdown(null)
                  }
                >
                  <button
                    type="button"
                    className="flex items-center gap-1 py-2 text-[15px]"
                    style={{
                      color: textColor,
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      transition: "color 300ms ease",
                    }}
                    aria-expanded={
                      openDropdown === link.label
                    }
                  >
                    {link.label}

                    <ChevronDown
                      size={14}
                      style={{
                        color: COLORS.gold,
                        transform:
                          openDropdown === link.label
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition:
                          "transform 200ms ease",
                      }}
                    />
                  </button>

                  {openDropdown === link.label && (
                    <div
                      className="absolute left-0 top-full pt-2"
                      style={{
                        minWidth: "220px",
                      }}
                    >
                      <div
                        className="overflow-hidden py-2"
                        style={{
                          backgroundColor: COLORS.panel,
                          border: `1px solid ${COLORS.border}`,
                          boxShadow:
                            "0 10px 30px rgba(43,36,29,0.10)",
                        }}
                      >
                        {link.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="block px-5 py-2.5 text-[14px] transition-colors hover:bg-[#F5EEE3]"
                            style={{
                              color: COLORS.inkSoft,
                            }}
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[15px] transition-colors"
                  style={{
                    color: textColor,
                  }}
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden items-center gap-5 lg:flex">

            {/* Social Icons */}
            <div
              className="flex items-center gap-3"
              style={{
                color: softColor,
                transition: "color 300ms ease",
              }}
            >
              <a
                href="https://www.instagram.com/sonalclicks_1/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity duration-200 hover:opacity-70"
              >
                <FaInstagram size={17} />
              </a>

              <a
                href="https://www.facebook.com/sonali.tatte.71"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity duration-200 hover:opacity-70"
              >
                <FaFacebookF size={17} />
              </a>

              <a
                href="https://www.youtube.com/@sonalclicks"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity duration-200 hover:opacity-70"
              >
                <FaYoutube size={17} />
              </a>
            </div>

            {/* Enquire Button */}
            <a
              href="#enquire"
              className="px-6 py-2.5 text-[13px] tracking-wide transition-opacity duration-300 hover:opacity-90"
              style={{
                backgroundColor: isSolid
                  ? COLORS.ink
                  : "#FFFFFF",
                color: isSolid
                  ? COLORS.bg
                  : COLORS.ink,
                letterSpacing: "0.06em",
                transition:
                  "background-color 300ms ease, color 300ms ease",
              }}
            >
              ENQUIRE
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="flex items-center justify-center lg:hidden"
            style={{
              color: textColor,
              background: "none",
              border: "none",
              transition: "color 300ms ease",
            }}
            onClick={() => {
              setMobileOpen((value) => !value);
              setOpenDropdown(null);
            }}
            aria-label={
              mobileOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X size={26} />
            ) : (
              <Menu size={26} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Menu */}
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out lg:hidden"
        style={{
          maxHeight: mobileOpen ? "720px" : "0px",
          backgroundColor: COLORS.panel,
          borderTop: mobileOpen
            ? `1px solid ${COLORS.border}`
            : "none",
        }}
      >
        <nav className="flex flex-col px-6 py-4">

          {NAV_LINKS.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="border-b"
                style={{
                  borderColor: COLORS.border,
                }}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-4 text-[16px]"
                  style={{
                    color: COLORS.ink,
                    background: "none",
                    border: "none",
                  }}
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === link.label
                        ? null
                        : link.label
                    )
                  }
                  aria-expanded={
                    openDropdown === link.label
                  }
                >
                  {link.label}

                  <ChevronDown
                    size={16}
                    style={{
                      color: COLORS.gold,
                      transform:
                        openDropdown === link.label
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      transition:
                        "transform 200ms ease",
                    }}
                  />
                </button>

                <div
                  className="overflow-hidden transition-all duration-200"
                  style={{
                    maxHeight:
                      openDropdown === link.label
                        ? `${link.children.length * 46}px`
                        : "0px",
                  }}
                >
                  {link.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block pb-4 pl-4 text-[14.5px]"
                      style={{
                        color: COLORS.inkSoft,
                      }}
                      onClick={closeMenu}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="border-b py-4 text-[16px]"
                style={{
                  color: COLORS.ink,
                  borderColor: COLORS.border,
                }}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            )
          )}

          {/* Mobile Enquire */}
          <a
            href="#enquire"
            className="mt-5 px-6 py-3.5 text-center text-[13px] tracking-wide"
            style={{
              backgroundColor: COLORS.ink,
              color: COLORS.bg,
              letterSpacing: "0.06em",
            }}
            onClick={closeMenu}
          >
            ENQUIRE
          </a>

          {/* Mobile Social Icons */}
          <div
            className="mt-6 flex items-center justify-center gap-6"
            style={{
              color: COLORS.inkSoft,
            }}
          >
            <a
              href="https://www.instagram.com/sonalclicks_1/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-200 hover:opacity-70"
            >
              <FaInstagram size={19} />
            </a>

            <a
              href="https://www.facebook.com/sonali.tatte.71"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-200 hover:opacity-70"
            >
              <FaFacebookF size={19} />
            </a>

            <a
              href="https://www.youtube.com/@sonalclicks"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-200 hover:opacity-70"
            >
              <FaYoutube size={19} />
            </a>
          </div>

        </nav>
      </div>
    </header>
  );
}