"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CONTACT_DATA, NAVIGATION_SECTIONS } from "@/data/portfolio";
import {
  Home,
  User,
  Briefcase,
  Layers,
  GraduationCap,
  Mail,
  MessageCircle,
} from "lucide-react";

const ICON_MAP = {
  home: Home,
  profile: User,
  career: Briefcase,
  projects: Layers,
  credentials: GraduationCap,
  contact: Mail,
};

const whatsappHref =
  CONTACT_DATA.channels.find((channel) => channel.iconName === "whatsapp")?.href ??
  "#contact";

export default function SectionNavigation() {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = NAVIGATION_SECTIONS.length - 1; i >= 0; i--) {
        const section = document.getElementById(NAVIGATION_SECTIONS[i].id);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(NAVIGATION_SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#0B0F19]/90 backdrop-blur-md border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
          <a
            href="#home"
            className="min-h-[44px] flex items-center gap-2.5 sm:gap-3.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-xl py-1 px-1.5 -ml-1.5 transition-colors"
            aria-label="Kembali ke bagian Beranda — Portofolio Sales & Business Development"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 p-1.5 flex items-center justify-center shrink-0 shadow-md group-hover:border-emerald-500/40 group-hover:bg-white/10 transition overflow-hidden">
              <Image
                src="/assets/Favicon%20AR.png"
                alt="Logo AR — Muhammad Angga Ramadhan"
                width={48}
                height={48}
                priority
                className="object-contain w-full h-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="max-w-[172px] sm:max-w-none text-[10px] leading-tight sm:text-sm lg:text-base font-extrabold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
              Portofolio Sales & Business Development
            </span>
          </a>

          <nav
            aria-label="Navigasi Utama Desktop"
            className="hidden md:flex items-center gap-0.5 lg:gap-1 bg-white/5 p-1 rounded-full border border-white/10"
          >
            {NAVIGATION_SECTIONS.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className={`min-h-[44px] px-2 lg:px-3.5 py-1.5 rounded-full text-[11px] lg:text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 inline-flex items-center ${
                    isActive
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-sm"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {sec.shortLabel}
                </a>
              );
            })}
          </nav>

          <div className="hidden md:block shrink-0">
            <a
              href="#contact"
              className="min-h-[44px] inline-flex items-center gap-2 px-3 lg:px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 font-semibold text-xs hover:bg-emerald-400 transition shadow-lg shadow-emerald-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
            >
              Hubungi Saya
            </a>
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hubungi melalui WhatsApp"
            title="Hubungi melalui WhatsApp"
            className="md:hidden min-h-[44px] min-w-[44px] shrink-0 inline-flex items-center justify-center rounded-xl bg-emerald-500 text-slate-950 hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
          >
            <MessageCircle aria-hidden="true" className="w-5 h-5" />
          </a>
        </div>
      </header>

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
              className="group relative flex items-center justify-end min-h-[44px] min-w-[44px] p-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-full"
              aria-label={`Ke bagian ${sec.label}`}
            >
              <span className="absolute right-8 px-2.5 py-1 rounded bg-slate-900 border border-white/10 text-xs text-slate-200 whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-lg">
                {sec.label}
              </span>
              <span
                aria-hidden="true"
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

      <nav
        aria-label="Navigasi Bawah Mobile"
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0B0F19]/95 backdrop-blur-xl border-t border-white/10 px-2 pt-2 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-2xl"
      >
        <div className="flex items-center justify-around max-w-md mx-auto">
          {NAVIGATION_SECTIONS.map((sec) => {
            const Icon = ICON_MAP[sec.id as keyof typeof ICON_MAP] || Home;
            const isActive = activeSection === sec.id;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className={`flex flex-col items-center justify-center min-w-[52px] min-h-[46px] rounded-xl px-1.5 py-1 text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                  isActive
                    ? "text-emerald-400 bg-emerald-500/10"
                    : "text-slate-300 hover:text-slate-200"
                }`}
                aria-current={isActive ? "location" : undefined}
              >
                <Icon aria-hidden="true" className={`w-5 h-5 ${isActive ? "stroke-[2.5]" : "stroke-[1.75]"}`} />
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
