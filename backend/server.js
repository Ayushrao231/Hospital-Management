// server.js
// backend/server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api", require("./routes/auth"));
app.use("/api/appointment", require("./routes/Appointment"));
// Routes (example)
app.get("/", (req, res) => {
  res.send("API Running");
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});