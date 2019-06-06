var fs = require('fs');
var array = fs.readFileSync('./theRock.txt').toString().split("\n");
console.log(array);