const mongoose = require("mongoose");

const flatDailyHelpSchema = new mongoose.Schema({
  Help_Type_id: { type: String, required: true },
  Help_id: { type: String, required: true }
}, { collection: "flat_daily_help" });

module.exports = mongoose.model("FlatDailyHelp", flatDailyHelpSchema, "flat_daily_help");
