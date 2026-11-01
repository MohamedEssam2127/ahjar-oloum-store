"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Search01Icon,
  ShoppingBag01Icon,
  Menu01Icon,
  Cancel01Icon,
  ArrowLeft01Icon,
} from "@hugeicons/core-free-icons";
import { searchGemstones } from "@/data/gemstones";
import { useStore } from "@/components/StoreProvider";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { searchTerm, setSearchTerm, cartItems, setCartOpen } = useStore();
  const router = useRouter();
  const searchResults = searchGemstones(searchTerm).slice(0, 4);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  function submitSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const matches = searchGemstones(searchTerm);

    if (matches.length === 1) {
      setSearchTerm("");
      setSearchOpen(false);
      router.push(`/gemstones/${matches[0].slug}`);
      return;
    }

    router.push("/#gemstones");
    setSearchOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-primary-500/20 bg-[#FAF9F6]/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between sm:h-[4.5rem]">
          <Link href="/" className="group inline-flex items-center gap-2">
            <Image
              src="/logo_navy.png"
              alt="أحجار و علوم"
              width={120}
              height={120}
              className="h-12 w-12 object-contain sm:h-14 sm:w-14"
            />
            <span className="font-display text-lg leading-none text-secondary sm:text-xl">
              أحجار و علوم
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {[
              { href: "/#gemstones", label: "الأحجار" },
              { href: "/about", label: "من نحن" },
              { href: "/contact", label: "اتصل بنا" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative pb-1 font-body text-sm font-bold text-neutral-600 transition-colors after:absolute after:bottom-0 after:right-0 after:h-px after:w-0 after:bg-primary-600 after:transition-all after:duration-300 hover:text-secondary hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setSearchOpen((open) => !open)}
              className={`relative p-2 transition-colors hover:text-primary-700 ${searchOpen ? "text-primary-700" : "text-neutral-600"}`}
              aria-label={searchOpen ? "إغلاق البحث" : "بحث"}
              aria-expanded={searchOpen}
              aria-controls="header-search"
            >
              <HugeiconsIcon
                icon={searchOpen ? Cancel01Icon : Search01Icon}
                size={22}
                strokeWidth={1.5}
              />
            </button>
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="relative p-2 text-neutral-600 transition-colors hover:text-primary-700"
              aria-label={`سلة المشتريات، ${cartCount} قطعة`}
            >
              <HugeiconsIcon
                icon={ShoppingBag01Icon}
                size={22}
                strokeWidth={1.5}
              />
              {cartCount > 0 && (
                <span className="absolute -end-0.5 -top-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-primary-600 px-1 font-body text-[10px] font-semibold text-white">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="mr-1 p-2 text-neutral-600 transition-colors hover:text-secondary md:hidden"
              aria-label={mobileMenuOpen ? "إغلاق القائمة" : "القائمة"}
              aria-expanded={mobileMenuOpen}
            >
              <HugeiconsIcon
                icon={mobileMenuOpen ? Cancel01Icon : Menu01Icon}
                size={20}
              />
            </button>
          </div>
        </div>
      </div>

      {searchOpen && (
        <div
          id="header-search"
          className="absolute inset-x-0 top-full border-b border-primary-500/20 bg-[#FAF9F6] px-4 pb-5 pt-4 shadow-[0_16px_30px_rgba(31,42,68,0.08)] sm:px-6"
        >
          <form
            onSubmit={submitSearch}
            className="mx-auto flex max-w-3xl items-center gap-3 border-b border-secondary/30 pb-3 focus-within:border-primary-600"
          >
            <HugeiconsIcon
              icon={Search01Icon}
              size={20}
              strokeWidth={1.5}
              className="shrink-0 text-primary-700"
            />
            <input
              autoFocus
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="ابحث باسم الحجر أو اللون أو المنشأ"
              aria-label="ابحث في مجموعة الأحجار"
              className="min-w-0 flex-1 bg-transparent font-body text-sm text-secondary outline-none placeholder:text-neutral-400"
            />
            <button
              type="submit"
              className="inline-flex shrink-0 items-center gap-2 font-body text-sm font-semibold text-secondary transition-colors hover:text-primary-700"
            >
              عرض النتائج
              <HugeiconsIcon icon={ArrowLeft01Icon} size={16} />
            </button>
          </form>

          {searchTerm.trim() ? (
            <div className="mx-auto mt-3 max-w-3xl">
              {searchResults.length ? (
                <ul className="divide-y divide-neutral-200/80">
                  {searchResults.map((gemstone) => (
                    <li key={gemstone.id}>
                      <Link
                        href={`/gemstones/${gemstone.slug}`}
                        onClick={() => {
                          setSearchTerm("");
                          setSearchOpen(false);
                        }}
                        className="flex items-center justify-between gap-4 py-3 font-body text-sm text-neutral-700 transition-colors hover:text-primary-700"
                      >
                        <span>
                          <span className="font-semibold">{gemstone.name}</span>
                          <span className="ms-2 text-xs text-neutral-400">
                            {gemstone.weight}
                          </span>
                        </span>
                        <span className="shrink-0 text-xs text-neutral-500">
                          اكتشف الحجر
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="py-4 text-center font-body text-sm text-neutral-500">
                  لا توجد أحجار مطابقة. جرّب كلمة أخرى.
                </p>
              )}
            </div>
          ) : (
            <p className="mx-auto max-w-3xl pt-3 font-body text-xs text-neutral-400">
              اكتشف الأحجار حسب الاسم أو اللون أو المنشأ.
            </p>
          )}
        </div>
      )}

      {mobileMenuOpen && (
        <div className="border-t border-neutral-200 bg-[#FAF9F6] px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {[
              { href: "/#gemstones", label: "الأحجار" },
              { href: "/about", label: "من نحن" },
              { href: "/contact", label: "اتصل بنا" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 font-body text-sm text-neutral-600 transition-colors hover:text-secondary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

    </header>
  );
}
