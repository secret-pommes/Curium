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
  var account_displayName = req.body.displayName;
  var account_email = req.body.email;
  var account_password = req.body.password;
  console.log(account_displayName);
  console.log(account_email);
  console.log(account_password);
});

console.log("mein penis ist groß")

module.exports = app;
