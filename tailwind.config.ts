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
        "kertas-dingin": "#F1F4F2",
        "hijau-ledger": "#0D3B33",
        "kuning-stabilo": "#F2B705",
        "abu-hijau": "#52625E",
        "teal-tautan": "#1F7A68",
        "garis-embun": "#CBD5D1",
      },
      fontFamily: {
        display: ["var(--font-archivo)", "sans-serif"],
        body: ["var(--font-newsreader)", "serif"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
