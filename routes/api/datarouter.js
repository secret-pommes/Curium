const express = require("express");
const app = express();

app.all("/api/v1/public/*", (req, res) => {
  res.status(204).end();
});


module.exports = app;
