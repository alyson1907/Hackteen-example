import express from "express";
import { createUser, getUsers } from "../controllers/user.controller.js";

const router = express.Router();

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a user
 *     description: Used to create users with a name and email address.
 *     tags:
 *       - Users
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
 *       201:
 *         description: User created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: Alyson Maruyama
 *                 email:
 *                   type: string
 *                   example: alyson.nascimento@venturus.org.br
 *       400:
 *         description: Bad request - missing or invalid parameters.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Missing required fields: name or email"
 */
router.post("/", createUser);

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: List all users
 *     description: Used to retrieve a list of all registered users.
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: Alyson Maruyama
 *                   email:
 *                     type: string
 *                     format: email
 *                     example: alyson.nascimento@venturus.org.br
 */
router.get("/", getUsers);

export default router;
