const fs = require("fs");
const http = require("http");
const https = require("https");
const url = require("url");

const port = 3000;
const host = "localhost";

const server = http.createServer();

server.on("listening", function(){
    console.log(`Listening on port ${port}`)
});
server.listen(port, host);

server.on("request", request_handler);
function request_handler(req, res) {
    console.log(`New request from ${req.socket.remoteAddress} for ${req.url}`)
    if (req.url === "/") {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write("yexday");
        res.end();
    }
    else if (req.url === "favicon.ico") {
        console.log("No icon");
    }
    else {

    }
}