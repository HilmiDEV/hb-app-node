var express = require("express");

var app = express();

var server = require("http").createServer(app);

var io = require("socket.io")(server);

var ent = require("ent");

var path = require("path");

app.get("/",function(req,res){
    // Send the html file to the client with express.js
    res.sendFile(path.join(__dirname+"/index.html"));
});


io.sockets.on("connection",function(socket){

    // For every socket we listen to the event of type join
    socket.on("join",function(msg){
        console.log("nouveau client est connecté : "+msg);
        socket.broadcast.emit("message",msg+" a rejoint le chat !");
    });

    socket.on("message",function (msg) {
        socket.broadcast.emit("message", msg);
    });





});


app.use(function (req,res) {
   res.redirect("/");
});

server.listen(1111);