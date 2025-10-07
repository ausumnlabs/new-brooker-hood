const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['four-wheeler', 'two-wheeler'],
    required: true
  },
  numberPlate: {
    type: String,
    required: true,
    unique: true
  },
  residenceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Residence',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
