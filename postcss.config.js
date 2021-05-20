const purgecss = require('@fullhuman/postcss-purgecss');
const postcss = require('postcss-preset-env');

module.exports = {
  plugins: [
    postcss(),
  ],
};

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(purgecss({ content: ['./**/*.jsx', './**/*.html'] }));
}
