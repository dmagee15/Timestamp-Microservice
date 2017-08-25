'use strict';

var fs = require('fs');
var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors());

app.use('/public', express.static(process.cwd() + '/public'));
  
app.route('/')
    .get(function(req, res) {
		  res.sendFile(process.cwd() + '/views/index.html');
    })

app.get('/:date', function(req,res){
	var date = new Date(req.params.date);
	var regex = /^([0-9])*$/;
	if(regex.test(req.params.date)){
		date = new Date(Number(req.params.date));
		var result = {
			"unix": Number(req.params.date),
			"natural": date.getUTCFullYear()+"-"+(date.getUTCMonth()+1)+"-"+date.getUTCDate()
		};
		res.json(result);
	}
	else
	if(date == 'Invalid Date'){
		var result = {
			"unix": null,
			"natural": null
		};
		res.json(result);
	}
	else{
		var result = {
			"unix": date.getTime(),
			"natural": date.getUTCFullYear()+"-"+(date.getUTCMonth()+1)+"-"+date.getUTCDate()
		}
		res.json(result);
	}
	});

app.listen(process.env.PORT, function () {
  console.log('Node.js listening ...');
});

