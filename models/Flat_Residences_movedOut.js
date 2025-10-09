const mongoose = require("mongoose");

const flatResidencesMovedOutSchema = new mongoose.Schema({
  Residences_Id: { type: String, required: true },
  Flat_ID: { type: String, required: true },
  Residence: { type: String }, // e.g. "Chirag jain jainchirag2fgmail.com tenent"
  Move_In_date: { type: Date }
}, { collection: "Flat_Residences_MovedOut" });

module.exports = mongoose.model("FlatResidencesMovedOut", flatResidencesMovedOutSchema, "Flat_Residences_MovedOut");



