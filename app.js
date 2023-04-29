const express = require("express");
const app = express();
const https = require("https");
const mongo = require("mongoose");
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

SSLServer.listen(port, () => {
  functions.ServerRPC(`Server started listening on port: ${port}`);
  require("./struct/xmpp/index.js");
}).on("error", (err) => {
  if ((err.code = "EADDRINUSE")) {
    functions.ServerError(`Port ${port} is already in use!`);
  }
});

// structures (ban system etc)
app.use(require("./struct/mongoose.js"));

// endpoints of Fortnite and website
app.use(require("./routes/index.js"));
app.use(require("./routes/api/main.js"));
app.use("/account", require("./routes/api/account.js"));
app.use("/cloudstorage", require("./routes/api/cloudstorage.js"));
app.use("/content", require("./routes/api/content.js"));
app.use("/datarouter", require("./routes/api/datarouter.js"));
app.use("/fortnite", require("./routes/api/fortnite.js"));
app.use("/friends", require("./routes/api/friends.js"));
app.use("/lightswitch", require("./routes/api/lightswitch.js"));
app.use("/mcp", require("./routes/api/mcp.js"));
app.use("/timeline", require("./routes/api/timeline.js"));

// 404 error, keep it at the end of the code or you will break the backend
app.get("*", (req, res) => {
  res.json(["Error 404, File or endpoint not found"]);
  res.status(404);
});
