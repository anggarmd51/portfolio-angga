"use client";

import { useEffect, useRef, type RefObject } from "react";

type ScrollPathRef = RefObject<SVGPathElement | null>;

/**
 * Drives an SVG path from 0 to 1 while its owning section crosses the viewport.
 * DOM writes are batched to one requestAnimationFrame and never update React state.
 */
export function useScrollLinkedProgress<T extends HTMLElement>(
  pathRef: ScrollPathRef
): RefObject<T | null> {
  const sectionRef = useRef<T | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const path = pathRef.current;
    if (!section || !path) return;

    let frame: number | null = null;
    const update = () => {
      frame = null;
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const progress = Math.min(
        1,
        Math.max(0, (viewportHeight - rect.top) / (viewportHeight + rect.height))
      );
      path.style.strokeDashoffset = String(1 - progress);
    };
    const scheduleUpdate = () => {
      if (frame === null) frame = window.requestAnimationFrame(update);
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });

    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [pathRef]);

  return sectionRef;
}
