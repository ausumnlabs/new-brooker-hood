const mongoose = require("mongoose");

const cityProjectSchema = new mongoose.Schema({
  City_id: { type: String, required: true },
  City_name: { type: String, required: true }
}, { collection: "City_Project" }); // Collection name exactly as in Atlas

module.exports = mongoose.model("CityProject", cityProjectSchema, "City_Project");
