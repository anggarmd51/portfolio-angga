"use client";

import { motion } from "motion/react";

export default function EditorialDivider({ className = "" }: { className?: string }) {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.65 }}
      transition={{ duration: 0.62, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`editorial-divider ${className}`.trim()}
    />
  );
}
