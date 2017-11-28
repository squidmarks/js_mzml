var base64 = require('base64-js');
var pako = require('pako');

module.exports = class JsMzml {
  constructor(filename) {
    this.filename = filename;
  }

  retrieve(options) {
    var options = options || {};
    var level = options.level || "Both";
    var RT_begin = options.RT_begin || 0;
    var RT_end = options.RT_end || 9999999999;




    return {};
  }
  
  hello() {
    return "hello";
  }
}