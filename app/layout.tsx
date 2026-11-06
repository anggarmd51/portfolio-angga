import type { Metadata } from "next";
import { Archivo, Newsreader } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  weight: ["600", "700", "800"],
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Muhammad Angga Ramadhan | Sales, Business Development & Account Management",
  description:
    "Portofolio profesional Muhammad Angga Ramadhan di bidang B2B Sales, Business Development, Fintech, dan ICT Infrastructure berbasis di Medan.",
  openGraph: {
    title: "Muhammad Angga Ramadhan | Sales, Business Development & Account Management",
    description:
      "Portofolio profesional Muhammad Angga Ramadhan di bidang B2B Sales, Business Development, Fintech, dan ICT Infrastructure berbasis di Medan.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Angga Ramadhan | Sales, Business Development & Account Management",
    description:
      "Portofolio profesional Muhammad Angga Ramadhan di bidang B2B Sales, Business Development, Fintech, dan ICT Infrastructure berbasis di Medan.",
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
      className={`${archivo.variable} ${newsreader.variable} scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="bg-kertas-dingin text-hijau-ledger font-body antialiased selection:bg-kuning-stabilo selection:text-hijau-ledger min-h-screen"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 border-x border-garis-embun min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
