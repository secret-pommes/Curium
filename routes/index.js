const express = require("express");
const app = express();
const path = require("path");

// website
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/index.html"));
});

// assets for website
app.get("/assets/css/index.css", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/assets/css/index.css"));
});

app.get("/assets/js/index.js", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/assets/js/index.js"));
});

app.get("/assets/img/favicon.png", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/assets/img/favicon.png"));
});

module.exports = app;
