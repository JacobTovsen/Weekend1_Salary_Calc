// require in express from it's Node module
// express is a function, but you wouldn't just know that by looking at it...

const express = require( 'express' );

const app = express();
// this gies us back an expres app - it's an object

app.use( express.static( 'server/public' ));
// tell express where to look for files when getting a request from someone's browser
// server can look ONLY   ^^^^here^^^^

// start listening for requests - can be any random port...as long as it's not already being used
const port = 5000;
app.listen( port, function(){
    console.log( `listening on port ${port}`)
});


