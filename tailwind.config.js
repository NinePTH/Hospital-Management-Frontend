/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
      boxShadow: {
        'soft': '0px 4px 10px 0px rgba(44, 105, 117, 0.15)',
      }
    },
  },
  plugins: [],
};
