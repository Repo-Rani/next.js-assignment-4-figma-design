import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        xsm: "425px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1440px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customPink: "var(--customPink)",
        customBlue: "var(--customBlue)",
        recentBackground: "var(--recentBackground)",
        footerBackground: "var(--footerBackground)",
      },
      fontFamily: {
        heebo: ["heebo", "serif", "sans-serif"],
        inter: ["inter", "serif", "sans-serif"],
      },
      boxShadow: {
        customShadow: "0px 4px 4px 0px #4141418A",
      },
    },
  },
  plugins: [],
};
export default config;
