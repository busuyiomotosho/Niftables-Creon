import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        monument: ["Monument", "sans-serif"],
        "monument-light": ["Monument Light", "sans-serif"],
        "monument-black": ["Monument Black", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
        "satoshi-light": ["Satoshi Light", "sans-serif"],
        "satoshi-regular": ["Satoshi Regular", "sans-serif"],
        "satoshi-medium": ["Satoshi Medium", "sans-serif"],
        "satoshi-bold": ["Satoshi Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
