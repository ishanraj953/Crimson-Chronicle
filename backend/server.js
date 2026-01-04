const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));