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
import EditorialDivider from "./EditorialDivider";
import { MagneticAnchor } from "./MagneticElements";

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
  const isPrimary = channel.iconName === "whatsapp" || Boolean(channel.isDownload);
  const linkProps = {
    href: channel.href,
    target: opensNewTab ? "_blank" : undefined,
    rel: opensNewTab ? "noopener noreferrer" : undefined,
    download: channel.isDownload ? channel.downloadFilename : undefined,
    className: `contact-action-link ${isPrimary ? "is-primary" : ""} ${channel.iconName === "whatsapp" ? "is-primary-whatsapp" : ""}`,
  };
  const content = (
    <>
      <Icon aria-hidden="true" className="w-5 h-5 text-emerald-400 shrink-0" />
      <span className="min-w-0 flex-1 text-left">
        <span className="block text-sm font-semibold leading-snug">{channel.label}</span>
        <span className="block min-w-0 truncate text-xs text-muted-foreground leading-snug">
          {channel.sublabel}
        </span>
      </span>
      {opensNewTab && (
        <ArrowUpRight aria-hidden="true" className="w-4 h-4 text-muted-foreground shrink-0" />
      )}
      {channel.isDownload && (
        <Download aria-hidden="true" className="w-4 h-4 text-muted-foreground shrink-0" />
      )}
    </>
  );
  return channel.isDownload ? (
    <MagneticAnchor {...linkProps}>{content}</MagneticAnchor>
  ) : (
    <a {...linkProps}>{content}</a>
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
    <div className="contact-email-card min-h-[76px] w-full grid grid-cols-[minmax(0,1fr)_auto] rounded-xl border transition">
      <a
        href={`mailto:${email}`}
        className="contact-email-link min-w-0 inline-flex items-center gap-1 px-1 py-3 rounded-l-xl text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-400 sm:gap-3 sm:px-4"
      >
        <Mail aria-hidden="true" className="w-4 h-4 text-emerald-400 shrink-0 sm:w-5 sm:h-5" />
        <span className="min-w-0 flex-1 text-left">
          <span className="block text-sm font-semibold leading-snug">{channel.label}</span>
          <span className="block min-w-0 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-muted-foreground leading-snug">
            {channel.sublabel}
          </span>
        </span>
        <ArrowUpRight aria-hidden="true" className="hidden w-4 h-4 text-muted-foreground shrink-0 sm:block" />
      </a>
      <button
        type="button"
        onClick={() => void copyEmail()}
        aria-label={copied ? "Alamat email berhasil disalin" : "Salin alamat email"}
        className="contact-email-copy min-h-[44px] min-w-[48px] self-center mr-0 inline-flex flex-row items-center justify-center gap-0.5 rounded-lg px-1 text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:min-w-[76px] sm:mr-2 sm:flex-col sm:gap-1 sm:px-2"
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
            <StatusIcon aria-hidden="true" className="w-4 h-4 text-emerald-400 sm:w-5 sm:h-5" />
          </motion.span>
        </AnimatePresence>
        <span aria-live="polite" className={`text-[10px] font-semibold ${copied ? "text-emerald-400" : "text-muted-foreground"}`}>
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
      className="portfolio-dark-stage py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative bg-surface overflow-hidden presentation-section"
    >
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/[0.025] blur-[110px] rounded-full pointer-events-none -z-10"
      />
      <div className="mx-auto max-w-6xl text-left">
        <Reveal delay={0.05} y={16} className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-muted-text/15 bg-white/[0.035] px-3.5 py-1.5 text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-6">
            <Sparkles aria-hidden="true" className="w-3.5 h-3.5 text-muted-foreground" />
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-signature-teal" />
            CONTACT & COLLABORATION
          </div>
        </Reveal>
        <Reveal delay={0.12} y={22}>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-tight max-w-4xl"
          >
            {CONTACT_DATA.headline}
          </h2>
          <EditorialDivider className="mt-6 max-w-xs" />
        </Reveal>
        <Reveal delay={0.18} y={22}>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            {CONTACT_DATA.subheadline}
          </p>
        </Reveal>
        <Reveal delay={0.14} y={18} className="mt-12 text-left">
          <section className="glass-card rounded-3xl p-5 sm:p-7 lg:p-8 border border-white/10 shadow-xl">
            <div className="mb-6 max-w-2xl">
              <h3 className="text-lg sm:text-xl font-bold text-foreground">
                {CONTACT_DATA.panelTitle}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {CONTACT_DATA.panelDescription}
              </p>
            </div>
            <StaggerContainer className="contact-primary-grid" staggerChildren={0.06}>
              {CONTACT_DATA.channels.filter((channel) => channel.iconName === "whatsapp" || channel.isDownload).map((channel) => (
                <StaggerItem key={channel.label}>
                  <ContactAction channel={channel} />
                </StaggerItem>
              ))}
            </StaggerContainer>
            <StaggerContainer className="contact-secondary-grid mt-3" staggerChildren={0.04}>
              {CONTACT_DATA.channels.filter((channel) => channel.iconName !== "whatsapp" && !channel.isDownload).map((channel) => (
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
          className="mt-8 border-t border-white/10 pt-8 text-center text-xs text-muted-foreground sm:text-sm"
        >
          <p className="font-sans text-muted-foreground">{CONTACT_DATA.footer}</p>
        </Reveal>
      </div>
    </section>
  );
}
