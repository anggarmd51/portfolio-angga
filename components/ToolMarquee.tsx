"use client";
import Image from "next/image";

const TOOL_LOGOS = [
  { slug: "google", color: "4285F4", label: "Google" },
  { slug: "notion", color: "FFFFFF", label: "Notion" },
  { slug: "googlegemini", color: "8E75B2", label: "Gemini" },
  { slug: "claude", color: "D97757", label: "Claude" },
  { slug: "deepseek", color: "4D6BFE", label: "DeepSeek" },
  { slug: "hubspot", color: "FF7A59", label: "HubSpot" },
  { slug: "supabase", color: "3ECF8E", label: "Supabase" },
  { slug: "github", color: "FFFFFF", label: "GitHub" },
  { slug: "firebase", color: "FFCA28", label: "Firebase" },
  { slug: "netlify", color: "00C7B7", label: "Netlify" },
  { slug: "vercel", color: "FFFFFF", label: "Vercel" },
  { slug: "nextdotjs", color: "FFFFFF", label: "Next.js" },
  { slug: "tailwindcss", color: "06B6D4", label: "Tailwind CSS" },
  { slug: "react", color: "61DAFB", label: "React" },
] as const;

function LogoGroup({ decorative = false }: { decorative?: boolean }) {
  return (
    <div className="tool-marquee-group" role="list" aria-hidden={decorative}>
      {TOOL_LOGOS.map((logo) => (
        <div className="tool-marquee-item" key={logo.slug} role="listitem">
          <Image
            src={`https://cdn.simpleicons.org/${logo.slug}/${logo.color}`}
            alt={decorative ? "" : `${logo.label} logo`}
            width={36}
            height={36}
            unoptimized
            draggable={false}
            className="tool-marquee-logo"
          />
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
