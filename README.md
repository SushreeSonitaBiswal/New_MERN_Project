# MERN Stack Project (React + Tailwind CSS + Express + MongoDB)

A fullstack MERN boilerplate initialized with React 19, Tailwind CSS v4, Express 5, and Mongoose.

---

## 📁 Project Structure

```
├── client/                 # React Frontend (Vite + Tailwind CSS v4)
│   ├── src/
│   │   ├── App.jsx         # Starter dashboard connected to backend
│   │   ├── index.css       # Tailwind CSS v4 setup
│   │   └── main.jsx
│   ├── vite.config.js      # Proxy setup to /api on port 5000
│   └── package.json
│
├── server/                 # Express & MongoDB Backend
│   ├── src/
│   │   ├── config/db.js    # Mongoose connection
│   │   ├── models/         # Mongoose schemas (e.g., Item model)
│   │   └── routes/         # Express REST routes (/api/items, /api/health)
│   ├── server.js           # Server entry point
│   ├── .env.example        # Environment variable template
│   └── package.json
│
├── package.json            # Root scripts to run both client & server concurrently
└── README.md
```

---

## 🚀 Getting Started

### 1. MongoDB Connection Setup
Create or update `server/.env`:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string_here
CLIENT_URL=http://localhost:5173
```

### 2. Install Dependencies
To install all dependencies for both frontend and backend:
```bash
npm run install:all
```

### 3. Run Development Server
Run frontend and backend simultaneously with one command:
```bash
npm run dev
```

Or run them individually:
- **Backend Only**: `npm run server` (runs on `http://localhost:5000`)
- **Frontend Only**: `npm run client` (runs on `http://localhost:5173`)

---

## 📡 API Endpoints

- `GET /api/health` - Health check & database connection status
- `GET /api/items` - Fetch list of items
- `POST /api/items` - Create a new item (`{ "title": "...", "description": "..." }`)
- `DELETE /api/items/:id` - Delete an item by ID
