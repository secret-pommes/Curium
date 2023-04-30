const express = require("express");
const app = express();
const path = require("path");

app.get("/waitingroom/api/waitingroom", (req, res) => {
  res.status(204).end();
});

app.get("/content/api/pages/fortnite-game", (req, res) => {
  const content = require("../../responses/content.json");
  res.json(content);
});

module.exports = app;
