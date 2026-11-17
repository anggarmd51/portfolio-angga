"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { NAVIGATION_SECTIONS } from "@/data/portfolio";

type Theme = "dark" | "light";

export default function SectionNavigation() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [theme, setTheme] = useState<Theme>("dark");
  const navScrollRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let storedTheme: Theme = "dark";
    try {
      storedTheme = window.localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark";
    } catch {
      storedTheme = "dark";
    }
    document.documentElement.dataset.theme = storedTheme;
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
    document.documentElement.classList.toggle("light", storedTheme === "light");
    const themeFrame = window.requestAnimationFrame(() => setTheme(storedTheme));

    let scheduledFrame = 0;
    const updateActiveSection = () => {
      window.cancelAnimationFrame(scheduledFrame);
      scheduledFrame = window.requestAnimationFrame(() => {
        let current: string = NAVIGATION_SECTIONS[0]?.id ?? "home";
        const activationLine = Math.max(90, window.innerHeight * 0.3);
        for (const section of NAVIGATION_SECTIONS) {
          const element = document.getElementById(section.id);
          if (element && element.getBoundingClientRect().top <= activationLine) current = section.id;
        }
        setActiveSection(current);
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.cancelAnimationFrame(themeFrame);
      window.cancelAnimationFrame(scheduledFrame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const nav = navScrollRef.current;
    const activeLink = nav?.querySelector<HTMLElement>(`[data-nav-id="${activeSection}"]`);
    if (!nav || !activeLink) return;
    if (nav.scrollWidth <= nav.clientWidth) return;
    const navBounds = nav.getBoundingClientRect();
    const linkBounds = activeLink.getBoundingClientRect();
    const targetLeft = Math.max(
      0,
      Math.min(nav.scrollWidth - nav.clientWidth, nav.scrollLeft + linkBounds.left - navBounds.left)
    );
    if (Math.abs(targetLeft - nav.scrollLeft) < 1) return;
    nav.scrollTo({ left: targetLeft, behavior: "smooth" });
  }, [activeSection]);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    document.documentElement.classList.toggle("light", nextTheme === "light");
    try {
      window.localStorage.setItem("portfolio-theme", nextTheme);
    } catch {
      // Theme remains active for this session even when storage is unavailable.
    }
    setTheme(nextTheme);
  };

  const ThemeIcon = theme === "dark" ? Sun : Moon;

  return (
    <header className="fixed left-1/2 top-5 z-50 w-max max-w-[calc(100vw-1.25rem)] -translate-x-1/2 will-change-transform">
      <div className="floating-capsule flex items-center gap-1 rounded-full p-1.5">
        <nav
          ref={navScrollRef}
          aria-label="Navigasi utama"
          className="floating-capsule-scroll flex min-w-0 items-center gap-0.5 overflow-x-auto rounded-full"
        >
          {NAVIGATION_SECTIONS.map((section) => {
            const active = activeSection === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                data-nav-id={section.id}
                aria-current={active ? "location" : undefined}
                className="relative inline-flex min-h-11 shrink-0 items-center justify-center rounded-full px-3 text-[11px] font-semibold tracking-[0.01em] transition-colors sm:px-3.5 sm:text-xs"
              >
                {active && (
                  <motion.span
                    layoutId="active-nav-indicator"
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full bg-signature-teal/15 ring-1 ring-inset ring-signature-teal/30"
                    transition={{ type: "spring", stiffness: 420, damping: 34, mass: 0.65 }}
                  />
                )}
                <span className={`relative z-10 whitespace-nowrap ${active ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                  {section.shortLabel}
                </span>
              </a>
            );
          })}
        </nav>
        <span aria-hidden="true" className="h-6 w-px shrink-0 bg-muted-text/20" />
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Aktifkan tema terang" : "Aktifkan tema gelap"}
          title={theme === "dark" ? "Tema terang" : "Tema gelap"}
          className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-full text-signature-teal transition-colors hover:bg-glass-tint"
        >
          <ThemeIcon aria-hidden="true" className="h-4 w-4" strokeWidth={1.9} />
        </button>
      </div>
    </header>
  );
}
