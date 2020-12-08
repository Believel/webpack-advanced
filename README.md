# webpack 插件机制
* 目的：增强 Webpack 在项目自动化构建方面的能力。
* 常用的插件
    * `clean-webpack-plugin` 自动清除输出目录
    * `html-webpack-plugin` 生成 HTML 的插件
    * `copy-webpack-plugin` 复制文件的插件
* 原理：其实就是我们软件开发中最常见的钩子机制
* 实战：开发一个插件：自动清除Webpack打包结果中的注释

# Webpack 运行机制与核心工作原理
