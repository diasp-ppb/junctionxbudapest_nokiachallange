let bodyParser = require('body-parser');
let express = require('express');
let request = require('request');
let HashTable = require('hashtable');
let app = express();

const { default: Expo } = require('expo-server-sdk');

let expo = new Expo();

const port = 3000;
// parse application/json
app.use(bodyParser.json());

let consts = require('./constants');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.listen(port, function () {console.log("Listen on port: " + port) });
///////////////////////////////////////////////
let NokiaTasCallDirectionApi = require('nokia_tas_call_direction_api');
let defaultClient = NokiaTasCallDirectionApi.ApiClient.instance;
// Configure API key authorization: nokia_mn_api_auth
let nokia_mn_api_auth = defaultClient.authentications['nokia_mn_api_auth'];
nokia_mn_api_auth.apiKey = consts.apitoken;
let api = new NokiaTasCallDirectionApi.SubscriptionApi();
//////////////////////////////////////////////
let accounts = new HashTable();

let addAccount = function(sip, name, credits) {
    accounts.put(sip, {
        name: name,
        credits: credits,
        routed: false
    });
};

let addTokenNotification = function (sip, token) {
    let account = accounts.get(sip);
    account.token = token;
};

let sendNotification = function (sip,token) {
    let somePushTokens = [token];
    let messages = [];

    for (let pushToken of somePushTokens) {

        if (!Expo.isExpoPushToken(pushToken)) {
            console.error(`Push token ${pushToken} is not a valid Expo push token`);
            continue;
        }

        messages.push({
            to: pushToken,
            sound: 'default',
            body: 'Watch an ad for free call!',
            data: { withSome: 'data' },
        })
    }

    let chunks =  expo.chunkPushNotifications(messages);
    let tickets = [];
    (async () => {
        for (let chunk of chunks) {
            try {
                let ticketChunk = await expo.sendPushNotificationsAsync(chunk);
                console.log(ticketChunk);
                tickets.push(...ticketChunk);
            } catch (error) {
                console.error(error);
            }
        }
    })();
};

let hasPositiveBalance = function (sip, callback) {
    let account = accounts.get(sip);

    if(account.credits > 0) {
        callback(1)
    }
    else
    {
        callback(0);
    }
};
let addBalance = function(sip, credits) {

    let account = accounts.get(sip);

    account.credits =  account.credits + credits;

    accounts.put(sip, {
        name: account.name ,
        credits: account.credits,
        routed: account.routed,
    });
};
//////////////////////////////////////////
let playAd = function(sip, callback ) {

    hasPositiveBalance (sip, function (status) {
        if(status)
        {
            //has credits
            addBalance(sip, -1);
            //rerouteCall
            return  callback(0);
        }
        else
        {
            // no credits
            //send ad
            return callback(1, "URL");
        }
    })
};
/////////////////////////////////////////
let Continue = function (dest) {
    return {
        "action": {
            "actionToPerform": "Continue",
            "displayAddress": dest
        }
    }
};

let reroute = function(oldDest, newDest) {
    return{
        "callEventNotification":
            {
                "notificationType":
                    "CallDirection",
                "eventDescription":
                    {
                        "callEvent":
                            "CalledNumber"
                    }
                ,
                "callingParticipant":
                oldDest,
                "calledParticipant":
                newDest,
                "callSessionIdentifier"
                    :
                    "ftvtas.com;0000000000;00;00000;0000;00;0;0000-0000-00",
                "timestamp"
                    :
                    new Date().getTime()
            }

    }
}

