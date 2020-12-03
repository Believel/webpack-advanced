const  marked  = require("marked") ;

module.exports = source => {
  return marked(source);
}