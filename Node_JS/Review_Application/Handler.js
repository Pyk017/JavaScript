var querystring = require('querystring');

function home(response){
    console.log("This is 'home' handler.");
    var htmlfile = "<html><head> <title>Form</title> <meta http-equiv='Content-Type' content='text/html;charset-UTF-8'/> </head> <body> <form action='/review' method='POST'> <textarea name='text' rows='20' cols='60'></textarea> <input type='submit' value='Submit Text'/> </form> </body> </html>";
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(htmlfile);
    response.end();
}
function review(response, reviewData){
    console.log("This is 'review' handler");
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Your Review Data is :- '+ querystring.parse(reviewData).text);
    response.end();
}
exports.home = home;
exports.review = review;