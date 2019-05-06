
/*Variable list*/
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

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




app.get("/quotes/:id", function(request, response){

	console.log("return quote with the ID: " + request.params.id);
	response.send("Return quote with the ID: " + request.params.id);

});

app.listen(3000, function(){

	console.log("Listening at port 3000");
	
});

app.use(bodyParser.urlencoded({extended: true}));

app.post("/quotes",function(request, response){
	
	console.log("Insert a new quote: " + request.body.quote);
	response.json(request.body);

});

