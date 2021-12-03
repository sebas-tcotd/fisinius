module.exports = {
  mode: "jit",
  purge: {
    content: ["./src/**/*.{html,ts,scss}"],
  },
  darkMode: false, // or 'media' or 'class'
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
  plugins: [],
};
