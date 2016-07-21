// Load the module express
var express = require("express");

var app = express();

// Manage the routes of the app
app.get('/',function(req,res){
    //Define the header of the response
    res.setHeader("Content-Type","text/plain");
    res.end("Hilmi NodeJS & Express");
});

// Listen to port
app.listen(1111);