const mongoose = require("mongoose");

const societyMemberSchema = new mongoose.Schema({
  Member_id: { type: String, required: true },
  Name: { type: String, required: true },
  designation: { type: String },
  email: { type: String },
  phone: { type: Number },
  Society_id: { type: String }
}, { collection: "society_member" });

module.exports = mongoose.model("SocietyMember", societyMemberSchema, "society_member");
