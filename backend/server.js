// server.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Project = require('./models/projectModel'); 
const Member = require('./models/memberModel')
require('dotenv').config(); // Loads environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allows cross-origin requests
app.use(express.json()); // Allows server to accept JSON in the body of requests

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));


// A simple test route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend! 👋' });
});

// API Route to get all projects <-- MOVED HERE
app.get('/api/projects', async (req, res) => {
  console.log('✅ Request received for /api/projects');
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects' });
  }
});

app.get('/api/about', async (req, res) => {
  console.log('✅ Request received for /api/about');
  try {
    const members = await Member.find();
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching about section data' });
  }
});

// This should always be the last part of your setup
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});