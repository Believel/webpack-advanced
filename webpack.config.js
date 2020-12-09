const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => {
  const config = {
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
    },  
    optimization: {
      // usedExports: true
      // sideEffects: true
      splitChunks: {
        // 自动提取所有公共模块到单独 bundle
        chunks: 'all'
      }
    }, 
    // 处理对应模块
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'Webpack Plugin Sample',
        template: "./index.html" // 指定html模板文件
      }),
      // new CopyWebpackPlugin({
      //   patterns: ['public'] // 需要拷贝的目录或者路径通配符
      // })
    ],         // 对应的插件
    devServer: {},       // 开发服务器配置
  }
  // 开发环境
  if (env === "development") {
    config.mode = 'development'
    config.devtool = 'cheap-eval-module-source-map'
  } else if (env === "production") {
  // 生产环境
    config.mode = 'production'
    config.devtool = 'nosources-source-map'
  }
  return config;
} 