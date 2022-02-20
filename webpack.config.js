const path = require('path');

const config = {
  entry: ['./src/index1.js', './src/index2.js'],
  output: {
    filename: 'bundle.js',
  }
};

module.exports = config;