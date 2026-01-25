const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const Event = require('./models/event');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./models/user");
const auth = require("./middleware/authMiddleware");
const nodemailer = require("nodemailer");


require("dotenv").config();
app.use(cors());
app.use(express.json());

main()
.then(() => console.log("Connected to DB 😊"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/crimson_chronical');
}


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "rajishan950@gmal.com",
    pass: "lzwl cosf gaof vuda"
  }
});

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword
    });

    await user.save();

    res.json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Wrong password" });

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/submit-contact", async (req, res) => {

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields required" });
  }

  try {

    await transporter.sendMail({
      from: email,
      to: process.env.MAIL_USER,
      subject: "New Contact Form Submission",
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `
    });

    res.json({ success: true, message: "Message sent successfully" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Email failed" });
  }
});


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

app.delete("/events/:id", auth, async (req,res) => {
  await Event.findByIdAndDelete(req.params.id);
    res.send("HI")
   res.status(200).json({ success: true });
});

app.put("/events/:id", auth, async(req,res) => {
  const {id} = req.params;
  const updatedEvent = await Event.findByIdAndUpdate(id,req.body,{new: true});

  if (!updatedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json(updatedEvent);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));