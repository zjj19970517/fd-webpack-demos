const { marked } = require('marked');

/**
 * @param {string|Buffer} content 源文件的内容
 * @param {object} [map] 可以被 https://github.com/mozilla/source-map 使用的 SourceMap 数据
 * @param {any} [meta] meta 数据，可以是任何内容
 */
function markdownLoader(content, map, meta) {
  const html = marked(content);
  return `module.exports = ${JSON.stringify(html)}`;
}

function markdownLoader1(content) {
  const html = marked(content);
  return html;
}

module.exports = markdownLoader1;
