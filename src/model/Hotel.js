const mongoose = require("mongoose");
const { Schema } = mongoose;

const Hotels = new Schema(
  {
    // _id: { type: Schema.Types.ObjectId },
    address: String,
    cheapestPrice: Number,
    city: String,
    desc: String,
    distance: String,
    featured: Boolean,
    name: String, // String is shorthand for {type: String}
    photos: [String],
    rooms: [{ type: Schema.Types.ObjectId, ref: "Room" }],
    title: String,
    type: String,
    rating: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Hotel", Hotels);
