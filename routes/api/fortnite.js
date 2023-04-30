const express = require("express");
const app = express();

app.get("/api/v2/versioncheck/*", (req, res) => {
  res.json({ type: "NO_UPDATE" });
});

app.get("/api/cloudstorage/system", (req, res) => {
  res.status(204).end();
});

app.post("/api/game/v2/tryPlayOnPlatform/account/*", async (req, res) => {
  const config = require("../../configs/config.json");
  if (
    config.Server.BlockOtherPlatforms == true &&
    req.headers["user-agent"].includes("PC", "PS4", "Xbox", "MacOS")
  ) {
    res.status(403);
  }
  res.setHeader("Content-Type", "text/plain");
  res.send(true);
});

app.get("/api/game/v2/enabled_features", (req, res) => {
  res.json([]);
  res.end();
});

module.exports = app;
