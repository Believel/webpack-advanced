// 生产模式配置
const common = require("./webpack.common");
// 合并配置
const { merge } = require("webpack-merge");
const webpack = require("webpack");
// 将 CSS 打包结果提取出来 通过link标签引入
const MiniCssExtractPlugin  = require("mini-css-extract-plugin");
// 压缩css
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // "style-loader" // 将样式通过style标签注入
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      }
    ]
  },
  optimization: {
    // 开启了 minimize
    minimizer: [
      // 不让在 plugins 中的原因：只会在 minimize 特性开启时才工作
      new OptimizeCssAssetsWebpackPlugin()
    ]
  },
  plugins: [
    // 为代码注入全局成员，可以通过 xxxx访问
    new webpack.DefinePlugin({
      API_BASE_URL: JSON.stringify("https://www.baidu.com")
    }),
    new MiniCssExtractPlugin()
  ]
})