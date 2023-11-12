const mongoose = require('mongoose');
const { Schema } = mongoose;

const Hotels = new Schema({
  name: String, // String is shorthand for {type: String}
  type: String,
  city: String,
  address: String,
  distance: String,
  photos: [String],
  desc: String,
  rating: Int32Array,
  featured: Boolean,
  rooms: [{ type: Schema.Types.ObjectId, ref: 'Room' }]
}, {
  timestamps: true,
});

module.exports = mongoose.model('Hotel', Hotels)