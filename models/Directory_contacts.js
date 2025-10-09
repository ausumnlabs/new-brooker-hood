const mongoose = require("mongoose");

const directoryContactsSchema = new mongoose.Schema({
  contact_id: { type: String, required: true },
  society_id: { type: String, required: true },
  name: { type: String, required: true },
  category_id: { type: String },
  phone: { type: Number },
  emails: { type: String },
  address: { type: String },
  added_by_resident: { type: String },
  thumbs_up: { type: Number }
}, { collection: "Directory_contacts" });

module.exports = mongoose.model("DirectoryContacts", directoryContactsSchema, "Directory_contacts");
