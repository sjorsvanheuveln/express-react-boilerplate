const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

// set environment
let mode = 'development';
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

console.log(`Mode = ${mode}.`);

module.exports = {
  mode,

  context: resolve(__dirname, 'src'),

  entry: [
    './index.jsx',
    'webpack-hot-middleware/client?path=/__webpack_hmr',
  ],

  output: {
    path: resolve(__dirname, 'public/javascripts'),
    publicPath: '/javascripts/',
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin(),
  ],

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devtool: false,
};
