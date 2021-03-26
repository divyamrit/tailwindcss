const colors = require('tailwindcss/colors')
module.exports = {
  purge: [
    './public/HTML/index.html',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      rose:colors.rose,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}