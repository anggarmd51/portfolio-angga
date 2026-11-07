import React from "react";
import {
  ArrowUpRight,
  Briefcase,
  Mail,
  MapPin,
  MessageSquare,
  Users,
} from "lucide-react";
import { contact } from "@/lib/content";

export default function ContactFooter() {
  return (
    <footer
      id="kontak"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 w-full bg-hijau-ledger text-kertas-dingin py-16 sm:py-24 border-t border-garis-embun"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-10">
        {/* Top Executive Header */}
        <div className="max-w-[68ch]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-kuning-stabilo/40 bg-kuning-stabilo/10">
            <span
              className="w-2 h-2 rounded-full bg-kuning-stabilo shrink-0"
              aria-hidden="true"
            />
            <span className="font-display text-xs font-bold uppercase tracking-wider text-kuning-stabilo">
              {contact.eyebrow}
            </span>
          </div>

          <h2
            id="contact-heading"
            className="mt-4 font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-kertas-dingin leading-[1.15] text-balance"
          >
            {contact.heading}
          </h2>

          <p className="mt-4 font-body text-base sm:text-lg leading-[1.7] text-kertas-dingin/85">
            {contact.sub}
          </p>
        </div>

        {/* Dual-Conversion Path Bento Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Path 1 (7 Cols): For HRD, Recruiters & VP of Sales */}
          <div className="lg:col-span-7 rounded-xl border-2 border-kuning-stabilo/75 bg-[#092923] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 font-display text-xs font-extrabold px-2.5 py-1 rounded bg-kuning-stabilo text-hijau-ledger">
                  <Briefcase className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{contact.recruiterCard.badge}</span>
                </span>
                <span className="font-display text-xs font-semibold text-kertas-dingin/75">
                  Respon Cepat &lt; 24 Jam
                </span>
              </div>

              <h3 className="mt-4 font-display text-xl sm:text-2xl font-extrabold text-kertas-dingin">
                {contact.recruiterCard.title}
              </h3>
              <p className="mt-2 font-body text-base leading-[1.7] text-kertas-dingin/85">
                {contact.recruiterCard.desc}
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-kertas-dingin/15 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center justify-center gap-2 h-12 px-5 rounded-lg bg-kuning-stabilo text-hijau-ledger font-display font-extrabold text-xs sm:text-sm hover:brightness-105 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kuning-stabilo"
              >
                <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{contact.email}</span>
              </a>

              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 px-5 rounded-lg border border-kertas-dingin/35 bg-white/10 text-kertas-dingin font-display font-bold text-xs sm:text-sm hover:bg-white/15 transition-all tabular-nums focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kuning-stabilo"
              >
                <MessageSquare
                  className="w-4 h-4 text-kuning-stabilo shrink-0"
                  aria-hidden="true"
                />
                <span>WhatsApp ({contact.whatsappText})</span>
              </a>
            </div>
          </div>

          {/* Path 2 (5 Cols): For B2B Partnerships & Professional Network */}
          <div className="lg:col-span-5 rounded-xl border border-kertas-dingin/20 bg-white/[0.05] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 font-display text-xs font-bold px-2.5 py-1 rounded bg-white/10 text-kuning-stabilo border border-kertas-dingin/15">
                <Users className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{contact.partnerCard.badge}</span>
              </span>

              <h3 className="mt-4 font-display text-xl sm:text-2xl font-extrabold text-kertas-dingin">
                {contact.partnerCard.title}
              </h3>
              <p className="mt-2 font-body text-base leading-[1.7] text-kertas-dingin/85">
                {contact.partnerCard.desc}
              </p>
            </div>

            <div className="mt-6 space-y-3">
              {contact.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 rounded-lg border border-kertas-dingin/15 bg-[#092923]/70 p-3.5 hover:border-kuning-stabilo/60 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kuning-stabilo"
                >
                  <div className="min-w-0">
                    <p className="font-display text-sm font-extrabold text-kertas-dingin group-hover:text-kuning-stabilo transition-colors">
                      {link.label} ·{" "}
                      <span className="font-semibold text-kertas-dingin/80">
                        {link.text}
                      </span>
                    </p>
                    <p className="font-body text-xs text-kertas-dingin/70 truncate mt-0.5">
                      {link.desc}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="w-4 h-4 text-kuning-stabilo shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Executive Status & Copyright Bar */}
        <div className="mt-14 pt-6 border-t border-kertas-dingin/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-display text-xs font-semibold text-kertas-dingin/85">
            <MapPin className="w-4 h-4 text-kuning-stabilo shrink-0" aria-hidden="true" />
            <span>{contact.location} · Tersedia untuk On-Site, Hybrid &amp; Remote</span>
          </div>

          <p className="font-display text-xs text-kertas-dingin/75 tabular-nums">
            {contact.footer}
          </p>
        </div>
      </div>
    </footer>
  );
}
