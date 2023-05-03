const mongo = require("mongoose");
const Schema = mongo.Schema;

// battle pass and quests stuff

const frontendSchema = new Schema({}, 
{ collation: "frontend" });

module.exports = mongo.model("Frontend_Schema", frontendSchema);
