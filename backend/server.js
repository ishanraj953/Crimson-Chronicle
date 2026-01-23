const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const Event = require('./models/event');

app.use(cors());
app.use(express.json());

main()
.then(() => console.log("Connected to DB 😊"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/crimson_chronical');
}

app.get("/", async(req, res) => {
  const event = await Event.find();
  res.json(event);
});

app.get("/events/:id", async(req,res) => {
  const {id} = req.params;
  const event = await Event.findById(id);
  res.json(event);
});

app.post("/events/create", async (req, res) => {
  const event = new Event(req.body);
  await event.save();
  res.json({ message: "Event created" });
});

app.delete("/events/:id", async (req,res) => {
  await Event.findByIdAndDelete(req.params.id);
    res.send("HI")
   res.status(200).json({ success: true });
});
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));