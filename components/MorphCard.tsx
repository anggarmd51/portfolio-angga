"use client";

import Image from "next/image";
import { CareerRole } from "@/data/portfolio";
import { motion } from "motion/react";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { ArrowUpRight } from "lucide-react";

interface MorphCardProps {
  role: CareerRole;
  index: number;
  isSelected: boolean;
  onSelect: () => void;
}

export default function MorphCard({
  role,
  index,
  isSelected,
  onSelect,
}: MorphCardProps) {
  const shouldReduceMotion = usePrefersReducedMotion();

  return (
    <motion.button
      type="button"
      layoutId={shouldReduceMotion ? undefined : `career-card-${role.id}`}
      onClick={onSelect}
      aria-haspopup="dialog"
      aria-expanded={isSelected}
      aria-label={`Lihat rincian posisi ${role.role} di ${role.company}`}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 30,
      }}
      className={`glass-card p-6 rounded-2xl flex flex-col justify-between cursor-pointer border hover:border-emerald-500/40 hover:bg-white/[0.08] transition-colors shadow-lg group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 text-left relative overflow-hidden w-full ${
        isSelected
          ? "opacity-20 border-emerald-500/30"
          : "border-white/10"
      }`}
    >
      <div>
        {/* Top bar: Company logo & sequence index */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <motion.div
            layoutId={shouldReduceMotion ? undefined : `career-logo-${role.id}`}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="relative w-14 h-14 rounded-xl bg-white p-1.5 flex items-center justify-center shrink-0 shadow-sm border border-slate-200 overflow-hidden"
          >
            <Image
              src={role.logo}
              alt={role.logoAlt}
              fill
              sizes="56px"
              className="object-contain p-1"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
              0{index + 1}
            </span>
            <div className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 text-slate-400 flex items-center justify-center transition">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Company & Role */}
        <motion.h3
          layoutId={shouldReduceMotion ? undefined : `career-company-${role.id}`}
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
          className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-2"
        >
          {role.company}
        </motion.h3>
        <motion.p
          layoutId={shouldReduceMotion ? undefined : `career-role-${role.id}`}
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
          className="text-sm font-semibold text-emerald-400 mt-1"
        >
          {role.role}
        </motion.p>
      </div>

      {/* Period & Snippet */}
      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
        <span className="font-medium text-slate-300">{role.period}</span>
        <span className="text-emerald-400/90 font-medium group-hover:underline">
          Detail Eksekutif →
        </span>
      </div>
    </motion.button>
  );
}
