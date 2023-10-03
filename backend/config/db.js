const mongoose = require("mongoose");
require("dotenv").config();
let MONGO_URL = process.env.MONGO_DB_URL;

const connectDB = async () => {
  try {
    // The connection string would typically come from environment variables or your config
    const connStr = MONGO_URL;
    await mongoose.connect(connStr, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
