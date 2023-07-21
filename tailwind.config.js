/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
export default {
  content: ["./ressources/**/*.html", "./index.html", "./assets/**/*.js"],
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

