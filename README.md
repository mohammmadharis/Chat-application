# MyChatApp 🟦

A modern **real-time chat application** built with the **MERN stack (MongoDB, Express, React, Node.js)**.  
Supports private messaging, online/offline status, responsive UI, and avatar support.

---

## 🌟 Features

- Real-time 1-on-1 chat using **Socket.IO**
- Online/offline user status
- Responsive design for desktop & mobile
- Avatar support with default fallback
- Timestamped messages
- Secure environment configuration using `.env` files

---

## 🛠 Tech Stack

**Frontend:**
- React.js
- Tailwind CSS
- React Icons
- Zustand (state management)

**Backend:**
- Node.js & Express.js
- MongoDB & Mongoose
- JWT Authentication
- Socket.IO for real-time messaging

---

## ⚡ Installation

1. Clone the repository
git clone https://github.com/USERNAME/REPO-NAME.git
cd myChatApp

3. Install dependencies
Backend
cd backend
npm install

Frontend
cd ../frontend
npm install

3. Setup environment variables

Create a .env file in backend/ folder:

PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
