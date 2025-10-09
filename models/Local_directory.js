const mongoose = require("mongoose");

const localDirectorySchema = new mongoose.Schema({
  Category_id: { type: String, required: true },
  Category_name: { type: String, required: true }
}, { collection: "Local_Directory" });

module.exports = mongoose.model("LocalDirectory", localDirectorySchema, "Local_Directory");
