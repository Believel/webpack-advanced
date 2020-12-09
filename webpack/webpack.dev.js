// 开发模式配置
const common = require('./webpack.common');
const  { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: "development"
})