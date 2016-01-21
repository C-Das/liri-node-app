module.exports = function(keys){
  var keys = require("./keys.js");
  var twitterData = require("./twitterModule.js");
  var spotifyData = require("./spotify.js");
  var movie = require("./movie.js");

  var fs = require('fs'); //reads and writes files
  var firstParam, secondParam
    fs.readFile("random.txt","utf-8",function(error,data){
    console.log(data);
    result = data.split(",");

    firstParam = result[0];
    secondParam = result[1];

    console.log("First Param"+firstParam+"secondParam"+secondParam);

    switch(firstParam){
    case 'my-tweets' :
      console.log("inside my tweets");
      twitterData(keys);
      break;
    case 'spotify-this-song' :
      console.log("Spotify my song");
      spotifyData();
      break;
    case 'movie-this' :
      console.log("Movie this");
      movie();
      break;
    }
  });
}