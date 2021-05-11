module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#fc636b",
        },
        secondary: {
          1: "#1aafd0",
          2: "#3be8b0",
        },
        asana: {
          green: "#3be8b0",
          blue: "#1aafd0",
          purple: "#6a67ce",
          yellow: "#ffb900",
          red: "#fc636b",
        },
      },

      flex: {
        5: 5,
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [],
}
