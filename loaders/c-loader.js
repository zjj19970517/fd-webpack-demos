function cLoader(content, map, meta) {
  console.log("开始执行cLoader Normal Loader");
  return content + "[cLoader->";
}

cLoader.pitch = function (remainingRequest, precedingRequest, data) {
  console.log("开始执行 cLoader Pitching Loader");
  console.log(remainingRequest)
  console.log(precedingRequest)
  console.log(data)
};

module.exports = cLoader;
