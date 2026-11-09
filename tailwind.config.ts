import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Semantic Financial-Editorial Palette
        "paper-base": "#F7F9F8",
        "paper-surface": "#FFFFFF",
        "paper-subtle": "#EDF1EF",
        "paper-border": "#D5DED9",
        "paper-muted": "#52635F",

        "navy-deep": "#081B26",
        "navy-surface": "#0C2331",
        "navy-border": "#1A384D",
        "navy-text": "#E2ECF2",
        "navy-muted": "#8BA2B2",

        // Restrained amber accents
        "amber-gold": "#D99B26",
        "amber-accent": "#F5B027",
        // Semantic high-contrast amber for light paper (passes WCAG AA: 5.91:1 on white, 5.59:1 on #F7F9F8)
        "amber-ink": "#8A5A10",

        "ink-primary": "#0A1B24",
        "ink-secondary": "#41535E",
        "ink-faint": "#7E929E",
      },
      fontFamily: {
        serif: ["var(--font-newsreader)", "serif"],
        sans: ["var(--font-archivo)", "sans-serif"],
        heading: ["var(--font-newsreader)", "serif"],
        body: ["var(--font-archivo)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
