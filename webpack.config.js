const path = require("path");

module.exports = {
  entry: "./src/index.js",            // 入口文件
  output: {             // 出口文件
    filename: "bundle.js",      // 打包后的文件名称
    path: path.resolve("dist")  // 打包后的目录，必须是绝对路径
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        // use 取值不仅可以使用模块名称，还可以使用模块文件名称
        use: [
          "html-loader",
          "./markdown-loader"
        ]
      }
    ]
  },          // 处理对应模块
  plugins: [],         // 对应的插件
  devServer: {},       // 开发服务器配置
  mode: "development"  // 模式配置
}