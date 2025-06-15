# PitchPool_Backend
This is an ongoing project's backend


# 🎯 PitchPool Backend

PitchPool is a backend service designed for a startup-investor platform where startup founders (pitchers) can pitch their ideas and connect with potential investors through a secure, role-based web application.

This backend is built with **Node.js**, **Express**, and **MongoDB**, and is designed using a **modular, scalable, and RESTful architecture**.

---

## ⚙️ Tech Stack

- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT Authentication**
- **Role-based Access Control (Pitcher / Investor)**
- **Dotenv** for configuration management
- **Multer** (optional) for file uploads
- **CORS** for secure cross-origin access

---

## 📁 Folder Structure
```bash
PitchPool_Backend/
├── controllers/
│ ├── auth.controller.js
│ └── startup.controller.js
├── middlewares/
│ ├── auth.mw.js
│ └── role.mw.js
├── models/
│ ├── user.model.js
│ └── startup.model.js
├── routes/
│ ├── authRoutes.js
│ └── startupRoutes.js
├── .env
├── server.js
├── package.json
```

---

## 🔐 Features

- User Registration and Login (JWT-based)
- Role-specific APIs for Pitchers and Investors
- Pitch Submission and Listing (for Pitchers)
- Investor Access Control to view/startup pitches
- RESTful APIs with structured middleware

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/NaumanHussain00/PitchPool_Backend.git
cd PitchPool_Backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a .env file in the root directory:
```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Run the development server
```bash
node server.js
```
Server will run on: http://localhost:8000

## 🛠️ API Endpoints Overview

## Auth Routes
- `POST /api/auth/signup` – Register as Pitcher or Investor
- `POST /api/auth/login` – Login and receive JWT

## Startup Routes
- `POST /api/startup/pitch` – Submit a new startup pitch (Pitcher only)
- `GET /api/startup/` – View list of verified pitches (Investor only)

## 🔒 Some routes are protected and role-specific

## 🧑‍💻 Author

### Nauman Hussain
[LinkedIn](www.linkedin.com/in/nauman-hussain-a89297262)
