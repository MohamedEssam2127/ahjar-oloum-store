"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Right (RTL start): Logo + Brand Name */}
          <Link href="/" className="inline-flex items-center gap-2 group">
            <Image
              src="/logo_navy.png"
              alt="أحجار و علوم"
              width={120}
              height={120}
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
            />
            <span className="font-display text-lg sm:text-xl text-secondary leading-none">
              أحجار و علوم
            </span>
          </Link>

          {/* Center: Nav Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/#gemstones"
              className="font-body text-sm font-bold text-neutral-600 hover:text-secondary transition-colors relative pb-1 after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-secondary hover:after:w-full after:transition-all after:duration-300"
            >
              الأحجار
            </Link>
            <Link
              href="/about"
              className="font-body text-sm font-bold text-neutral-600 hover:text-secondary transition-colors relative pb-1 after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-secondary hover:after:w-full after:transition-all after:duration-300"
            >
              من نحن
            </Link>
            <Link
              href="/contact"
              className="font-body text-sm font-bold text-neutral-600 hover:text-secondary transition-colors relative pb-1 after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-secondary hover:after:w-full after:transition-all after:duration-300"
            >
              اتصل بنا
            </Link>
          </nav>

          {/* Left (RTL end): Icons */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="p-2 text-neutral-600 hover:text-secondary transition-colors cursor-default"
              aria-label="بحث"
            >
              <HugeiconsIcon icon={Search01Icon} size={24} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              className="p-2 text-neutral-600  hover:text-secondary transition-colors relative cursor-default"
              aria-label="سلة المشتريات"
            >
              <HugeiconsIcon icon={ShoppingBag01Icon} size={24} strokeWidth={1.5} />
            </button>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-600 hover:text-secondary transition-colors mr-1"
              aria-label="القائمة"
            >
              <HugeiconsIcon
                icon={mobileMenuOpen ? Cancel01Icon : Menu01Icon}
                size={20}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-100 bg-white px-6 py-4">
          <nav className="flex flex-col gap-1">
            <Link
              href="/#gemstones"
              onClick={() => setMobileMenuOpen(false)}
              className="font-body text-sm text-neutral-600 hover:text-secondary py-2.5 transition-colors"
            >
              الأحجار
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="font-body text-sm text-neutral-600 hover:text-secondary py-2.5 transition-colors"
            >
              من نحن
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="font-body text-sm text-neutral-600 hover:text-secondary py-2.5 transition-colors"
            >
              اتصل بنا
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
