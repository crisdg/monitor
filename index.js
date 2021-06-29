const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");
const cors = require("cors");
//crear servidor

const app = express();

//habilita cors
app.use(cors());

//conectar a mongo

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/monitor", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});

// parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//habilitar routing
app.use("/", routes());

app.listen(4000, () => {
  console.log("servidor funcionando");
});
