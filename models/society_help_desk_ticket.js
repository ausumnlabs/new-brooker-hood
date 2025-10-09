const mongoose = require("mongoose");

const societyHelpDeskTicketSchema = new mongoose.Schema({
  Ticket_id: { type: String, required: true },
  Society_id: { type: String, required: true },
  Reident_id: { type: String, required: true },
  Category: { type: String },
  request_type: { type: String },
  description: { type: String },
  photo_url: { type: String },
  Raised_at: { type: Date },
  Status: { type: String }
}, { collection: "society_help_desk_ticket" });

module.exports = mongoose.model("SocietyHelpDeskTicket", societyHelpDeskTicketSchema, "society_help_desk_ticket");
