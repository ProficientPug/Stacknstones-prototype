// server.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Project = require('./models/projectModel'); 
const Member = require('./models/memberModel')
const { Resend } = require('resend');
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

app.get('/', (req, res) => {
  res.status(200).json({ 
    status: 'online', 
    message: 'API is alive and running!' 
  });
})
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

app.post('/api/send-message', async (req, res) => {
  const { name, email, phone, message } = req.body;
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      // ✅ This MUST be Resend's default email address for now.
      from: 'onboarding@resend.dev',
      
      // ✅ This is your personal email where you'll receive the notification.
      to: ['stacknstones.construct@gmail.com'],
      
      subject: `New Contact Form Submission from ${name}`,
      
      // ✅ This line is CRITICAL so you can reply to the actual user.
      reply_to: email,
      
      html: `
        <h1>New Inquiry</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error({ error });
      return res.status(500).json({ error: 'Failed to send message.' });
    }

    res.status(200).json({ success: 'Message sent successfully!' });

  } catch (error) {
    console.error('An unexpected error occurred:', error);
    res.status(500).json({ error: 'Failed to send message.' });
  }
});
// This should always be the last part of your setup
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});