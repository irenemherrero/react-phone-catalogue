const purgeCSS = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.js', './public/index.html'],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
})

module.exports = ({ env }) => {
  return {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
      //TODO:  doest't work!! - env undefined
      // ...(env === 'production' ? [purgeCSS] : [])
    ],
  }
}
