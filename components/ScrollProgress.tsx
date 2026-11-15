"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
        indicatorRef.current?.style.setProperty("--scroll-progress", `${Math.min(1, Math.max(0, progress))}`);
      });
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return <div ref={indicatorRef} aria-hidden="true" className="scroll-progress-indicator" data-testid="scroll-progress" />;
}
