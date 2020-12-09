# webpack 插件机制
* 目的：增强 Webpack 在项目自动化构建方面的能力。
* 常用的插件
    * `clean-webpack-plugin` 自动清除输出目录
    * `html-webpack-plugin` 生成 HTML 的插件
    * `copy-webpack-plugin` 复制文件的插件
* 原理：其实就是我们软件开发中最常见的钩子机制
* 实战：开发一个插件：自动清除Webpack打包结果中的注释

# Webpack 运行机制与核心工作原理
# Tree-Shaking 的工作过程和Webpack其他的一些优化功能

> tree-shaking实现的前提是ES Modules,也就是说：最终交给 Webpack打包的代码，必须使用ES Modules的方式来组织的模块化

* babel-loader 的使用可能导致tree-shaking时效，可以配置
```js
module.exports = {
  "presets": [
    ["@babel/preset-env", {
      "modules": false  // 设置为false,意思是确保不会转换 ES Modules
    }]
  ]
}
```
# Webpack4中新增sideEffects特性
# Production 环境下Code Splitting（分块打包）
* 目的：通过项目中的资源模块按照我们设计的规则打包到不同的bundle中，从而降低应用的启动成本，提高响应速度。
* 分包的方式：
    * 根据业务不同配置多个打包入口，输出多个打包结果。
    * 结合 ES Modules 的动态导入（Dynamic Imports）特性，按需加载模块。

