"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  Mail01Icon,
  CallIcon,
  WhatsappIcon,
  Facebook01Icon,
  YoutubeIcon,
  ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons";
import { contactInfo } from "@/data/contact";
import ScrollReveal from "@/components/ScrollReveal";

const contactMethods = [
  {
    label: "اتصل بنا",
    value: contactInfo.phoneDisplay,
    detail: "يسعدنا الرد على استفساراتك",
    href: contactInfo.phoneHref,
    icon: CallIcon,
    direction: "ltr",
  },
  {
    label: "راسلنا عبر البريد",
    value: contactInfo.email,
    detail: "للاستفسارات والتفاصيل",
    href: contactInfo.emailHref,
    icon: Mail01Icon,
    direction: "ltr",
  },
  {
    label: "تواصل عبر واتساب",
    value: contactInfo.whatsappDisplay,
    detail: "تواصل مباشر وسهل",
    href: contactInfo.whatsappHref,
    icon: WhatsappIcon,
    direction: "ltr",
    external: true,
  },
];

export default function ContactContent() {
  return (
    <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <ScrollReveal className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
        <p className="mb-3 font-accent text-lg text-primary-700 sm:text-xl">
          يسعدنا أن نسمع منك
        </p>
        <h1 className="font-display text-4xl leading-tight text-secondary sm:text-5xl md:text-6xl">
          لنتحدث عن الحجر الذي تبحث عنه
        </h1>
        <p className="mx-auto mt-5 max-w-2xl font-body text-sm leading-8 text-neutral-500 sm:text-base">
          {contactInfo.specialties}. أرسل لنا سؤالك أو أخبرنا بما تبحث عنه،
          وسنكون سعداء بمساعدتك.
        </p>
      </ScrollReveal>

      <div className="grid gap-4 md:grid-cols-3">
        {contactMethods.map((method, index) => (
          <ScrollReveal key={method.label} delay={index * 100}>
            <a
              href={method.href}
              target={method.external ? "_blank" : undefined}
              rel={method.external ? "noopener noreferrer" : undefined}
              className="group flex h-full min-h-48 items-start gap-4 border border-secondary/10 bg-white/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/45 hover:shadow-[0_16px_38px_rgba(31,42,68,0.08)] sm:p-6"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-primary-500/35 text-primary-700 transition-colors duration-300 group-hover:bg-primary-600 group-hover:text-white">
                <HugeiconsIcon icon={method.icon} size={21} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-accent text-sm text-neutral-500">
                  {method.label}
                </span>
                <span
                  className={`mt-2 block font-body text-base text-secondary transition-colors group-hover:text-primary-700 sm:text-lg ${
                    method.value.includes("@")
                      ? "break-all"
                      : "whitespace-nowrap"
                  }`}
                  dir={method.direction}
                >
                  {method.value}
                </span>
                <span className="mt-2 block font-body text-xs text-neutral-400">
                  {method.detail}
                </span>
              </span>
              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                size={17}
                className="shrink-0 text-neutral-300 transition-colors group-hover:text-primary-700"
              />
            </a>
          </ScrollReveal>
        ))}
      </div>

      <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-[1.1fr_0.9fr]">
        <ScrollReveal>
          <section className="h-full border border-secondary/10 p-6 sm:p-8">
            <p className="font-accent text-lg text-primary-700">خبرتنا</p>
            <h2 className="mt-2 font-display text-2xl text-secondary sm:text-3xl">
              لكل حجر طبيعته الخاصة
            </h2>
            <p className="mt-4 max-w-2xl font-body text-sm leading-8 text-neutral-500">
              {contactInfo.specialties}
            </p>
            <p className="mt-5 border-s-2 border-primary-500 ps-4 font-accent text-xl text-secondary">
              {contactInfo.tagline}
            </p>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <section className="h-full border border-secondary/10 p-6 sm:p-8">
            <p className="font-accent text-lg text-primary-700">تابعنا</p>
            <h2 className="mt-2 font-display text-2xl text-secondary sm:text-3xl">
              اكتشف المزيد من عالمنا
            </h2>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={contactInfo.socials.facebook.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border border-secondary/10 px-4 py-3 font-body text-sm text-secondary transition-colors hover:border-primary-500/50 hover:text-primary-700"
              >
                <span className="flex items-center gap-3">
                  <HugeiconsIcon
                    icon={Facebook01Icon}
                    size={19}
                    className="text-primary-700"
                  />
                  صفحة فيسبوك — Layla Gemstore
                </span>
                <HugeiconsIcon
                  icon={ArrowUpRight01Icon}
                  size={16}
                  className="text-neutral-300 transition-colors group-hover:text-primary-700"
                />
              </a>
              <a
                href={contactInfo.socials.youtube.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border border-secondary/10 px-4 py-3 font-body text-sm text-secondary transition-colors hover:border-primary-500/50 hover:text-primary-700"
              >
                <span className="flex items-center gap-3">
                  <HugeiconsIcon
                    icon={YoutubeIcon}
                    size={19}
                    className="text-primary-700"
                  />
                  قناة يوتيوب — أحجار و علوم
                </span>
                <HugeiconsIcon
                  icon={ArrowUpRight01Icon}
                  size={16}
                  className="text-neutral-300 transition-colors group-hover:text-primary-700"
                />
              </a>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
