"use client";

import type { PointerEvent } from "react";
import { motion, useMotionValue, useSpring, type HTMLMotionProps } from "motion/react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const POINTER_EFFECT_QUERY =
  "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";
const MAX_OFFSET = 5;

function useMagneticMotion() {
  const enabled = useMediaQuery(POINTER_EFFECT_QUERY);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 280, damping: 24, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 280, damping: 24, mass: 0.35 });

  const move = (event: PointerEvent<HTMLElement>) => {
    if (!enabled || event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return;
    const localX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const localY = (event.clientY - bounds.top) / bounds.height - 0.5;
    x.set(Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, localX * MAX_OFFSET * 2)));
    y.set(Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, localY * MAX_OFFSET * 2)));
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return {
    style: { x: springX, y: springY },
    onPointerMove: enabled ? move : undefined,
    onPointerLeave: enabled ? reset : undefined,
  };
}

type MagneticAnchorProps = HTMLMotionProps<"a">;

export function MagneticAnchor({ style, ...props }: MagneticAnchorProps) {
  const magnetic = useMagneticMotion();
  return (
    <motion.a
      {...props}
      style={{ ...style, ...magnetic.style }}
      onPointerMove={magnetic.onPointerMove}
      onPointerLeave={magnetic.onPointerLeave}
    />
  );
}

type MagneticButtonProps = HTMLMotionProps<"button">;

export function MagneticButton({ style, ...props }: MagneticButtonProps) {
  const magnetic = useMagneticMotion();
  return (
    <motion.button
      {...props}
      style={{ ...style, ...magnetic.style }}
      onPointerMove={magnetic.onPointerMove}
      onPointerLeave={magnetic.onPointerLeave}
    />
  );
}
