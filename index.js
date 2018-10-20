var bodyParser = require('body-parser')
var express = require('express');
var request = require('request');

var app = express();

var port = 3000;
// parse application/json
app.use(bodyParser.json())

var consts = require('./constants')

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.listen(port, () => console.log("Listen on port: " + port));



var NokiaTasCallDirectionApi = require('nokia_tas_call_direction_api');

var defaultClient = NokiaTasCallDirectionApi.ApiClient.instance;

// Configure API key authorization: nokia_mn_api_auth
var nokia_mn_api_auth = defaultClient.authentications['nokia_mn_api_auth'];
nokia_mn_api_auth.apiKey = consts.apitoken;
var api = new NokiaTasCallDirectionApi.SubscriptionApi();

var subscribeUser = function ( number, clientCorrelator, callback ) {

	var post_data =
        {
            "callDirectionSubscription": {
                "callbackReference": {
                    "notifyURL": "http://9992cdca.ngrok.io/",
                },
                "filter": {
                    "address": [
                        "sip:+"+ number+"@ims8.wirelessfuture.com"
                    ],
                    "criteria": [
                        "CalledNumber"
                    ],
                    "addressDirection": "Called"
                },
                "clientCorrelator": clientCorrelator
            }
        };

    api.createSubscription(post_data, callback);
};


var unsbuscribeUser = function (number, clientCorrelator, callback) {

}





app.get('/', function (req, res) {
        res.render('index');


    subscribeUser("358480786475","cc1234565675676", function(error, data, response) {
        if (error) {
            console.error(error);
        } else {
            console.log('API called successfully. Returned data: ' + data.toString());
        }
    });
    }
);


app.post('/adduser' , function (req, res) {
    //TODO add get Params

});

app.post('/', function (req, res) {
	// TODO Interact with Nokia TAS
	console.log("pingu")
	res.send(consts.playA)
	console.log(req.body.toString());
});




