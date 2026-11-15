"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowDownRight, Download, MessageCircle } from "lucide-react";
import { CONTACT_DATA } from "@/data/portfolio";
import { RECRUITER_QA_ITEMS } from "@/data/recruiter-qa";

const whatsappHref = CONTACT_DATA.channels.find((channel) => channel.iconName === "whatsapp")?.href ?? "#contact";
const cvHref = CONTACT_DATA.channels.find((channel) => channel.isDownload)?.href ?? "/assets/CV_Angga.pdf";

export default function RecruiterQASection() {
  const [activeId, setActiveId] = useState<string>(RECRUITER_QA_ITEMS[0].id);
  const activeItem = RECRUITER_QA_ITEMS.find((item) => item.id === activeId) ?? RECRUITER_QA_ITEMS[0];

  return (
    <section aria-labelledby="recruiter-qa-heading" className="recruiter-qa mt-14 border-t border-white/10 pt-8 sm:mt-16 sm:pt-10">
      <div className="max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-signature-teal">
          Interactive Recruiter Q&amp;A
        </p>
        <h3 id="recruiter-qa-heading" className="mt-2 font-heading text-xl font-semibold tracking-[-0.025em] text-soft-white sm:text-2xl">
          Tanya Cepat Profil Angga
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted-text">
          Pilih pertanyaan untuk melihat jawaban singkat berbasis informasi faktual di portofolio ini.
        </p>
      </div>

      <div role="group" aria-label="Pertanyaan cepat untuk perekrut" className="mt-5 flex flex-wrap gap-2">
        {RECRUITER_QA_ITEMS.map((item) => {
          const selected = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setActiveId(item.id)}
              className={`min-h-[44px] rounded-full border px-4 py-2 text-left text-xs font-semibold leading-5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signature-teal focus-visible:ring-offset-2 focus-visible:ring-offset-graphite sm:text-sm ${
                selected
                  ? "border-signature-teal/55 bg-signature-teal/10 text-soft-white"
                  : "border-muted-text/20 bg-white/[0.025] text-muted-text hover:border-muted-text/40 hover:text-soft-white"
              }`}
            >
              {item.question}
            </button>
          );
        })}
      </div>

      <div className="recruiter-qa-panel mt-4 rounded-2xl border border-muted-text/15 bg-obsidian/55 p-5 sm:p-6" aria-live="polite" aria-atomic="true">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="recruiter-qa-answer"
          >
            <h4 className="font-heading text-base font-semibold text-soft-white sm:text-lg">{activeItem.heading}</h4>
            <p className="mt-2 text-sm leading-6 text-muted-text">{activeItem.summary}</p>
            <ul className="mt-4 space-y-2.5">
              {activeItem.facts.map((fact) => (
                <li key={fact} className="flex items-start gap-3 text-sm leading-6 text-soft-white/90">
                  <span aria-hidden="true" className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-signature-teal" />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>

            {activeItem.id === "b2b-sales-cycle" && (
              <a href="#methodology" className="mt-5 inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-signature-teal/35 px-4 py-2 text-sm font-semibold text-signature-teal transition-colors hover:bg-signature-teal/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signature-teal">
                Lihat Alur Penjualan
                <ArrowDownRight aria-hidden="true" className="h-4 w-4" />
              </a>
            )}

            {activeItem.id === "target-role" && (
              <div className="mt-5 flex flex-wrap gap-2">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-signature-teal px-4 py-2 text-sm font-semibold text-obsidian transition-colors hover:bg-[#35d7ad] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signature-teal focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian">
                  <MessageCircle aria-hidden="true" className="h-4 w-4" />
                  WhatsApp
                </a>
                <a href={cvHref} download="CV_Muhammad_Angga_Ramadhan.pdf" className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-muted-text/25 px-4 py-2 text-sm font-semibold text-soft-white transition-colors hover:border-signature-teal/50 hover:text-signature-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signature-teal">
                  <Download aria-hidden="true" className="h-4 w-4" />
                  Unduh CV
                </a>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
