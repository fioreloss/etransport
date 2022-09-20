let nodemailer = require("nodemailer");

const transportContext = () => {
  const email = "etransport999@outlook.com";
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    // requireTLS:true,
    auth: {
      user: "etransport999@outlook.com",
      pass: "Etransport1.",
    },
    // tls: {
    //   // do not fail on invalid certs
    //   rejectUnauthorized: false,
    // },
    // tls: {
    //     ciphers:'SSLv3'
    // },
  });
  return { transporter, email };
};

const sendMail = (mailOptions, transporter) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        reject(false);
      } else {
        resolve(true);
      }
    });
  });
};

module.exports = {
  transportContext,
  sendMail,
};
