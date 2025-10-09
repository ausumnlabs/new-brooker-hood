const mongoose = require("mongoose");

const ticketResponseSheetSchema = new mongoose.Schema({
  Response_id: { type: String, required: true },
  Ticket_id: { type: String, required: true },
  Responded_by: { type: String, required: true },
  resolved_at: { type: String }, // Date and time as string, modify to Date if strictly a date only
  Status: { type: String },
  Comment: { type: String },
  Rating: { type: Number }
}, { collection: "Ticket_response_sheet" });

module.exports = mongoose.model("TicketResponseSheet", ticketResponseSheetSchema, "Ticket_response_sheet");
