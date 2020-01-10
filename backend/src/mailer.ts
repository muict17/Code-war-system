import * as mailer from "nodemailer";
require("dotenv").config();

export default mailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
