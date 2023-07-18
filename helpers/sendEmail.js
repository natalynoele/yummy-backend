const nodemailer = require("nodemailer");

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  seure: true,
  auth: {
    user: "yaroslav_velichko.d@meta.ua",
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: "yaroslav_velichko.d@meta.ua" };
  await transport
    .sendMail(email)
    .then(() => console.log("Email send success"))
    .catch((error) => console.log(error.message));
  return true;
};

module.exports = sendEmail;
