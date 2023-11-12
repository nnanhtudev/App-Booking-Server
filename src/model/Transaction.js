const mongoose = require('mongoose');
const { Schema } = mongoose;

const Transactions = new Schema({
  user: { type: String, required: true },
  hotel: { type: Schema.Types.ObjectId, ref: 'Hotel', required: true },
  room: [{ type: Schema.Types.ObjectId, ref: 'Room', required: true }],
  dateStart: { type: Date, required: true },
  dateEnd: { type: Date, required: true },
  price: Number,
  payment: { type: String, enum: ['Credit Card', 'Cash'], required: true },
  status: { type: String, enum: ['Booked', 'Checkin', 'Checkout'], required: true },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Transaction', Transactions)