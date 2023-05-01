const express = require("express");
const app = express();
const https = require("https");
const mongo = require("mongoose");
const path = require("path");
const fs = require("fs");

const config = require("./configs/config.json");
const functions = require("./struct/functions.js");

const port = config.Server.Port;
const devPort = config.devMode.Port;
const SSLServer = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, "/cert/key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "/cert/cert.pem")),
  },
  app
);

// dosnt look good but its working ^^
mongo.connect(config.DATABASE.connect).then(functions.ServerRPC(`Server is now connected to MongoDB!`));
//require("./struct/mongo/athenaSchema.js");
//require("./struct/mongo/friendSchema.js");
//require("./struct/mongo/frontendSchema.js")
//require("./struct/mongo/usersSchema.js");

if (config.devMode.active == true) {
  app.listen(devPort, () => {
    functions.ServerRPC(
      `Started on port: ${devPort}\nDev Mode is active. No HTTPS listening`
    );
  });
} else {
  SSLServer.listen(port, () => {
    functions.ServerRPC(`Server started listening on port: ${port}`);
  }).on("error", (err) => {
    if ((err.code = "EADDRINUSE")) {
      functions.ServerError(`Port ${port} is already in use!`);
    }
  });
}

// endpoints of Fortnite and website
app.use(require("./routes/index.js"));
app.use(require("./routes/api/main.js"));
app.use("/account", require("./routes/api/account.js"));
app.use("/content", require("./routes/api/content.js"));
app.use("/datarouter", require("./routes/api/datarouter.js"));
app.use("/fortnite", require("./routes/api/fortnite.js"));
app.use("/friends", require("./routes/api/friends.js"));
app.use("/lightswitch", require("./routes/api/lightswitch.js"));
app.use("/mcp", require("./routes/api/mcp.js"));
