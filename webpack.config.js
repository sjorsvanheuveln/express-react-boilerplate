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
  ],

  output: {
    path: resolve(__dirname, 'public/bundle'),
    publicPath: '/bundle/',
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
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
    new MiniCssExtractPlugin(),
  ],

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devtool: false,

};

if (mode !== 'production') {
  module.exports.entry.unshift(
    'webpack-hot-middleware/client?path=/__webpack_hmr',
  );
  module.exports.plugins.unshift(new webpack.HotModuleReplacementPlugin());
}
