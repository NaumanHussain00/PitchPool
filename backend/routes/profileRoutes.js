const express = require('express');
const { protect, restrictTo } = require('../middleware/authMiddleware');
const PitcherProfile = require('../models/PitcherProfile');
const InvestorProfile = require('../models/InvestorProfile');

const router = express.Router();

// Create/Update Pitcher Profile
router.post('/pitcher', protect, restrictTo('pitcher'), async (req, res) => {
  const { startupName, ideaDescription, stage, website } = req.body;

  try {
    const profile = await PitcherProfile.findOneAndUpdate(
      { user: req.user._id },
      { startupName, ideaDescription, stage, website },
      { upsert: true, new: true }
    );
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: 'Error creating profile', error: err.message });
  }
});

// Create/Update Investor Profile
router.post('/investor', protect, restrictTo('investor'), async (req, res) => {
  const { company, investmentInterest, website } = req.body;

  try {
    const profile = await InvestorProfile.findOneAndUpdate(
      { user: req.user._id },
      { company, investmentInterest, website },
      { upsert: true, new: true }
    );
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: 'Error creating profile', error: err.message });
  }
});

// View Own Profile
router.get('/me', protect, async (req, res) => {
  try {
    const pitcher = await PitcherProfile.findOne({ user: req.user._id });
    const investor = await InvestorProfile.findOne({ user: req.user._id });

    if (pitcher) return res.json(pitcher);
    if (investor) return res.json(investor);

    res.status(404).json({ message: 'Profile not found' });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching profile', error: err.message });
  }
});

module.exports = router;
