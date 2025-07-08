const express = require('express');
const router = express.Router();
const {
  login
} = require('../controllers/authController');

const {
  getUnverifiedPitchers,
  verifyPitcher,
  rejectPitcher
} = require('../controllers/adminController');

const { protect, restrictTo } = require('../middleware/authMiddleware')

// Auth
router.post('/login', login);

// ✅ Admin-only routes
router.get('/pitchers/unverified', protect, restrictTo('admin'), getUnverifiedPitchers);
router.put('/pitchers/:id/verify', protect, restrictTo('admin'), verifyPitcher);
router.put('/pitchers/:id/reject', protect, restrictTo('admin'), rejectPitcher);

module.exports = router;
