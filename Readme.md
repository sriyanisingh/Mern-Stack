# Candidate Experience Tracker

A full MERN stack web application where students and job seekers can share and read interview experiences for internships and job roles.

## Features
- **User Authentication**: Register, login, JWT protection.
- **Add Experiences**: Share company names, roles, rounds, difficulty and exact questions.
- **View Experiences**: Browse experiences, filter by company, outcome, and difficulty.
- **Analytics**: Basic dashboard indicating total stats and most common categories.

## Prerequisites
- Node.js (v16+)
- MongoDB (Running locally on `mongodb://localhost:27017` or change the connection string)

## How to Run Locally

### 1. MongoDB Setup
Ensure MongoDB is running locally on your machine on port `27017`.
If you are using MongoDB Atlas, update the `MONGODB_URI` inside `backend/.env`.

### 2. Run Backend
In a new terminal window:
```bash
cd backend
npm install
npm run dev
```
The backend server should start on `http://localhost:5000`.

### 3. Run Frontend
In a new terminal window:
```bash
cd frontend
npm install
npm run dev
```
The React app will open in your browser, typically at `http://localhost:5173`.

## Folder Structure
```
CandidateExperienceTracker/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
└── README.md
```

## Tech Stack
- Frontend: React.js, React Router, TailwindCSS, Axios
- Backend: Node.js, Express.js
- Database: MongoDB & Mongoose
- Auth: JWT & bcryptjs
