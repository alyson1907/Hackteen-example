import * as notificationService from "../services/notification.service.js";

export const sendEmail = async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required." });
  }

  notificationService.sendEmail({
    to: email,
    subject: "Bem-vindo ao Hackteen!",
    html: `<b>Olá ${name}, Seja bem-vindo ao Hackteen 2025!<b>`,
  });

  res.status(200).json("Email sent successfully to " + email);
};
