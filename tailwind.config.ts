import { type Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { extractTailwindClasses } from "./src/utils/twExtract";

const pxToRem = (px: number) => `${px / 16}rem`;
const extractedClasses = extractTailwindClasses("./src");

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [...extractedClasses],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#FFF",
      neutral: {
        50: "#F7F8FD",
        100: "#F2F4FF",
        150: "#CFD7FF",
        200: "#CDD2EE",
        400: "#647196", // Same for #656EA3 because they are too close
        500: "#3A4374", // Same for #373F68" because they are too close
      },
      sky: {
        300: "#7AD8FB",
        400: "#62BCFA",
      },
      blue: {
        400: "#7C91F9",
        600: "#4661E6",
      },
      purple: {
        400: "#C75AF6",
        600: "#AD1FEA",
      },
      red: {
        200: "#E98888",
        600: "#D73737",
      },
      orange: {
        200: "#F49F85",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Jost", "sans-serif"],
      },
      fontSize: {
        mdsm: pxToRem(15),
        smxs: pxToRem(13),
      },
      borderRadius: {
        DEFAULT: pxToRem(10),
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("not-first", "&:not(:first-child)");
      addVariant("hocus", ["&:hover", "&:focus"]);
    }),
  ],
} satisfies Config;
