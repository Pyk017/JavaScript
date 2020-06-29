// Depending upon the URL the server is requested, The Router Module decides how to react to it.
// To create Router Module, we need two things:
// 1. Request URL
// 2. GET/POST  parameters

function route(handle, pathname, response, reviewData){
    console.log('Routing a request for ' + pathname);
    // console.log(handle[pathname], pathname);
    if(typeof handle[pathname] === 'function'){
        handle[pathname](response, reviewData);
    }
    else{
        console.log('No handler for ' + pathname);
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.write('Error 404 page not found.');
        response.end();
    }
}
exports.route = route;