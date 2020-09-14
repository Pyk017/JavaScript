console.log("The bot is starting.");

var Twit = require('twit');  // an importing statement

var T = new Twit({
	consumer_key: 		'...',
	consumer_secret:    '...',
	access_token:       '...',
	access_token_secret:'...'
});