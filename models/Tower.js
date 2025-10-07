const mongoose = require('mongoose');

const towerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  societyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Society',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Tower', towerSchema);
