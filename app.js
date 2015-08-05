var express = require('express');
var swig = require('swig');
var morgan = require('morgan');
var tweetBank = require('./tweetBank');
var routes = require('./routes/');
var bodyParser = require('body-parser');
var socketio = require('socket.io');
var app = express();
var server = app.listen(3000);
var io = socketio.listen(server);



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', routes(io));
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', './views');

swig.setDefaults({ cache: false });
/////////////////////////////////////////////

app.use(express.static(__dirname + '/public'));











// app.listen(3000, function(){
// 	console.log("Server listening");
// 	console.log(200);
// });



// app.get("/",function(request, response){

// 	var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
// 	response.render( 'index', {title: 'Hall of Fame', people: people} );

// });

// app.get('/news', function(request, response){
// 	response.send("this is the news page");
// });

