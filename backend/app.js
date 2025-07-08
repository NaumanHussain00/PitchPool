const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const testRoutes = require('./routes/testRoutes');
const profileRoutes = require('./routes/profileRoutes');
const adminRoute = require('./routes/adminRoute');
const cookieParser = require('cookie-parser');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();
app.use(express.json());
app.use(cookieParser());


// Middlewares
//app.use(cors());
app.use(cors({
  origin: 'http://localhost:5173',   // your React frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // only if you're using cookies or auth headers
}));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/test', testRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/admin', adminRoute);

// Health Check Route
app.get('/', (req, res) => {
  res.send('Welcome to PitchPool API');
});

module.exports = app;
