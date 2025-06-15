const express = require('express');
const { protect, restrictTo } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/me', protect, (req, res) => {
  res.json({
    message: 'Welcome to your dashboard!',
    user: req.user,
  });
});

router.get('/investor-area', protect, restrictTo('investor'), (req, res) => {
  res.json({ message: 'Hello Investor!' });
});

module.exports = router;
