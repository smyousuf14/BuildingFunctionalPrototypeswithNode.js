/* This is the http module that will help the server handle http requests and responses*/
var http = require("http");

/*The port # that the server will run on is stored here.*/
var port = 3000;




/*This function will help handle the request from clients*/
var requestHandler = function(request, response)
{
	console.log("New request to: " + request.url);
	response.end("Hello, World!");
}

/*Use the http.createServer method to create a server object*/
var server = http.createServer(requestHandler);

/*This will instruct the server to listen for requests on the port. Provides a callback function that will run after the server begins listening on the port.*/
server.listen(port,function(){
	
	console.log("Listening on port " + port);

});
