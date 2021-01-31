const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('https://source.unsplash.com/random/1')",
       })
    },
    colors: {
      gray: colors.trueGray,
      red: colors.red,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
