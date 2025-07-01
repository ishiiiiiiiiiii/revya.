const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  height: Number,
  weight: Number,
  bmi: Number,
  goal: [String],
  restrictions: [String],
}, { timestamps: true }); // 👈 Adds createdAt and updatedAt fields

module.exports = mongoose.model('User', userSchema);
