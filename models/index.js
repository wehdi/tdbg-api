const mongoose = require("mongoose");
//const authJwt = require("./authJwt");
//const verifySignUp = require("./verifySignUp");
mongoose.Promise + global.Promise;
const db = {};
db.mongoose = mongoose;
db.user = require("./User");
db.roles = require("./Role");
db.ROLES = ["contributor", "admin", "director","user"];

module.exports = {
  db,
  //authJwt,
  //verifySignUp,
};