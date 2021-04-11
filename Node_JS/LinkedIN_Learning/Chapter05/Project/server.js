let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


let messages = [
	{name: "Prakhar", message: "Hello Prakhar!"},
	{name: "Kumar", message: "Your Surname is Kumar"}
]

app.get('/messages', (req, res) =>{
	res.send(messages);
});

app.post('/messages', (req, res) =>{
	// console.log(req.body);
	messages.push(req.body);
	io.emit('message', req.body)
	res.sendStatus(200);
});

io.on('connection', (socket) => {
	console.log('User Connected');
})



let server = http.listen(5500, () => {
	console.log(`Server is listening to port number :- ${server.address().port}`);
});