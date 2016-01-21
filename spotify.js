module.exports = function(keys){
  var spotify = require('spotify');
  var songSearch = process.argv[3];
  var songNames =[];
  var previewURLs = [];
  var albumNames=[];
  var artists=[[],[]];
  
  // 'dancing in the moonlight'

  spotify.search({ type: 'track', query: songSearch}, function(err, data) {
      if ( err ) {
          console.log('Error occurred: ' + err);
          return;
      }
        debugger;
      // Gets the Album Names;
      for (var i=0; i < data.tracks.items.length; i++) {
        songNames[i]=data.tracks.items[i].name;
        previewURLs[i]=data.tracks.items[i].preview_url;
        albumNames[i]=data.tracks.items[i].album.name;

        // for (var j=0; j <data.tracks.items[i].artists.length; j++){
        //   artists[i][j]=data.tracks.items[i].artists[j].name;
        //   console.log(artists[i][j]); //Gives an error, need to fix
        // }
      };
      // Prints the name of the songs 
      console.log("Similar Song Names");
      songNames.forEach(function(value){
        console.log(value); 
      });
      // Prints the Preview Links of the Songs
      console.log("Preview URLs of the Songs");
      previewURLs.forEach(function(value){
        console.log(value); 
      });
      // Prints the Albums of the Songs
      console.log("Album Names");
      albumNames.forEach(function(value){
        console.log(value); 
      });
  });
}