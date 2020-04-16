var http = require('http');
function startServer(){    
    function serverRequest(request, response){
        console.log('Request Received.');
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write("Hello from our Application.");
        response.end();
    }
    http.createServer(serverRequest).listen(8888);
    console.log("request started on localhost port:8888");
}
exports.startServer = startServer;