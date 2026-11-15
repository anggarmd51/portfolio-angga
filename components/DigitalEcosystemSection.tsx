"use client";

import { useRef, useState, type KeyboardEvent } from "react";
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
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeCategory = DIGITAL_ECOSYSTEM_CATEGORIES[activeIndex];

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
      tabRefs.current[nextIndex]?.focus();
    }
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
          <p className="mt-4 text-sm leading-7 text-muted-text sm:text-base">
            Perangkat kerja untuk riset prospek, pengelolaan akun, kolaborasi, dan pengembangan produk digital.
          </p>
        </header>

        <div className="digital-ecosystem-tabs" role="tablist" aria-label="Kategori ekosistem digital" aria-orientation="horizontal">
          {DIGITAL_ECOSYSTEM_CATEGORIES.map((category, index) => {
            const active = index === activeIndex;
            return (
              <button
                key={category.id}
                ref={(element) => {
                  tabRefs.current[index] = element;
                }}
                type="button"
                role="tab"
                id={`ecosystem-tab-${category.id}`}
                aria-selected={active}
                aria-controls="ecosystem-panel"
                tabIndex={active ? 0 : -1}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                className={`digital-ecosystem-tab ${active ? "is-active" : ""}`}
              >
                <span className="digital-ecosystem-tab-number">{category.number}</span>
                <span className="digital-ecosystem-tab-label">{category.label}</span>
              </button>
            );
          })}
        </div>

        {activeCategory ? (
          <div
            key={activeCategory.id}
            id="ecosystem-panel"
            role="tabpanel"
            aria-labelledby={`ecosystem-tab-${activeCategory.id}`}
            tabIndex={0}
            className="digital-ecosystem-panel focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signature-teal"
          >
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-signature-teal">
                  Kategori {activeCategory.number}
                </p>
                <h3 className="mt-2 font-heading text-xl font-semibold tracking-[-0.025em] text-soft-white sm:text-2xl">
                  {activeCategory.label}
                </h3>
              </div>
              <span className="text-xs text-muted-text">{activeCategory.items.length} tools</span>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {activeCategory.items.map((tool) => {
                const Icon = TOOL_ICONS[tool.icon];
                return (
                  <article key={tool.id} className="digital-tool-card" title={`${tool.name}: ${tool.description}`}>
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
          </div>
        ) : null}
      </div>
    </section>
  );
}
