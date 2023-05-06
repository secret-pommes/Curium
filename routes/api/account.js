const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

const accountSchema = require("../../struct/mongo/accountSchema.js");
const athenaSchema = require("../../struct/mongo/athenaSchema.js");
const friendSchema = require("../../struct/mongo/friendSchema.js");
const frontendSchema = require("../../struct/mongo/frontendSchema.js");

// accountId of player
var accountId = "Secret1337";

app.post("/api/oauth/token", async (req, res) => {
  var access_token;
  var device_id;
  

  res.json({
    access_token: `eg1~${access_token}`,
    expires_in: 28800,
    expires_at: "9999-12-02T01:12:01.100Z",
    token_type: "bearer",
    refresh_token: `eg1~${access_token}`,
    refresh_expires: 86400,
    refresh_expires_at: "9999-12-02T01:12:01.100Z",
    account_id: req.user.accountId,
    client_id: "fortniteclientid",
    internal_client: true,
    client_service: "fortnite",
    displayName: req.user.username,
    app: "fortnite",
    in_app_id: req.user.accountId,
    device_id: device_id,
  });
  console.log(accountId);
});

app.get("/api/public/account/*/externalAuths", (req, res) => {
  res.json([]);
});

app.delete("/api/oauth/sessions/kill/*", (req, res) => {
  res.status(204);
  res.end();
});

app.delete("/api/oauth/sessions/kill", (req, res) => {
  res.status(204);
  res.end();
});

app.get("/api/public/account/:accountId", (req, res) => {
  accountId = req.params.accountId;
  res.json({
    id: req.params.accountId,
    displayName: req.params.accountId,
    name: req.params.accountId,
    email: accountId + "@epicgames.com",
    failedLoginAttempts: 0,
    lastLogin: new Date().toISOString(),
    numberOfDisplayNameChanges: 0,
    ageGroup: "UNKNOWN",
    headless: false,
    country: "US",
    lastName: "fnUser",
    preferredLanguage: "en",
    canUpdateDisplayName: false,
    tfaEnabled: false,
    emailVerified: true,
    minorVerified: false,
    minorExpected: false,
    minorStatus: "UNKNOWN",
  });
  console.log(accountId);
});

app.get("/api/public/account", (req, res) => {
  var final = [];

  if (Array.isArray(req.query.accountId)) {
    var users = accountSchema
      .find({
        accountId: {
          $in: req.query.accountId,
        },
        banned: false,
      })
      .lean();
  }
  res.json(final);
});

app.get("/api/oauth/verify", (req, res) => {
  res.status(204).end();
});

app.get("/api/epicdomains/ssodomains", (req, res) => {
  res.json([]);
});

module.exports = app;
