// server.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Project = require('./models/projectModel'); 
const Member = require('./models/memberModel')
const nodemailer = require('nodemailer');
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

  console.log("Attempting to send email with user:", process.env.EMAIL_USER);
  console.log("Does EMAIL_PASS exist?", !!process.env.EMAIL_PASS);
  try {
    // 1. Create the Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 2. Define the email's content
    const mailOptions = {
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Sending the email to yourself
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h1>New Website Inquiry</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // 3. Send the email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');

    // 4. Send a success response back to the frontend
    res.status(200).json({ success: 'Message sent successfully!' });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send message.' });
  }
});

// This should always be the last part of your setup
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});