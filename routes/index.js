const express = require("express");
const app = express();
const path = require("path");

// website
app.get("/", (req, res) => {
    res.send("the backend (curium) is online and reachable!").end();
    // yea
});

module.exports = app;
