const mongoose = require("mongoose");

const dailyHelpAssignmetSchema = new mongoose.Schema({
  Flat_id: { type: String, required: true },
  help_type_ID: { type: String, required: true },
  NAME: { type: String, required: true },
  "phone number": { type: Number },
  days_active: { type: String },
  timings: { type: String },
  Society_id: { type: String }
}, { collection: "daily_help_assignmet" });

module.exports = mongoose.model("DailyHelpAssignmet", dailyHelpAssignmetSchema, "daily_help_assignmet");
