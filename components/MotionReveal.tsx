"use client";
import type { MouseEventHandler, ReactNode } from "react";
import { motion, type Variants } from "motion/react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  amount?: number;
  onMouseMove?: MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: MouseEventHandler<HTMLDivElement>;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 22,
  duration = 0.55,
  amount = 0.15,
  onMouseMove,
  onMouseLeave,
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={`motion-reveal ${className}`.trim()}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
  amount?: number;
}

const containerVariants = (
  delayChildren: number,
  staggerChildren: number
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren,
      staggerChildren,
    },
  },
});

export function StaggerContainer({
  children,
  className = "",
  delayChildren = 0.04,
  staggerChildren = 0.08,
  amount = 0.15,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={containerVariants(delayChildren, staggerChildren)}
      className={`motion-reveal ${className}`.trim()}
    >
      {children}
    </motion.div>
  );
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
  return (
    <motion.div
      variants={itemVariants}
      className={`motion-reveal ${className}`.trim()}
    >
      {children}
    </motion.div>
  );
}
