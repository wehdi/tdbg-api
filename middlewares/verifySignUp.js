const db = require("../models/User");
const ROLES = require("../models/Role");
const User = require("../models/User");

checkDuplicateUsername = (req, res, next) => {
  //username check
  User.findOne({
    username: req.body.username,
  }).exec((err, user) => {
    if (err) {
      res.status(500).sed({ message: err });
      return;
    }
    if (user) {
      res.status(400).send({ message: "Nom d'utilisateur existe deja " });
      return;
    }
    next();
  });
};
checkRolesExisted = (req, res, next) => {
  if (req.body.ROLES) {
    for (let i = 0; i < req.body.ROLES[i]; i++) {
      if (!ROLES.includes(req.body.ROLES[i])) {
        res.status(400).send({
          message: `Le role ${req.body.ROLES[i]} n'existe pas`,
        });
        return;
      }
    }
  }
  next();
};

const verifySignUp = {
  checkDuplicateUsername,
  checkRolesExisted,
};
module.exports = verifySignUp;
