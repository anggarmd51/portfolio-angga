import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter, Manrope } from "next/font/google";
import { MotionConfig } from "motion/react";
import { Analytics } from "@vercel/analytics/next";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0F18",
};

const title = "Muhammad Angga Ramadhan | B2B Sales & Business Development";
const description =
  "Portofolio profesional B2B Sales, Account Management, dan Business Development. Berpengalaman dalam pipeline management dan SaaS CRM.";
const ogImage = "https://www.anggaramadhan.my.id/assets/og-image.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.anggaramadhan.my.id"),
  alternates: {
    canonical: "/",
  },
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
    url: "https://www.anggaramadhan.my.id",
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
      data-theme="dark"
      suppressHydrationWarning
      className={`${inter.variable} ${manrope.variable} ${instrumentSerif.variable} font-sans scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-page-background text-soft-white font-sans antialiased selection:bg-signature-teal/20 selection:text-soft-white"
      >
        <ScrollProgress />
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
        {process.env.VERCEL === "1" ? <Analytics /> : null}
      </body>
    </html>
  );
}
