require("dotenv").config();

// -------------------------------------

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var axios = require("axios");
var fs = require('fs');
var moment = require('moment');
var request = require('request');
var spotify = new Spotify(keys.spotify);



var appInput = process.argv[2];
var appSearch = process.argv[3];


UserInputs (appInput, appSearch);
// -----------------------------------------

function UserInputs(appInput, appSearch) {
    switch (appInput) {
        case "spotify-this-song":
            getSongSpotify(appSearch);
            break;

        case "concert-this":
            getConcertInfo(appSearch);
            break;

        case "movie-this":
            getOMBD(appSearch);
            break;

        case "do-what-it-says":
            doingSomething();
            break;


        default:
            console.log('-------------------------------------')
            console.log("Error. Please enter vailid call back: \n  concert-this \n  spotify-this-song \n  movie-this \n  do-what-it-says")
            console.log('-------------------------------------')
        }

    }

//----------------------------------------------------------------------------------------------------------------------------------------------------
  

    function getConcertInfo(appSearch){
        var queryUrl = "https://rest.bandsintown.com/artists/" + appSearch + "/events?app_id=codingbootcamp";
        
        axios.get(queryUrl).then(
            function(response, error, offers, body) {
              var jsonData = response.data;
            //   var concerts = JSON.parse(offers, body);

            if (!jsonData.length) {
                console.log("No results found for " + appSearch);
                return;
              }
        
        

              console.log("Upcoming concerts for " + appSearch + ":");

      for (var i = 0; i < jsonData.length; i++) {
        var concerts = jsonData[i];


                console.log("-----------------------------------------------------------------------------");
                fs.appendFileSync("random.txt", "---------------------------------------------------------------------------\n");
                console.log("    The Artist " + appSearch + " Will be performing on the following dates and venues:");
                fs.appendFileSync("random.txt", "The Artist " + appSearch + " Will be performing on the following dates and venues: \n");
                console.log("-----------------------------------------------------------------------------")
                fs.appendFileSync("random.txt", "-----------------------------------------------------------------------------\n");
                console.log("                ***--------EVENT INFO--------***"); 
                console.log(i); 
                fs.appendFileSync("random.txt", "**********EVENT INFO*********\n");
                console.log("              | Name of the Venue: " + concerts.venue.name + " |");
                fs.appendFileSync("random.txt",      "Name of the Venue: " + concerts.venue.name+"\n");
                console.log("              | Venue Location: " +  concerts.venue.city + " |");
                fs.appendFileSync("random.txt",      "Venue Location: " +  concerts.venue.city+"\n");
                console.log("              | Date of the Event: " +  concerts.datetime + " |");
                fs.appendFileSync("random.txt",      "Date of the Event: " +  concerts.datetime+"\n");
                console.log("              | Description of the Event: " +  concerts.description + " |");
                fs.appendFileSync("random.txt",      "Description of Event: " +  concerts.description+"\n");
                
                console.log("                                                                       ");
                fs.appendFileSync("random.txt", "*****************************"+"\n");
        
      }
    }
    
    );
    
    };



//------------------------------------------------------------------------------------------------------------------------

    var getOMBD = function(getmovie) {
        if(getmovie === undefined){
            getmovie = "Mr. Nobody";
        }
    }

    function getOMBD(response){
        var queryUrl1 = "http://www.omdbapi.com/?t=" + appSearch +  "&y=&plot=full&tomatoes=true&apikey=e333fe52"
        
        axios.get(queryUrl1).then(
            function(response) {
              var jsonData = response.data;
                
            console.log("-----------------------------------");
            fs.appendFileSync("-----------------------------------")
            console.log("  Title: " + jsonData.Title);
            fs.appendFileSync("random.txt", "  Title: " + jsonData.Title )
            console.log("-----------------------------------");
            fs.appendFileSync("-----------------------------------");
            console.log(" Year: " + jsonData.Year + '\n');
            fs.appendFileSync("random.txt",  " Year: " + jsonData.Year + '\n');
            console.log(" Rated: " + jsonData.Rated + '\n');
            fs.appendFileSync("random.txt",  " Rated: " + jsonData.Rated + '\n');
            console.log(" IMDB Rating: " + jsonData.imdbRating + '\n');
            fs.appendFileSync("random.txt", " IMDB Rating: " + jsonData.imdbRating + '\n');
            console.log(" Country: " + jsonData.Country+ '\n');
            fs.appendFileSync("random.txt", " Country: " + jsonData.Country+ '\n');
            console.log(" Language: " + jsonData.Language+ '\n');
            fs.appendFileSync("random.txt", " Language: " + jsonData.Language+ '\n');
            console.log(" Plot: " + jsonData.Plot);
            fs.appendFileSync("random.txt", " Plot: " + jsonData.Plot);
            console.log(" Actors: " + jsonData.Actors);
            fs.appendFileSync("random.txt", " Actors: " + jsonData.Actors);
            console.log("------------------------------------");
            fs.appendFileSync("random.txt", "------------------------------------");
            console.log("  Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value);
            fs.appendFileSync("random.txt", "  Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value);
            console.log("------------------------------------");
            fs.appendFileSync("random.txt",  "------------------------------------");
    }
  );
};

//-----------------------------------------------------------------------------------------------------------------------


var getArtistNames = function(artist) {
    return artist.name;
  };
  
function getSongSpotify(songTitle) {
    if (songTitle === undefined) {
      songTitle = "What's my age again";
    }
    
  
    spotify.search(
      {
        type: "track",
        query: songTitle
      },
      function(err, data) {
        if (err) {
          console.log("Error occurred: " + err);
          return;
        }
        
        var songs = data.tracks.items;
  
        for (var i = 0; i < songs.length; i++) {
          console.log(i);
         fs.appendFileSync("random.txt",  i);
          console.log("----------------------------------------------");
          fs.appendFileSync("random.txt",  "----------------------------------------------");
          console.log("Artist(s): " + songs[i].artists.map(getArtistNames));
          fs.appendFileSync("random.txt", + "Artist(s): " + songs[i].artists.map(getArtistNames));
          console.log("----------------------------------------------");
          fs.appendFileSync("random.txt",  "----------------------------------------------");
          console.log("Song name: " + songs[i].name + "\n");
          fs.appendFileSync("random.txt",  "Song name: " + songs[i].name + "\n" )
          console.log("Preview song: " + songs[i].preview_url + "\n");
          fs.appendFileSync("random.txt", "Preview song: " + songs[i].preview_url + "\n")
          console.log("Album: " + songs[i].album.name + "\n");
          fs.appendFileSync("random.txt", "Album: " + songs[i].album.name + "\n")
          console.log("-----------------------------------");
        }
      }
    );
  };




//-------------------------------------------------------------------------------------

  function doingSomething() {
    fs.readFile("random.txt", "utf8", function(error, data) {
      console.log(data);
      fs.appendFileSync("random.txt",  data);
  
      var dataArr = data.split(",");
  
      if (dataArr.length === 2) {
        pick(dataArr[0], dataArr[1]);
      } else if (dataArr.length === 1) {
        pick(dataArr[0]);
      }
    });
  };
  
  
  






