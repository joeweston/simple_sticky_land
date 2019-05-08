var fs = require('fs');
var array = fs.readFileSync('./cliffs2.txt').toString().split("\n");
console.log(array);