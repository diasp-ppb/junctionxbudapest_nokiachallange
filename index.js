var bodyParser = require('body-parser')
var express = require('express');
var querystring = require('querystring');
var app = express();

var port = 3000;
// parse application/json
app.use(bodyParser.json())

var consts = require('./constants')

app.listen(port, () => console.log("Listen on port: " + port));

app.get('/', (req, res) => res.send("hello world!"))

app.post('/', function (req, res) {
	// TODO Interact with Nokia TAS
	console.log("pingu")
	res.send(consts.playA)
});




var subscribeUser = function ( ID ) {
	var post_data = querystring.stringify({

	});

	var post_options = {


	}



	//var post_req = http.request(post_options, function(res))


}