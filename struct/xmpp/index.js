const express = require("express");
const app = express();
const websocket = require("ws").Server;

const config = require("../../configs/config.json");

let connectedClients = "N/A";
const xmppPort = config.Server;
const wss = new websocket({
  server: app.listen(xmppPort),
});

// later to see how many people are only
app.get("/curium/api/xmpp/clients", (req, res) => {
  res.type("applictation/json");
  res.json(connectedClients);
});

// ik that this isnt all of XMPP but i just want to start a bit