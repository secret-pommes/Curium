const express = require("express");
const app = express();

let userAccountId = "username@fn.dev";

app.post("/api/oauth/token", async (req, res) => {
  currentUser = "username@fn.dev";
  res.json({
    access_token: "fortnitetoken",
    expires_in: 28800,
    expires_at: "9999-12-02T01:12:01.100Z",
    token_type: "bearer",
    refresh_token: "fortnitetoken",
    refresh_expires: 86400,
    refresh_expires_at: "9999-12-02T01:12:01.100Z",
    account_id: currentUser,
    client_id: "fortniteclientid",
    internal_client: true,
    client_service: "fortnite",
    displayName: currentUser,
    app: "fortnite",
    in_app_id: currentUser,
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
    id: req.params.accountId,
    displayName: req.params.accountId,
    name: "user",
    email: userAccountId + "@epicgames.com",
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
});

app.get("/api/oauth/verify", (req, res) => {
  res.status(204).end();
});

module.exports = app;
