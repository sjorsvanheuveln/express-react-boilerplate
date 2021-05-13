const { resolve } = require('path');
const webpack = require('webpack');

// set environment
let mode = 'development';
if (process.env.NODE_ENV === "production") {
  mode = "production";
}
console.log(`Mode = ${mode}.`);

module.exports = {
  mode: mode,

  context: resolve(__dirname, 'src'),

  entry: [
    './index.jsx',
    'webpack-hot-middleware/client',
  ],

  output: {
    path: resolve(__dirname, "public/javascripts"),
    publicPath: '/public/',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devtool: false,

  devServer: {
    hot: true,
    contentBase: './public',
  },

}