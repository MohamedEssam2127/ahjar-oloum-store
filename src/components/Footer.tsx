"use client";

import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Mail01Icon,
  CallIcon,
  ArrowUp01Icon,
  Facebook01Icon,
  YoutubeIcon,
  WhatsappIcon,
  Link01Icon,
  ListViewIcon,
} from "@hugeicons/core-free-icons";
import { contactInfo } from "@/data/contact";

export default function Footer() {
  return (
    <footer className="relative bg-secondary text-neutral-100 border-t border-primary-800/40 pt-16 pb-8 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-primary-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-secondary-400/20">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-5">
            <h2 className="font-display text-3xl text-primary tracking-wide">
              {contactInfo.brand}
            </h2>
            <p className="font-accent text-lg text-primary-200/90 leading-relaxed">
              {contactInfo.tagline}
            </p>
            <p className="font-body text-sm text-neutral-300 max-w-sm leading-relaxed">
              {contactInfo.specialties}
            </p>
            <div className="flex items-center gap-3 pt-2">
              {[
                {
                  icon: Facebook01Icon,
                  href: contactInfo.socials.facebook.href,
                  label: contactInfo.socials.facebook.label,
                },
                {
                  icon: YoutubeIcon,
                  href: contactInfo.socials.youtube.href,
                  label: contactInfo.socials.youtube.label,
                },
                {
                  icon: WhatsappIcon,
                  href: contactInfo.whatsappHref,
                  label: "WhatsApp",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-secondary-600/60 border border-primary-500/20 flex items-center justify-center text-primary-300 hover:text-primary hover:border-primary transition-all duration-300 hover:-translate-y-0.5"
                >
                  <HugeiconsIcon icon={social.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-body text-base font-semibold text-primary-300 border-b border-primary-500/20 pb-2 inline-block">
              الروابط
            </h3>
            <ul className="space-y-3 font-body text-sm text-neutral-300">
              {[
                { label: "الرئيسية", href: "/" },
                { label: "الأحجار", href: "/#gemstones" },
                { label: "من نحن", href: "/about" },
                { label: "اتصل بنا", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={contactInfo.socials.youtube.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-300 hover:text-primary transition-colors"
                >
                  <HugeiconsIcon icon={Link01Icon} size={16} />
                  <span>{contactInfo.socials.youtube.display}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-body text-base font-semibold text-primary-300 border-b border-primary-500/20 pb-2 inline-block">
              الخدمات
            </h3>
            <div className="space-y-3 font-body text-sm text-neutral-300">
              <div className="flex items-start gap-2.5">
                <HugeiconsIcon
                  icon={ListViewIcon}
                  size={18}
                  className="text-primary mt-0.5 shrink-0"
                />
                <div className="space-y-1">
                  <p className="text-primary-200">{contactInfo.specialtiesTitle}</p>
                  <p className="text-neutral-300 leading-relaxed">
                    {contactInfo.tagline}
                  </p>
                  <p className="text-neutral-400 leading-relaxed text-[13px]">
                    {contactInfo.specialties}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-body text-base font-semibold text-primary-300 border-b border-primary-500/20 pb-2 inline-block">
              معلومات الاتصال
            </h3>
            <div className="space-y-4 font-body text-sm text-neutral-300">
              <a
                href={contactInfo.phoneHref}
                className="flex items-center gap-3 hover:text-primary transition-colors"
                dir="ltr"
              >
                <HugeiconsIcon
                  icon={CallIcon}
                  size={20}
                  className="text-primary shrink-0"
                />
                <span>{contactInfo.phoneDisplay}</span>
              </a>
              <a
                href={contactInfo.emailHref}
                className="flex items-center gap-3 text-primary-300 hover:text-primary transition-colors"
              >
                <HugeiconsIcon
                  icon={Mail01Icon}
                  size={20}
                  className="text-primary shrink-0"
                />
                <span>{contactInfo.email}</span>
              </a>
              <a
                href={contactInfo.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-primary transition-colors"
                dir="ltr"
              >
                <HugeiconsIcon
                  icon={WhatsappIcon}
                  size={20}
                  className="text-primary shrink-0"
                />
                <span>{contactInfo.whatsappDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-body text-neutral-400">
          <p>© {2026} {contactInfo.brand} — جميع الحقوق محفوظة.</p>

          <button
            type="button"
            onClick={() =>
              typeof window !== "undefined" &&
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="flex items-center gap-2 text-primary-300 hover:text-primary transition-colors duration-200"
          >
            <span>الأعلى</span>
            <div className="w-8 h-8 rounded-full border border-primary-500/30 flex items-center justify-center">
              <HugeiconsIcon icon={ArrowUp01Icon} size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
