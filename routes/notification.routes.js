import express from "express";
import { sendEmail } from "../controllers/notification.controller.js";

const router = express.Router();

/**
 * @swagger
 * /api/notification/email/send:
 *   post:
 *     summary: Send an email
 *     description: Sends an email using the provided name and email address.
 *     tags:
 *       - Notification
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *                 example: Alyson Maruyama
 *               email:
 *                 type: string
 *                 format: email
 *                 example: alyson.nascimento@venturus.org.br
 *     responses:
 *       200:
 *         description: Email sent successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Email sent successfully
 *       400:
 *         description: Bad request — missing or invalid parameters.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Missing required fields: name or email"
 */
router.post("/email/send", sendEmail);

export default router;
