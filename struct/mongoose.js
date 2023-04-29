const express = require("express");
const app = express();
const mongo = require("mongoose");
const crypto = require("crypto");

app.get("/curium/api/users/", (req, res) => {
  // shows user counter (soon?)
});

const userSchema = new mongo.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  accountId: {
    type: String,
    default: crypto.randomBytes(16).toString("hex"),
  },
});

const friendSchema = new mongo.Schema({
  accepted: {
    type: Array,
    default: [],
  },
  incoming: {
    type: Array,
    default: [],
  },
  outgoing: {
    type: Array,
    default: [],
  },
  accountId: {
    type: String,
    required: true,
  },
});

const athenaSchema = new mongo.Schema({
  accountId: {
    type: String,
    required: true,
  },
  lvl: {
    type: Number,
    default: 1,
  },
  banner: {
    type: String,
    default: "",
  },
  bannercolor: {
    type: String,
    default: "",
  },
  character: {
    type: String,
    default: "",
  },
  charactervariants: {
    type: Array,
    default: "",
  },
  backpack: {
    type: String,
    default: "",
  },
  backpackvariants: {
    type: Array,
    default: "",
  },
  pickaxe: {
    type: String,
    default: "",
  },
  pickaxevariants: {
    type: Array,
    default: "",
  },
  glider: {
    type: String,
    default: "",
  },
  glidervaraints: {
    type: Array,
    default: "",
  },
  skydivecontrail: {
    type: String,
    default: "",
  },
  dance: {
    type: Array,
    default: ["", "", "", "", "", ""],
  },
  itemwrap: {
    type: Array,
    default: ["", "", "", "", "", "", ""],
  },
  musicpack: {
    type: String,
    default: "",
  },
  loadingscreen: {
    type: String,
    default: "",
  },
});

module.exports = mongo.model(
  "mongoose",
  athenaSchema,
  friendSchema,
  userSchema
);
