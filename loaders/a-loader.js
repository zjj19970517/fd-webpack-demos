function aLoader(content, map, meta) {
  console.log("开始执行aLoader Normal Loader");
  content += "aLoader]";
  return `module.exports = '${content}'`;
}

aLoader.pitch = function (remainingRequest, precedingRequest, data) {
  console.log("开始执行 aLoader Pitching Loader");
  console.log(remainingRequest)
  console.log(precedingRequest)
  console.log(data)
};

module.exports = aLoader;