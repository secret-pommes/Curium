const express = require("express");
const app = express();

// 204 for everything for now, doenst work that good
app.get("/api/*", (req, res) => { res.status(204) });
app.post("/api/*", (req, res) => { res.status(204) });
app.delete("/api/*", (req, res) => { res.status(204) });
app.patch("/api/*", (req, res) => { res.status(204) });

module.exports = app;
