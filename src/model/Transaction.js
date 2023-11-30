const mongoose = require("mongoose");
const { Schema } = mongoose;

const Transactions = new Schema(
  {
    user: Schema.Types.Mixed,
    hotel: { type: Schema.Types.ObjectId, ref: "Hotel", required: true },
    room: [],
    dateStart: { type: Date, required: true },
    dateEnd: { type: Date, required: true },
    price: Number,
    payment: { type: String, required: true },
    status: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Transaction", Transactions);
