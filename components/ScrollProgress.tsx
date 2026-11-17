"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame: number | null = null;
    const updateProgress = () => {
      frame = null;
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
      indicatorRef.current?.style.setProperty("--scroll-progress", `${Math.min(1, Math.max(0, progress))}`);
    };
    const scheduleProgressUpdate = () => {
      if (frame === null) frame = window.requestAnimationFrame(updateProgress);
    };

    scheduleProgressUpdate();
    window.addEventListener("scroll", scheduleProgressUpdate, { passive: true });
    window.addEventListener("resize", scheduleProgressUpdate, { passive: true });
    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleProgressUpdate);
      window.removeEventListener("resize", scheduleProgressUpdate);
    };
  }, []);

  return <div ref={indicatorRef} aria-hidden="true" className="scroll-progress-indicator" data-testid="scroll-progress" />;
}
