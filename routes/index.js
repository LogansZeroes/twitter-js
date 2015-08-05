var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function(req, res){
	var tweets = tweetBank.list();
	res.render('index', {title: 'Twitter.js', tweets: tweets});
});

// say that a client GET requests the path /users/nimit
router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', {title: 'Twitter.js - Posts by '+ name, tweets: list });
});


router.get('/users/:name/tweets/:id', function(req,res){
	console.log(req.params);
	var name = req.params.name;
	var tweet = tweetBank.find({name: name, id: req.params.id});
	console.log(tweet[0]);
	console.log("name: " + name + ", ID: " + req.params.id + ", tweet: " + tweet);
	res.render('index', {title: 'Twitter.js - Post ID #' + req.params.id, tweets: tweet});
});

module.exports = router;