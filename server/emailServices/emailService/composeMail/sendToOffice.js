const { sendMail, transportContext } = require("../config/MailConfig");

 const sendToOffice = async (emailBody, emailTo) => {
  const transporter = transportContext().transporter;

  let mailOptions = {
    from: `test <${transportContext().email}>`,
    to: emailTo,
    subject: ` test from ${emailBody.firstName}  `,
    text: `


      `,
  };

  const status = await sendMail(mailOptions, transporter);

  return new Promise((resolve, reject) => {
    if (status) {
      resolve({ status: true, msg: "email sent to " + "" });
    } else {
      reject({ status: false, msg: "error" });
    }
  });
};
module.exports={
  sendToOffice
}