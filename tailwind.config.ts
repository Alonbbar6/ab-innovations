import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#05070b",
        graphite: "#10141d",
        steel: "#8b95a7",
        electric: "#1677ff",
        cyanline: "#52e5ff",
        platinum: "#e7edf7"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(82, 229, 255, 0.18), 0 24px 80px rgba(22, 119, 255, 0.2)",
        panel: "0 20px 60px rgba(15, 23, 42, 0.12)"
      },
      backgroundImage: {
        "grid-dark":
          "linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px)",
        "grid-light":
          "linear-gradient(rgba(15,23,42,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,.08) 1px, transparent 1px)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" }
        },
        scan: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" }
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.25" },
          "50%": { opacity: "0.85" }
        }
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        scan: "scan 3.6s linear infinite",
        "pulse-line": "pulseLine 3s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
