const path = require('path');

// for ide
module.exports = {
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@gen': path.resolve(__dirname, '.gen'),
    },
  },
};
