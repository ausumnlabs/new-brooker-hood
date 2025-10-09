const mongoose = require("mongoose");

const ammenitiesBookingSchema = new mongoose.Schema({
  booking_Id: { type: String, required: true },
  amenity_Id: { type: String, required: true },
  user_id: { type: String, required: true },
  Society_id: { type: String, required: true },
  date: { type: Date },
  Slot: { type: String },
  Status: { type: String },
  Amount: { type: Number }
}, { collection: "ammneties_booking" });

module.exports = mongoose.model("AmmnetiesBooking", ammenitiesBookingSchema, "ammneties_booking");
