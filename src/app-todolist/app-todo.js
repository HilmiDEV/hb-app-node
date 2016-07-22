// ToDO List app with Express.js

var express = require("express");

var session = require("cookie-session"); // Load the session middleware

var bodyParser = require("body-parser"); // Load the params manager middleware

var urlencodedParser = bodyParser.urlencoded({extended : false});

var app = express();

// Use the session middleware
app.use(session({secret:"todotopsecret"}));

app.get("/", function(req,res){
    // Handle the get request
    res.setHeader("Content-Type","text/html");
    res.render("ToDo.ejs",{list:[]});

})
    .post("/add",function(req,res){
        //Handle the post request
        
    })
    .get("/delete/:id", function (req,res
    ) {
        
    });

app.listen(1111);


/*


 new ol.layer.Vector({
 source: new ol.source.OSM()
 })
 */