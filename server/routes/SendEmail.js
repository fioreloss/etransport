const express = require("express");
const {
  sendToOffice,
} = require("../emailServices/emailService/composeMail/sendToOffice");
const router = express.Router();
var QRCode = require("qrcode");
// midle ware

router.post("/sendEmail", async (req, res) => {
  const reqBody = {
    ticketId: req.body.ticketId,
    carTag: req.body.carTag,
    startTime: req.body.startTime,
    busLine: req.body.busLine,
    email: req.body.email,
  };

  let img = await QRCode.toDataURL(reqBody.ticketId);

  const sendToOfficePro = await sendToOffice(
    {
      qr: img,
      carTag: reqBody.carTag,
      startTime: reqBody.startTime,
      busLine: reqBody.busLine,
      email: reqBody.email,
    },
    reqBody.email
  );

  res.send(sendToOfficePro);
});

module.exports = router;
