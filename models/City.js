const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
  City_id: { type: String, required: true },
  City_name: { type: String, required: true }
}, { collection: "City" }); // Collection name same as Atlas

module.exports = mongoose.model("City", citySchema, "City");
