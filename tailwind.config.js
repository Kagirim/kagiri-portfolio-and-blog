/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      animation: {
        typewriter: "typewriter 2s steps(11) forwards",
        caret:
          "typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s",
      },
      keyframes: {
        typewriter: {
          to: { left: "100%" },
        },
      },
      blink: {
        "0%": { opacity: "0" },
        "0.1%": { opacity: "1" },
        "50%": { opacity: "1" },
        "50.1%": { opacity: "0" },
        "100%": { opacity: "0" },
      },
      fontFamily: {
        heading: ["Gloria Hallelujah"],
        body: ["Comforter Brush"],
      },
      colors: {
        darkBlue: "#005580",
        lightGold: "#F7E0D4",
        orange: "#FC600A",
        navyBlue: "#347B98",
        lightBlue: "#1489B8",
        darkBlue: "#092834",

        gray: {
          900: "#202225",
          800: "#2f3136",
          700: "#36393f",
          600: "#4f545c",
          400: "#d4d7dc",
          300: "#e3e5e8",
          200: "#ebedef",
          100: "#f2f3f5",
        },
      },
    },
  },
  plugins: [],
};
