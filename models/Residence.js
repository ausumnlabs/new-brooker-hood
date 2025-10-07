const mongoose = require('mongoose');

const residenceSchema = new mongoose.Schema({
  residentName: {
    type: String,
    required: true
  },
  flatId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Flat',
    required: true
  },
  ownerType: {
    type: String, // "owner" ya "renter"
    required: true
  },
  occupyStatus: {
    type: String, // "active" ya "non-active"
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Residence', residenceSchema);
