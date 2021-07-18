const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");



//config
const app = express();
var corsOptions = {
  origin: "http://localhost:3000",
};


dotenv.config();

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors(corsOptions));

const db = require("../api/models");
const dbConfig = require("./config/db.config");
const Role =require("../api/models/Role")
mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Cnnexion à la base de données reussit !");
    initial();
  })
  .catch((err) => {
    console.error("Erreur dans la connexion à la BDD" + err);
    process.exit();
  });
//test prupose
function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count == 0) {
      new Role({
        name: "user",
      }).save((err) => {
        if (err) {
          console.log("errreur : " + err);
        }
        console.log("User role ajouté à la collection");
      });
    }
  });
}
Role.estimatedDocumentCount((err, count) => {
  if (!err && count == 0) {
    new Role({
      name: "admin",
    }).save((err) => {
      if (err) {
        console.log("errreur : " + err);
      }
      console.log("admin role ajouté à la collection");
    });
  }
});

Role.estimatedDocumentCount((err, count) => {
  if (!err && count == 0) {
    new Role({
      name: "contributor",
    }).save((err) => {
      if (err) {
        console.log("errreur : " + err);
      }
      console.log("contributor role ajouté à la collection");
    });
  }
});
//
app.get("/", (req, res) => {
  res.json({ message: "this is a test" });
});

//routes
require("./routes/Auth")(app);
require("./routes/User")(app);

app.listen(8080, () => {
  console.log("The API is running ...");
});