let subscribeUser = function ( sip, clientCorrelator, callbackroute,  callback ) {

    let post_data =
        {
            "callDirectionSubscription": {
                "callbackReference": {
                    "notifyURL": callbackroute
                },
                "filter": {
                    "address": [
                        sip
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


app.get('/', function (req, res) {
        res.render('index');
        //TODO
    }
);


app.post('/notificationtoken', function (req,res) {
    console.log(req.body.token);
    console.log(req.body.number);
    let token = req.body.token;
    let sip = req.body.number;
    addTokenNotification(sip, token);
    res.send("ok");
});

app.post('/addtoken', function (req, res) {
    let sip = req.body.number;
    addBalance(sip, 1);
    res.send("ok");
})

app.post('/', function (req, res) {
    // TODO Interact with Nokia TAS
    console.log("pingu");
    res.send(consts.playA);
    console.log(req.body.toString());
});

let endCall = function (origin, destination, callback) {
    request.post({
        url: 'https://mn.developer.nokia.com/callback/endCallCalling',
        headers: {
            Authorization: consts.apitoken,
        },
        body: {
            "callEventNotification": {
                "notificationType": "CallDirection",
                "eventDescription": {
                    "callEvent": "CalledNumber"
                },
                "callingParticipant": origin,
                "calledParticipant": destination,
                "callSessionIdentifier": "ftvtas.com;0000000000;00;00000;0000;00;0;0000-0000-00",
                "timestamp":  new Date().getTime()
            }
        },
        json: true}, function (error, response, body) {

        callback(1)
    });
}

app.post('/phonecall', function (req,res ) {
        let mutedPhone = "sip:+358480786475@ims8.wirelessfuture.com";
        //ROUTED STUFF
        // Extract origin
        let origin = req.body.callEventNotification.callingParticipant;
        // Extract Destination
        let destination = req.body.callEventNotification.calledParticipant;
        //if destination is muted phone
     /*request.post({
            url: 'https://mn.developer.nokia.com/callback/routeCallCalled',
            headers: {
                Authorization: consts.apitoken,
            },
            body: {
                "callEventNotification": {
                    "notificationType": "CallDirection",
                    "eventDescription": {
                        "callEvent": "CalledNumber"
                    },
                    "callingParticipant": origin,
                    "calledParticipant": mutedPhone,
                    "callSessionIdentifier": "ftvtas.com;0000000000;00;00000;0000;00;0;0000-0000-00",
                    "timestamp":  new Date().getTime()
                }
            },
            json: true}, function (error, response, body) {

            console.log("test");
       })*/




    res.status(200).json({
        "action": {
            "actionToPerform": "Route",
            "routingAddress": mutedPhone,
            "displayAddress": origin
        }
    }).send();


        /*    if(destination === mutedPhone)
            {

            }

            playAd(origin, function (play) {
                    if (play) {
                        //TODO
                        let token = accounts.get(origin).token;
                        sendNotification(origin, token);

                        //reroute
                        let oldDest = origin;
                        return res.send(JSON.stringify(reroute(oldDest,mutedPhone)))

                    }
                    else {
                        return res.send(JSON.stringify(Continue(destination)))
                    }
                }
            )*/
    }

);

///////////////
/// SETUP ///

subscribeUser("sip:+358480786477@ims8.wirelessfuture.com","cc9944499",  consts.local + "/phonecall", function(error, data, response) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. P2 phone is now subscribed');
    }
});
/*
subscribeUser("sip:+358480786476@ims8.wirelessfuture.com","cc103", consts.local +"/phonecall", function(error, data, response) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. P2 phone is now subscribed');
    }
});

subscribeUser("sip:+358480786477@ims8.wirelessfuture.com","cc19", consts.local +"/phonecall", function(error, data, response) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. P3 phone is now subscribed');
    }
});

*/

///////////////
console.log("Creating accounts");
console.log("Total accounts:" + accounts.size());

addAccount('sip:+358480786477@ims8.wirelessfuture.com',"P4",4);
addAccount('sip:+358480786476@ims8.wirelessfuture.com',"P3",4);
addAccount('sip:+358480786475@ims8.wirelessfuture.com',"P2",4);

console.log("All accounts created");
console.log("Total accounts:" + accounts.size());

//////////////
