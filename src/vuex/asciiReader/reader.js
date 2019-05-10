var fs = require('fs');
var array = fs.readFileSync('./bigRedChest.txt').toString().split("\n");
console.log(array);