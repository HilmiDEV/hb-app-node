// Hilmi BOUALLEGUE 2016
// Load the http object from node library that used to create Http server
var http= require("http");
// Load the url object to use in the manipulation of the url requested by the user
var url=require("url");

// Create the server object
var server= http.createServer(function(req,res){
    // For write the Head of the response
    res.writeHead(200, {"Content-Type": "text/html"});

    // For write the response body
    res.write("<html><body><b>Hello World of Node JS</b></body></html>");

    // For End the response
    res.end();
});

// Execute the server in the port XXXX
server.listen(1111);
