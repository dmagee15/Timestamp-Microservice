var express = require('express');

var app = express();

app.get('/:date', function(req,res){
	var date = new Date(req.params.date);
	var regex = /^([0-9])*$/;
	if(regex.test(req.params.date)){
		date = new Date(Number(req.params.date));
		var result = {
			"unix": Number(req.params.date),
			"natural": date.getUTCFullYear()+"-"+(date.getUTCMonth()+1)+"-"+date.getUTCDate()
		};
		res.send(JSON.stringify(result));
	}
	else
	if(date == 'Invalid Date'){
		var result = {
			"unix": null,
			"natural": null
		};
		res.send(JSON.stringify(result));
	}
	else{
		var result = {
			"unix": date.getTime(),
			"natural": date.getUTCFullYear()+"-"+(date.getUTCMonth()+1)+"-"+date.getUTCDate()
		}
		res.send(JSON.stringify(result));
	}
	});

app.listen(3000);