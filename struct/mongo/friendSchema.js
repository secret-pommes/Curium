const mongo = require("mongoose");

const schema = new mongo.Schema({
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

module.exports = mongo.model("schema", schema);