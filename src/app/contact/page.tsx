import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "اتصل بنا | أحجار و علوم",
  description:
    "تواصل مع متجر أحجار و علوم — هاتف، واتساب، بريد إلكتروني، وفيسبوك ويوتيوب",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-[70vh] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-tertiary-100)_0%,_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-primary-50)_0%,_transparent_45%)] opacity-70" />
      <ContactContent />
    </main>
  );
}
