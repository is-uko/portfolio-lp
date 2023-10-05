import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    keyframes: {
      mainvisual: {
        "0%": {
          "opacity": "0",
        },
        "10%": {
          "opacity": "1",
        },
        "90%": {
          "opacity": "1",
        },
        "100%": {
          "opacity": "0",
        }
      },
      bg: {
        "0%": {
          "background-position": "0 0",
        },
        "100%": {
          "background-position": "-700px 700px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
