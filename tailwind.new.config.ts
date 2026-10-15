import type { Config } from "tailwindcss";

// Tailwind config for the Google Ads landing pages in src/app/(new).
// Used only by the Tailwind CLI to compile src/app/(new)/lp.source.css into lp.css, so the old site's
// tailwind.config.ts and globals.css are untouched.
const config: Config = {
  content: [
    // [(]new[)] matches the "(new)" route group; escaped parentheses do not match in fast-glob.
    "./src/app/[(]new[)]/**/*.{ts,tsx}",
    "./src/components/new/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#FFDC39",
        "on-brand": "#14212A",
        ink: "#14212A",
        surface: "#FFFFFF",
        elevated: "#F2F2F2",
        text: "#202020",
        muted: "#5F5F5F",
        line: "rgba(20, 33, 42, 0.12)",
      },
      fontFamily: {
        head: ["var(--font-head)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "8px",
        btn: "10px",
      },
      boxShadow: {
        soft: "0 4px 10px rgba(0, 0, 0, 0.06)",
      },
      spacing: {
        13: "52px",
      },
      maxWidth: {
        page: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
