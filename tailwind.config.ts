import type { Config } from "tailwindcss";
import { Montserrat } from "next/font/google";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      screens: {
        sm: "576px",
        // => @media (min-width: 576px)

        md: "960px",
        // => @media (min-width: 960px)

        lg: "1440px",
        // => @media (min-width: 1440px)
      },
      colors: {
        primary: "#F87060",
        secondary: "#3E8989",
        sidebar: "#E0E0E0",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
