const mongo = require("mongoose");
const Schema = mongo.Schema;

const friendSchema = new Schema(
  {
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
  },
  { collation: "Friends" }
);

module.exports = mongo.model("Friend_Schema", friendSchema);
