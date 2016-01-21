module.exports = function(keys){
  var request = require('request');
  var movieSearch = process.argv[3];

  movieFunction(movieSearch);

  function movieFunction(movieSearch) {
    request("http://www.omdbapi.com/?t="+movieSearch+"&plot=short&r=json", function(error, response, body) {
    var movie = JSON.parse(body); 
    console.log(movie.Title);
    console.log(movie.Year);
    console.log(movie.imdbID);
    console.log(movie.Country);
    console.log(movie.Language);
    console.log(movie.Plot);
    console.log(movie.Actors);
    console.log(movie.imdbRating);

    });
  }
}
// Rotten Tomatoes Rating
// Rotton Tomatoes UrL