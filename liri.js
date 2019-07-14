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
            getSpotify(appSearch);
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
            console.log("Invalid Option. Please type any of the following options: \nconcert-this \nspotify-this-song \nmovie-this \ndo-what-it-says")
        }

    }

   
    function getConcertInfo(appSearch){
        var queryUrl = "https://rest.bandsintown.com/artists/" + appSearch + "/events?app_id=codingbootcamp";
        request(queryUrl, function(error, response, body) {
        // If the request is successful
        if (appSearch === appSearch) {
            var concerts = JSON.parse(body);
            for (var i = 0; i < concerts.length; i++) {  
                console.log("----------------------------------------------------------------------")
                console.log("    The Artist " + appSearch + " Will be performing on the following dates:")
                console.log("----------------------------------------------------------------------")
                console.log("                   ***--------EVENT INFO--------***");  
                fs.appendFileSync("random.txt", "**********EVENT INFO*********\n");
                console.log(i);
                fs.appendFileSync("random.txt", i+"\n");
                console.log("              | Name of the Venue: " + concerts[i].venue.name);
                fs.appendFileSync("random.txt", "Name of the Venue: " + concerts[i].venue.name+"\n" + "|");
                console.log("              | Venue Location: " +  concerts[i].venue.city);
                fs.appendFileSync("random.txt", "Venue Location: " +  concerts[i].venue.city+"\n");
                console.log("              | Date of the Event: " +  concerts[i].datetime);
                fs.appendFileSync("random.txt", "Date of the Event: " +  concerts[i].datetime+"\n");
                
                console.log("                                                                       ");
                fs.appendFileSync("random.txt", "*****************************"+"\n");
            }
        } else{
          console.log('Error occurred.');
        }
    });}



