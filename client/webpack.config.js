const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

const JSConfig = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: ['macros'],
  },
}

const CSSConfig = {
  test: /\.css$/,
  exclude: /node_modules/,
  use: ['style-loader', 'css-loader', 'postcss-loader'],
}

const FileConfig = {
  test: /\.(png|svg|jpg|jpeg|gif)$/,
  loader: 'file-loader',
}

module.exports = (env, { mode }) => ({
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    filename: 'app.[hash].js',
    path: path.resolve(__dirname, './build'),
  },
  module: { rules: [JSConfig, CSSConfig, FileConfig] },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'JGL Phones',
      template: './public/index.html',
    }),
    new Dotenv(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
})
