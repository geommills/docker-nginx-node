var http = require('http');

var server = http.createServer(function (request, response){
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.end("Welcome to node running via nginx!");
});

server.listen(3000);

console.log("Server running at http://127.0.0.1/");
