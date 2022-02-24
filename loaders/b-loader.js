function bLoader(content, map, meta) {
  console.log("开始执行bLoader Normal Loader");
  return content + "bLoader->";
}

bLoader.pitch = function (remainingRequest, precedingRequest, data) {
  console.log("开始执行 bLoader Pitching Loader");
  console.log(remainingRequest)
  console.log(precedingRequest)
  console.log(data)
  return "bLoader 返回了内容";
};

module.exports = bLoader;
