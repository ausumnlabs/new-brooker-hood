const mongoose = require("mongoose");

const flatsIdSchema = new mongoose.Schema({
  Flats_id: { type: String, required: true },
  "Flat number": { type: Number, required: true },
  Tower: { type: String, required: true },
  "Config (@BHK -CA- SBA)": { type: String },
  Owners: { type: String },
  FourPARKINngSlot: { type: Number },
  NoOFTwoWheeler: { type: Number },
  "Occupant (Name, Mobile,Email ,ResidenceType)": { type: String },
  "Vehicles<Type-Number>": { type: String },
  "Move in Date": { type: Date }
}, { collection: "Flats_id" });

module.exports = mongoose.model("FlatsId", flatsIdSchema, "Flats_id");
