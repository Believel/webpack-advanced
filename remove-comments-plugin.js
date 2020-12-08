// 自动删除 Webpack 打包结果中的注释
// Webpack 插件必须是一个函数或者是一个包含 apply 方法的对象


class RemoveCommentsPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap('RemoveCommentsPlugin', compilation => {
      // compilation => 可以理解为此次打包的上下文
      for (const name in compilation.assets) {
        // console.log(name) // 输出文件名称
        // 输出文件内容
        // console.log(compilation.assets[name].source);
        // 表示参数字符串是否以 .js 结尾
        if (name.endsWith(".js")) {
          const contents = compilation.assets[name].source();
          // 通过正则移除代码中的注释      /******/     \s表示一个空白字符
          const noComments = contents.replace(/\/\*{2,}\/\s?/g, "");
          compilation.assets[name] = {
            source: () => noComments,
            size: () => noComments.length
          }
        }
      }
    })
  }
}
module.exports = RemoveCommentsPlugin