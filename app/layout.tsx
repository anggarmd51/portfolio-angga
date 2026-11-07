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

const title =
  "Muhammad Angga Ramadhan — B2B Sales, Business Development & Account Management";
const description =
  "Portofolio Eksekutif Muhammad Angga Ramadhan (Medan). 7+ tahun mendorong pertumbuhan revenue dari analisis risiko kredit, perbankan, hingga SaaS HRIS & POS B2B.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
        {children}
      </body>
    </html>
  );
}
