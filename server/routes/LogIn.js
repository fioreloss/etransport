const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passHasherPro = require("../Login/PaswordHasher/PassHashPro");
const AuthContext = require("../Login/Auth/AuthContext");
const user = require("../models/users");
const products = require("../models/products");
const { signUpService, logInService } = require("../services/LogInService");
// midle ware

router.post("/register", async (req, res) => {
  // const userData = new user({
  //   email: "adsfdsa",
  //   name: "asdfsdf",
  //   lastname: "adfsfdadfsdf",
  //   password: "adsfdafdsfsdfsd",
  // });
  //   await userData.save();
  //   const productsData = new products({
  //     user: mongoose.Types.ObjectId("631865a1070ff68a88c3ad8d"),
  //     name: "adsfasdfdsf",
  //     lastname: "asfdasdfasd",
  //     password: "sdafasdfasdfds",
  //   });
  //   await productsData.save();

  //   const productsData = await products
  //     .findById("631866a0303f2d0be94fecca")
  //     .populate("user");

  const reqBody = {
    email: req.body.email,
    name: req.body.name,
    lastname: req.body.lastname,
    password: req.body.password,
  };

  res.send(await signUpService(reqBody));
});

router.post("/LogIn", async (req, res) => {
  const reqBody = {
    email: req.body.email,
    password: req.body.password,
  };
  res.send(await logInService(reqBody.email, reqBody.password));
});

router.get(
  "/protectionPost",
  AuthContext.checkTokenExpire,
  async (req, res) => {
    res.send("hi");
  }
);

module.exports = router;
