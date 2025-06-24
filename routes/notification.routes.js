import express from "express";
import { sendEmail } from "../controllers/notification.controller.js";

const router = express.Router();

router.post("/email/send", sendEmail);

export default router;
