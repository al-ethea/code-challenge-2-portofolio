import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#292F36",
        accent: "#79f2ce",
        secondary: "#1A1E23",
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
