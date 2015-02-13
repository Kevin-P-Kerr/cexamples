var http = require('http'), url = require('url'), fs = require('fs'), io = require('socket.io'), planner = require('./planner.js'), rooms = require('./rooms.js');

var roomData = {};

start = function(route) {
	var onRequest = function(request, response) {
		var pathname = url.parse(request.url).pathname
		console.log(url.parse(request.url));
		console.log("Request for" + pathname + " received.");
		if (pathname === "/index.html") {
			console.log("index.html");
			response.writeHead(200, {"Content-Type" : "text/html"});
		} else if (pathname === "/client.js") {
			console.log("/client.js");
			response.writeHead(200, {"Content-Type" : "text/javascript"});
		} else if (pathname === "/templates/public.css") {
			response.writeHead(200, {"Content-Type" : "text/css"});
			console.log("CSS");
		} else {
			response.writeHead(404, {"Content-Type" : "text/html"});
		}
		var content = route(pathname);
		response.write(content);
		response.end();
	};
	
	var server = http.createServer(onRequest);
	io = io.listen(server);
	server.listen(8000);
	console.log("SERVER HAS STARTED");
	
	
		
