import nodemailer from "nodemailer";

export const sendEmail = (options) => {
  const { to, subject, html } = options;
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  transporter.sendMail(
    {
      from: process.env.EMAIL_USER,
      to,
      subject,
      html,
    },
    (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
    }
  );
};
