var express = require('express');
var app = express(); // creates an instance of an express application
var swig = require('swig');

var people = {title: 'An Example', people: [{name: 'Gandalf'}, {name: 'Frodo'}, {name: 'Hermione'}]};

swig.renderFile(__dirname + '/views/index.html', people, function (error, output){
	if (error) throw error;
	console.log(output);
})

app.engine('swig', swig.renderFile);

app.set('view engine', 'html');

app.set('views', __dirname + '/views');

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