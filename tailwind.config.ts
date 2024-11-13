import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        ms: "393px",
        sm: "375px",
        xsm: "425px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1440px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foregroundText)",
        links: "var(--links)",
        hoverLinks: "var(--hoverLinks)",
        mainHeadingsColor: "var(--mainHeadingsColor)",
        lowerHeadingsColour: "var(--lowerHeadingsColour)",
        buttons: "var(--buttons)",
      },
      fontFamily: {
        // heebo: ["heebo", "serif", "sans-serif"],
        inter: ["inter", "sans-serif"],
      },
      // boxShadow: {
      //   customShadow: "0 4px 4px 0 #4141418a",
      // },
    },
  },
  plugins: [],
};

export default config;
