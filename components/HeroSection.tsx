"use client";

import Image from "next/image";
import { HERO_DATA } from "@/data/portfolio";
import { ArrowRight, MessageSquare, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useEffect, useRef, type PointerEvent as ReactPointerEvent } from "react";
import EditorialDivider from "./EditorialDivider";
import { MagneticAnchor } from "./MagneticElements";

const ease = [0.21, 0.47, 0.32, 0.98] as const;
const POINTER_EFFECT_QUERY =
  "(hover: hover) and (pointer: fine)";

const reveal = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const headlineSequence = {
  hidden: {},
  visible: { transition: { delayChildren: 0.43, staggerChildren: 0.05 } },
};

const headlineLine = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.16, ease } },
};

export default function HeroSection() {
  const pointerEffectsEnabled = useMediaQuery(POINTER_EFFECT_QUERY);
  const sectionRef = useRef<HTMLElement | null>(null);
  const depthFrameRef = useRef<HTMLDivElement | null>(null);
  const pointerPositionRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);

  const handleHeroPointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (!pointerEffectsEnabled || event.pointerType === "touch") return;
    pointerPositionRef.current = { x: event.clientX, y: event.clientY };
    if (animationFrameRef.current !== null) return;

    animationFrameRef.current = window.requestAnimationFrame(() => {
      animationFrameRef.current = null;
      const section = sectionRef.current;
      const frame = depthFrameRef.current;
      if (!section || !frame) return;
      const bounds = section.getBoundingClientRect();
      const localX = Math.min(bounds.width, Math.max(0, pointerPositionRef.current.x - bounds.left));
      const localY = Math.min(bounds.height, Math.max(0, pointerPositionRef.current.y - bounds.top));
      const normalizedX = bounds.width ? localX / bounds.width - 0.5 : 0;
      const normalizedY = bounds.height ? localY / bounds.height - 0.5 : 0;

      section.style.setProperty("--mouse-x", `${localX}px`);
      section.style.setProperty("--mouse-y", `${localY}px`);
      frame.style.setProperty("--depth-x", `${-normalizedX * 8}px`);
      frame.style.setProperty("--depth-y", `${-normalizedY * 8}px`);
    });
  };

  const resetHeroPointerEffects = () => {
    if (animationFrameRef.current !== null) window.cancelAnimationFrame(animationFrameRef.current);
    animationFrameRef.current = null;
    sectionRef.current?.style.setProperty("--mouse-x", "-1000px");
    sectionRef.current?.style.setProperty("--mouse-y", "-1000px");
    depthFrameRef.current?.style.setProperty("--depth-x", "0px");
    depthFrameRef.current?.style.setProperty("--depth-y", "0px");
  };

  useEffect(
    () => () => {
      if (animationFrameRef.current !== null) window.cancelAnimationFrame(animationFrameRef.current);
    },
    []
  );

  return (
    <section
      id="home"
      aria-labelledby="hero-name"
      ref={sectionRef}
      onPointerMove={pointerEffectsEnabled ? handleHeroPointerMove : undefined}
      onPointerLeave={pointerEffectsEnabled ? resetHeroPointerEffects : undefined}
      className="hero-interactive-surface relative min-h-screen min-h-[100svh] flex items-center px-5 py-24 sm:px-8 lg:px-10 overflow-hidden bg-radial-gradient presentation-section"
    >
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.28, ease }}
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_73%_48%,rgba(25,198,154,0.055),transparent_38%)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute -top-28 right-[8%] -z-10 h-[30rem] w-[30rem] rounded-full bg-signature-teal/[0.035] blur-[140px]" />

        <div className="relative z-10 mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-5">
        <div className="relative z-10 flex flex-col justify-center lg:col-span-7">
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.18, delay: 0.1, ease }}
            className="hero-motion mb-5 inline-flex w-fit max-w-full items-center gap-2.5 border-b border-muted-text/20 pb-2 text-[11px] font-semibold tracking-[0.15em] text-muted-text sm:text-xs"
          >
            <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-signature-teal" />
            <span>{HERO_DATA.eyebrow}</span>
          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.18, delay: 0.25, ease }}
            className="hero-motion"
          >
            <h1 id="hero-name" className="font-heading text-2xl font-semibold tracking-[-0.035em] text-soft-white sm:text-3xl lg:text-[2rem]">
              {HERO_DATA.name} <span className="font-medium text-muted-text">{HERO_DATA.secondaryName}</span>
            </h1>
          </motion.div>

          <motion.h2
            aria-label={HERO_DATA.tagline}
            variants={headlineSequence}
            initial="hidden"
            animate="visible"
            className="hero-motion mt-5 max-w-none font-heading text-[2.65rem] font-bold leading-[1.04] tracking-[-0.06em] text-soft-white sm:text-5xl md:text-6xl lg:text-[clamp(2.5rem,4vw,3.75rem)]"
          >
            <motion.span variants={headlineLine} className="hero-motion-item block">Driving Business Growth</motion.span>
            <motion.span variants={headlineLine} className="hero-motion-item block">Through Strategic</motion.span>
            <motion.span variants={headlineLine} className="hero-motion-item block"><span className="editorial-accent">B2B Sales</span> &amp; Account</motion.span>
            <motion.span variants={headlineLine} className="hero-motion-item block">Management.</motion.span>
          </motion.h2>

          <EditorialDivider className="mt-5 max-w-[220px]" />

          <motion.p
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.16, delay: 0.68, ease }}
            className="hero-motion mt-5 max-w-[62ch] text-base leading-7 text-muted-text sm:text-lg sm:leading-8"
          >
            {HERO_DATA.subTagline}
          </motion.p>

          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.14, delay: 0.72, ease }}
            className="hero-motion mt-7 grid max-w-[600px] grid-cols-[0.82fr_0.72fr_1.46fr] gap-3 border-t border-muted-text/15 pt-4 sm:gap-6"
            aria-label="Ringkasan pengalaman profesional"
          >
            <div>
              <div className="font-heading text-xl font-bold tracking-tight text-soft-white sm:text-2xl">Sejak 2019</div>
              <div className="mt-1 text-[11px] leading-4 text-muted-text sm:text-xs">Pengalaman profesional</div>
            </div>
            <div>
              <div className="font-heading text-xl font-bold tracking-tight text-soft-white sm:text-2xl">Medan</div>
              <div className="mt-1 text-[11px] leading-4 text-muted-text sm:text-xs">Sumatera Utara</div>
            </div>
            <div>
              <div className="font-heading text-base font-bold leading-6 tracking-tight text-soft-white sm:text-lg">Account Manager</div>
              <div className="mt-1 inline-flex items-center gap-1.5 text-[11px] leading-4 text-muted-text sm:text-xs">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-signature-teal" />
                Wavecomindo · peran aktif
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.14, delay: 0.86, ease }}
            className="hero-motion mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
          >
            <MagneticAnchor
              href={HERO_DATA.ctaPrimary.href}
              className="hero-motion group min-h-[44px] inline-flex items-center justify-center gap-2.5 rounded-[12px] bg-signature-teal px-5 py-3 font-semibold text-obsidian shadow-lg shadow-signature-teal/15 transition-colors duration-200 hover:bg-[#35d7ad] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signature-teal focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian sm:justify-start"
            >
              <span>{HERO_DATA.ctaPrimary.label}</span>
              <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </MagneticAnchor>

            <MagneticAnchor
              href={HERO_DATA.ctaSecondary.href}
              className="hero-motion group min-h-[44px] inline-flex items-center justify-center gap-2 rounded-[12px] border border-muted-text/20 bg-white/[0.025] px-5 py-3 font-medium text-soft-white transition-colors duration-200 hover:border-muted-text/35 hover:bg-white/[0.055] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signature-teal sm:justify-start"
            >
              <MessageSquare aria-hidden="true" className="h-4 w-4 text-muted-text" />
              <span>{HERO_DATA.ctaSecondary.label}</span>
              <ArrowRight aria-hidden="true" className="h-4 w-4 text-muted-text transition-transform duration-200 group-hover:translate-x-1" />
            </MagneticAnchor>
          </motion.div>
        </div>

        <div className="relative flex items-center justify-center lg:col-span-5 lg:justify-end">
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.12, delay: 0.84, ease }}
            className="hero-motion relative mx-auto aspect-square w-full max-w-[420px] sm:max-w-[500px] lg:mx-0 lg:aspect-[0.86/1] lg:max-w-[520px]"
          >
            <div aria-hidden="true" className="absolute inset-[8%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(25,198,154,0.16),rgba(25,198,154,0.035)_44%,transparent_72%)] blur-2xl" />
            <div aria-hidden="true" className="absolute right-[5%] top-[11%] h-[68%] w-px bg-gradient-to-b from-transparent via-signature-teal/70 to-transparent" />
            <div ref={depthFrameRef} aria-hidden="true" className="hero-depth-frame absolute inset-[3%] z-10 rounded-[30%_22%_12%_18%] border border-signature-teal/20" />
            <Image
              src={HERO_DATA.portraitUrl}
              alt="Muhammad Angga Ramadhan — Account Manager dan profesional B2B Sales"
              fill
              priority
              sizes="(max-width: 768px) 92vw, (max-width: 1200px) 45vw, 520px"
              className="object-cover object-top [mask-image:linear-gradient(to_bottom,black_0%,black_84%,transparent_100%)]"
              referrerPolicy="no-referrer"
            />
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.1, delay: 0.9, ease }}
              className="hero-motion glass-pill absolute bottom-[7%] left-0 z-10 flex max-w-[calc(100%-1rem)] items-center gap-2.5 rounded-[12px] px-3.5 py-2.5 shadow-xl sm:left-2 lg:-left-7"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-signature-teal/30 bg-signature-teal/10">
                <TrendingUp aria-hidden="true" className="h-4 w-4 text-signature-teal" />
              </div>
              <span className="text-xs font-semibold leading-tight text-soft-white">
                {HERO_DATA.floatingBadges[0].text}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
