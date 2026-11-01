"use client";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Mail01Icon,
  CallIcon,
  Location01Icon,
  ArrowUp01Icon,
  InstagramIcon,
  Facebook01Icon,
  NewTwitterIcon,
  Linkedin01Icon,
} from "@hugeicons/core-free-icons";

export default function Footer() {
  return (
    <footer className="relative bg-secondary text-neutral-100 border-t border-primary-800/40 pt-16 pb-8 overflow-hidden">
      {/* Background Subtle Luxury Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-primary-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-secondary-400/20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="lemonada-title text-primary tracking-wide">
              الخامة
            </h2>
            <p className="cairo-regular text-neutral-300 max-w-sm leading-relaxed">
              تجربة فريدة تجمع بين الفخامة والرقّي، مصممة بعناية لتعكس أدق التفاصيل وتمنحك أسلوب حياة استثنائي.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: InstagramIcon, href: "#", label: "Instagram" },
                { icon: Facebook01Icon, href: "#", label: "Facebook" },
                { icon: NewTwitterIcon, href: "#", label: "Twitter" },
                { icon: Linkedin01Icon, href: "#", label: "LinkedIn" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-secondary-600/60 border border-primary-500/20 flex items-center justify-center text-primary-300 hover:text-primary hover:border-primary transition-all duration-300 hover:-translate-y-0.5"
                >
                  < HugeiconsIcon icon ={social.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="cairo-subtitle text-primary-300 text-lg border-b border-primary-500/20 pb-2 inline-block">
              الروابط
            </h3>
            <ul className="space-y-3 cairo-regular text-sm text-neutral-300">
              {["الرئيسية", "المنتجات", "المجموعات", "عن الشركة", "المقالات"].map((item, idx) => (
                <li key={idx}>
                  <Link href="#" className="hover:text-primary transition-colors duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="cairo-subtitle text-primary-300 text-lg border-b border-primary-500/20 pb-2 inline-block">
              الخدمات
            </h3>
            <ul className="space-y-3 cairo-regular text-sm text-neutral-300">
              {["الأسئلة الشائعة", "سياسة الشحن", "الإرجاع والاستبدال", "الشروط والأحكام", "سياسة الخصوصية"].map((item, idx) => (
                <li key={idx}>
                  <Link href="#" className="hover:text-primary transition-colors duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="cairo-subtitle text-primary-300 text-lg border-b border-primary-500/20 pb-2 inline-block">
              التواصل
            </h3>
            <div className="space-y-4 cairo-regular text-sm text-neutral-300">
              <div className="flex items-start gap-3">
                <HugeiconsIcon  icon ={Location01Icon}size={20} className="text-primary mt-0.5 shrink-0" />
                <span>القاهرة، جاردن سيتي، مصر</span>
              </div>
              <div className="flex items-center gap-3">
                <HugeiconsIcon  icon ={CallIcon}size={20} className="text-primary shrink-0" />
                <span dir="ltr">+20 100 000 0000</span>
              </div>
              <div className="flex items-center gap-3">
                <HugeiconsIcon  icon ={Mail01Icon} size={20} className="text-primary shrink-0" />
                <span>contact@brand.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs cairo-regular text-neutral-400">
          <p>© {2026} جميع الحقوق محفوظة.</p>
          
          <button
            onClick={() => typeof window !== "undefined" && window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-primary-300 hover:text-primary transition-colors duration-200"
          >
            <span>الأعلى</span>
            <div className="w-8 h-8 rounded-full border border-primary-500/30 flex items-center justify-center">
              <HugeiconsIcon  icon ={ArrowUp01Icon} size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}