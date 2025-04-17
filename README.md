# Propex - Real Estate Application

## Description
Propex is a full-stack real estate application built with a Flask backend and a React frontend. The application allows users to browse, create, and manage property listings, as well as authenticate and manage user accounts.

## Features
- User authentication (sign up, login)
- Property listings with details
- Create, update, and delete property listings
- User profiles to manage personal properties
- Responsive design for mobile and desktop

## Technologies Used
- **Frontend**: React, React Router, Axios
- **Backend**: Flask, Flask-CORS, Flask-SQLAlchemy, Flask-Migrate
- **Database**: SQLite (or any other database of your choice)
- **Deployment**: Render

## Installation Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/propex.git
   cd propex
Navigate to the server directory and install dependencies:

cd server
pip install -r requirements.txt
Navigate to the client directory and install dependencies:

cd client
npm install
Set up the database:

python3 populate_db.py  # or any other script to initialize the database
Usage
Start the backend server:

python3 server/app.py
Start the frontend development server:

cd client
npm start
Open your browser and navigate to http://localhost:3000 to access the application.

API Endpoints
POST /api/register: Register a new user
POST /api/login: Authenticate a user and return a JWT token
GET /api/properties: Retrieve all properties
POST /api/properties: Create a new property listing
GET /api/properties/:id: Retrieve a specific property by ID
PATCH /api/properties/:id: Update a specific property by ID
DELETE /api/properties/:id: Delete a specific property by ID
Database Models
User
id: Integer, primary key
username: String, unique, required
email: String, unique, required
password_hash: String, required
created_at: DateTime, default to current time
Property
id: Integer, primary key
title: String, required
description: String, required
price: Float, required
location: String, required
bedrooms: Integer, default 3
bathrooms: Integer, default 2
sqft: Integer, default 1500
image_url: String, optional
owner_id: Integer, foreign key to User
Deployment Instructions
Frontend
Build the frontend:

npm run build
Deploy to Vercel:

Follow the instructions on the Vercel website to connect your GitHub repository and deploy the frontend.
Backend
Restructure the backend to use serverless functions if deploying to Vercel.
Alternatively, deploy to Heroku or a similar service.
Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

License
This project is licensed under the MIT License - see the LICENSE file for details.