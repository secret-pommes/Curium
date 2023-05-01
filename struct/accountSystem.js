const express = require("express");
const app = express();
const crypto = require("crypto");
const bcrypt = require("bcrypt");

const usersSchema = require("./mongo/usersSchema.js");

app.get("/api/accountSystem/status", (req, res) => {
  res.json(["Account System is online!"]);
});



module.exports = app;
