const mongoose = require("mongoose");

const newUserOnboardingSchema = new mongoose.Schema({
  new_user_id: { type: String, required: true },
  name: { type: String, required: true },
  mobile_number: { type: Number },
  mail_id: { type: String }
}, { collection: "new_user_onboarding" });

module.exports = mongoose.model("NewUserOnboarding", newUserOnboardingSchema, "new_user_onboarding");
