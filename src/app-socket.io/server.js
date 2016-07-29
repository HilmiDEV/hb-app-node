/* le fichier server.js centralise et gère les connexions
 des différents clients connectés au site.
 */

// The part of create server & send the client Html page
var http = require("http");
var fs =require("fs");
// Create the server to send the content of the client app
 var server = http.createServer(function(req,res){
    fs.readFile("./index.html","utf-8", function(error,content){
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.end(content);
    });
 });

    // The part of handle the socket.io for the synchronize app with the client app

    // Chargement de socket.io
    var io = require("socket.io").listen(server);

    // io.sockets.on('connection',function(socket){
    // console.log("un client est connecté !");
    // });

    io.sockets.on("connection", function(socket){

    socket.emit("message","Vous êtes bien connecté");
    /*
    Envoyer un broadcast pour tous les autres clients connectés,
           afin d'informer qu'il ya un nouveau client
      */
    socket.broadcast.emit("message","Un nouveau client est connecté");

    socket.on("message",function(msg){
        console.log("Client "+socket.pseudo+" : "+msg);
    });
        
     socket.on("pseudo-msg",function (pseudo) {
         socket.pseudo = pseudo;
         console.log(socket.pseudo);
         
     })






    });


server.listen(1111);