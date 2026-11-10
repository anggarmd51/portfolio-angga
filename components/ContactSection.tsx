"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CONTACT_DATA, type ContactChannel } from "@/data/portfolio";
import {
  MessageCircle,
  Mail,
  Linkedin,
  Github,
  Instagram,
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
  instagram: Instagram,
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
      className="min-h-[72px] w-full inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 hover:border-emerald-500/30 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
    >
      <Icon aria-hidden="true" className="w-5 h-5 text-emerald-400 shrink-0" />
      <span className="min-w-0 flex-1 text-left">
        <span className="block text-sm font-semibold leading-snug">{channel.label}</span>
        <span className="block text-xs text-slate-300 leading-snug break-words">
          {channel.sublabel}
        </span>
      </span>
      {opensNewTab && (
        <ArrowUpRight aria-hidden="true" className="w-4 h-4 text-slate-400 shrink-0" />
      )}
      {channel.isDownload && (
        <Download aria-hidden="true" className="w-4 h-4 text-slate-400 shrink-0" />
      )}
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

function ContactEmailCard({ channel }: { channel: ContactChannel }) {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<number | undefined>(undefined);
  const email = "anggaramadhan538@gmail.com";

  useEffect(
    () => () => {
      if (resetTimer.current !== undefined) window.clearTimeout(resetTimer.current);
    },
    []
  );

  const copyEmail = async () => {
    let successfullyCopied = false;
    try {
      await navigator.clipboard.writeText(email);
      successfullyCopied = true;
    } catch {
      successfullyCopied = fallbackCopyText(email);
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
    <div className="min-h-[72px] w-full grid grid-cols-[minmax(0,1fr)_auto] rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition">
      <a
        href={`mailto:${email}`}
        className="min-w-0 inline-flex items-center gap-3 px-4 py-3 rounded-l-xl text-slate-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-400"
      >
        <Mail aria-hidden="true" className="w-5 h-5 text-emerald-400 shrink-0" />
        <span className="min-w-0 flex-1 text-left">
          <span className="block text-sm font-semibold leading-snug">{channel.label}</span>
          <span className="block text-xs text-slate-300 leading-snug break-words">
            {channel.sublabel}
          </span>
        </span>
        <ArrowUpRight aria-hidden="true" className="w-4 h-4 text-slate-400 shrink-0" />
      </a>
      <button
        type="button"
        onClick={() => void copyEmail()}
        aria-label={copied ? "Alamat email berhasil disalin" : "Salin alamat email"}
        className="min-h-[44px] min-w-[76px] self-center mr-2 inline-flex flex-col items-center justify-center gap-1 rounded-lg px-2 text-slate-300 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={copied ? "copied" : "copy"}
            initial={{ opacity: 0, scale: 0.65, rotate: copied ? -35 : 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.65, rotate: copied ? 0 : 35 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="inline-flex"
          >
            <StatusIcon aria-hidden="true" className="w-5 h-5 text-emerald-400" />
          </motion.span>
        </AnimatePresence>
        <span aria-live="polite" className={`text-[10px] font-semibold ${copied ? "text-emerald-400" : "text-slate-400"}`}>
          {copied ? "Tersalin!" : "Salin"}
        </span>
      </button>
    </div>
  );
}

function ContactAction({ channel }: { channel: ContactChannel }) {
  return channel.iconName === "mail" ? (
    <ContactEmailCard channel={channel} />
  ) : (
    <ContactLink channel={channel} />
  );
}

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative bg-[#0B0F19] overflow-hidden presentation-section"
    >
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/[0.025] blur-[110px] rounded-full pointer-events-none -z-10"
      />
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
        <Reveal delay={0.14} y={18} className="mt-12 text-left">
          <section className="glass-card rounded-3xl p-5 sm:p-7 lg:p-8 border border-white/10 shadow-xl">
            <div className="max-w-2xl">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {CONTACT_DATA.panelTitle}
              </h3>
              <p className="mt-2 mb-6 text-sm text-slate-300 leading-relaxed">
                {CONTACT_DATA.panelDescription}
              </p>
            </div>
            <StaggerContainer
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
              staggerChildren={0.05}
            >
              {CONTACT_DATA.channels.map((channel) => (
                <StaggerItem key={channel.label}>
                  <ContactAction channel={channel} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>
        </Reveal>
        <Reveal
          delay={0.1}
          y={16}
          className="mt-16 pt-8 border-t border-white/10 text-xs sm:text-sm text-slate-300"
        >
          <p>{CONTACT_DATA.footer}</p>
        </Reveal>
      </div>
    </section>
  );
}
