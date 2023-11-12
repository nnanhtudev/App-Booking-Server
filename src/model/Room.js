const mongoose = require('mongoose');
const { Schema } = mongoose;

const Rooms = new Schema({
  title: String, // String is shorthand for {type: String}
  price: Number,
  maxPeople: Number,
  desc: String,
  roomNumbers: [Number],
}, {
  timestamps: true,
});

module.exports = mongoose.model('Room', Rooms)