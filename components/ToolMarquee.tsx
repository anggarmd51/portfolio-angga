"use client";

import Image from "next/image";
import { useState } from "react";

type ToolLogo = {
  slug?: string;
  color?: string;
  label: string;
  src?: string;
  fallbackSrc?: string;
  simpleIconsVersion?: string;
};

const TOOL_LOGOS: ToolLogo[] = [
  { slug: "google", color: "4285F4", label: "Google" },
  { slug: "notion", color: "FFFFFF", label: "Notion" },
  { slug: "googlegemini", color: "8E75B2", label: "Gemini" },
  { slug: "claude", color: "D97757", label: "Claude" },
  { slug: "deepseek", color: "4D6BFE", label: "DeepSeek" },
  { slug: "hubspot", color: "FF7A59", label: "HubSpot" },
  { slug: "linkedin", color: "0A66C2", label: "LinkedIn", simpleIconsVersion: "13.21.0", fallbackSrc: "/assets/tools/linkedin.svg" },
  { slug: "visualstudiocode", color: "007ACC", label: "Visual Studio Code", src: "/assets/tools/visualstudiocode.svg" },
  { src: "/assets/tools/apollo.png", label: "Apollo.io" },
  { src: "/assets/tools/chatgpt.svg", label: "ChatGPT" },
  { src: "/assets/tools/manus.svg", label: "Manus" },
  { src: "/assets/tools/antigravity.svg", label: "Antigravity" },
  { slug: "supabase", color: "3ECF8E", label: "Supabase" },
  { slug: "github", color: "FFFFFF", label: "GitHub" },
  { slug: "firebase", color: "FFCA28", label: "Firebase" },
  { slug: "netlify", color: "00C7B7", label: "Netlify" },
  { slug: "vercel", color: "FFFFFF", label: "Vercel" },
  { slug: "nextdotjs", color: "FFFFFF", label: "Next.js" },
  { slug: "tailwindcss", color: "06B6D4", label: "Tailwind CSS" },
  { slug: "react", color: "61DAFB", label: "React" },
];

function ToolLogoImage({
  logo,
  decorative,
}: {
  logo: ToolLogo;
  decorative: boolean;
}) {
  const [usingFallback, setUsingFallback] = useState(false);
  const simpleIconsUrl = logo.slug
    ? logo.simpleIconsVersion
      ? `https://cdn.jsdelivr.net/npm/simple-icons@${logo.simpleIconsVersion}/icons/${logo.slug}.svg`
      : `https://cdn.simpleicons.org/${logo.slug}/${logo.color}`
    : undefined;
  const src = logo.src ?? (usingFallback && logo.fallbackSrc ? logo.fallbackSrc : simpleIconsUrl);

  if (!src) return null;

  return (
    <Image
      src={src}
      alt={decorative ? "" : `${logo.label} logo`}
      width={36}
      height={36}
      unoptimized
      draggable={false}
      className="tool-marquee-logo"
      onError={() => {
        if (!usingFallback && logo.fallbackSrc) setUsingFallback(true);
      }}
    />
  );
}

function LogoGroup({ decorative = false }: { decorative?: boolean }) {
  return (
    <div className="tool-marquee-group" role="list" aria-hidden={decorative}>
      {TOOL_LOGOS.map((logo) => (
        <div className="tool-marquee-item" key={logo.slug ?? logo.src ?? logo.label} role="listitem">
          <ToolLogoImage logo={logo} decorative={decorative} />
          <span>{logo.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function ToolMarquee() {
  return (
    <div
      className="tool-marquee-shell"
      role="group"
      aria-label="Logo perangkat kerja dan teknologi"
      data-testid="tool-marquee"
    >
      <div className="tool-marquee-track" data-testid="tool-marquee-track">
        <LogoGroup />
        <LogoGroup decorative />
      </div>
    </div>
  );
}
