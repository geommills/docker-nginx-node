var http = require('http');

var exec = require('child_process').exec;

var server = http.createServer(function (request, response){
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.end("Welcome to node running via nginx!");
});

server.listen(3000);

