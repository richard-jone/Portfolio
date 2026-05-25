# Portfolio Backend API

This is the Node.js/Express.js backend for the portfolio website. It handles contact form submissions and stores them in a MongoDB database.

## Technology Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- CORS
- dotenv
- Helmet (Security)
- Morgan (Logging)
- express-validator (Input Validation)

## Setup Instructions

### 1. Prerequisites
- Node.js installed on your machine
- A MongoDB Atlas account and cluster (or local MongoDB)

### 2. Installation
Navigate to the backend directory and install dependencies:
```bash
cd backend
npm install
```

### 3. Environment Variables
Create a `.env` file in the root of the `backend` directory based on `.env.example`:
```bash
cp .env.example .env
```
Update the `.env` file with your actual MongoDB connection string:
```env
PORT=5000
MONGO_URI=your_actual_mongodb_connection_string
NODE_ENV=development
```

### 4. Running the Server

**Development Mode (with auto-reload):**
```bash
npm run dev
```

**Production Mode:**
```bash
npm start
```

## API Endpoints

### Health Check
- **URL**: `/api/health`
- **Method**: `GET`
- **Response**: `{ "status": "healthy", "message": "Node.js Backend is running." }`

### Submit Contact Form
- **URL**: `/api/contact`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello there!"
  }
  ```
- **Success Response**: `{ "success": true, "message": "Message sent successfully" }`
- **Error Response**: `{ "success": false, "message": "Validation error", "error": "Name is required" }`
