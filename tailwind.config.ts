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
        obsidian: "#0A0F18",
        graphite: "#151D29",
        "slate-surface": "#202B39",
        "soft-white": "#F1F3F5",
        "muted-text": "#A6B0BD",
        "signature-teal": "#19C69A",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-manrope)", "sans-serif"],
        editorial: ["var(--font-instrument-serif)", "serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      borderRadius: {
        ui: "12px",
      },
    },
  },
  plugins: [],
};

export default config;
