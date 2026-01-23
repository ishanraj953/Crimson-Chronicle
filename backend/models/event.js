const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventSchema = new Schema({
  title: { type: String, required: true },

  organisation: { type: String, required: true },

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
