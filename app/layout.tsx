import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { MotionConfig } from "motion/react";
import { Analytics } from "@vercel/analytics/next";
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

const title = "Muhammad Angga Ramadhan | B2B Sales & Business Development";
const description =
  "Portofolio profesional B2B Sales, Account Management, dan Business Development. Berpengalaman dalam pipeline management dan SaaS CRM.";
const ogImage = "https://angga-ramadhan.vercel.app/assets/og-image.png";

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
    url: "https://angga-ramadhan.vercel.app",
    siteName: "Muhammad Angga Ramadhan",
    locale: "id_ID",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Muhammad Angga Ramadhan B2B Sales Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [{ url: ogImage, alt: "Muhammad Angga Ramadhan B2B Sales Portfolio" }],
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
        {process.env.VERCEL === "1" ? <Analytics /> : null}
      </body>
    </html>
  );
}
