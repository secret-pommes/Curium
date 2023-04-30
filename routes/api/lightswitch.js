const express = require("express");
const app = express();

const banned = false;

app.get("/api/service/bulk/status", (req, res) => {
  res.json([
    {
      serviceInstanceId: "fortnite",
      status: "UP",
      message: "fortnite is up.",
      maintenanceUri: null,
      overrideCatalogIds: ["a7f138b2e51945ffbfdacc1af0541053"],
      allowedActions: ["PLAY", "DOWNLOAD"],
      banned: banned,
      launcherInfoDTO: {
        appName: "Fortnite",
        catalogItemId: "4fe75bbc5a674f4f9b356b5c90567da5",
        namespace: "fn",
      },
    },
  ]);
});

module.exports = app;
