const mongo = require("mongoose");
const Schema = mongo.Schema;
const crypto = require("crypto");

const accountSchema = new Schema(
  {
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
      default: 1337,
    },
  },
  { collation: "Account" }
);

module.exports = mongo.model("Account_Schema", accountSchema);
