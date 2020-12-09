// 公共 webpack 配置模块
const path = require("path");
// 自动清除输出目录
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  entry: path.resolve(__dirname, "../src/index.js"),
  output: {
    filename: "[name].js",      // 打包后的文件名称
    path: path.resolve(__dirname, "../dist")  // 打包后的目录，必须是绝对路径
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}