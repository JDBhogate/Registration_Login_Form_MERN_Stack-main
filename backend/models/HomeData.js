// models/HomeData.js
const mongoose = require('mongoose');

const homeDataSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'log_reg_form' }, // Reference to the user who owns this data
  age: Number,
  gender: String,
  dob: Date,
  mobile: String,
});

module.exports = mongoose.model('HomeData', homeDataSchema);
