var fs = require("fs")

var data = {
	name: 'Prakhar ',
	surname: 'Kumar'
}

fs.writeFile('data2.json', JSON.stringify(data), (err) => {
	console.log('Writing File finished!', err);
});