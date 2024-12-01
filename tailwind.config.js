/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        comic: ['"Comic Sans MS"', "cursive"],
        poppins: ["Poppins", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        primary: "#FFD700",
        secondary: "#FF69B4",
        accent: "#00BFFF",
        orangeCustome: "#ffa500",
      },
    },
  },
  plugins: [],
};
