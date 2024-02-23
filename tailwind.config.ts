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
        blue: "#1D3461",
        lightGreen: "#007E66",
        green: "#007366",
        yellow: "#FFB20C",
     }
    },
  },
  plugins: [],
};
export default config;
