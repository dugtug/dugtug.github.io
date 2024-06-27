const fs = require("fs");
const http = require("http");
const https = require("https");
const path = require("path");
const url = require("url");

const port = 3000;
const host = "192.168.1.193";

const options = {
    cert : fs.readFileSync(path.join(__dirname, "..", "certificates", "root.crt")),
    key : fs.readFileSync(path.join(__dirname, "..", "certificates", "root.key"))
};
const server = https.createServer(options);

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
    else if (req.url === "/favicon.ico") {
        console.log("No icon");
    }
    else {
        console.log("bruh")
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write("bruh");
        res.end();
    }
}