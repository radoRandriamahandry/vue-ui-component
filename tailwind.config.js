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
        blogr: {
          "lighter-red": "hsl(13, 100%, 72%)",
          "light-red": "hsl(353, 100%, 62%)",
        },
      },

      flex: {
        5: 5,
      },

      gridTemplateRows: {
        "auto-1fr": "auto 1fr",
      },

      borderRadius: {
        blogr: "150px",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
      scale: ["group-hover"],
    },
  },
  plugins: [],
}
