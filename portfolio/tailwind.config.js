// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customColor: {
          orange: "#FD6F00",
          DEFAULT: "#1A1A1A",
          dark: "#1E1E1E",
        },
        anotherCustomColor: "#FF5733",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["hover", "focus"],
      textColor: ["hover", "focus"],
    },
  },
  plugins: [],
};
