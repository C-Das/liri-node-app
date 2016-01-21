module.exports = function(keys){
  var Twitter = require('twitter');
   
   // console.log(keys.twitterKeys.consumer_key);
   // console.log(keys.twitterKeys.consumer_secret);
   // console.log(keys.twitterKeys.access_token_key);
   // console.log(keys.twitterKeys.access_token_secret);

  var client = new Twitter({
    consumer_key: 'keys.twitterKeys.consumer_key',
    consumer_secret: 'keys.twitterKeys.consumer_secret',
    access_token_key: 'keys.twitterKeys.access_token_key',
    access_token_secret: 'keys.twitterKeys.access_token_secret'
  });
   
  var params = {screen_name: 'nodejs'};
  debugger;
  client.get('statuses/user_timeline', params, function(error, tweets, response){
    if (!error) {
      console.log("Do I have any tweets??");
      console.log(tweets);
    } else {
      console.log(error);
    }
  });
}