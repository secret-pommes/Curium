const express = require("express");
const app = express();

const config = require("../../configs/config.json");
const athenaSchema = require("../../struct/mongo/athenaSchema.js");
var currentSeason = "1";

app.get("/api/v2/versioncheck/*", (req, res) => {
  res.json({ type: "NO_UPDATE" });
});

app.get("/api/cloudstorage/system", (req, res) => {
  if (
    (req.headers["user-agent"].split("-").includes("9.40"),
    req.headers["user-agent"].split("-").includes("9.41"),
    req.headers["user-agent"].split("-").includes("10.00"),
    req.headers["user-agent"].split("-").includes("10.10"),
    req.headers["user-agent"].split("-").includes("10.20"),
    req.headers["user-agent"].split("-").includes("10.30"),
    req.headers["user-agent"].split("-").includes("10.40"))
  ) {
    res.status(404).end();
  }
  res.status(204).end(); // no hotfixed for now
});

app.get("/api/cloudstorage/user/*", (req, res) => {
  res.status(204).end(); // no client saving for now
});

app.get("/api/cloudstorage/user/*/:file", (req, res) => {
  res.status(204).end();
});

app.post("/api/game/v2/tryPlayOnPlatform/account/*", async (req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.send(true);
});

app.get("/api/game/v2/enabled_features", (req, res) => {
  res.json([]);
  res.end();
});

app.post("/api/game/v2/profile/:accountId/client/*", (req, res) => {
  res.json({});
  res.end();
});

app.get("/api/storefront/v2/keychain", (req, res) => {
  const keychains = require("../../responses/keychains.json");
  res.json(keychains);
});

app.get("/api/game/v2/matchmakingservice/ticket/player/*", (req, res) => {
  if (
    config.Matchmaking.blockNonSwitchPlatforms == true &&
    req.headers["user-agent"].includes("Windows")
  ) {
    res
      .status(403)
      .json([
        "You cant join a Nintendo Switch match, that would be really unfair :>",
      ]);
  } else {
    res.json({
      serviceUrl: config.Matchmaking.matchmakerHost,
      ticketType: "mms-player",
      payload: "69=",
      signature: "420=",
    });
  }
});

app.get("/api/storefront/v2/catalog", (req, res) => {
  res.sendStatus(204).end();
});

app.get("/api/feedback/log-snapshot/*", (req, res) => {
  res.status(204).end();
});

app.get("/api/calendar/v1/timeline", (req, res) => {
  currentSeason = req.headers["user-agent"].split("-")[1].split(".")[0];
  // timings
  const weeklyStoreEnd = "9999-01-01T00:00:00Z";
  const sectionStoreEnds = "9999-01-01T00:00:00.000Z";
  const dailyStoreEnd = "9999-01-01T00:00:00Z";

  // events
  var activeEvents = [
    {
      eventType: `EventFlag.LobbySeason${currentSeason}`,
      activeUntil: "9999-12-31T23:59:59.999Z",
      activeSince: "2019-12-31T23:59:59.999Z",
    },
  ];

  res.json({
    channels: {
      "client-matchmaking": {
        states: [],
        cacheExpire: "9999-01-01T22:28:47.830Z",
      },
      "client-events": {
        states: [
          {
            validFrom: "2018-01-01T20:28:47.830Z",

            activeEvents: activeEvents,

            state: {
              activeStorefronts: [],
              eventNamedWeights: {},
              seasonNumber: currentSeason,
              seasonTemplateId: `AthenaSeason:athenaseason${currentSeason}`,
              matchXpBonusPoints: 0,
              seasonBegin: "2018-01-01T13:00:00Z",
              seasonEnd: "9999-01-01T14:00:00Z",
              seasonDisplayedEnd: "9999-01-01T07:30:00Z",
              weeklyStoreEnd: weeklyStoreEnd,
              stwEventStoreEnd: "9999-01-01T00:00:00.000Z",
              stwWeeklyStoreEnd: "9999-01-01T00:00:00.000Z",
              sectionStoreEnds: {
                Featured: sectionStoreEnds,
              },

              dailyStoreEnd: dailyStoreEnd,
            },
          },
        ],
        cacheExpire: "9999-01-01T22:28:47.830Z",
      },
    },
  });
});

app.get("/api/game/v2/events/tournamentandhistory/*", (req, res) => {
  res.status(204).end();
});

app.post("/api/game/v2/chat/*", (req, res) => {
  res.json({ GlobalChatRooms: [{ roomName: "fortnite" }] });
});

app.get("/api/receipts/v1/account/:accountId/receipts", (req, res) => {
  res.status(204).end();
});

// credits to: Milxnor | Source: https://github.com/Milxnor/LawinServerV2 at mcp.js
app.post("/fortnite/api/game/v2/profile/:accountId/dedicated_server/:operation", async (req, res) => {
  const profiles = await athenaSchema.findOne({ accountId: req.params.accountId });
  var profile = profiles.profiles[req.query.profileId];

  var ApplyProfileChanges = [];
  var BaseRevision = profile.rvn || 0;
  var QueryRevision = req.query.rvn || -1;

  if (QueryRevision != BaseRevision) {
      ApplyProfileChanges = [{
          "changeType": "fullProfileUpdate",
          "profile": profile
      }];
  }

  res.json({
      "profileRevision": profile.rvn || 0,
      "profileId": req.query.profileId || "athena",
      "profileChangesBaseRevision": BaseRevision,
      "profileChanges": ApplyProfileChanges,
      "profileCommandRevision": profile.commandRevision || 0,
      "serverTime": new Date().toISOString(),
      "responseVersion": 1
  })
  res.end();
});

module.exports = app;
