const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passHasherPro = require("../Login/PaswordHasher/PassHashPro");
const AuthContext = require("../Login/Auth/AuthContext");
const { signUpService, logInService } = require("../services/LogInService");
const {
  addBussLineService,
  getBussLine,
  getBussLineWithBussesService,
} = require("../services/BussLineService");
const { addBussService } = require("../services/BussService");

// midle ware

router.post("/addBussLine", async (req, res) => {
  const reqBody = {
    lineStart: req.body.lineStart,
    lineEnd: req.body.lineEnd,
    timeStart: req.body.timeStart,
    timeEnd: req.body.timeEnd,
  };

  res.send(await addBussLineService(reqBody));
});

router.post("/addBuss", async (req, res) => {
  const reqBody = {
    seats: req.body.seats,
    bussLinesId: req.body.bussLinesId,
  };

  res.send(await addBussService(reqBody));
});

router.get("/getBussLine", async (req, res) => {
  res.send(await getBussLine());
});
router.get("/getBussLineWithBusses/:routId", async (req, res) => {
  res.send(await getBussLineWithBussesService(req.params.routId));
});
router.get("/getBuss", async (req, res) => {
  res.send();
});

module.exports = router;
