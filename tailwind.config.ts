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
      },
      animation: {
        "marquee-left": "marqueeLeft 35s linear infinite",
        "marquee-left-slow": "marqueeLeft 75s linear infinite",
        "marquee-right": "marqueeRight 35s linear infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
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
      },
    },
  },
  plugins: [],
};

export default config;
