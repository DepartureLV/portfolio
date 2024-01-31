/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ef3c20",
        secondary: "#7e9272",
        "ps-black": "#262626",
        "ps-canvas": "#ebe0cd",
      },
      // backgroundImage: {
      //   herobackground: "url('../src/src/hero.jpg')",
      // },
      fontFamily: {
        sans: ["poppins", "arial", "sans-serif"],
        jp: [
          "Noto Sans Japanese",
          "Noto-Serif-Japanese",
          "arial",
          "sans-serif",
        ],
        en: ["Josefin Sans", "arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
