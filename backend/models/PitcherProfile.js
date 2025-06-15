const mongoose = require('mongoose');

const pitcherProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  startupName: { type: String, required: true },
  ideaDescription: { type: String, required: true },
  stage: { type: String, enum: ['idea', 'MVP', 'revenue'], required: true },
  website: String,
  verified: { type: Boolean, default: false }
});

module.exports = mongoose.model('PitcherProfile', pitcherProfileSchema);
