const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// database
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("DB error:", err));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Backend is live" });
});

// port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
