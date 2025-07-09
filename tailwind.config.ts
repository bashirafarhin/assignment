import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
        hover: "var(--color-hover)",
        surface: "var(--color-surface)",
      },
      scrollbar: {
        thin: true,
      },
    },
  },
  plugins: [],
};

export default config;