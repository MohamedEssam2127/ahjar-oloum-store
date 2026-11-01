"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Add01Icon,
  Cancel01Icon,
  Delete02Icon,
  MinusSignIcon,
  ShoppingBag01Icon,
} from "@hugeicons/core-free-icons";
import { formatPrice, gemstones } from "@/data/gemstones";
import { useStore } from "@/components/StoreProvider";

export default function CartDrawer() {
  const {
    cartItems,
    cartOpen,
    setCartOpen,
    updateCartQuantity,
    removeFromCart,
  } = useStore();

  useEffect(() => {
    if (!cartOpen) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setCartOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [cartOpen, setCartOpen]);

  if (!cartOpen) return null;

  const items = cartItems.flatMap((item) => {
    const gemstone = gemstones.find((entry) => entry.id === item.gemstoneId);
    return gemstone ? [{ ...item, gemstone }] : [];
  });
  const total = items.reduce(
    (sum, item) => sum + item.gemstone.price * item.quantity,
    0,
  );

  return (
    <div className="fixed inset-0 z-[70]">
      <button
        type="button"
        onClick={() => setCartOpen(false)}
        className="absolute inset-0 h-full w-full cursor-default bg-secondary/45 backdrop-blur-[2px]"
        aria-label="إغلاق سلة المشتريات"
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        className="absolute inset-y-0 start-0 flex w-full max-w-md flex-col border-e border-primary-500/25 bg-[#FAF9F6] shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-primary-500/20 px-6 py-5">
          <div>
            <p className="font-accent text-sm text-primary-700">
              قطع مختارة بعناية
            </p>
            <h2
              id="cart-title"
              className="font-display text-2xl text-secondary"
            >
              سلة المشتريات
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setCartOpen(false)}
            className="p-2 text-neutral-500 transition-colors hover:text-secondary"
            aria-label="إغلاق"
          >
            <HugeiconsIcon icon={Cancel01Icon} size={21} />
          </button>
        </div>

        {items.length ? (
          <>
            <ul className="flex-1 divide-y divide-neutral-200 overflow-y-auto px-6">
              {items.map(({ gemstone, quantity }) => (
                <li
                  key={gemstone.id}
                  className="flex gap-4 py-5"
                >
                  <Link
                    href={`/gemstones/${gemstone.slug}`}
                    onClick={() => setCartOpen(false)}
                    className="relative h-24 w-24 shrink-0 border border-secondary/10 bg-white/70"
                  >
                    <Image
                      src={gemstone.images[0]}
                      alt={gemstone.name}
                      fill
                      sizes="96px"
                      className="object-contain p-2"
                    />
                  </Link>
                  <div className="flex min-w-0 flex-1 flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="font-display text-lg text-secondary">
                          {gemstone.name}
                        </p>
                        <p className="mt-1 font-body text-xs text-neutral-500">
                          {gemstone.weight}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(gemstone.id)}
                        className="shrink-0 p-1 text-neutral-400 transition-colors hover:text-red-700"
                        aria-label={`حذف ${gemstone.name} من السلة`}
                      >
                        <HugeiconsIcon icon={Delete02Icon} size={17} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <div className="inline-flex items-center border border-neutral-200">
                        <button
                          type="button"
                          onClick={() =>
                            updateCartQuantity(gemstone.id, quantity - 1)
                          }
                          className="p-1.5 text-neutral-500 transition-colors hover:text-secondary"
                          aria-label={`تقليل كمية ${gemstone.name}`}
                        >
                          <HugeiconsIcon icon={MinusSignIcon} size={14} />
                        </button>
                        <span className="min-w-7 text-center font-body text-xs text-secondary">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateCartQuantity(gemstone.id, quantity + 1)
                          }
                          className="p-1.5 text-neutral-500 transition-colors hover:text-secondary"
                          aria-label={`زيادة كمية ${gemstone.name}`}
                        >
                          <HugeiconsIcon icon={Add01Icon} size={14} />
                        </button>
                      </div>
                      <span className="font-body text-sm text-secondary" dir="ltr">
                        {formatPrice(gemstone.price * quantity, gemstone.currency)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="border-t border-primary-500/20 bg-white/50 px-6 py-5">
              <div className="flex items-center justify-between">
                <span className="font-body text-sm text-neutral-600">
                  الإجمالي
                </span>
                <span className="font-body text-base font-semibold text-secondary" dir="ltr">
                  {formatPrice(total)}
                </span>
              </div>
              <p className="mt-2 font-body text-xs text-neutral-400">
                يتم تأكيد تفاصيل الطلب والشحن مع فريقنا.
              </p>
              <button
                type="button"
                onClick={() => setCartOpen(false)}
                className="mt-5 w-full border border-secondary bg-secondary px-5 py-3 font-body text-sm font-semibold text-white transition-colors hover:border-primary-600 hover:bg-primary-700"
              >
                متابعة التسوق
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <HugeiconsIcon
              icon={ShoppingBag01Icon}
              size={30}
              strokeWidth={1.2}
              className="mb-5 text-primary-600"
            />
            <h3 className="font-display text-2xl text-secondary">
              سلتك بانتظار اختيارك
            </h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-neutral-500">
              أضف حجرًا كريمًا لتراه هنا وتتابع تفاصيله.
            </p>
            <Link
              href="/#gemstones"
              onClick={() => setCartOpen(false)}
              className="mt-6 border border-secondary px-6 py-2.5 font-body text-sm text-secondary transition-colors hover:bg-secondary hover:text-white"
            >
              اكتشف المجموعة
            </Link>
          </div>
        )}
      </aside>
    </div>
  );
}
