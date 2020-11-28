const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    Itemname: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 2000,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
      maxlength: 32,
    },
    rentprice: {
      type: Number,
      trim: true,
      required: true,
      maxlength: 32,
    },
    quantity: {
      type: Number,
    },
    rented: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", itemSchema);
