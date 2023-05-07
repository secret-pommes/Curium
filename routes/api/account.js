const express = require("express");
const app = express();

const config = require("../../configs/config.json");
var accountId = config.user.username;

app.post("/api/oauth/token", async (req, res) => {
  res.json({
    access_token: `fortniteaccesstoken`,
    expires_in: 28800,
    expires_at: "9999-12-02T01:12:01.100Z",
    token_type: "bearer",
    refresh_token: `fortniteaccesstoken`,
    refresh_expires: 86400,
    refresh_expires_at: "9999-12-02T01:12:01.100Z",
    account_id: accountId,
    client_id: "fortniteclientid",
    internal_client: true,
    client_service: "fortnite",
    displayName: accountId,
    app: "fortnite",
    in_app_id: accountId,
    device_id: "fortnitedeviceid",
  });
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
  res.json({
    id: accountId,
    displayName: accountId,
    name: accountId,
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

// need to update to work on S6 - S8
app.get("/api/public/account", (req, res) => {
  res.status(204);
});

app.get("/api/oauth/verify", (req, res) => {
  res.status(204).end();
});

app.get("/api/epicdomains/ssodomains", (req, res) => {
  res.json([]);
});

module.exports = app;
