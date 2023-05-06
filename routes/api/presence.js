const express = require("express");
const app = express();

app.all("/api/v1/_/:accountId/settings/subscriptions", (req, res) => {
  res.json([]);
});

app.all("/api/v1/_/:accountId/last-online", (req, res) => {
  res.json([]);
});

app.all("/api/v1/_/:accountId/subscriptions", (req, res) => {
  res.json([]);
});

app.all("/api/v1/Fortnite/:accountId/subscriptions/nudged", (req, res) => {
  res.json([]);
});

module.exports = app;
