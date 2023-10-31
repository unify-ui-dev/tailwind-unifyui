/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
export default {
  content: ["./resources/**/*.html", "./index.html", "./assets/**/*.js"],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily:{
        'display':['Oswald', 'sans-serif']
      }
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('children', '&>*')
    })
  ],
}

