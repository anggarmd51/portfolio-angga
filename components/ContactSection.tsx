"use client";

import { useEffect, useRef, useState, Fragment } from "react";
import { motion, useReducedMotion } from "motion/react";
import { CONTACT_DATA, type ContactChannel } from "@/data/portfolio";
import {
  MessageCircle,
  Mail,
  Linkedin,
  Github,
  Download,
  ArrowUpRight,
  Sparkles,
  FileText,
  Copy,
  Check,
} from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "./MotionReveal";

const ICON_MAP = {
  whatsapp: MessageCircle,
  mail: Mail,
  linkedin: Linkedin,
  github: Github,
  "file-text": FileText,
};

function ContactLink({ channel }: { channel: ContactChannel }) {
  const Icon = ICON_MAP[channel.iconName];
  const opensNewTab = channel.href.startsWith("https://");

  return (
    <a
      href={channel.href}
      target={opensNewTab ? "_blank" : undefined}
      rel={opensNewTab ? "noopener noreferrer" : undefined}
      download={channel.isDownload ? channel.downloadFilename : undefined}
      className="min-h-[44px] w-full inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 hover:border-emerald-500/30 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
    >
      <Icon aria-hidden="true" className="w-5 h-5 text-emerald-400 shrink-0" />
      <span className="min-w-0 flex-1 text-left">
        <span className="block text-sm font-semibold leading-snug">{channel.label}</span>
        <span className="block text-xs text-slate-300 leading-snug break-words">{channel.sublabel}</span>
      </span>
      {opensNewTab && <ArrowUpRight aria-hidden="true" className="w-4 h-4 text-slate-400 shrink-0" />}
      {channel.isDownload && <Download aria-hidden="true" className="w-4 h-4 text-slate-400 shrink-0" />}
    </a>
  );
}

function fallbackCopyText(text: string): boolean {
  const previouslyFocused = document.activeElement as HTMLElement | null;
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  textarea.style.pointerEvents = "none";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  textarea.setSelectionRange(0, text.length);

  let copied = false;
  try {
    copied = document.execCommand("copy");
  } catch {
    copied = false;
  }
  textarea.remove();
  previouslyFocused?.focus();
  return copied;
}

function CopyEmailButton() {
  const prefersReducedMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<number | undefined>(undefined);

  useEffect(
    () => () => {
      if (resetTimer.current !== undefined) window.clearTimeout(resetTimer.current);
    },
    []
  );

  const copyEmail = async () => {
    const email = "anggaramadhan538@gmail.com";
    let successfullyCopied = fallbackCopyText(email);

    if (!successfullyCopied) {
      try {
        await navigator.clipboard.writeText(email);
        successfullyCopied = true;
      } catch {
        return;
      }
    }

    if (!successfullyCopied) return;
    setCopied(true);
    if (resetTimer.current !== undefined) window.clearTimeout(resetTimer.current);
    resetTimer.current = window.setTimeout(() => {
      setCopied(false);
      resetTimer.current = undefined;
    }, 2000);
  };

  const StatusIcon = copied ? Check : Copy;

  return (
    <motion.button
      type="button"
      onClick={() => void copyEmail()}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.12 }}
      className="min-h-[44px] w-full inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
    >
      <StatusIcon aria-hidden="true" className="w-5 h-5 text-emerald-400 shrink-0" />
      <span className="min-w-0 flex-1 text-left">
        <span
          aria-live="polite"
          className={`block text-sm font-semibold leading-snug ${copied ? "text-emerald-400" : "text-slate-200"}`}
        >
          {copied ? "Email Tersalin!" : "Salin Email"}
        </span>
        <span className="block text-xs text-slate-300 leading-snug break-words">
          anggaramadhan538@gmail.com
        </span>
      </span>
    </motion.button>
  );
}

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative bg-[#0B0F19] overflow-hidden"
    >
      <div aria-hidden="true" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/[0.025] blur-[110px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto text-center">
        <Reveal delay={0.05} y={16}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-6">
            <Sparkles aria-hidden="true" className="w-3.5 h-3.5" />
            Kontak & Peluang
          </div>
        </Reveal>

        <Reveal delay={0.12} y={22}>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto"
          >
            {CONTACT_DATA.headline}
          </h2>
        </Reveal>

        <Reveal delay={0.18} y={22}>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {CONTACT_DATA.subheadline}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
          {CONTACT_DATA.pathways.map((pathway, index) => {
            const channels = CONTACT_DATA.channels.filter(
              (channel) => channel.pathway === pathway.id || channel.pathway === "both"
            );
            return (
              <Reveal key={pathway.id} delay={index * 0.08} y={18}>
                <section className="h-full glass-card rounded-2xl p-5 sm:p-6 border border-white/10">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {pathway.title}
                  </h3>
                  <p className="mt-2 mb-5 text-sm text-slate-300 leading-relaxed">
                    {pathway.description}
                  </p>
                  <StaggerContainer className="grid grid-cols-1 gap-3" staggerChildren={0.05}>
                    {channels.map((channel) => (
                      <Fragment key={channel.label}>
                        <StaggerItem>
                          <ContactLink channel={channel} />
                        </StaggerItem>
                        {pathway.id === "career" && channel.iconName === "mail" && (
                          <StaggerItem>
                            <CopyEmailButton />
                          </StaggerItem>
                        )}
                      </Fragment>
                    ))}
                  </StaggerContainer>
                </section>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1} y={16} className="mt-16 pt-8 border-t border-white/10 text-xs sm:text-sm text-slate-300">
          <p>{CONTACT_DATA.footer}</p>
          <p className="mt-2 text-xs text-slate-300">
            Dibuat secara mandiri dengan Next.js App Router, Tailwind CSS, & Motion.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
