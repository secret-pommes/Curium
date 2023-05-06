const express = require("express");
const app = express();
const path = require("path");

// website
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/index.html"));
});

app.get("/createAccount", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/createAccount.html"));
});

// assets for website
app.get("/assets/css/index.css", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/assets/css/index.css"));
});

app.get("/assets/js/index.js", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/assets/js/index.js"));
});

app.get("/assets/img/favicon.PNG", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/assets/img/favicon.PNG"));
});

app.get("/assets/img/background/paradise.jpg", (req, res) => {
  res.sendFile(
    path.join(__dirname, "/../public/assets/img/background/paradise.jpg")
  );
});

app.get("/assets/js/jquery.min.js", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/assets/js/jquery.min.js"));
});

// fortnite tournament files
app.get("/assets/tournament/loading_screen_image", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "/../public/assets/fortnite/tournament/loading_screen_image.png"
    )
  );
});

app.get("/assets/tournament/poster_back_image", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "/../public/assets/fortnite/tournament/poster_back_image.png"
    )
  );
});

app.get("/assets/tournament/poster_front_image", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "/../public/assets/fortnite/tournament/poster_front_image.png"
    )
  );
});

app.get("/assets/tournament/playlist_tile_image", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "/../public/assets/fortnite/tournament/playlist_tile_image.png"
    )
  );
});

module.exports = app;
