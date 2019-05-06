
/*Variable list*/
var express = require("express");
var app = express();

var quotes = [
{
	id:1,
	quote: "The best is yet to come",
	author: "Unknown",
	year: 2000

},
{
    id: 2,
    quote: "This is a quote",
    author: "First Last",
    year: 1930
},
{
    id: 3,
    quote: "This is another quote",
    author: "First2 Last2",
    year: 1910
}
];




app.get("/quotes", function(request, response){

	/*response.send("Get a list of all quotes as json");
	response.json(quotes); */ 
	
	if(request.query.year)
	{
		response.send("Return a list of quotes from the year " + request.query.year);
		
	}
	else
	{
		response.json(quotes);
	}

});

app.listen(3000, function(){

	console.log("Listening at port 3000");
	
});

