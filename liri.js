// Client ID 596d917064ad4702b26678cb7ef4a869
// Client Secret 01f93f421f9b4355bd7bfbfe23f30e23



require("dotenv").config();



var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var axios = require("axios");
var fs = require('fs');
var moment = require('moment');
var request = require('request');



var appInput = process.argv[2];
var appSearch = process.argv[3];


UserInputs (appInput, appSearch);


function UserInputs(appInput, appSearch) {
    switch (appInput) {
        case "spotify-this-song":
            getMeSpotify(appSearch);
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

   
    // function getConcertInfo(appSearch){
    //     var queryUrl = "https://rest.bandsintown.com/artists/" + appSearch + "/events?app_id=codingbootcamp";
    //     console.log(queryUrl)
    //     request(queryUrl, function(error, response, offers) {
    //     // If the request is successful
    //     if (appSearch === appSearch) {
    //         var concerts = JSON.parse(offers);
    //         for (var i = 0; i < concerts.length; i++) {  
    //             console.log("-----------------------------------------------------------------------------")
    //             console.log("    The Artist " + appSearch + " Will be performing on the following dates and venues:")
    //             console.log("-----------------------------------------------------------------------------")
    //             console.log("                ***--------EVENT INFO--------***");  
    //             fs.appendFileSync("random.txt", "**********EVENT INFO*********\n");
    //             console.log(i);
    //             fs.appendFileSync("random.txt", i+"\n");
    //              console.log("              | Ticket Status: " + concerts[i].offers.type + " |");
    //             fs.appendFileSync("random.txt", i+"\n");
    //             console.log("              | Name of the Venue: " + concerts[i].venue.name + " |");
    //             fs.appendFileSync("random.txt",      "Name of the Venue: " + concerts[i].venue.name+"\n");
    //             console.log("              | Venue Location: " +  concerts[i].venue.city + " |");
    //             fs.appendFileSync("random.txt",      "Venue Location: " +  concerts[i].venue.city+"\n");
    //             console.log("              | Date of the Event: " +  concerts[i].datetime + " |");
    //             fs.appendFileSync("random.txt",      "Date of the Event: " +  concerts[i].datetime+"\n");
    //             console.log("              | Description of the Event: " +  concerts[i].description + " |");
    //             fs.appendFileSync("random.txt",      "Description of Event: " +  concerts[i].description+"\n");
                
    //             console.log("                                                                       ");
    //             fs.appendFileSync("random.txt", "*****************************"+"\n");
    //         }
    //     } else{
    //       console.log('Error occurred.');
    //     }
    // });
    
    // }

    
    function getConcertInfo(appSearch){
        var queryUrl = "https://rest.bandsintown.com/artists/" + appSearch + "/events?app_id=codingbootcamp";

        console.log(queryUrl);

        axios.get(queryUrl).then(
            function(response) {
              var jsonData = response.data;
        console.log(queryUrl);

      
    
        
                console.log("-----------------------------------------------------------------------------")
                console.log("    The Artist " + appSearch + " Will be performing on the following dates and venues:")
                console.log("-----------------------------------------------------------------------------")
                console.log("                ***--------EVENT INFO--------***");  
                // fs.appendFileSync("random.txt", "**********EVENT INFO*********\n");
                console.log();
                // fs.appendFileSync("random.txt", +"\n");
                 console.log("              | Ticket Status: " + jsonData.offers.type + " |");
                // fs.appendFileSync("random.txt", +"\n");
                console.log("              | Name of the Venue: " + jsonData.venue.name + " |");
                // fs.appendFileSync("random.txt",      "Name of the Venue: " + jsonData.venue.name+"\n");
                console.log("              | Venue Location: " +  jsonData.venue.city + " |");
                // fs.appendFileSync("random.txt",      "Venue Location: " +  jsonData.venue.city+"\n");
                console.log("              | Date of the Event: " +  jsonData.datetime + " |");
                // fs.appendFileSync("random.txt",      "Date of the Event: " +  jsonData.datetime+"\n");
                console.log("              | Description of the Event: " +  jsonData.description + " |");
                // fs.appendFileSync("random.txt",      "Description of Event: " +  jsonData.description+"\n");
                
                console.log("                                                                       ");
                // fs.appendFileSync("random.txt", "*****************************"+"\n");
                 
        }
        );
    }

    var getOMBD = function(getmovie) {
        if(getmovie === undefined){
            getmovie = "Mr. Nobody";
        }

    }

// ------------------------------------------------------------------------------------------------


    function getOMBD(response){
        var queryUrl1 = "http://www.omdbapi.com/?t=" + appSearch +  "&y=&plot=full&tomatoes=true&apikey=e333fe52"
        
        axios.get(queryUrl1).then(
            function(response) {
              var jsonData = response.data;
                
            console.log("-------------------------");
            console.log("  Title: " + jsonData.Title);
            console.log("-------------------------");
            console.log(" Year: " + jsonData.Year + '\n');
            console.log(" Rated: " + jsonData.Rated + '\n');
            console.log(" IMDB Rating: " + jsonData.imdbRating + '\n');
            console.log(" Country: " + jsonData.Country+ '\n');
            console.log(" Language: " + jsonData.Language+ '\n');
            console.log(" Plot: " + jsonData.Plot);
            console.log(" Actors: " + jsonData.Actors);
            console.log("-------------------------");
            console.log("  Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value);
            console.log("-------------------------");
    }
  );
};











