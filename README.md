# liri-node-application


## Requirements

LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.
To retrieve the data that will power this app, you'll need to send requests using the axios package to the Bands in Town, Spotify and OMDB APIs. 

You'll find these Node packages crucial for your assignment.

1. Node-Spotify-API

2. Axios

3. Moment

4. DotEnv


You'll use Axios to grab data from the OMDB API and the Bands In Town API.

## How to use Liri-Node Application 

1. Open your Terminal command line (Gitbash, CMDER, Terminal, etc)

2. Navigate inside of the command line to the folder that contains liri.js

3. Enter one of four commands such as:

- concert-this
- spotify-this-song
- movie-this
- do-what-it-says

#### Example One:
`node liri.js concert-this "name of artist or band"`

![](liri-node-application/images/liri-1.PNG)

#### Example Two:
`node liri.js spotify-this-song "name of tune"`

#### Example Three:
`node liri.js movie-this "name of movie"`

#### Example Four:
`node liri.js do-what-it-says`


