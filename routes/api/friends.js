const express = require("express");
const app = express();

app.get("/api/v1/*/blocklist", (req, res) => {
  res.status(204);
});

app.get("/api/v1/*/recent/fortnite", (req, res) => {
  res.status(204);
});

app.get("/api/v1/:accountId/summary", (req, res) => {
  res.status(204);
});

app.get("/api/v1/*/settings", (req, res) => {
  res.json({});
});

app.get("/api/public/list/fortnite/*/recentPlayers", (req, res) => {
  res.json([]);
});

app.post("/api/public/friends/*", (req, res) => {
  res.status(204);
});

app.get("/api/public/blocklist/*", (req, res) => {
  res.status(204);
});

module.exports = app;
