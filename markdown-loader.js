const  marked  = require("marked") ;

module.exports = source => {
  // 将 markdown 转化成 html 字符串
  const html = marked(source);
  // 将 html 字符串拼接为一段导出字符串的 JS 代码
  // const code = `moduele.exports = ${JSON.stringify(html)}`;
  // return code;
  return html;
}