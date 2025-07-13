/* tailwind.config.ts */
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      // In v4, most customization should be done in CSS with @theme
      // Keep config minimal and use CSS custom properties instead
      fontFamily: {
        'work-sans': ['var(--font-work-sans)'],
      },
    },
  },
  
  plugins: [animate, typography],
};

export default config;