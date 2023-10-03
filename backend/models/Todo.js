const mongoose = require("mongoose");

// Define the schema (the blueprint)
const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a model using the schema
const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
