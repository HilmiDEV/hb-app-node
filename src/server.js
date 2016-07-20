// Hilmi BOUALLEGUE 2016 Server Side Application with NodeJS
// Load the http object from node library that used to create Http server
var http= require("http");
// Load the url object to use in the manipulation of the url requested by the user
var url=require("url");
// Node module used to split the params of the url
var querystring=require("querystring");

// Create the server object
var server= http.createServer(function(req,res){

    // Get the Path name asked by the user
    let page = url.parse(req.url).pathname;
    // Get the params from the url asked by the user like string
    let paramstring=url.parse(req.url).query;
    // Get the params of the url in the format of object
    let params = querystring.parse(paramstring);

    console.log('The page asked by the user '+page);
    console.log("The params of the url "+paramstring);
    console.log(params);
    // For write the Head of the response
    res.writeHead(200, {"Content-Type": "text/html"});

    // For write the response body
    res.write("<html><body><b>Hello World of Node JS</b></body></html>");

    // For End the response
    res.end();
});

// Execute the server in the port XXXX
server.listen(1111);
