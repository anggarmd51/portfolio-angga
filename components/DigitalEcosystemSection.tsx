"use client";

import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import {
  Atom,
  Bot,
  Briefcase,
  Code2,
  Database,
  Flame,
  Github,
  Layers,
  Linkedin,
  Mail,
  MessageSquare,
  PanelsTopLeft,
  Search,
  Sparkles,
  Triangle,
  Wind,
  type LucideIcon,
} from "lucide-react";
import { DIGITAL_ECOSYSTEM_CATEGORIES } from "@/data/portfolio";
import EditorialDivider from "./EditorialDivider";

const TOOL_ICONS: Record<string, LucideIcon> = {
  briefcase: Briefcase,
  linkedin: Linkedin,
  search: Search,
  mail: Mail,
  sparkles: Sparkles,
  message: MessageSquare,
  bot: Bot,
  panels: PanelsTopLeft,
  github: Github,
  flame: Flame,
  database: Database,
  triangle: Triangle,
  layers: Layers,
  atom: Atom,
  wind: Wind,
  code: Code2,
};

export default function DigitalEcosystemSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const categoryRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const spotlightIndex = hoveredIndex ?? activeIndex;

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
    let nextIndex: number | undefined;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (currentIndex + 1) % DIGITAL_ECOSYSTEM_CATEGORIES.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (currentIndex - 1 + DIGITAL_ECOSYSTEM_CATEGORIES.length) % DIGITAL_ECOSYSTEM_CATEGORIES.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = DIGITAL_ECOSYSTEM_CATEGORIES.length - 1;
    }

    if (nextIndex !== undefined) {
      event.preventDefault();
      setActiveIndex(nextIndex);
      categoryRefs.current[nextIndex]?.focus();
    }
  };

  const highlightOnPointer = (event: PointerEvent<HTMLButtonElement>, index: number) => {
    if (event.pointerType !== "mouse") return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setHoveredIndex(index);
  };

  return (
    <section
      id="ecosystem"
      aria-labelledby="ecosystem-heading"
      className="presentation-section border-t border-white/[0.08] bg-graphite px-5 py-20 sm:px-8 md:py-28 lg:px-10"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <header className="mb-10 max-w-3xl md:mb-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-text">
            Digital Ecosystem
          </p>
          <h2
            id="ecosystem-heading"
            className="font-heading text-3xl font-semibold tracking-[-0.04em] text-soft-white sm:text-4xl md:text-5xl"
          >
            Tools &amp; Tech
          </h2>
          <EditorialDivider className="mt-5 max-w-xs" />
          <p className="mt-4 text-sm leading-7 text-muted-text sm:text-base">
            Perangkat kerja untuk riset prospek, pengelolaan akun, kolaborasi, dan pengembangan produk digital.
          </p>
        </header>

        <div className="mb-7 flex flex-wrap gap-2" role="group" aria-label="Sorot kategori tools">
          {DIGITAL_ECOSYSTEM_CATEGORIES.map((category, index) => (
            <button
              key={category.id}
              ref={(element) => { categoryRefs.current[index] = element; }}
              type="button"
              aria-pressed={activeIndex === index}
              onClick={() => setActiveIndex((current) => current === index ? null : index)}
              onPointerEnter={(event) => highlightOnPointer(event, index)}
              onPointerLeave={(event) => { if (event.pointerType === "mouse") setHoveredIndex(null); }}
              onFocus={() => setHoveredIndex(index)}
              onBlur={() => setHoveredIndex(null)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={`min-h-[44px] rounded-full border px-4 py-2 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signature-teal ${activeIndex === index || hoveredIndex === index ? "border-signature-teal/60 bg-signature-teal/10 text-soft-white" : "border-muted-text/20 bg-glass-tint text-muted-text hover:text-soft-white"}`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-12">
          {DIGITAL_ECOSYSTEM_CATEGORIES.map((category, categoryIndex) => {
            const isSpotlit = spotlightIndex === categoryIndex;
            const isDimmed = spotlightIndex !== null && !isSpotlit;
            return (
              <section
                key={category.id}
                aria-label={category.label}
                className={`digital-category-panel md:col-span-1 xl:col-span-4 ${isSpotlit ? "is-spotlit" : ""} ${isDimmed ? "is-dimmed" : ""}`}
              >
                <header className="mb-5 flex items-end justify-between gap-3 border-b border-muted-text/15 pb-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-signature-teal">
                      Kategori {category.number}
                    </p>
                    <h3 className="mt-2 font-heading text-lg font-semibold tracking-[-0.025em] text-soft-white sm:text-xl">
                      {category.label}
                    </h3>
                  </div>
                  <span className="shrink-0 rounded-full border border-muted-text/15 px-2.5 py-1 text-[11px] text-muted-text">
                    {category.items.length} tools
                  </span>
                </header>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {category.items.map((tool) => {
                    const Icon = TOOL_ICONS[tool.icon];
                    return (
                      <article
                        key={tool.id}
                        className={`digital-tool-card ${isSpotlit ? "is-spotlit" : ""} ${isDimmed ? "is-dimmed" : ""}`}
                        title={`${tool.name}: ${tool.description}`}
                      >
                        <span aria-hidden="true" className="digital-tool-icon">
                          <Icon className="h-5 w-5" strokeWidth={1.8} />
                        </span>
                        <div className="min-w-0">
                          <h4 className="text-sm font-semibold leading-5 text-soft-white">{tool.name}</h4>
                          <p className="mt-1.5 text-xs leading-5 text-muted-text">{tool.description}</p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
