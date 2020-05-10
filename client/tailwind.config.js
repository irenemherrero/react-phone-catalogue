const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  theme: {
    colors: {
      ...colors,
      primary: '#4a5568',
      secondary: '#077a64',
    },
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '98': '26rem',
      },
    },
  },
  variants: {},
  plugins: [],
}
