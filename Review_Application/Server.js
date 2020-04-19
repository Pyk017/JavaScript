var http = require('http');
var url = require('url');

function startServer(route, handle){    
    function serverRequest(request, response){
        var reviewData = '';
        var pathname = url.parse(request.url).pathname;
        console.log('Request Received for ' + pathname);
        request.setEncoding('UTF8');

        request.addListener('data', function(chunk){
            reviewData += chunk;
        });

        request.addListener('end', function(){
            route(handle, pathname, response, reviewData);
        });
    }
    http.createServer(serverRequest).listen(8888);
    console.log("request started on localhost port:8888");
}
exports.startServer = startServer;