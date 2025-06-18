# 🎯 Pitchpool Frontend

This is the frontend web application for **Pitchpool** — a platform where startup founders connect with smart investors to bring their ideas to life.

Built with **React**, **Tailwind CSS**, and **Redux**, this frontend offers clean UI, role-based authentication, global state management, and responsive design for both founders and investors.

---

## 🚀 Features

- ✅ Role-based signup (Founder / Investor)
- ✅ Landing page with animated hero section
- ✅ Tailwind CSS for fast styling
- ✅ Redux for global state management (user/session/role)
- ✅ Form resets dynamically on role switch
- ✅ Integration-ready with backend API via `fetch`
- ✅ Responsive and mobile-friendly UI

---

## 🧱 Folder Structure

```
frontend/
├── public/
├── src/
│   ├── assets/          # Images, icons, logos
│   ├── components/      # Reusable UI components (Header, Hero, etc.)
│   ├── pages/           # Page-level components (Signup, Login)
│   ├── redux/           # Redux store, slices, and actions
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
├── index.html
└── package.json
```

---

## 🛠 Tech Stack

- ⚛️ React
- 💨 Tailwind CSS
- 🔁 Redux Toolkit
- 🌐 Fetch API
- ⚡ Vite (or CRA)

---

## 🔧 Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/NaumanHussain00/PitchPool.git
   cd pitchpool/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Connect to backend running on:
   ```
   http://localhost:8000
   ```

---

## 📦 Redux Usage

- Global store located at: `src/redux/store.js`
- Slices for auth/user management: `src/redux/slices/userSlice.js`
- Access and dispatch global state across components using `useSelector` and `useDispatch`

---

## 📩 Contact

Built by **Madhav Chaturvedi** — Full Stack Developer  
Connect on [LinkedIn](https://linkedin.com/in/madhavxchaturvedi) | [GitHub](https://github.com/madhavxchaturvedi)

---

> “Smart funding starts here.” 🚀
