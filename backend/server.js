const express = require("express");
const connectDB = require("./config/db"); // path to your db.js

const app = express();
const PORT = 4000;

// Connect to the database
connectDB();

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
