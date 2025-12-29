import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#060A12",
          900: "#0B1220",
          850: "#0F1824",
          800: "#111D2E",
          700: "#162741",
        },
        cyanBrand: {
          50: "#E6FFFF",
          100: "#C8FFFF",
          200: "#8CFFFF",
          300: "#4BFFFF",
          400: "#1EF6F6",
          500: "#02EBEA", // logo cyan
          600: "#00B8B8",
          700: "#0A7B81",
          800: "#0B5B61",
          900: "#083E43",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Arial",
          "sans-serif",
        ],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(2,235,234,0.25), 0 12px 40px rgba(2,235,234,0.10)",
      },
    },
  },
  plugins: [typography],
};
