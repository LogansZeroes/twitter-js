var express = require('express');
var swig = require('swig');
var morgan = require('morgan');
var tweetBank = require('./tweetBank');
var routes = require('./routes/');

var app = express();

app.use('/', routes);
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', './views');

swig.setDefaults({ cache: false });
/////////////////////////////////////////////

app.use(express.static(__dirname + '/public'));











app.listen(3000, function(){
	console.log("Server listening");
	console.log(200);
});



// app.get("/",function(request, response){

// 	var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
// 	response.render( 'index', {title: 'Hall of Fame', people: people} );

// });

// app.get('/news', function(request, response){
// 	response.send("this is the news page");
// });

