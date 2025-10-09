const mongoose = require("mongoose");

const incidentSchema = new mongoose.Schema({
  incident_id: { type: String, required: true },
  vehicle_id: { type: String, required: true },
  incident_type: { type: String, required: true },
  description: { type: String },
  reported_by_resident_id: { type: String },
  date_reported: { type: Date },
  status: { type: String }
}, { collection: "incident" });

module.exports = mongoose.model("Incident", incidentSchema, "incident");
