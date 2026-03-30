"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = [
  {
    label: "Services",
    children: [
      "Structural Analysis",
      "Dynamic Simulation",
      "Contact Analysis",
      "Motion Simulation",
    ],
  },
  {
    label: "Industries",
    children: ["Automotive", "Aerospace", "Energy", "Heavy Machinery"],
  },
  {
    label: "About",
    children: ["Our Team", "Case Studies", "Careers"],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0b1422] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
        {/* ── Logo ── */}
        <a href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo.png"
            alt="RCC logo"
            width={40}
            height={40}
            className="rounded-full"
            priority
          />
          <span className="hidden sm:block font-bold text-white text-[15px] leading-tight tracking-wide">
            RCC
            <span className="block text-[10px] font-normal text-gray-400 tracking-widest uppercase">
              Engineering Simulation
            </span>
          </span>
        </a>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-md hover:bg-white/5"
              >
                {item.label}
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    openDropdown === item.label ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown */}
              {openDropdown === item.label && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-[#0f1d30] border border-white/10 rounded-lg shadow-2xl overflow-hidden">
                  {item.children.map((child) => (
                    <a
                      key={child}
                      href="#"
                      className="block px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                    >
                      {child}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* ── Right Actions ── */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          {/* Search */}

          {/* Contact link */}
          <a
            href="#"
            className="flex items-center gap-1.5 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            Contact
          </a>

          {/* CTA */}
          <a
            href="#"
            className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
          >
            Request a Simulation
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden p-2 text-gray-400 hover:text-white rounded-md transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0b1422] border-t border-white/10 px-4 pb-4">
          {navItems.map((item) => (
            <div key={item.label} className="pt-3">
              <button
                type="button"
                className="flex items-center justify-between w-full text-sm font-medium text-gray-300 hover:text-white py-1"
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === item.label ? null : item.label,
                  )
                }
              >
                {item.label}
                <svg
                  className={`w-4 h-4 transition-transform ${
                    openDropdown === item.label ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openDropdown === item.label && (
                <div className="mt-1 pl-3 border-l border-white/10 space-y-1">
                  {item.children.map((child) => (
                    <a
                      key={child}
                      href="#"
                      className="block text-sm text-gray-400 hover:text-white py-1.5 transition-colors"
                    >
                      {child}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="#"
            className="mt-4 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors w-full"
          >
            Request a Simulation →
          </a>
        </div>
      )}
    </header>
  );
}
