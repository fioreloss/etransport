const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  name: String,
  lastname: String,
  password: String,
});
const user = mongoose.model("user", userSchema);
module.exports = user;
