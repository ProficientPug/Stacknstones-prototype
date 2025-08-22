const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String },
  projectLink: { type: String },
}, { collection: 'Titles-Descriptions' }); // <-- ADD THIS OBJECT

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;