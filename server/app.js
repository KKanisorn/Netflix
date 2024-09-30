const { getMovieTrailerPath } = require("./database");


const express = require('express');
const app = express();
const cors = require("cors");
const fs = require("fs");

app.use(cors());


const port = 3000;


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/Trailers/:movieName/:part', (req, res) => {
    const { movieName, part} = req.params;
    const path = getMovieTrailerPath(movieName, part);
    try{
        const stats = fs.statSync(path);
        const fileSize = stats.size;
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        }
        res.writeHead(200, head)
        fs.createReadStream(path).pipe(res)
    }
    catch (e){
        console.log("File not Found");
        res.status(404).send("File Not Found");
    }

})



app.listen(port, (err) => {
    if (err) {
        return console.error('Error starting the server:', err);
    }
    console.log(`Example app listening at http://localhost:${port}`);
});

// Error handling for unhandled server errors
app.on('error', (err) => {
    console.error('Server error:', err);
});