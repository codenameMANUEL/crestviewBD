// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv"); 
// const applicationRoute = require("./routes/application.route.js")
// // const Application = require("./models/application.model.js")

// dotenv.config();
// const app = express();

// // middleware
// app.use(express.json()); 


// // routes
// // app.use("api/applications", applicationRoute)
// app.use("/api/application", applicationRoute)


// // Simple route for testing the server
// app.get("/", (req, res) => {
//   res.send("Backend working fine");
// });

// // MongoDB connection
// mongoose.connect(process.env.DB_URI)
//   .then(() => {
//     console.log("Connected to database!");
//     app.listen(7000, () => {
//       console.log("Server running on port 7000");
//     });
//   })
//   .catch((err) => {
//     console.error("Database connection failed:", err.message);
//     process.exit(1); // Exit the process if connection fails
//   });

// // Graceful shutdown (e.g., for ctrl+c)
// process.on("SIGINT", async () => {
//   console.log("Gracefully shutting down...");
//   await mongoose.disconnect(); // Disconnect from MongoDB
//   process.exit(0); // Exit the process
// });

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
    app.listen(7000, () => {
      console.log("Server running on port 7000");
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  });

process.on("SIGINT", async () => {
  console.log("Gracefully shutting down...");
  await mongoose.disconnect();
  process.exit(0);
});
