"use client";

import Image from "next/image";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const TOOL_LOGOS = [
  { slug: "hubspot", color: "FF7A59", label: "HubSpot" },
  { slug: "firebase", color: "FFCA28", label: "Firebase" },
  { slug: "supabase", color: "3ECF8E", label: "Supabase" },
  { slug: "vercel", color: "FFFFFF", label: "Vercel" },
  { slug: "nextdotjs", color: "FFFFFF", label: "Next.js" },
  { slug: "tailwindcss", color: "06B6D4", label: "Tailwind CSS" },
  { slug: "github", color: "FFFFFF", label: "GitHub" },
] as const;

function LogoGroup({ decorative = false }: { decorative?: boolean }) {
  return (
    <div className="tool-marquee-group" aria-hidden={decorative}>
      {TOOL_LOGOS.map((logo) => (
        <Image
          key={logo.slug}
          src={`https://cdn.simpleicons.org/${logo.slug}/${logo.color}`}
          alt={decorative ? "" : `${logo.label} logo`}
          width={40}
          height={40}
          unoptimized
          draggable={false}
          className="tool-marquee-logo"
        />
      ))}
    </div>
  );
}

export default function ToolMarquee() {
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  return (
    <div className="tool-marquee-shell" role="group" aria-label="Logo perangkat kerja dan teknologi">
      <div
        className="tool-marquee-track"
        data-reduced-motion={prefersReducedMotion ? "true" : "false"}
      >
        <LogoGroup />
        <LogoGroup decorative />
      </div>
    </div>
  );
}
