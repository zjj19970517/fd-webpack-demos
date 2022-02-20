// getWebpackConfig.js
const fs = require("fs")
const { stringify } = require("javascript-stringify")
const WebpackDefaulterClass = require("webpack/lib/WebpackOptionsDefaulter")
const webpackDefaulter = new WebpackDefaulterClass()

;["none", "development", "production"].forEach((mode) => generateOptions(mode))

function generateOptions(mode) {
  const options = webpackDefaulter.process({ mode })
  fs.writeFileSync(
    `./webpack.${mode}.config.js`,
    "module.exports = " + stringify(options)
  )
}
