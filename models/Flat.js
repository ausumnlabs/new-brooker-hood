const mongoose = require('mongoose');

const flatSchema = new mongoose.Schema({
  flatNumber: {
    type: String,
    required: true
  },
  towerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tower',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Flat', flatSchema);
