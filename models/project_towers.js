const mongoose = require("mongoose");

const projectTowersSchema = new mongoose.Schema({
  Tower_id: { type: String, required: true },
  name: { type: String, required: true },
  societyId: { type: String, required: true },
  totalFlats: { type: Number, required: true }
}, { collection: "Project_Towers" });

module.exports = mongoose.model("ProjectTowers", projectTowersSchema, "Project_Towers");
