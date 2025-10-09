const mongoose = require("mongoose");

const societyStaffSchema = new mongoose.Schema({
  Staff_id: { type: String, required: true },
  Name: { type: String, required: true },
  Staff_type: { type: String },
  phone_no: { type: Object },  // Screenshot me phone no object hai, exact fields unclear
  email: { type: String },
  Society_id: { type: String }
}, { collection: "society_staff" });

module.exports = mongoose.model("SocietyStaff", societyStaffSchema, "society_staff");
