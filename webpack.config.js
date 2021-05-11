const { resolve } = require('path');

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
  ],

  output: {
    path: resolve(__dirname, "public/javascripts"), 
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

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devtool: false,


}