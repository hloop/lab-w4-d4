const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const plantSchema = new Schema({
  species : String,
  family: String,
  subclass: String,
  image: String
});

const plantType = mongoose.model('plantType', plantSchema);
module.exports = plantType;