const fs = require('fs');
const path = require('path');

function getMovieTrailerPath(movieName, part){
    const path = "Database/" + movieName + "/" + part + "/" + "Trailer.mp4";
    return path;
}

module.exports = {getMovieTrailerPath};