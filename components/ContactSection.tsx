"use client";

import { CONTACT_DATA } from "@/data/portfolio";
import {
  MessageCircle,
  Mail,
  Linkedin,
  Github,
  Download,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "./MotionReveal";

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative bg-[#0B0F19] overflow-hidden"
    >
      {/* Background radial accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto text-center">
        {/* Eyebrow badge */}
        <Reveal delay={0.05} y={16}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Kemitraan & Peluang Karir Eksekutif
          </div>
        </Reveal>

        {/* Massive high-contrast responsive headline */}
        <Reveal delay={0.12} y={22}>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto"
          >
            {CONTACT_DATA.headline}
          </h2>
        </Reveal>

        {/* Subheadline */}
        <Reveal delay={0.18} y={22}>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {CONTACT_DATA.subheadline}
          </p>
        </Reveal>

        {/* Contact Channels: Full-width on mobile, structured layout on desktop */}
        <StaggerContainer
          className="mt-12 max-w-3xl mx-auto flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3.5 sm:gap-4"
          staggerChildren={0.08}
          delayChildren={0.1}
        >
          {/* 1. WhatsApp Button (Primary Emerald) */}
          <StaggerItem className="w-full sm:w-auto">
            <a
              href="https://wa.me/6285206602391"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-emerald-500 text-slate-950 font-bold text-sm sm:text-base hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
            >
              <MessageCircle className="w-5 h-5 fill-slate-950 stroke-none" />
              <span>0852-0660-2391 — Chat via WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </StaggerItem>

          {/* 2. Email Button */}
          <StaggerItem className="w-full sm:w-auto">
            <a
              href="mailto:anggaramadhan538@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl glass-card text-slate-100 hover:text-white hover:bg-white/10 font-semibold text-sm sm:text-base transition-all border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <Mail className="w-5 h-5 text-emerald-400" />
              <span>anggaramadhan538@gmail.com — Kirim Email</span>
            </a>
          </StaggerItem>

          {/* 3. LinkedIn */}
          <StaggerItem className="w-full sm:w-auto">
            <a
              href="https://linkedin.com/in/anggarmd"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-2xl glass-card text-slate-200 hover:text-white hover:bg-white/10 font-medium text-sm transition-all border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <Linkedin className="w-4 h-4 text-blue-400" />
              <span>linkedin.com/in/anggarmd</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </StaggerItem>

          {/* 4. GitHub */}
          <StaggerItem className="w-full sm:w-auto">
            <a
              href="https://github.com/anggarmd51"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-2xl glass-card text-slate-200 hover:text-white hover:bg-white/10 font-medium text-sm transition-all border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <Github className="w-4 h-4 text-slate-300" />
              <span>github.com/anggarmd51</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </StaggerItem>

          {/* 5. PDF CV Download */}
          <StaggerItem className="w-full sm:w-auto">
            <a
              href="/assets/CV_Angga.pdf"
              download="CV_Muhammad_Angga_Ramadhan.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white hover:bg-white/15 font-bold text-sm sm:text-base transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <Download className="w-5 h-5 text-emerald-400" />
              <span>Unduh CV Lengkap (PDF)</span>
            </a>
          </StaggerItem>
        </StaggerContainer>

        {/* Footer info */}
        <Reveal delay={0.1} y={16} className="mt-20 pt-8 border-t border-white/10 text-xs sm:text-sm text-slate-400">
          <p>{CONTACT_DATA.footer}</p>
          <p className="mt-1 text-[11px] text-slate-400">
            Dibuat secara mandiri dengan Next.js App Router, Tailwind CSS, & Framer Motion.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
