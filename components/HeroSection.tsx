"use client";

import Image from "next/image";
import { HERO_DATA } from "@/data/portfolio";
import { ArrowDown, MessageSquare, TrendingUp } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import type { MouseEvent } from "react";
import { Reveal } from "./MotionReveal";

export default function HeroSection() {
  const pointerFine = useMediaQuery("(pointer: fine)");
  const shouldReduceMotion = useReducedMotion() ?? false;
  const magnetX = useMotionValue(0);
  const magnetY = useMotionValue(0);
  const springX = useSpring(magnetX, { stiffness: 220, damping: 28, mass: 0.4 });
  const springY = useSpring(magnetY, { stiffness: 220, damping: 28, mass: 0.4 });

  const handlePrimaryCtaMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!pointerFine || shouldReduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const maxOffset = 12;
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * maxOffset * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * maxOffset * 2;
    magnetX.set(Math.max(-maxOffset, Math.min(maxOffset, x)));
    magnetY.set(Math.max(-maxOffset, Math.min(maxOffset, y)));
  };

  const resetPrimaryCta = () => {
    magnetX.set(0);
    magnetY.set(0);
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-name"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 md:pt-28 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-radial-gradient"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/[0.025] blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/[0.025] blur-[90px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <Reveal delay={0.05} y={16}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-6 max-w-full">
              <span aria-hidden="true" className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span>{HERO_DATA.eyebrow}</span>
            </div>
          </Reveal>

          <Reveal delay={0.12} y={20}>
            <div className="mb-5">
              <h1
                id="hero-name"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight"
              >
                {HERO_DATA.name}{" "}
                <span className="text-emerald-400 font-semibold text-2xl sm:text-3xl md:text-4xl">
                  {HERO_DATA.secondaryName}
                </span>
              </h1>
            </div>
          </Reveal>

          <Reveal delay={0.18} y={22}>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-slate-100 leading-snug mb-5 border-l-2 border-emerald-500/60 pl-4">
              {HERO_DATA.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.24} y={22}>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mb-6">
              {HERO_DATA.subTagline}
            </p>
          </Reveal>

          <Reveal delay={0.3} y={20}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <motion.a
                href={HERO_DATA.ctaPrimary.href}
                style={{ x: shouldReduceMotion ? 0 : springX, y: shouldReduceMotion ? 0 : springY }}
                onMouseMove={pointerFine && !shouldReduceMotion ? handlePrimaryCtaMouseMove : undefined}
                onMouseLeave={pointerFine && !shouldReduceMotion ? resetPrimaryCta : undefined}
                className="min-h-[44px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
              >
                <span>{HERO_DATA.ctaPrimary.label}</span>
                <ArrowDown className="w-4 h-4 stroke-[2.5]" />
              </motion.a>

              <a
                href={HERO_DATA.ctaSecondary.href}
                className="min-h-[44px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 font-medium text-sm hover:bg-white/10 hover:text-white transition-all backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>{HERO_DATA.ctaSecondary.label}</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.36} y={20}>
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/5 mt-7 max-w-md">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">Sejak 2019</div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">Pengalaman profesional</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">Medan</div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">Domisili</div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5 flex justify-center items-center relative">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="motion-reveal relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-none aspect-[4/5] rounded-3xl overflow-hidden glass-card p-2 border border-white/10 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 pointer-events-none" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900/80">
              <Image
                src={HERO_DATA.portraitUrl}
                alt="Muhammad Angga Ramadhan — Sales & Business Development"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 420px"
                className="object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>

            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.4, ease: "easeOut" }}
              className="motion-reveal absolute bottom-4 left-4 right-4 z-20 max-w-[calc(100%-2rem)] glass-pill px-3.5 py-2.5 rounded-xl shadow-xl flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="text-xs font-semibold text-slate-100 leading-tight">
                {HERO_DATA.floatingBadges[0].text}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
