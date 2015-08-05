var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function(req, res){
	var tweets = tweetBank.list();

	res.render('index', {title: 'Twitter.js', tweets: tweets});

});

// router.get('/stylesheets/style.css', function(req, res, next){
	
// 	var path = req.path;
// 	console.log("path: " + path);
// 	//var fileName = __dirname + "/stylesheets/" + req.params.name;
// 	var fileName = "/public" + path;
// 	if (fileName) {
// 		res.sendFile(path);
		
// 	}
// 	else{
// 		next();
// 	}
// 	//console.log(fileName);
// 	// res.sendFile(fileName, function (err) {
// 	//     if (err) {
// 	//       console.log(err);
// 	//       res.status(err.status).end();
// 	//     }
// 	//     else {
// 	//       console.log('Sent:', fileName);
// 	//     }
//  //  	});
// });

//path.resolve


module.exports = router;