// backend/models/memberModel.js
const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true }, // e.g., "Founder", "Co-Founder"
  bio: { type: String, required: true },
  imageUrl:{ type: String, required: true}// You could add an imageUrl field here later if you want photos
}, { collection: 'about-section' }); // Explicitly use the 'about-section' collection

const Member = mongoose.model('Member', memberSchema);
module.exports = Member;