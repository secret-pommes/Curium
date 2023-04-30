const express = require("express");
const app = express();
const path = require("path");

app.get("/api/v2/versioncheck/*", (req, res) => {
  res.json({ type: "NO_UPDATE" });
});

app.get("/api/cloudstorage/system", (req, res) => {
  res.status(204).end(); // no hotfixed for now
});

app.get("/api/cloudstorage/user/*", (req, res) => {
  res.status(204).end(); // no client saving for now
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

app.post("/api/game/v2/profile/:accountId/client/*", (req, res) => {
  res.json({});
  res.end();
});

app.get("/api/storefront/v2/keychain", (req, res) => {
  const keychains = require("../../responses/keychains.json");
  res.json(keychains);
});
module.exports = app;
