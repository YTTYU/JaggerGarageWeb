import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        graphite: "#101214",
        carbon: "#050607",
        ember: "#8da0b8",
        ice: "#dce7ed",
        steel: "#7f9aa3",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "sans-serif"],
      },
      boxShadow: {
        glass: "0 28px 80px rgba(0, 0, 0, 0.42)",
        ember: "0 18px 55px rgba(141, 160, 184, 0.28)",
      },
    },
  },
  plugins: [],
};

export default config;
