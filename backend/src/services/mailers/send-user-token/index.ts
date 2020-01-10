import mailer from "../../../mailer";
require("dotenv").config();

export default async (email: string, verifyToken: string) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "verify email for code war system",
    html: `Your token: ${verifyToken}`
  };
  await mailer.sendMail(mailOptions);
  return true;
};
