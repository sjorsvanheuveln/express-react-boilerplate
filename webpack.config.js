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

  resolve: {
    extensions: ['.js', '.jsx'],
  },
  
}