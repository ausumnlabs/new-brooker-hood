const mongoose = require("mongoose");

const societyAmmenitiesSchema = new mongoose.Schema({
  Amenity_id: { type: String, required: true },
  Society_id: { type: String, required: true },
  Amenity_name: { type: String, required: true },
  description: { type: String },
  availability: { type: Boolean },
  MaxBookingDays: { type: Number },
  Slots: { type: String },
  Price: { type: mongoose.Schema.Types.Mixed }, // Allows 0 or string like "1000/-"
  "Paid/Free": { type: String }
}, { collection: "society_ammenities" });

module.exports = mongoose.model("SocietyAmmenities", societyAmmenitiesSchema, "society_ammenities");
