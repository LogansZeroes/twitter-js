var express = require('express');
var app = express(); // creates an instance of an express application

app.use(function (request, response, next) {
    // do your logging here
    response.send("response Path: "+request.path +"\n" + "Verb: " + request.method + "\nStatus Code: " + response.statusCode);
    //next();
});




app.get("/",function(request, response){
//	response.sendStatus(200);
	response.send("Hello World");
});

app.get('/news', function(request, response){
	response.send("this is the news page");
});


app.listen(3000, function(){
	console.log("Server listening");
	console.log(200);
});