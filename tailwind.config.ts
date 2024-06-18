import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        "inter-regular": ['"InterRegular"', "Arial", "sans-serif"],
        "inter-medium": ['"InterMedium"', "Arial", "sans-serif"],
        "inter-bold": ['"InterBold"', "Arial", "sans-serif"],
      },
      boxShadow: {
        "shade-100": "0px 2px 4px rgba(171, 190, 209, 0.6)",
        "shade-200": "0px 4px 8px rgba(171, 190, 209, 0.4)",
        "shade-300": "0px 6px 12px rgba(171, 190, 209, 0.3)",
        "shade-400": "0px 8px 16px rgba(171, 190, 209, 0.4)",
        "shade-500": "0px 16px 32px rgba(171, 190, 209, 0.3)",
      },
      colors: {
        primary: {
          DEFAULT: "#28CB8B",
          "shade-100": "#43A046",
          "tint-100": "#66BB69",
          "shade-200": "#388E3B",
          "tint-200": "#81C784",
          "shade-300": "#237D31",
          "tint-300": "#A5D6A7",
          "shade-400": "#1B5E1F",
          "tint-400": "#C8E6C9",
          "shade-500": "#103E13",
          "tint-500": "#E8F5E9",
        },
        neutral: {
          silver: "#F5F7FA",
          black: "#263238",
          white: "#FFFFFF",
          gray: "#717171",
          "gray-dark": "#4D4D4D",
          "gray-light": "#89939E",
          "gray-blue": "#ABBED1",
        },
        secondary: "#263238",
        info: "#2194f3",
        warning: "#FBC02D",
        error: "#E53835",
        success: "#2E7D31",
      },
    },
  },
  plugins: [],
};
export default config;
