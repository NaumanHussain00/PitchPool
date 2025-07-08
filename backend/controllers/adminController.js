const User = require('../models/User');

// ✅ Get all unverified pitchers — Only Admin
exports.getUnverifiedPitchers = async (req, res) => {
  try {
    const pitchers = await User.find({ role: 'pitcher', verified: false });
    res.json(pitchers);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// ✅ Verify a pitcher
exports.verifyPitcher = async (req, res) => {
  try {
    const pitcher = await User.findById(req.params.id);

    if (!pitcher || pitcher.role !== 'pitcher') {
      return res.status(404).json({ message: 'Pitcher not found' });
    }

    pitcher.verified = true;
    await pitcher.save();

    res.json({ message: 'Pitcher verified successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Verification failed', error: err.message });
  }
};

// ✅ Reject a pitcher
exports.rejectPitcher = async (req, res) => {
  try {
    const pitcher = await User.findById(req.params.id);

    if (!pitcher || pitcher.role !== 'pitcher') {
      return res.status(404).json({ message: 'Pitcher not found' });
    }

    pitcher.verified = false;
    pitcher.rejectionReason = req.body.reason || 'Not specified';
    await pitcher.save();

    res.json({ message: 'Pitcher rejected' });
  } catch (err) {
    res.status(500).json({ message: 'Rejection failed', error: err.message });
  }
};
