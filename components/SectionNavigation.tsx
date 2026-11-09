"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { NAVIGATION_SECTIONS } from "@/data/portfolio";
import {
  Home,
  User,
  Briefcase,
  Layers,
  GraduationCap,
  Mail,
} from "lucide-react";

const ICON_MAP = {
  home: Home,
  profile: User,
  career: Briefcase,
  projects: Layers,
  credentials: GraduationCap,
  contact: Mail,
};

export default function SectionNavigation() {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = NAVIGATION_SECTIONS.length - 1; i >= 0; i--) {
        const section = document.getElementById(NAVIGATION_SECTIONS[i].id);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(NAVIGATION_SECTIONS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Header Bar with Brand & Quick Links */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#0B0F19]/80 backdrop-blur-md border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a
            href="#home"
            className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-xl py-1 px-1.5 -ml-1.5 transition-colors"
            aria-label="Kembali ke bagian Beranda - Executive Portfolio"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 p-1.5 flex items-center justify-center shrink-0 shadow-md group-hover:border-emerald-500/40 group-hover:bg-white/10 transition overflow-hidden">
              <Image
                src="/assets/Favicon%20AR.png"
                alt="Logo Resmi Favicon AR - Muhammad Angga Ramadhan"
                width={48}
                height={48}
                priority
                className="object-contain w-full h-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-lg sm:text-xl md:text-2xl font-extrabold text-white tracking-tight leading-none group-hover:text-emerald-300 transition-colors">
                Executive Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Top Links */}
          <nav
            aria-label="Navigasi Utama Desktop"
            className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10"
          >
            {NAVIGATION_SECTIONS.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                    isActive
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-sm"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {sec.shortLabel}
                </a>
              );
            })}
          </nav>

          {/* Quick CTA on Desktop */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 font-semibold text-xs hover:bg-emerald-400 transition shadow-lg shadow-emerald-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      </header>

      {/* Desktop Floating Side-Dot Indicator */}
      <nav
        aria-label="Navigasi Samping"
        className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-3 p-2.5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl"
      >
        {NAVIGATION_SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className="group relative flex items-center justify-end p-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-full"
              aria-label={`Ke bagian ${sec.label}`}
            >
              {/* Tooltip on hover */}
              <span className="absolute right-8 px-2.5 py-1 rounded bg-slate-900 border border-white/10 text-xs text-slate-200 whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity shadow-lg">
                {sec.label}
              </span>
              <span
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? "w-3 h-7 bg-emerald-400 shadow-md shadow-emerald-400/30"
                    : "w-2.5 h-2.5 bg-slate-600 group-hover:bg-slate-300"
                }`}
              />
            </a>
          );
        })}
      </nav>

      {/* Mobile Floating Bottom Bar */}
      <nav
        aria-label="Navigasi Bawah Mobile"
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0B0F19]/90 backdrop-blur-xl border-t border-white/10 px-2 pt-2 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-2xl"
      >
        <div className="flex items-center justify-around max-w-md mx-auto">
          {NAVIGATION_SECTIONS.map((sec) => {
            const Icon = ICON_MAP[sec.id as keyof typeof ICON_MAP] || Home;
            const isActive = activeSection === sec.id;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className={`flex flex-col items-center justify-center min-w-[52px] min-h-[46px] rounded-xl px-1.5 py-1 text-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                  isActive
                    ? "text-emerald-400 bg-emerald-500/10"
                    : "text-slate-400 hover:text-slate-200"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon className={`w-5 h-5 ${isActive ? "stroke-[2.5]" : "stroke-[1.75]"}`} />
                <span className="text-[10px] font-medium tracking-tight mt-0.5">
                  {sec.shortLabel}
                </span>
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}
