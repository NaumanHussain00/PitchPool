# 🚀 PitchPool

PitchPool is a startup pitch presentation platform designed to bridge the gap between budding entrepreneurs and potential investors. The platform allows verified startup founders to pitch their ideas while investors can explore, evaluate, and connect—all within a seamless, secure ecosystem.

---

## 📂 Repository Structure

```bash
PitchPool/
│
├── backend/ # Node.js server, REST APIs, DB models, routes
│ └── README.md # Backend-specific setup and usage instructions
│
├── frontend/ # React frontend with user interface for Pitchers and Investors
│ └── README.md # Frontend-specific setup and usage instructions
│
└── README.md # Main project overview (this file)
```


---

## 👥 Team


### 🎨 Frontend Developers:
- Aleena Khan
- Madhav Chaturvedi

- 
### 🔧 Backend Developers:
- Mohd. Shehzan
- Nauman Hussain

---

## 💡 Features

- 👤 **User Roles**: Admin, Verified Startups (Pitchers), Investors
- ✅ **Startup Verification**: Only verified startup profiles can pitch
- 💬 **In-App Chat**: Communication between founders and investors
- 📹 **Video Pitch Integration**: Video call capability for live pitching
- 🔐 **Secure Auth**: Authentication and access management for users
- 🔎 **Explore Startups**: Investors can browse and filter startups by domain and funding stage

---

## 🔧 Technologies Used

### Frontend:
- React.js
- Tailwind CSS
- Axios
- React Router DOM

### Backend:
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Cloudinary (for media)
- Socket.io (for chat)

---

## ✅ Project Status

✅ **Working** – Both frontend and backend are functional.  
Refer to the individual README files in `frontend/` and `backend/` directories for setup and contribution details.

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/NaumanHussain00/PitchPool.git
cd PitchPool
```

### Setup Frontend
```bash
cd frontend
npm install
npm run dev
```

### Setup Backend
```bash
cd Backend
npm install
npm run dev
```

Make sure to create a .env file in the backend with required environment variables (see backend/README.md).

