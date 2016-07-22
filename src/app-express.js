// Load the module express
var express = require("express");

//create an object app
var app = express();

// Manage the routes of the app
app
    .get('/',function(req,res){
    //Define the header of the response
    res.setHeader("Content-Type","text/plain");
    res.end("Hilmi NodeJS & Express");
    }).get("/hb",function(req,res){
        res.setHeader("Content-Type","text/plain");
        res.end("Hello The Big Boss Hilmi");
    }).get("/hb/:n",function(req,res){
    res.setHeader("Content-Type","text/plain");
    // Get the parm from the req.params.param_name
    res.render("Hello.ejs",{x:req.params.n});
});


// For the other routes not exist in the app we can define error page
app.use(function(req,res){
    res.setHeader("Content-Type","text/plain");
    res.send(404,"Page not found");
});

// Listen to port
app.listen(1111);