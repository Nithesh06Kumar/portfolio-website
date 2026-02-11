/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        color: {
          1: "#8e11d6",
          2: "#80e2ed",
          3: "#dacdf7",
          4: "#454440",
          5: "#c99504",
          6: "#FF98E2",
          7: "#fcfbf2",
        },
        stroke: {
          1: "#26242C",
        },
        themecolor: {
          white: "#FFFFFF",
          black: "#000000",
          sky: "#80e2ed",
          skydark: "#0f6273",
          darkgray: "#535756",
          gold: "#ffbf00",
        },
        n: {
          1: "#FFFFFF",
          2: "#CAC6DD",
          3: "#ADA8C3",
          4: "#757185",
          5: "#3F3A52",
          6: "#252134",
          7: "#15131D",
          8: "#0E0C15",
          9: "#474060",
          10: "#43435C",
          11: "#1B1B2E",
          12: "#2E2A41",
          13: "#6C7275",
        },
      },
    },
  },
  plugins: [],
};
