var fs = require('fs');
var filename = process.argv[2];

fs.readFile(filename, function(err, data) {
	if(err) throw err;
	var strData = data.toString();
	var arrData = strData.split('\n');
	console.log(arrData.length - 1);
});
