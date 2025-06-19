// tailwind.config.js
module.exports = {
  darkMode: 'class', // 👈 Activa el modo oscuro por clase
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        skai: {
          green: "#76A62E",
          darkgreen: "#678C2E",
          lightgreen: "#8FA65D",
          yellow: "#D9A429",
          darkgray: "#4A4A4A",
          blue: "#4C8C99",
          lightgray: "#D9D9D9",
        },
      },
    },
  },
  plugins: [],
}
