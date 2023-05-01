const express = require("express");
const app = express();
const crypto = require("crypto");
const bcrypt = require("bcrypt");

const usersSchema = require("./mongo/usersSchema.js");

app.get("/api/accountSystem/status", (req, res) => {
  res.json(["Account System is online!"]);
});

// Creates a new user account
app.post("/api/accountSystem/createNewAccount", (req, res) => {
  var account = req.body.email && req.body.displayName && req.body.password;
  console.log(account);
});

module.exports = app;
