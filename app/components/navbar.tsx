"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Detect mobile with window.matchMedia
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <nav className="w-full flex justify-center mb-2 relative px-0 z-20">
      <div className="w-full flex items-center justify-center relative min-h-[20px] bg-[#2a2b2b]/95 md:border-b-2 md:shadow-sm">
        {/* Desktop nav */}
        <div className="hidden md:flex gap-1 py-0 sm:gap-2 sm:py-0.5">
          <Link
            href="/"
            className="text-[#FFF5EE] no-underline text-xs sm:text-sm font-semibold tracking-wide px-2 py-1 rounded hover:bg-[#cda632]/20 transition"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-[#FFF5EE] no-underline text-xs sm:text-sm font-semibold tracking-wide px-2 py-1 rounded hover:bg-[#cda632]/20 transition"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-[#FFF5EE] no-underline text-xs sm:text-sm font-semibold tracking-wide px-2 py-1 rounded hover:bg-[#cda632]/20 transition"
          >
            About Us
          </Link>
          <Link
            href="/gallery"
            className="text-[#FFF5EE] no-underline text-xs sm:text-sm font-semibold tracking-wide px-2 py-1 rounded hover:bg-[#cda632]/20 transition"
          >
            Gallery
          </Link>
          <Link
            href="/testimonials"
            className="text-[#FFF5EE] no-underline text-xs sm:text-sm font-semibold tracking-wide px-2 py-1 rounded hover:bg-[#cda632]/20 transition"
          >
            Testimonials
          </Link>
        </div>
        {/* Mobile hamburger only, top right, no bg or border */}
        <div className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 flex items-center h-full">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="bg-none border-none cursor-pointer p-0 flex flex-col justify-center items-center w-7 h-7"
            aria-label="Open menu"
          >
            <span
              className="w-5 h-[1.2px] bg-white mb-[4px]"
              style={{ borderRadius: 0 }}
            ></span>
            <span
              className="w-5 h-[1.2px] bg-white mb-[4px]"
              style={{ borderRadius: 0 }}
            ></span>
            <span
              className="w-5 h-[1.2px] bg-white"
              style={{ borderRadius: 0 }}
            ></span>
          </button>
        </div>
        {/* Mobile dropdown */}
        {dropdownOpen && isMobile && (
          <div className="absolute top-full left-0 w-full bg-[#2a2b2b]/95 border-t border-[#cda632] shadow-lg z-30 flex flex-col items-center animate-fade-in">
            <Link
              href="/"
              className="block w-full px-4 py-2 text-[#FFF5EE] text-sm text-center border-b border-[#444] font-semibold tracking-wide"
              onClick={() => setDropdownOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block w-full px-4 py-2 text-[#FFF5EE] text-sm text-center border-b border-[#444] font-semibold tracking-wide"
              onClick={() => setDropdownOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block w-full px-4 py-2 text-[#FFF5EE] text-sm text-center border-b border-[#444] font-semibold tracking-wide"
              onClick={() => setDropdownOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/gallery"
              className="block w-full px-4 py-2 text-[#FFF5EE] text-sm text-center border-b border-[#444] font-semibold tracking-wide"
              onClick={() => setDropdownOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/testimonials"
              className="block w-full px-4 py-2 text-[#FFF5EE] text-sm text-center font-semibold tracking-wide"
              onClick={() => setDropdownOpen(false)}
            >
              Testimonials
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
