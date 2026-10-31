import type { Metadata } from "next";
import { Cairo, Lalezar, Lemonada } from "next/font/google";
import "@/styles/globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const lalezar = Lalezar({
  subsets: ["arabic", "latin"],
  variable: "--font-lalezar",
  weight: "400",
  display: "swap",
});

const lemonada = Lemonada({
  subsets: ["arabic", "latin"],
  variable: "--font-lemonada",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "أحجار العلوم | Haute Gemology & Lapidary Science",
  description: "متجر أحجار العلوم - Haute Gemology & Lapidary Science Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${lalezar.variable} ${lemonada.variable}`}
    >
      <body className="font-cairo antialiased bg-[#fdfdfc] text-[#24211C]">
        {children}
      </body>
    </html>
  );
}
