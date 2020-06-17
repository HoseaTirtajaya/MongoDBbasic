const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creating a schema and model
const MarioKartSchema = new Schema({
  name: String,
  weight: Number,
  gender: String,
});

const MarioChar = mongoose.model("MarioChar", MarioKartSchema);

module.exports = MarioChar;
