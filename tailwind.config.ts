import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        neon: {
          cyan: "#00F0FF",
          purple: "#BF00FF",
          green: "#00FF9D",
          yellow: "#FFD600",
          red: "#FF0055",
        },
        cyber: {
          dark: "#050A14",
          darker: "#020408",
          card: "rgba(255, 255, 255, 0.03)",
          "card-hover": "rgba(255, 255, 255, 0.08)",
          border: "rgba(255, 255, 255, 0.08)",
          text: "#E0E6ED",
          muted: "#94A3B8",
        },
      },
      fontFamily: {
        orbitron: ["var(--font-orbitron)", "Orbitron", "sans-serif"],
        exo: ["var(--font-exo)", "Exo 2", "sans-serif"],
      },
      boxShadow: {
        "neon-cyan": "0 0 20px rgba(0, 240, 255, 0.35)",
        "neon-purple": "0 0 20px rgba(191, 0, 255, 0.35)",
        "neon-green": "0 0 20px rgba(0, 255, 157, 0.35)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
    },
  },
  plugins: [],
};
export default config;
