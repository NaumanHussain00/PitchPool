const mongoose = require('mongoose');

const investorProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  company: { type: String, required: true },
  investmentInterest: { type: String, required: true },
  website: String
});

module.exports = mongoose.model('InvestorProfile', investorProfileSchema);
