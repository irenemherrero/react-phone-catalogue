module.exports = () => {
  return {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
      //TODO:  only in prod
      require('@fullhuman/postcss-purgecss')({
        content: ['./src/**/*.js', './public/index.html'],
        defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      }),
    ],
  }
}
