const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventSchema = new Schema({
  title: { type: String, required: true },

  organisation: { type: String, required: true },

  owner: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User"
  },

  date: {
    type: Date,
    default: Date.now
  },

  type: {
    type: String,
    enum: ["internship", "hackathon", "event", "workshop"],
    required: true,
  },

  website: String,

  description: String,

  participationType: {
    type: String,
    enum: ["individual", "team"],
  },

  teamSize: {
    min: Number,
    max: Number,
  },

  img: String,

  mode: {
    type: String,
    enum: ["online", "offline"],
  },

  venue: String,

  reward: {
    first: Number,
    second: Number,
    third: Number,
  },
});

module.exports = mongoose.model("Event", eventSchema);
