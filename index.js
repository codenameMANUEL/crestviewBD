const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv"); 
const cors = require("cors");  // Add this
const applicationRoute = require("./routes/application.route.js")

dotenv.config();
const app = express();

// middleware
app.use(cors());  // Add this
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  // Add this

// routes
app.use("/api/application", applicationRoute);

// Simple route for testing the server
app.get("/", (req, res) => {
  res.send("Backend working fine");
});

mongoose.connect(process.env.DB_URI)
  .then(() => {
    console.log("Connected to database!");

    const port = process.env.PORT || 7000; // Use the dynamic port from Render or fallback to 7000
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err.message);
    process.exit(1); // Exit if database connection fails
  });

// Graceful shutdown for terminating server
process.on("SIGINT", async () => {
  console.log("Gracefully shutting down...");
  await mongoose.disconnect(); // Disconnect from MongoDB
  process.exit(0); // Exit the process
});