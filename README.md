🏙️ Smart City Complaint Management System
<p align="center">
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js Badge">
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js Badge">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React Badge">
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB Badge">
<img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="MIT License Badge">
</p>

A web-based platform built using the MERN stack (MongoDB, Express, React, Node.js) that allows citizens to report urban issues such as potholes, water leakage, streetlight faults, and pollution.

City officials can monitor complaints in real-time, track progress, and resolve issues efficiently.

🎯 Features
👥 User Authentication (Register & Login) with JWT

🔒 Protected Routes – only logged-in users can access the main dashboard

📝 Citizens can submit complaints with description, images, and location

🛠️ City staff (admins) can view, filter, and update complaints

⏱️ Real-time updates of complaint statuses

📱 Responsive UI for both desktop and mobile

🛠️ Tech Stack
Frontend: React.js, React Router, CSS

Backend: Node.js, Express.js

Database: MongoDB (Mongoose ODM)

Authentication: bcrypt.js, JWT

Other Tools: CORS, dotenv

⚙️ Installation & Setup
1. Clone the repo

git clone https://github.com/your-username/smart-city-app.git
cd smart-city-app
2. Backend Setup


cd backend
npm install
Create a .env file inside backend/:

Code snippet

MONGO_URI=mongodb://127.0.0.1:27017/smartcity
JWT_SECRET=yourSuperSecretKey
Start backend:



npm start
Server runs at: http://localhost:5000

3. Frontend Setup
Bash

cd client
npm install
npm start
Frontend runs at: http://localhost:3000

🚀 Usage
Open http://localhost:3000

Register as a new user or login with existing credentials

Once logged in, you’ll be redirected to the Main Dashboard

Citizens can file complaints; admins can manage complaints

🔒 Authentication Flow
Passwords are hashed with bcrypt.js before saving

JWT token is generated on login and stored in localStorage

PrivateRoute ensures only authenticated users can access /main

📂 Project Structure
smart-city-app/
│
├── backend/              # Express + MongoDB API
│   ├── models/           # Mongoose models
│   ├── routes/           # Auth & Complaint routes
│   └── server.js         # Entry point
│
├── client/               # React frontend
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── App.js        # Routes
│   │   └── index.js      # Entry point
│
└── README.md
👨‍💻 Future Enhancements
📍 Integrate Google Maps API for location tagging

📸 Image upload support with Cloudinary

📊 Analytics dashboard for city officials

🔔 Push/email notifications for complaint updates

🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

📜 License
This project is licensed under the MIT License.

💡 Developed as part of a Smart City initiative to bridge the gap between citizens and city officials.
