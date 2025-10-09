const mongoose = require("mongoose");

const emergencyNumberSchema = new mongoose.Schema({
  contact_id: { type: String, required: true },
  contact_name: { type: String, required: true },
  "phoe number": { type: Number },
  "visible to": { type: String }
}, { collection: "emergency_number" });

module.exports = mongoose.model("EmergencyNumber", emergencyNumberSchema, "emergency_number");
