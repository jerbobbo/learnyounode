var fs = require('fs');
var filename = process.argv[2];

var data = fs.readFileSync(filename);
var strData = data.toString();
var arrData = strData.split('\n');
console.log(arrData.length - 1);