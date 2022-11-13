/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "purple": "#574AE8",
      "gradient-default-dark": "#574AE8",
      "gradient-default-light": "#3EA1DB",
      "white": "#FFFFFF",
      "white-200": "#F3F5F7",
      "gray": "#717171",
      "gray-dark": "#1A202C",
    },
    fontFamily: {
      "inter": ["Inter", "sans-serif"],
      "lexend-deca": ["Lexend Deca", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
