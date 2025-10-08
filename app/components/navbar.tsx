"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="w-screen max-w-screen flex justify-center mb-4 relative px-4">
      <div className=" flex gap-6 py-4 items-center bg-gray-800">
        {!isMobile && (
          <>
            <Link href="/" className="text-[#444444] font-medium no-underline">
              Home
            </Link>
            <Link
              href="/services"
              className="text-[#444444] font-medium no-underline"
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="text-[#444444] font-medium no-underline"
            >
              Gallery
            </Link>
            <Link
              href="/about"
              className="text-[#444444] font-medium no-underline"
            >
              About Us
            </Link>
            <Link
              href="/testimonials"
              className="text-[#444444] font-medium no-underline"
            >
              Testimonials
            </Link>
          </>
        )}
        {isMobile && (
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="bg-none border-none cursor-pointer p-0 flex flex-col justify-center items-center w-8 h-8"
            aria-label="Open menu"
          >
            <span className="w-6 h-[3px] bg-[#444] mb-[5px] rounded"></span>
            <span className="w-6 h-[3px] bg-[#444] mb-[5px] rounded"></span>
            <span className="w-6 h-[3px] bg-[#444] rounded"></span>
          </button>
        )}
        {isMobile && dropdownOpen && (
          <div className="absolute top-12 right-0 bg-[#f8fafc] border border-[#e5e7eb] shadow-[0_4px_12px_rgba(34,34,34,0.10)] z-10 min-w-[90px] rounded overflow-hidden p-0">
            <Link
              href="/about"
              className="block px-[14px] py-[10px] no-underline text-[#444] bg-[#f8fafc] font-semibold text-[15px] border-b border-[#e5e7eb] transition-colors duration-200 text-left hover:bg-[#e5e7eb]"
              onClick={() => setDropdownOpen(false)}
            >
              About
            </Link>
            <Link
              href="/gallery"
              className="block px-[14px] py-[10px] no-underline text-[#444] bg-[#f8fafc] font-semibold text-[15px] transition-colors duration-200 text-left hover:bg-[#e5e7eb]"
              onClick={() => setDropdownOpen(false)}
            >
              Gallery
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
