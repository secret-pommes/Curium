const express = require("express");
const app = express();

app.get("/waitingroom/api/waitingroom", (req, res) => {
  res.status(204).end();
});

module.exports = app;
