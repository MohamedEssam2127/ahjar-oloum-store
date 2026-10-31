"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Search01Icon,
  ShoppingBag01Icon,
  Menu01Icon,
  Cancel01Icon,
} from "@hugeicons/core-free-icons";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Right Section (in RTL): Nav Links on Desktop / Hamburger on Mobile */}
          <div className="flex items-center gap-6 flex-1 justify-start">
            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-700 hover:text-secondary hover:bg-neutral-100 rounded-xl transition-colors"
              aria-label="القائمة الرئيسية"
            >
              <HugeiconsIcon
                icon={mobileMenuOpen ? Cancel01Icon : Menu01Icon}
                size={24}
              />
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/about"
                className="font-cairo text-sm font-semibold text-neutral-700 hover:text-secondary transition-colors relative py-1 after:absolute after:bottom-0 after:right-0 after:left-0 after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                من نحن
              </Link>
              <Link
                href="/contact"
                className="font-cairo text-sm font-semibold text-neutral-700 hover:text-secondary transition-colors relative py-1 after:absolute after:bottom-0 after:right-0 after:left-0 after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                اتصل بنا
              </Link>
            </nav>
          </div>

          {/* Middle Section: Brand Name "أحجار و علوم" */}
          <div className="flex-shrink-0 text-center">
            <Link
              href="/"
              className="inline-flex flex-col items-center group cursor-pointer"
            >
              <span className="font-lalezar text-2xl sm:text-3xl text-secondary group-hover:text-primary transition-colors tracking-wide">
                أحجار و علوم
              </span>
              <span className="text-[11px] text-neutral-500 font-cairo -mt-0.5 hidden sm:block">
                علم وصياغة الأحجار الكريمة
              </span>
            </Link>
          </div>

          {/* Left Section (in RTL): Action Icons (Search & Cart - UI Only) */}
          <div className="flex items-center gap-3 sm:gap-4 flex-1 justify-end">
            {/* Search Icon (UI Demo Only - No search bar) */}
            <button
              type="button"
              className="p-2.5 text-neutral-700 hover:text-secondary hover:bg-neutral-100 rounded-full transition-colors relative cursor-default"
              title="بحث"
              aria-label="بحث"
            >
              <HugeiconsIcon icon={Search01Icon} size={24} />
            </button>

            {/* Cart Icon (UI Demo Only - Display only) */}
            <button
              type="button"
              className="p-2.5 text-neutral-700 hover:text-secondary hover:bg-neutral-100 rounded-full transition-colors relative cursor-default"
              title="سلة المشتريات"
              aria-label="سلة المشتريات"
            >
              <HugeiconsIcon icon={ShoppingBag01Icon} size={24} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white/95 backdrop-blur-md px-6 py-5 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="font-cairo text-base font-semibold text-neutral-800 hover:text-secondary py-2 border-b border-neutral-100"
            >
              من نحن
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="font-cairo text-base font-semibold text-neutral-800 hover:text-secondary py-2"
            >
              اتصل بنا
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

