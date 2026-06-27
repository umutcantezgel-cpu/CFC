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
        "brand-red": "var(--color-brand-red)",
        "cream-bg": "var(--color-cream-bg)",
        "accent-yellow": "var(--color-accent-yellow)",
        "charcoal-dark": "var(--color-charcoal-dark)",
        "maroon-stroke": "var(--color-maroon-stroke)",
      },
      fontFamily: {
        display: ["var(--font-titan-one)", "sans-serif"],
        body: ["var(--font-nunito)", "sans-serif"],
      },
      borderWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [],
};
export default config;
