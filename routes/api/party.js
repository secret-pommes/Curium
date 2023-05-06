const express = require("express");
const app = express();

app.post("/api/v1/*/parties", (req, res) => {
  res.status(204);
});

app.post("/api/v1/*/user/:accountId/pings/:pingerId", (req, res) => {
  res.status(204);
});

app.patch("/api/v1/*/parties/:partyId/members/:accountId/meta", (req, res) => {
  res.status(204);
});

app.get("/api/v1/Fortnite/user/*", (req, res) => {
  res.status(204);
});

module.exports = app;
