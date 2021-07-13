const mongoose = require("mongoose");
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    firstname: String,
    lastname: String,
    agence: String,
    password: String,
    roles: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
        }
    ]

  })
);

module.exports = User;
