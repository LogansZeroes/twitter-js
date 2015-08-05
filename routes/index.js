var router = require('express').Router();
var tweetBank = require('../tweetBank');

module.exports = function (io) {
	router.get('/', function(req, res){
		var tweets = tweetBank.list();
		res.render('index', {title: 'Twitter.js', tweets: tweets, showForm: true});
	});

	// say that a client GET requests the path /users/nimit
	router.get('/users/:name', function(req, res) {
	  var name = req.params.name;
	  var list = tweetBank.find( {name: name} );
	  res.render( 'index', {title: 'Twitter.js - Posts by '+ name, tweets: list, showForm: true, name: name});
	});


	router.get('/users/:name/tweets/:id', function(req,res){
		var name = req.params.name;
		var tweet = tweetBank.find({name: name, id: req.params.id});
		res.render('index', {title: 'Twitter.js - Post ID #' + req.params.id, tweets: tweet, showForm: true});
	});

	router.post('/submit', function(req, res) {
	  var name = req.body.name;
	  var text = req.body.text;
	  tweetBank.add(name, text);
	  io.sockets.emit('new_tweet', {name: name, text: text});
	  res.redirect('/');
	});


	return router;
}

//module.exports = router;