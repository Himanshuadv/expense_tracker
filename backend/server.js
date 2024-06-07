const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");

// Load environment variables from config file
dotenv.config({ path: "./config.env" });

// Catch uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log("Uncaught exception... shutting down 💣💣💣💣💣💣");
  console.error(err);
  process.exit(1);
});
const encodedPassword = encodeURIComponent(process.env.DATABASE_PASSWORD);
// Database connection
const DB = process.env.DATABASE.replace("<PASSWORD>", encodedPassword);

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection is established");
  })
  .catch(err => {
    console.error('DB connection error:', err);
    process.exit(1);  // Exit the process if the DB connection fails
  });

// Start the server
const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`App is running on server ${port}...`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.log("server.js");
  console.log("Unhandled rejection... shutting down 💣💣💣💣💣💣");
  console.error(err);
  server.close(() => {
    process.exit(1);
  });
});
