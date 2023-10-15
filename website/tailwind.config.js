/** @type {import("tailwindcss").Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "ivory": "#F4F9FF",
      "chalk": "#F1EFF4",
      "magenta": "#B40056",
      "charcoal": "#1F1F1F",
      "grey": "#525252",
      "orchid": "#8F5BD4",
    },
    fontFamily: {
      "luimp": ["Luimp","serif"],
    },
    screens: {
      "small":{
        "max":"800px"
      },
      "large":{
        "min":"800px"
      }
    },
  },
  plugins: [],
}
