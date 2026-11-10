import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { MotionConfig } from "motion/react";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0F19",
};

const title = "Muhammad Angga Ramadhan — Portofolio Sales & Business Development";
const description =
  "Portofolio profesional Muhammad Angga Ramadhan. Pengalaman sejak 2019 di bidang B2B Sales, Business Development, Account Management, pembiayaan, dan B2B SaaS di Medan.";

export const metadata: Metadata = {
  metadataBase: new URL("https://angga-ramadhan.vercel.app"),
  title,
  description,
  icons: {
    icon: "/assets/Favicon%20AR.png",
    shortcut: "/assets/Favicon%20AR.png",
    apple: "/assets/Favicon%20AR.png",
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/assets/OG%20Image%20AR.png",
        width: 1034,
        height: 1034,
        alt: "Muhammad Angga Ramadhan — Sales & Business Development, Medan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/OG%20Image%20AR.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} font-sans scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#0B0F19] text-slate-100 antialiased selection:bg-emerald-500/20 selection:text-emerald-300"
      >
        <MotionConfig reducedMotion="never">{children}</MotionConfig>
      </body>
    </html>
  );
}
