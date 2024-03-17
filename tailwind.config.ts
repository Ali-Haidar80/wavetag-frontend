import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      primary: {
        50: "#396AFF",
        100: "#1814F3",
        200: "#08347c",
      },
      secondary: {
        40:"#BABABA",
        50: "#D0D0D0",
        70: "#DFEAF2",
        80: "#A1A1A1",
        90: "#F7F7F7",
        100: "#EBEBEB",
        150: "#F2F2F2",
        200: "#828282",
        250: "#454545",
        300: "#545454",
        400: "#718EBF",
        500: "#343C6A",
        600: "#6F74DD",
        650: "#F5F7FA",
      },
      success: {
        100: "#27AE60",
      },
      danger: {
        50:  "#FB7272",
        100: "#FA00FF",
        200: "#FE5C73",
      },
      warning: {
        100: "#FCAA0B",
      },
      info: {
        100: "#16DBCC",
      },
      light: {
        100: "#ffff",
      },
      dark: {
        50: "#1E1E20",
        70: "#333333",
        80: "#292929",
        90: "#232323",
        100: "#131313",
        900: "#000",
      },
      transparent: "rgba(255,255,255,0)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
