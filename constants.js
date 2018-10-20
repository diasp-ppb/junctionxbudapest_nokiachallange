var CONTINUE = {
   "action": {
      "actionToPerform": "Continue",
      "displayAddress": "[phone number]"
   }
}

var END_CALL = {
   "action": {
      "actionToPerform": "EndCall",
      "displayAddress": "[phone number]"
   }
}

var ROUTE_CALL = {
   "action": {
      "actionToPerform": "Route",
      "routingAddress": "[phone number]",
      "displayAddress": "[phone number]"
   }
}

var PLAY_ANNOUNCEMENT = {
   "action": {
      "actionToPerform": "Continue",
      "displayAddress": "[+905345895788]",
      "digitCapture": {
         "playingConfiguration": {
            "playFileLocation": "http://example.com:8080/files/example.wav"
         },
         "callParticipant": [
            "[+905345895788]"
         ]
      }
   }
}

var DIGIT_CAPTURED = {
   "action": {
      "actionToPerform": "Continue",
      "displayAddress": "[phone number]",
      "digitCapture": {
         "digitConfiguration": {
            "maxDigits": 10,
            "minDigits": 3,
            "endChar": "#"
         },
         "playingConfiguration": {
            "playFileLocation": "http://example.com:8080/files/example.wav"
         },
         "callParticipant": [
            "[phone number]"
         ]
      },
      "playAndCollectInteractionSubscription": {
         "callbackReference": {
            "notifyURL": "https://www.example.com/notifyURL"
         }
      }
   }
}

var API_TOKEN = "5a8b14c1a353b4000197972fc4df4daca7984ac0b0d35d86daaed7a8";


module.exports = {
   continue: CONTINUE,
   endCall: END_CALL,
   route: ROUTE_CALL,
   playA: PLAY_ANNOUNCEMENT,
   digit: DIGIT_CAPTURED,
   apitoken: API_TOKEN,
}
