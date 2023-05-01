const express = require("express");
const app = express();
const path = require("path");

/*
 * All endpoints that you only need onetime
 * like waitingroom or datarouter/api/v1/public/*
 */
app.all("/datarouter/api/v1/public/*", (req, res) => {
  res.status(204).end();
});

app.get("/waitingroom/api/waitingroom", (req, res) => {
  res.status(204).end();
});

app.get("/content/api/pages/fortnite-game", (req, res) => {
  const content = require("../../responses/content.json");
  res.json(content);
});

app.get("/catalog/api/shared/bulk/offers", (req, res) => {
  res.sendStatus(204);
});

app.get("/eulatracking/api/shared/agreements/*", (req, res) => {
  res.json([]);
});

module.exports = app;
