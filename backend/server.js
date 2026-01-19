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
})

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));