const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  photo: {
    type: String,
    default: "default-avatar.jpg"
  },
  role: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
