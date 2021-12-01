module.exports = {
  mode: "jit",
  purge: {
    content: ["./src/**/*.{html,ts,scss}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: ["Playfair Display", "serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
