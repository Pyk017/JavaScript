var http = require('http'); // http module is an inbuilt module thus ./ is not used in it.
http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Hello World");
    response.end();
}).listen(4444)  // http module has a function createServer() which returns an object which has a method named .listen() which takes an parameter which is a port number.

// Now go to the brower and type "http:localhost:4444/" and hit enter . Hello World will be displayed.