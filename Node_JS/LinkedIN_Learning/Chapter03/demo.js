let fs = require('fs');


// Here data is object,  having properties contained in it.
// let data = require('./data.json')
// console.log(data.name);


// Here 'data' will be the string
// fs.readFile('./data.json', 'utf-8', (err, data) => {
// 	console.log(data);
// });

fs.readFile('./data.json', 'utf-8', (err, data) =>{
	var data = JSON.parse(data);
	console.log(data);
	console.log(typeof data);
	console.log(data.name);
})