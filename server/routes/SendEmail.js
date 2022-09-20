const express = require("express");
const { sendToOffice } = require("../emailServices/emailService/composeMail/sendToOffice");
const router = express.Router();

// midle ware

router.post("/sendEmail", async (req, res) => {
  const sendToOfficePro = await sendToOffice(
    {},
    "lalipo4806@ploneix.com"
  );
  res.send(sendToOfficePro);
});




module.exports = router;
