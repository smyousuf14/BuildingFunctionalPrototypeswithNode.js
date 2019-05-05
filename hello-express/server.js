
/*Variable list*/
var express = require('express');
var app = express();
var port = 3000;

/*Instruct the server to start listening*/
app.listen(port,function(){
	
	console.log("Express app listening on port " + port);

});

/* We need to inform the server how to handle requests from the client*/
app.get("/", function(request, response){
	
	response.send("Hello, World");

});

