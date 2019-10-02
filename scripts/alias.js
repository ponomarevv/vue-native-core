const path = require("path")

module.exports = {
  vue: path.resolve(__dirname, "../src/platforms/web/runtime-with-compiler"),
  compiler: path.resolve(__dirname, "../src/compiler"),
  core: path.resolve(__dirname, "../src/core"),
  shared: path.resolve(__dirname, "../src/shared"),
  web: path.resolve(__dirname, "../src/platforms/web"),
  weex: path.resolve(__dirname, "../src/platforms/weex"),
  "vue-native": path.resolve(__dirname, "../src/platforms/vue-native"),
  server: path.resolve(__dirname, "../src/server"),
  entries: path.resolve(__dirname, "../src/entries"),
  sfc: path.resolve(__dirname, "../src/sfc"),
}
