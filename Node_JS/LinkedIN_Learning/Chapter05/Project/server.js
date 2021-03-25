var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false})



app.use(express.static(__dirname));
app.use(bodyParser.json())

var messages = [
	{name: 'Prakhar', message: 'Hi'},
	{name: 'Yush', message: 'Hello'}
]

app.get('/messages', (req, res) =>{
	res.send(messages);
});

app.post('/messages', urlencodedParser, (req, res) =>{
	response = {
		name: req.body.name,
		msg : req.body.message
	};
	console.log(response);
	res.sendStatus(200);
	res.end(JSON.stringify(response));
	res.sendStatus(200);
});


let server = app.listen(3000, () => {
	console.log("Server is listening on port ", server.address().port);
});

