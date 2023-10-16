const { Schema, model } = require("mongoose");

const dealSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    days: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    sold: {
      type: Number,
      required: true,
    },
    tiket: {
      type: Number,
      required: true,
    },
    yield: {
      type: Number,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Deal = model("deal", dealSchema);

module.exports = Deal;
