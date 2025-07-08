const jwt = require('jsonwebtoken');
const User = require('../models/User');

// ✅ Middleware to protect routes and get user from cookie or header
const protect = async (req, res, next) => {
  let token;

  // From cookie
  if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  } 
  // From Authorization header
  else if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, token missing' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');
    if (!req.user) {
      return res.status(401).json({ message: 'User not found' });
    }
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

// ✅ Role-based restriction
const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ message: 'Access denied: insufficient permissions' });
    }
    next();
  };
};

module.exports = { protect, restrictTo };
