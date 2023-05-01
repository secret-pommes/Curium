const mongo = require("mongoose");
const crypto = require("crypto");

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
