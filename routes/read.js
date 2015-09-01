var express = require('express');
var router = express.Router();
var path = require('path');
router.use(express.static(path.join(__dirname, 'public')));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/read', function( req, res ){
	var csv = require('csv');
	var fs = require('fs');
	fs.readFile('public/System-Metrics-CSV.csv', 'utf8', function(err, data){
		csv.parse(data, {columns: true}, function(err, output){
			if(err){
				console.log(err);
				res.send("Error");
			}
			else{
				res.send(output);
			}
		});
	});
});

module.exports = router;