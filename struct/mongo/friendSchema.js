const mongo = require("mongoose");

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
