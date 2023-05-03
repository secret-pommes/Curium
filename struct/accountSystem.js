const express = require("express");
const app = express();
const crypto = require("crypto");
const bcrypt = require("bcrypt");

const userSchema = require("./mongo/userSchema.js");
const athenaSchema = require("./mongo/athenaSchema.js");
const friendSchema = require("./mongo/friendSchema.js");

app.get("/api/accountSystem/status", (req, res) => {
  res.json(["Account System is online!"]);
});

// Creates a new user account
app.post("/api/accountSystem/createNewAccount", (req, res) => {
  const accountId = crypto.randomBytes(16).toString("hex");
  const account_displayName = req.body.displayName;
  const account_email = req.body.email;
  const account_password = bcrypt.hashSync(
    req.body.password,
    bcrypt.genSaltSync(10)
  );

  const newAccount = new userSchema({
    account: accountId,
    displayName: account_displayName,
    email: account_email,
    password: account_password,
  });
  newAccount.save();
});

module.exports = app;
