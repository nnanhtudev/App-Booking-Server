const mongoose = require('mongoose');
const { Schema } = mongoose;

const Users = new Schema({
  username: String, // String is shorthand for {type: String}
  password: String,
  fullName: String,
  phoneNumber: String,
  email: String,
  isAdmin: Boolean,
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', Users)