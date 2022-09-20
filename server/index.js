const express = require("express");
const cors = require("cors");
const BodyParse = require("body-parser");
const mongoose = require("mongoose", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// configs

mongoose.connect("mongodb+srv://admin:QSKtMv0HU8D6sBFt@etransportdb.aiitb58.mongodb.net/?retryWrites=true&w=majority");

// midleware 
const app = express();
app.use(cors());
// app.use(BodyParse.urlencoded());
app.use(BodyParse.urlencoded({ extended: true }));
app.use(BodyParse.json());

// routs
const Login = require("./routes/LogIn");
const BussLine = require("./routes/BussLine");
const SendEmail = require("./routes/SendEmail");

// librarys

// routs
app.use("/auth", Login);
app.use("/BussLine", BussLine);
app.use("/SendEmail", SendEmail);
// routes >>

app.listen(3000, () => {
  console.log("port 3000");
});
