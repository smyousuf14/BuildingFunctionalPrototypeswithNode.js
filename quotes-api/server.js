
/*Variable list*/
var express = require("express");
var app = express();

app.get("/", function(request, response){

	response.send("Get request received at '/' ");
	

});

app.listen(3000, function(){

	console.log("Listening at port 3000");
	
});

