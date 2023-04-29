const express = require("express");
const app = express();
const https = require("https");
const path = require("path");
const fs = require("fs");

const config = require("./configs/config.json");
const functions = require("./struct/functions.js");

const port = config.Server.Port;

const SSLServer = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, "/cert/key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "/cert/cert.pem")),
  },
  app
);

SSLServer.listen(port, ()=>{
    functions.ServerRPC(`Server started listening on port: ${port}`);
}).on("error", (err)=>{
    if(err.code = "EADDRINUSE"){
        functions.ServerError(`Port ${port} is already in use!`);
    }
});