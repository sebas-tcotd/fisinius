module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{html,ts,scss}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: ["Playfair Display", "serif"],
      sansSerif: ["Bitter", "serif"],
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["responsive", "active"],
      flexDirection: ["responsive", "first"],
      gridColumnStart: ["responsive", "first"],
      gridColumnEnd: ["responsive", "first"],
      height: ["responsive", "first"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
