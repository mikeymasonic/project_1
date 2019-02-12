// This function handles an incoming "request"
// And sends back out a "response";
let handleRequest = function (request, response) {
 response.writeHead(200, {'Content-Type': 'text/plain'});
 response.end('Hello World\n');
};

// HTTP module
let http = require('http');

// Create a server with the handleRequest callback
let server = http.createServer(handleRequest);
// Listen on port 8080
server.listen(8080);