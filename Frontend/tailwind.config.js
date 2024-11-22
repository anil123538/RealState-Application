/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  important: true,
  theme: {
    extend: {
      colors: {
        blue: "#3f51b5",
        dark_blue: "#283593",
        gray: "#787676",
        lightPink: "#f4f4f4",
      },
    },
  },
  plugins: [],
};
