const express = require("express");
const app = express();
const path = require("path");

const config = require("../../configs/config.json");

app.get("/api/v2/versioncheck/*", (req, res) => {
  res.json({ type: "NO_UPDATE" });
});

app.get("/api/cloudstorage/system", (req, res) => {
  res.status(204).end(); // no hotfixed for now
});

app.get("/api/cloudstorage/user/*", (req, res) => {
  res.status(204).end(); // no client saving for now
});

app.get("/api/cloudstorage/user/*/:file", (req, res) => {
  res.status(204).end();
});

app.post("/api/game/v2/tryPlayOnPlatform/account/*", async (req, res) => {
  const config = require("../../configs/config.json");
  if (
    config.Server.BlockOtherPlatforms == true &&
    req.headers["user-agent"].includes("PC", "PS4", "Xbox", "MacOS")
  ) {
    res.status(403);
  }
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

app.get("/api/calendar/v1/timeline", (req, res) => {
  const season = 5;
  const lobby = "LobbySeason5";
  const weeklyStoreEnd = "9999-01-01T00:00:00Z";
  const sectionStoreEnds = "9999-01-01T00:00:00.000Z";
  const dailyStoreEnd = "9999-01-01T00:00:00Z";

  const activeEvent = [
    {
      eventType: `EventFlag.${lobby}`,
      activeUntil: "9999-01-01T00:00:00.000Z",
      activeSince: "2018-01-01T00:00:00.000Z",
    },
    {
      eventType: "EventFlag.RoadTrip2018",
      activeUntil: "9999-01-01T00:00:00.000Z",
      activeSince: "2018-01-01T00:00:00.000Z",
    },
    {
      eventType: "EventFlag.Horde",
      activeUntil: "9999-01-01T00:00:00.000Z",
      activeSince: "2018-01-01T00:00:00.000Z",
    },
    {
      eventType: "EventFlag.Anniversary2018_BR",
      activeUntil: "9999-01-01T00:00:00.000Z",
      activeSince: "2018-01-01T00:00:00.000Z",
    },
    {
      eventType: "EventFlag.LTM_Heist",
      activeUntil: "9999-01-01T00:00:00.000Z",
      activeSince: "2018-01-01T00:00:00.000Z",
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
            activeEvents: activeEvent,
            state: {
              activeStorefronts: [],
              eventNamedWeights: {},
              seasonNumber: season,
              seasonTemplateId: `AthenaSeason:athenaseason${season}`,
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

app.get("/api/game/v2/matchmakingservice/ticket/player/*", (req, res) => {
  if (
    config.Matchmaking.blockPC == true &&
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

module.exports = app;
