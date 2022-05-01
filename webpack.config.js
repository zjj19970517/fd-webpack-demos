// import { Configuration } from "webpack";

/**
 * @type Configuration
 */
const config = {
  entry: {
    index1: {
      import: './src/index1.js',
      filename: 'pages/[name].js',
      dependOn: 'common',
    },
    index2: {
      import: './src/index2.js',
    },
    common: ['axios']
  },
  output: {
    filename: '[name].bundle.js'
  }
};

module.exports = config;