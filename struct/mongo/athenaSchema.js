const mongo = require("mongoose");

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
