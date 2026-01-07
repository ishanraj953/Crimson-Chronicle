const mongoose = require('mongoose');
const {Schema} = mongoose;

const eventSchema = new Schema({
    title: String,
    description: String,
    img: String,
    time: String,
    date: String,
    reward: Number,
    venue: String,
    category: String,
    department: String,
});

module.exports = mongoose.model("Event",eventSchema);