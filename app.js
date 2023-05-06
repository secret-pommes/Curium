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

// needed for account system to work
app.use(express.urlencoded({ extended: true }));

if (config.Server.UseExternDomain == true) {
  app
    .listen(80, () => {
      functions.ServerRPC("Server is listening on port 80!");
    })
    .on("error", (err) => {
      if ((err.code = "EADDRINUSE")) {
        functions.ServerError(`Port ${port} is already in use!`);
      }
    });
} else if (config.devMode.active == true) {
  app
    .listen(devPort, () => {
      functions.ServerRPC(
        `Server is listening on port ${devPort}\nDev mode is active!`
      );
    })
    .on("error", (err) => {
      if ((err.code = "EADDRINUSE")) {
        functions.ServerError(`Port ${port} is already in use!`);
      }
    });
} else if (
  config.devMode.active == false &&
  config.Server.UseExternDomain == false
) {
  SSLServer.listen(port, () => {
    functions.ServerRPC(`Server started listening on port: ${port}`);
  }).on("error", (err) => {
    if ((err.code = "EADDRINUSE")) {
      functions.ServerError(`Port ${port} is already in use!`);
    }
  });
}

// dosnt look good but its working ^^
// 20 ms so log looks better :>
setTimeout(() => {
  mongo
    .connect(config.DATABASE.connect)
    .then(functions.ServerRPC(`Server is now connected to MongoDB!`));
}, 20);

// rest of the server structure
app.use(require("./struct/accountSystem.js")); // Account Creation System
app.use(require("./routes/index.js")); // Website Endpoints
app.use(require("./routes/api/main.js")); // other endpoints
app.use("presence", require("./routes/api/presence.js")); // fortnite's presence route
app.use("/content", require("./routes/api/content.js")); // fortnite's content route
app.use("/account", require("./routes/api/account.js")); // fortnite's account route
app.use("/fortnite", require("./routes/api/fortnite.js")); // fortnite's fortnite route
app.use("/friends", require("./routes/api/friends.js")); // fortnite's friends route
app.use("/party", require("./routes/api/party.js")); // fortnite's party route
app.use("/lightswitch", require("./routes/api/lightswitch.js")); // fortnite's lightswitch (server-status)
