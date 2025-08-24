import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "0rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["var(--poppins)", "sans-serif"],
        // poppins: ["Poppins", "sans-serif"],
        arabic: ["var(--arabic)", "sans-serif"],
        // arabic: ["Amiri", "sans-serif"],
        playfair: ["var(--playfair)", "serif"],
        // playfair: ["Playfair Display", "serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
