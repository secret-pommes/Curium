const express = require("express");
const app = express();
const crypto = require("crypto");
const bcrypt = require("bcrypt");

const usersSchema = require("./mongo/usersSchema.js");

app.get("/api/accountSystem/status", (req, res) => {
  res.json(["Account System is online!"]);
});

app.post("/api/accountSystem/signup", (req, res) => {
  console.error("sucks ass bro");
  const account =
    req.body.email && req.body.ingameUsername && req.body.password;
  // IMPORTANT ADD IF SOMEONE ALREADY HAS THE SAME USERNAME / DISPLAYNAME
  // add check for too long usernames, if this gets hosted publicly

  const accountId = crypto.randomBytes(16).toString("hex");
  const user = new usersSchema({
    // the new users account data.
    accountId: accountId,
    displayName: req.body.ingameUsername,
    password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
    email: req.body.email,
  });
  const friends = new Friends({ accountId: accountId });
  const athena = new AThena({ accountId: accountId });

  user.save();
  friends.save();
  athena.save();
  console.log(req.body.ingameUsername + "Created an account!");
});

module.exports = app;
