import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080808",
        surface: {
          DEFAULT: "#101010",
          elevated: "#151515",
          subtle: "#1a1a1a",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          medium: "rgba(255, 255, 255, 0.14)",
          strong: "rgba(255, 255, 255, 0.22)",
        },
        brand: {
          red: "#ff2626",
          "red-dark": "#d90808",
          "red-soft": "rgba(255, 38, 38, 0.12)",
          green: "#00b67a",
        },
        text: {
          primary: "#f7f4ef",
          secondary: "#aaa6a0",
          muted: "#6f6b67",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-dm-serif)", "Georgia", "serif"],
        display: ["var(--font-syne)", "var(--font-dm-sans)", "sans-serif"],
      },
      animation: {
        "marquee-left": "marqueeLeft 35s linear infinite",
        "marquee-left-medium": "marqueeLeft 48s linear infinite",
        "marquee-left-slow": "marqueeLeft 75s linear infinite",
        "marquee-right": "marqueeRight 35s linear infinite",
        "marquee-right-medium": "marqueeRight 52s linear infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
        "fade-up": "fadeUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "ping-slow": "pingSlow 2.4s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        marqueeLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pingSlow: {
          "0%": { transform: "scale(1)", opacity: "0.55" },
          "75%, 100%": { transform: "scale(1.65)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
