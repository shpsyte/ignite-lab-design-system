/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
    },
    colors: {
      black: "#000",
      white: "#fff",

      transparent: "transparent",

      gray: {
        900: "#121214",
        800: "#1f1f23",
        700: "#2d2d33",
        600: "#3a3a44",
        500: "#484853",
        400: "#565661",
        300: "#63636e",
        200: "#71717a",
        100: "#7f7f8b",
      },
      cyan: {
        900: "#0d7377",
        800: "#149188",
        700: "#1cb0a8",
        600: "#38d9a9",
        500: "#64ffc9",
        400: "#a7ffeb",
        300: "#e3fffd",
        200: "#f1fcfe",
        100: "#f8fdff",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
