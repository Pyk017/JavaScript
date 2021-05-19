var server = require("./Server");
var route = require('./Router');
var handler = require('./Handler');

handle = {};
handle['/home'] = handler.home;
handle['/review'] = handler.review;
server.startServer(route.route, handle);