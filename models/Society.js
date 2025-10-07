const mongoose = require('mongoose');

const societySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cityId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Society', societySchema);
