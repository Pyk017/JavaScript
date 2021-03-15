fs = require("fs");

data = fs.readdirSync('g:/');
console.log('data: ', data);
console.log("This comes after");