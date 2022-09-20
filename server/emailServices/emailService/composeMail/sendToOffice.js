const { sendMail, transportContext } = require("../config/MailConfig");

const sendToOffice = async (emailBody, emailTo) => {
  const transporter = transportContext().transporter;

  let mailOptions = {
    from: `test <${transportContext().email}>`,
    to: emailTo,
    subject: ` test from bus transport  `,
    html: `</br> <img src="cid:adksjfsdjjfkdsakfjsdfksdfsdjfjasdklfasdfsdjfadsfsdfsdfjklsdjfasdklfjas"> <br/>

    <h2>carTag: ${emailBody.carTag}</h2>
    <h2>startTime: ${emailBody.startTime}</h2>
    <h2>busLine: ${emailBody.busLine}</h2>
    
    `,
    text: `


      `,
      attachments: [{
        filename: 'image.png',
        path: emailBody.qr,
        cid: 'adksjfsdjjfkdsakfjsdfksdfsdjfjasdklfasdfsdjfadsfsdfsdfjklsdjfasdklfjas' //same cid value as in the html img src
    }]
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
module.exports = {
  sendToOffice,
};
