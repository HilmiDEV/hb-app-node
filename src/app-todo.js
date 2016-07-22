// ToDO List app with Express.js

var express = require("express");

var app = express();

app.get("/", function(req,res){
    res.setHeader("Content-Type","text/html");

});